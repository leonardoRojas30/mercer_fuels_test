import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  pageContext: text("page_context").notNull(), // Which page/service they inquired about
  additionalInfo: text("additional_info"), // For specific form fields like currentUsage, tankLevel, etc.
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

export const reviews = pgTable("reviews", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  authorName: text("author_name").notNull(),
  authorLocation: text("author_location"),
  rating: varchar("rating").notNull(), // 1-5 stars
  text: text("text").notNull(),
  source: text("source").notNull(), // "google" or "facebook"
  sourceId: text("source_id").notNull().unique(), // External review ID to prevent duplicates
  publishedTime: timestamp("published_time").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertReviewSchema = createInsertSchema(reviews).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertReview = z.infer<typeof insertReviewSchema>;
export type Review = typeof reviews.$inferSelect;

// Credit Applications - Designed for third-party credit service integration
// SECURITY: This table does NOT store SIN or DOB for security reasons
// Sensitive PII (SIN, DOB) is only used for immediate credit check via third-party API, never persisted
export const creditApplications = pgTable("credit_applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  address: text("address").notNull(),
  // Note: DOB and SIN are NOT stored - only used for credit check then discarded
  employmentStatus: text("employment_status").notNull(),
  employer: text("employer"),
  annualIncome: text("annual_income").notNull(),
  rentOrOwn: text("rent_or_own").notNull(),
  monthlyHousing: text("monthly_housing").notNull(),
  agreeToCredit: text("agree_to_credit").notNull(),
  agreeToTerms: text("agree_to_terms").notNull(),
  // Credit check results from third-party service (no raw PII)
  creditCheckStatus: text("credit_check_status"), // success, failed, pending, manual_review
  creditCheckReference: text("credit_check_reference"), // Reference ID from credit service
  creditScore: text("credit_score"), // If provided by service
  approvalStatus: text("approval_status").notNull().default("pending"), // pending, approved, declined
  approvalNotes: text("approval_notes"), // Internal notes from manual review
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Schema for API input - includes SIN for credit check but won't be stored
export const creditApplicationInputSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(10, "Phone number is required"),
  email: z.string().email("Valid email is required"),
  address: z.string().min(10, "Address is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  socialInsurance: z.string().min(9, "Social Insurance Number is required"), // For credit check only, not stored
  employmentStatus: z.string().min(1, "Employment status is required"),
  employer: z.string().optional(),
  annualIncome: z.string().min(1, "Annual income is required"),
  rentOrOwn: z.string().min(1, "Housing status is required"),
  monthlyHousing: z.string().min(1, "Monthly housing payment is required"),
  agreeToCredit: z.string(),
  agreeToTerms: z.string(),
});

export const insertCreditApplicationSchema = createInsertSchema(creditApplications).omit({
  id: true,
  createdAt: true,
  creditCheckStatus: true,
  creditCheckReference: true,
  creditScore: true,
  approvalStatus: true,
  approvalNotes: true,
});

// Removed fields from storage: dateOfBirth (no longer in table schema - used only for credit check)

export type CreditApplicationInput = z.infer<typeof creditApplicationInputSchema>;
export type InsertCreditApplication = z.infer<typeof insertCreditApplicationSchema>;
export type CreditApplication = typeof creditApplications.$inferSelect;

// Online Orders - For existing customers to place oil delivery orders
export const orders = pgTable("orders", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  accountNumber: text("account_number").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: text("phone").notNull(),
  deliveryAddress: text("delivery_address").notNull(),
  gallons: text("gallons").notNull(),
  deliveryDate: text("delivery_date").notNull(), // Stores delivery preference
  specialInstructions: text("special_instructions"),
  agreeToTerms: text("agree_to_terms").notNull(),
  orderStatus: text("order_status").notNull().default("pending"), // pending, confirmed, delivered, cancelled
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  createdAt: true,
  orderStatus: true,
});

export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof orders.$inferSelect;

// Budget Plan Leads - For customers interested in equal monthly payment plans
export const budgetPlanLeads = pgTable("budget_plan_leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  currentHeatingCosts: text("current_heating_costs"), // Optional - estimated monthly costs
  pageContext: text("page_context").notNull(), // Which page they inquired from
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertBudgetPlanLeadSchema = createInsertSchema(budgetPlanLeads).omit({
  id: true,
  createdAt: true,
});

export type InsertBudgetPlanLead = z.infer<typeof insertBudgetPlanLeadSchema>;
export type BudgetPlanLead = typeof budgetPlanLeads.$inferSelect;

// Automatic Delivery Leads - For customers interested in automatic delivery service
export const automaticDeliveryLeads = pgTable("automatic_delivery_leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  pageContext: text("page_context").notNull(), // Which page they inquired from
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertAutomaticDeliveryLeadSchema = createInsertSchema(automaticDeliveryLeads).omit({
  id: true,
  createdAt: true,
});

export type InsertAutomaticDeliveryLead = z.infer<typeof insertAutomaticDeliveryLeadSchema>;
export type AutomaticDeliveryLead = typeof automaticDeliveryLeads.$inferSelect;
