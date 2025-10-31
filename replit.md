# Mercer Fuels Website

## Overview
Mercer Fuels is a full-stack web application for a family-owned heating oil company in Nova Scotia. The website aims to build customer trust through personal service, reliability, and competitive advantages, enhancing customer engagement and streamlining operations. Key capabilities include expert consultation booking, customer reviews, emergency delivery information, online ordering, and various customer service tools. The project supports business growth for a local company with over 50 years of service.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
-   **Framework**: React 18 with TypeScript and Vite.
-   **UI/UX**: Radix UI primitives with shadcn/ui components, Tailwind CSS for styling, and a custom design system focusing on professional colors (navy, orange accents, white) and Inter font.
-   **State Management**: TanStack Query for server state.
-   **Routing**: Wouter for client-side routing.
-   **Structure**: Modular component architecture.

### Backend
-   **Runtime**: Node.js with Express.js.
-   **Language**: TypeScript (ES modules).
-   **API**: RESTful API with `/api` prefix.
-   **Development**: Hot module replacement with Vite.
-   **Build**: ESBuild for server bundling.

### Data Storage
-   **Database**: PostgreSQL via Drizzle ORM (Neon serverless PostgreSQL).
-   **Schema**: Centralized `shared/schema.ts` with Zod validation.
-   **Migrations**: Drizzle Kit.
-   **Key Tables**: `leads`, `automatic_delivery_leads`, `credit_applications`, `orders`, `reviews`, `budget_plan_leads`.
    -   `credit_applications` handles credit checks without storing sensitive data.

### Key Features & Implementations
-   **Lead Capture Forms**: Collects leads for consultations, automatic delivery, budget plans, furnace insurance, and special offers. These forms integrate with specific API endpoints and Zapier webhooks.
-   **Credit Applications**: Secure processing via `/api/credit-applications`, validating and discarding sensitive data post-check.
-   **Online Orders**: Primarily integrated via JotForm iframe, with a backend `/api/orders` endpoint for programmatic use.
-   **Customer Reviews**: Manages display via `/api/reviews` and external API integration via `/api/reviews/sync`.
-   **Emergency Delivery**: Handled exclusively via phone, as per business requirements.
-   **Budget Calculator** (Staff Tool): Password-protected calculator at `/budget-calculator` for staff to calculate equal monthly payment plans. Uses research-backed Nova Scotia heating oil consumption estimates. Supports two modes: direct liter input or detailed estimation based on house type, basement, heat pumps, oil hot water usage, and thermostat settings. Calculates 10-month payment plans rounded up to nearest $10.
    -   **Estimation Formula**: 
        - Heating: House type (1,500L/2,200L/2,800L) + Basement (+300L) → Apply thermostat (10% per °C above 18°C) → Apply heat pump reduction (-50%/-65%/-75%)
        - Hot Water: 250L base + 100L per person beyond 2 (calculated separately, NOT affected by heat pumps or thermostat)
        - Total = Heating + Hot Water
    -   **UI Features**: Icon-based house type selection for intuitive staff experience
-   **Dedicated Service Pages**: Includes `pricing`, `budgetplan`, `insurance` for detailed service information and sign-ups.
-   **Promotional Landing Pages**: Pages like `newhome`, `homeowner`, `protocase`, `refer-a-friend`, `tv-giveaways`, and `schedule-a-furnace-cleaning` are used for targeted campaigns and offers, often utilizing JotForm for direct sign-ups.

## External Dependencies

### Core Technologies
-   **React Ecosystem**: React 18, React DOM, React Hook Form, Zod.
-   **UI/Styling**: Radix UI, Tailwind CSS, PostCSS, Autoprefixer, Lucide React.
-   **State Management**: TanStack Query.

### Database & Backend
-   **Database**: Neon PostgreSQL.
-   **ORM**: Drizzle ORM.
-   **Validation**: Zod.
-   **Session Management**: Connect-pg-simple.

### Development Tools
-   **Build**: Vite, ESBuild.
-   **Language**: TypeScript.

### Integrations
-   **JotForm**: Used extensively for customer-facing forms (e.g., online ordering, budget plans, promotional sign-ups, service scheduling).
-   **Zapier Webhooks**: Automates form submissions for various lead types (consultation, automatic delivery, budget plan, furnace insurance, new/existing homeowner offers). These are configured via environment variables.

### Planned Integrations (Mocked)
-   **Google Business API**: For live customer reviews.
-   **Facebook Graph API**: For social proof.
-   **Payment Processing**: For online bill payment.
-   **SMS/Text Services**: For delivery reminders.
-   **Emergency Dispatch System**: For 24/7 delivery requests.

## Environment Variables

### Required Secrets (Must Be Configured)
-   `DATABASE_URL`: PostgreSQL connection string (auto-configured by Replit).
-   `ADMIN_PASSWORD`: Password for accessing the admin dashboard at `/admin/dashboard` and budget calculator at `/budget-calculator`.
-   `ZAPIER_EQUIPMENT_QUOTE_WEBHOOK`: Webhook URL for equipment quote submissions (equipment quotes are sent directly to Zapier without local storage).

### Optional Secrets - Zapier Lead Integrations (Currently Configured)
These Zapier webhooks enhance lead processing but are not required. When configured, leads are sent to Zapier for automated workflows. When absent, leads are still saved to the database locally.

-   `ZAPIER_CONSULTATION_WEBHOOK`: Webhook for expert consultation leads (contexts: Home Page Hero, Schedule Consultation, Become Customer, Local vs Big Oil).
-   `ZAPIER_FURNACE_INSURANCE_WEBHOOK`: Webhook for furnace insurance interest leads.
-   `ZAPIER_BUDGET_PLAN_WEBHOOK`: Webhook for budget plan leads.
-   `ZAPIER_AUTOMATIC_DELIVERY_WEBHOOK`: Webhook for automatic delivery leads.

### Optional Secrets - External APIs (Not Currently Configured)
These environment variables enable live data integrations but are not required for basic operation:

-   `GOOGLE_PLACES_API_KEY`: Enables live Google reviews fetching from Google Business API.
-   `GOOGLE_PLACE_ID`: The Google Place ID for Mercer Fuels location.
-   `FACEBOOK_PAGE_ID`: Enables Facebook recommendations display.
-   `FACEBOOK_ACCESS_TOKEN`: Access token for Facebook Graph API integration.

**Note**: Without optional variables, features gracefully degrade (e.g., review features display sample data or empty state, Zapier integrations are skipped but data is still saved locally).

## Post-Launch Recommendations

### Immediate Actions (After Publishing)
1. **Run Lighthouse Audit**: Execute automated SEO and performance audit to validate optimization efforts
2. **Monitor Analytics**: Track customer engagement, page views, and conversion rates
3. **Check Webhook Logs**: Verify lead submissions are flowing properly to Zapier
4. **Review Form Submissions**: Ensure all lead capture forms are working correctly in production

### Production Hardening (Before Scaling Traffic)
1. **Add CSRF Token Protection**: Implement CSRF tokens for all form submissions
2. **Configure Origin Allowlist**: Set up allowed origins for API requests
3. **Set Up Webhook Monitoring**: Add alerting for failed webhook deliveries
4. **Review Rate Limiting**: Adjust rate limits based on actual traffic patterns

### SEO Monitoring
1. **Track Search Rankings**: Monitor position for key local heating oil keywords
2. **Analyze Click-Through Rates**: Review performance of optimized titles and descriptions
3. **Check Indexing Status**: Verify all pages are properly indexed by search engines
4. **Review Social Sharing**: Test how pages appear when shared on Facebook and Twitter