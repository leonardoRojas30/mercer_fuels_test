import { users, leads, reviews, creditApplications, orders, budgetPlanLeads, automaticDeliveryLeads, type User, type InsertUser, type Lead, type InsertLead, type Review, type InsertReview, type CreditApplication, type InsertCreditApplication, type Order, type InsertOrder, type BudgetPlanLead, type InsertBudgetPlanLead, type AutomaticDeliveryLead, type InsertAutomaticDeliveryLead } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Lead management
  createLead(lead: InsertLead): Promise<Lead>;
  listLeads(): Promise<Lead[]>;
  getLead(id: string): Promise<Lead | undefined>;
  
  // Review management
  getReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
  syncReviewsFromAPIs(): Promise<{ google: number; facebook: number; total: number }>;
  
  // Credit application management
  createCreditApplication(application: InsertCreditApplication): Promise<CreditApplication>;
  listCreditApplications(): Promise<CreditApplication[]>;
  getCreditApplication(id: string): Promise<CreditApplication | undefined>;
  updateCreditApplicationStatus(id: string, approvalStatus: string, approvalNotes?: string): Promise<CreditApplication>;
  
  // Order management
  createOrder(order: InsertOrder): Promise<Order>;
  listOrders(): Promise<Order[]>;
  getOrder(id: string): Promise<Order | undefined>;
  updateOrderStatus(id: string, orderStatus: string): Promise<Order>;
  
  // Budget plan lead management
  createBudgetPlanLead(lead: InsertBudgetPlanLead): Promise<BudgetPlanLead>;
  listBudgetPlanLeads(): Promise<BudgetPlanLead[]>;
  getBudgetPlanLead(id: string): Promise<BudgetPlanLead | undefined>;
  
  // Automatic delivery lead management
  createAutomaticDeliveryLead(lead: InsertAutomaticDeliveryLead): Promise<AutomaticDeliveryLead>;
  listAutomaticDeliveryLeads(): Promise<AutomaticDeliveryLead[]>;
  getAutomaticDeliveryLead(id: string): Promise<AutomaticDeliveryLead | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db.insert(leads).values(insertLead).returning();
    return lead;
  }

  async listLeads(): Promise<Lead[]> {
    return await db.select().from(leads).orderBy(desc(leads.createdAt));
  }

  async getLead(id: string): Promise<Lead | undefined> {
    const [lead] = await db.select().from(leads).where(eq(leads.id, id));
    return lead || undefined;
  }

  async getReviews(): Promise<Review[]> {
    return await db.select().from(reviews).orderBy(desc(reviews.publishedTime));
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const [review] = await db.insert(reviews).values(insertReview).returning();
    return review;
  }

  async syncReviewsFromAPIs(): Promise<{ google: number; facebook: number; total: number }> {
    let googleCount = 0;
    let facebookCount = 0;

    try {
      const googleReviews = await this.fetchGoogleReviews();
      for (const review of googleReviews) {
        const [existingReview] = await db
          .select()
          .from(reviews)
          .where(eq(reviews.sourceId, review.sourceId));
        
        if (!existingReview) {
          await this.createReview(review);
          googleCount++;
        }
      }

      const facebookReviews = await this.fetchFacebookRecommendations();
      for (const review of facebookReviews) {
        const [existingReview] = await db
          .select()
          .from(reviews)
          .where(eq(reviews.sourceId, review.sourceId));
        
        if (!existingReview) {
          await this.createReview(review);
          facebookCount++;
        }
      }
    } catch (error) {
      console.error('Error syncing reviews:', error);
      throw error;
    }

    return {
      google: googleCount,
      facebook: facebookCount,
      total: googleCount + facebookCount
    };
  }

  private async fetchGoogleReviews(): Promise<InsertReview[]> {
    const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

    if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
      console.warn('Google API credentials not configured');
      return [];
    }

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${GOOGLE_PLACES_API_KEY}`
      );
      const data = await response.json();

      if (!data.result?.reviews) {
        return [];
      }

      return data.result.reviews.map((review: any) => ({
        authorName: review.author_name,
        authorLocation: review.author_url ? 'Google User' : 'Local Guide',
        rating: review.rating.toString(),
        text: review.text,
        source: 'google',
        sourceId: `google_${review.time}`,
        publishedTime: new Date(review.time * 1000)
      }));
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      return [];
    }
  }

  private async fetchFacebookRecommendations(): Promise<InsertReview[]> {
    const FACEBOOK_PAGE_ID = process.env.FACEBOOK_PAGE_ID;
    const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!FACEBOOK_PAGE_ID || !FACEBOOK_ACCESS_TOKEN) {
      console.warn('Facebook API credentials not configured');
      return [];
    }

    try {
      const response = await fetch(
        `https://graph.facebook.com/v18.0/${FACEBOOK_PAGE_ID}/ratings?fields=reviewer,recommendation_type,review_text,created_time&access_token=${FACEBOOK_ACCESS_TOKEN}`
      );
      const data = await response.json();

      if (!data.data) {
        return [];
      }

      return data.data
        .filter((review: any) => review.recommendation_type === 'positive')
        .map((review: any) => ({
          authorName: review.reviewer.name,
          authorLocation: 'Facebook User',
          rating: '5',
          text: review.review_text || 'Recommends this business',
          source: 'facebook',
          sourceId: `facebook_${review.created_time}`,
          publishedTime: new Date(review.created_time)
        }));
    } catch (error) {
      console.error('Error fetching Facebook recommendations:', error);
      return [];
    }
  }

  async createCreditApplication(insertApplication: InsertCreditApplication): Promise<CreditApplication> {
    // TODO: Encrypt sensitive fields (socialInsurance, dateOfBirth) before storing
    // Never log sensitive PII data
    const [application] = await db.insert(creditApplications).values(insertApplication).returning();
    return application;
  }

  async listCreditApplications(): Promise<CreditApplication[]> {
    return await db.select().from(creditApplications).orderBy(desc(creditApplications.createdAt));
  }

  async getCreditApplication(id: string): Promise<CreditApplication | undefined> {
    const [application] = await db.select().from(creditApplications).where(eq(creditApplications.id, id));
    return application || undefined;
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const [order] = await db.insert(orders).values(insertOrder).returning();
    return order;
  }

  async listOrders(): Promise<Order[]> {
    return await db.select().from(orders).orderBy(desc(orders.createdAt));
  }

  async getOrder(id: string): Promise<Order | undefined> {
    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    return order || undefined;
  }

  async updateOrderStatus(id: string, orderStatus: string): Promise<Order> {
    const [updatedOrder] = await db
      .update(orders)
      .set({ orderStatus })
      .where(eq(orders.id, id))
      .returning();
    
    if (!updatedOrder) {
      throw new Error(`Order with id ${id} not found`);
    }
    
    return updatedOrder;
  }

  async updateCreditApplicationStatus(
    id: string, 
    approvalStatus: string, 
    approvalNotes?: string
  ): Promise<CreditApplication> {
    const updateData: Partial<CreditApplication> = { approvalStatus };
    if (approvalNotes !== undefined) {
      updateData.approvalNotes = approvalNotes;
    }

    const [updatedApplication] = await db
      .update(creditApplications)
      .set(updateData)
      .where(eq(creditApplications.id, id))
      .returning();
    
    if (!updatedApplication) {
      throw new Error(`Credit application with id ${id} not found`);
    }
    
    return updatedApplication;
  }

  async createBudgetPlanLead(insertLead: InsertBudgetPlanLead): Promise<BudgetPlanLead> {
    const [lead] = await db.insert(budgetPlanLeads).values(insertLead).returning();
    return lead;
  }

  async listBudgetPlanLeads(): Promise<BudgetPlanLead[]> {
    return await db.select().from(budgetPlanLeads).orderBy(desc(budgetPlanLeads.createdAt));
  }

  async getBudgetPlanLead(id: string): Promise<BudgetPlanLead | undefined> {
    const [lead] = await db.select().from(budgetPlanLeads).where(eq(budgetPlanLeads.id, id));
    return lead || undefined;
  }

  async createAutomaticDeliveryLead(insertLead: InsertAutomaticDeliveryLead): Promise<AutomaticDeliveryLead> {
    const [lead] = await db.insert(automaticDeliveryLeads).values(insertLead).returning();
    return lead;
  }

  async listAutomaticDeliveryLeads(): Promise<AutomaticDeliveryLead[]> {
    return await db.select().from(automaticDeliveryLeads).orderBy(desc(automaticDeliveryLeads.createdAt));
  }

  async getAutomaticDeliveryLead(id: string): Promise<AutomaticDeliveryLead | undefined> {
    const [lead] = await db.select().from(automaticDeliveryLeads).where(eq(automaticDeliveryLeads.id, id));
    return lead || undefined;
  }
}

export const storage = new DatabaseStorage();
