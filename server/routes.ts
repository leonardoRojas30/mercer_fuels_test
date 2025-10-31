import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertReviewSchema, creditApplicationInputSchema, insertOrderSchema, insertBudgetPlanLeadSchema, insertAutomaticDeliveryLeadSchema } from "@shared/schema";
import { z } from "zod";
import { generateSitemap } from "./sitemap";
import rateLimit from "express-rate-limit";

// Rate limiter for lead submission - prevents spam/abuse
const leadSubmitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: { success: false, message: "Too many submissions from this IP, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Stricter rate limiter for credit applications due to sensitive PII
const creditApplicationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // Limit each IP to 3 credit applications per hour
  message: { success: false, message: "Too many credit applications from this IP, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Rate limiter for orders - moderate restrictions for existing customers
const orderLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 orders per 15 minutes
  message: { success: false, message: "Too many orders from this IP, please try again later or call us." },
  standardHeaders: true,
  legacyHeaders: false,
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead capture endpoint with rate limiting
  app.post("/api/leads", leadSubmitLimiter, async (req, res) => {
    try {
      // TODO: Production hardening required before go-live:
      // 1. Implement proper CSRF tokens (synchronizer token or double-submit cookie)
      // 2. Configure production domain allowlist via environment variables
      // 3. Add structured logging for rate limit hits and suspicious activity
      // 4. Consider adding hCaptcha or similar for additional bot protection
      
      // Basic origin logging for development
      const origin = req.get('origin') || req.get('referer');
      if (origin) {
        console.log(`Lead submission from origin: ${origin}`);
      }

      // Validate request body with zod schema - this is our primary security layer
      const leadData = insertLeadSchema.parse(req.body);
      
      // Create lead in storage
      const newLead = await storage.createLead(leadData);
      
      // Send to Zapier webhook if configured and pageContext indicates expert consultation
      const consultationContexts = [
        "Home Page Hero",
        "Schedule Consultation",
        "Become Customer",
        "Local vs Big Oil"
      ];
      
      if (process.env.ZAPIER_CONSULTATION_WEBHOOK && 
          consultationContexts.includes(leadData.pageContext || "")) {
        try {
          const webhookPayload = {
            leadId: newLead.id,
            firstName: newLead.firstName,
            lastName: newLead.lastName,
            email: newLead.email,
            phone: newLead.phone,
            address: newLead.address,
            pageContext: newLead.pageContext,
            additionalInfo: newLead.additionalInfo,
            submittedAt: new Date().toISOString()
          };
          
          const webhookResponse = await fetch(process.env.ZAPIER_CONSULTATION_WEBHOOK, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(webhookPayload)
          });
          
          if (!webhookResponse.ok) {
            console.error(`Zapier webhook failed: ${webhookResponse.status} ${webhookResponse.statusText}`);
          } else {
            console.log(`Zapier webhook sent successfully for lead ${newLead.id}`);
          }
        } catch (webhookError) {
          // Log webhook errors but don't fail the lead creation
          console.error("Error sending to Zapier webhook:", webhookError);
        }
      }

      // Send to Furnace Insurance Zapier webhook if configured
      if (process.env.ZAPIER_FURNACE_INSURANCE_WEBHOOK && 
          leadData.pageContext === "Furnace Insurance Interest") {
        try {
          const webhookUrl = process.env.ZAPIER_FURNACE_INSURANCE_WEBHOOK.trim();
          console.log(`Sending furnace insurance lead to webhook for lead ${newLead.id}`);
          
          const webhookPayload = {
            leadId: newLead.id,
            firstName: newLead.firstName,
            lastName: newLead.lastName,
            email: newLead.email,
            phone: newLead.phone,
            address: newLead.address,
            pageContext: newLead.pageContext,
            additionalInfo: newLead.additionalInfo,
            submittedAt: new Date().toISOString()
          };
          
          const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(webhookPayload)
          });
          
          if (!webhookResponse.ok) {
            console.error(`Furnace insurance webhook failed: ${webhookResponse.status} ${webhookResponse.statusText}`);
          } else {
            console.log(`Furnace insurance webhook sent successfully for lead ${newLead.id}`);
          }
        } catch (webhookError) {
          // Log webhook errors but don't fail the lead creation
          console.error("Error sending to furnace insurance webhook:", webhookError);
        }
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Lead captured successfully", 
        leadId: newLead.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating lead:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Budget Plan leads endpoint with rate limiting and Zapier integration
  app.post("/api/budget-plan-leads", leadSubmitLimiter, async (req, res) => {
    try {
      const origin = req.get('origin') || req.get('referer');
      if (origin) {
        console.log(`Budget plan lead submission from origin: ${origin}`);
      }

      // Validate request body with zod schema
      const leadData = insertBudgetPlanLeadSchema.parse(req.body);
      
      // Create lead in storage
      const newLead = await storage.createBudgetPlanLead(leadData);
      
      // Send to Zapier webhook if configured
      if (process.env.ZAPIER_BUDGET_PLAN_WEBHOOK) {
        try {
          const webhookUrl = process.env.ZAPIER_BUDGET_PLAN_WEBHOOK.trim();
          console.log(`Attempting to send to webhook URL: ${webhookUrl.substring(0, 50)}...`);
          
          const webhookPayload = {
            leadId: newLead.id,
            firstName: newLead.firstName,
            lastName: newLead.lastName,
            email: newLead.email,
            phone: newLead.phone,
            address: newLead.address,
            currentHeatingCosts: newLead.currentHeatingCosts,
            pageContext: newLead.pageContext,
            submittedAt: new Date().toISOString()
          };
          
          const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(webhookPayload)
          });
          
          if (!webhookResponse.ok) {
            console.error(`Zapier webhook failed: ${webhookResponse.status} ${webhookResponse.statusText}`);
          } else {
            console.log(`Zapier webhook sent successfully for budget plan lead ${newLead.id}`);
          }
        } catch (webhookError) {
          // Log webhook errors but don't fail the lead creation
          console.error("Error sending to Zapier webhook:", webhookError);
        }
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Budget plan lead captured successfully", 
        leadId: newLead.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating budget plan lead:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Automatic Delivery leads endpoint with rate limiting and Zapier integration
  app.post("/api/automatic-delivery-leads", leadSubmitLimiter, async (req, res) => {
    try {
      const origin = req.get('origin') || req.get('referer');
      if (origin) {
        console.log(`Automatic delivery lead submission from origin: ${origin}`);
      }

      // Validate request body with zod schema
      const leadData = insertAutomaticDeliveryLeadSchema.parse(req.body);
      
      // Create lead in storage
      const newLead = await storage.createAutomaticDeliveryLead(leadData);
      
      // Send to Zapier webhook if configured
      if (process.env.ZAPIER_AUTOMATIC_DELIVERY_WEBHOOK) {
        try {
          const webhookUrl = process.env.ZAPIER_AUTOMATIC_DELIVERY_WEBHOOK.trim();
          console.log(`Attempting to send to automatic delivery webhook URL: ${webhookUrl.substring(0, 50)}...`);
          
          const webhookPayload = {
            leadId: newLead.id,
            firstName: newLead.firstName,
            lastName: newLead.lastName,
            email: newLead.email,
            phone: newLead.phone,
            pageContext: newLead.pageContext,
            submittedAt: new Date().toISOString()
          };
          
          const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(webhookPayload)
          });
          
          if (!webhookResponse.ok) {
            console.error(`Zapier webhook failed: ${webhookResponse.status} ${webhookResponse.statusText}`);
          } else {
            console.log(`Zapier webhook sent successfully for automatic delivery lead ${newLead.id}`);
          }
        } catch (webhookError) {
          // Log webhook errors but don't fail the lead creation
          console.error("Error sending to Zapier webhook:", webhookError);
        }
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Automatic delivery lead captured successfully", 
        leadId: newLead.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating automatic delivery lead:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Equipment quote endpoint with rate limiting - forwards to Zapier webhook
  app.post("/api/equipment-quote", leadSubmitLimiter, async (req, res) => {
    try {
      const origin = req.get('origin') || req.get('referer');
      if (origin) {
        console.log(`Equipment quote submission from origin: ${origin}`);
      }

      // Validate request body
      const equipmentQuoteSchema = z.object({
        firstName: z.string().min(2),
        lastName: z.string().min(2),
        email: z.string().email(),
        phone: z.string().min(10),
        equipmentInterest: z.string().min(1),
        additionalInfo: z.string().optional(),
      });

      const quoteData = equipmentQuoteSchema.parse(req.body);
      
      // Send directly to Zapier webhook (no database storage for this form)
      if (!process.env.ZAPIER_EQUIPMENT_QUOTE_WEBHOOK) {
        throw new Error('ZAPIER_EQUIPMENT_QUOTE_WEBHOOK environment variable not configured');
      }
      
      const zapierWebhookUrl = process.env.ZAPIER_EQUIPMENT_QUOTE_WEBHOOK.trim();
      
      try {
        console.log(`Sending equipment quote to Zapier webhook...`);
        
        const webhookPayload = {
          firstName: quoteData.firstName,
          lastName: quoteData.lastName,
          email: quoteData.email,
          phone: quoteData.phone,
          equipmentInterest: quoteData.equipmentInterest,
          additionalInfo: quoteData.additionalInfo,
          submittedAt: new Date().toISOString()
        };
        
        const webhookResponse = await fetch(zapierWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookPayload)
        });
        
        if (!webhookResponse.ok) {
          console.error(`Zapier webhook failed: ${webhookResponse.status} ${webhookResponse.statusText}`);
          throw new Error('Webhook submission failed');
        } else {
          console.log(`Equipment quote sent successfully to Zapier`);
        }
      } catch (webhookError) {
        console.error("Error sending to Zapier webhook:", webhookError);
        throw webhookError;
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Equipment quote submitted successfully"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error submitting equipment quote:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit quote. Please call us at (902) 539-4242." 
        });
      }
    }
  });

  // New homeowner interest endpoint with rate limiting - forwards to Zapier webhook ($100 promotion)
  app.post("/api/new-homeowner-interest", leadSubmitLimiter, async (req, res) => {
    try {
      const origin = req.get('origin') || req.get('referer');
      if (origin) {
        console.log(`New homeowner interest submission from origin: ${origin}`);
      }

      // Validate request body
      const newHomeownerSchema = z.object({
        firstName: z.string().min(2),
        lastName: z.string().min(2),
        email: z.string().email(),
        phone: z.string().min(10),
        newHomeAddress: z.string().min(5),
      });

      const homeownerData = newHomeownerSchema.parse(req.body);
      
      // Send directly to Zapier webhook
      const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/7462353/u9amv2p/';
      
      try {
        console.log(`Sending new homeowner interest to Zapier webhook...`);
        
        const webhookPayload = {
          firstName: homeownerData.firstName,
          lastName: homeownerData.lastName,
          email: homeownerData.email,
          phone: homeownerData.phone,
          newHomeAddress: homeownerData.newHomeAddress,
          submittedAt: new Date().toISOString()
        };
        
        const webhookResponse = await fetch(zapierWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookPayload)
        });
        
        if (!webhookResponse.ok) {
          console.error(`Zapier webhook failed: ${webhookResponse.status} ${webhookResponse.statusText}`);
          throw new Error('Webhook submission failed');
        } else {
          console.log(`New homeowner interest sent successfully to Zapier`);
        }
      } catch (webhookError) {
        console.error("Error sending to Zapier webhook:", webhookError);
        throw webhookError;
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you! We'll contact you soon about your new homeowner bonus."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error submitting new homeowner interest:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit. Please call us at (902) 539-4242." 
        });
      }
    }
  });

  // Homeowner interest endpoint with rate limiting - forwards to Zapier webhook ($150 follow-up promotion)
  app.post("/api/homeowner-interest", leadSubmitLimiter, async (req, res) => {
    try {
      const origin = req.get('origin') || req.get('referer');
      if (origin) {
        console.log(`Homeowner interest ($150) submission from origin: ${origin}`);
      }

      // Validate request body
      const homeownerSchema = z.object({
        firstName: z.string().min(2),
        lastName: z.string().min(2),
        email: z.string().email(),
        phone: z.string().min(10),
        newHomeAddress: z.string().min(5),
      });

      const homeownerData = homeownerSchema.parse(req.body);
      
      // Send directly to Zapier webhook for $150 promotion
      const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/7462353/u9air04/';
      
      try {
        console.log(`Sending homeowner interest ($150) to Zapier webhook...`);
        
        const webhookPayload = {
          firstName: homeownerData.firstName,
          lastName: homeownerData.lastName,
          email: homeownerData.email,
          phone: homeownerData.phone,
          newHomeAddress: homeownerData.newHomeAddress,
          submittedAt: new Date().toISOString(),
          promotionAmount: 150
        };
        
        const webhookResponse = await fetch(zapierWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookPayload)
        });
        
        if (!webhookResponse.ok) {
          console.error(`Zapier webhook failed: ${webhookResponse.status} ${webhookResponse.statusText}`);
          throw new Error('Webhook submission failed');
        } else {
          console.log(`Homeowner interest ($150) sent successfully to Zapier`);
        }
      } catch (webhookError) {
        console.error("Error sending to Zapier webhook:", webhookError);
        throw webhookError;
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you! We'll contact you soon about your $150 homeowner bonus."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error submitting homeowner interest ($150):", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit. Please call us at (902) 539-4242." 
        });
      }
    }
  });

  // XML Sitemap endpoint for SEO
  app.get("/sitemap.xml", (req, res) => {
    try {
      const sitemap = generateSitemap();
      res.set('Content-Type', 'application/xml');
      res.send(sitemap);
    } catch (error) {
      console.error('Error generating sitemap:', error);
      res.status(500).send('Error generating sitemap');
    }
  });

  // Note: GET /api/leads endpoint removed for security - exposes PII without authentication
  // In production, implement proper admin authentication before exposing lead data

  // Get reviews endpoint
  app.get("/api/reviews", async (req, res) => {
    try {
      const reviews = await storage.getReviews();
      res.json({ success: true, reviews });
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch reviews" 
      });
    }
  });

  // Sync reviews from external APIs (Google + Facebook)
  app.post("/api/reviews/sync", async (req, res) => {
    try {
      const syncResult = await storage.syncReviewsFromAPIs();
      res.json({ 
        success: true, 
        message: "Reviews synced successfully",
        syncResult 
      });
    } catch (error) {
      console.error("Error syncing reviews:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to sync reviews" 
      });
    }
  });

  // Manual review creation (for testing or admin use)
  app.post("/api/reviews", async (req, res) => {
    try {
      const reviewData = insertReviewSchema.parse(req.body);
      const newReview = await storage.createReview(reviewData);
      res.status(201).json({ 
        success: true, 
        message: "Review created successfully",
        reviewId: newReview.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid review data", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating review:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Credit application endpoint with strict rate limiting
  app.post("/api/credit-applications", creditApplicationLimiter, async (req, res) => {
    try {
      // SECURITY: SIN and DOB are validated but NEVER stored in database
      // Sensitive PII is only used for immediate third-party credit check, then discarded
      
      // Validate request body with input schema (includes SIN and DOB for credit check)
      const inputData = creditApplicationInputSchema.parse(req.body);
      
      // Extract sensitive PII for credit check (will not be stored)
      const { socialInsurance, dateOfBirth, ...applicationData } = inputData;
      
      // TODO: Integrate with third-party credit check service
      // Example: const creditResult = await creditCheckService.verify({
      //   sin: socialInsurance,
      //   dob: dateOfBirth,
      //   ...inputData
      // });
      // For now, we'll mark all applications as pending manual review
      const creditCheckResult = {
        creditCheckStatus: 'manual_review',
        creditCheckReference: null,
        creditScore: null,
      };
      
      // Create credit application in storage WITHOUT SIN or DOB
      const newApplication = await storage.createCreditApplication({
        ...applicationData,
        ...creditCheckResult,
      });
      
      // SIN and DOB are now out of scope and will be garbage collected
      // Never log any part of this process that might contain sensitive PII
      
      res.status(201).json({ 
        success: true, 
        message: "Credit application submitted successfully. We will review your application and contact you within 24 hours.",
        applicationId: newApplication.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid application data", 
          errors: error.errors 
        });
      } else {
        // Never log error details that might contain PII
        console.error("Error creating credit application (details suppressed for security)");
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Order endpoint for existing customers to place heating oil orders
  app.post("/api/orders", orderLimiter, async (req, res) => {
    try {
      // Validate request body with zod schema
      const orderData = insertOrderSchema.parse(req.body);
      
      // Create order in storage
      const newOrder = await storage.createOrder(orderData);
      
      res.status(201).json({ 
        success: true, 
        message: "Order placed successfully! We will process your delivery request and contact you for confirmation.",
        orderId: newOrder.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid order data", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating order:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Admin authentication middleware
  const requireAdminAuth = (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        success: false, 
        message: "Unauthorized - Admin authentication required" 
      });
    }
    
    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (!adminPassword) {
      console.error("ADMIN_PASSWORD not configured");
      return res.status(500).json({ 
        success: false, 
        message: "Server configuration error" 
      });
    }
    
    if (token !== adminPassword) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid admin credentials" 
      });
    }
    
    next();
  };

  // Admin endpoints - Protected by authentication
  // Get all leads for admin dashboard
  app.get("/api/admin/leads", requireAdminAuth, async (req, res) => {
    try {
      const leads = await storage.listLeads();
      res.json({ success: true, leads });
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch leads" 
      });
    }
  });

  // Get all credit applications for admin dashboard
  app.get("/api/admin/credit-applications", requireAdminAuth, async (req, res) => {
    try {
      const applications = await storage.listCreditApplications();
      res.json({ success: true, applications });
    } catch (error) {
      console.error("Error fetching credit applications:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch credit applications" 
      });
    }
  });

  // Get all orders for admin dashboard
  app.get("/api/admin/orders", requireAdminAuth, async (req, res) => {
    try {
      const orders = await storage.listOrders();
      res.json({ success: true, orders });
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch orders" 
      });
    }
  });

  // Update order status
  app.patch("/api/admin/orders/:id", requireAdminAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { orderStatus } = req.body;
      
      if (!orderStatus) {
        return res.status(400).json({ 
          success: false, 
          message: "orderStatus is required" 
        });
      }

      const updatedOrder = await storage.updateOrderStatus(id, orderStatus);
      res.json({ success: true, order: updatedOrder });
    } catch (error) {
      console.error("Error updating order:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to update order" 
      });
    }
  });

  // Update credit application status
  app.patch("/api/admin/credit-applications/:id", requireAdminAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { approvalStatus, approvalNotes } = req.body;
      
      if (!approvalStatus) {
        return res.status(400).json({ 
          success: false, 
          message: "approvalStatus is required" 
        });
      }

      const updatedApplication = await storage.updateCreditApplicationStatus(
        id, 
        approvalStatus, 
        approvalNotes
      );
      res.json({ success: true, application: updatedApplication });
    } catch (error) {
      console.error("Error updating credit application:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to update credit application" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
