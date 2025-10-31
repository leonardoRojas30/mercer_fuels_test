import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import MobileBottomBar from "@/components/MobileBottomBar";

// Lazy load all pages for better performance
const Home = lazy(() => import("@/pages/Home"));
const ScheduleConsultation = lazy(() => import("@/pages/ScheduleConsultation"));
const OrderOnline = lazy(() => import("@/pages/OrderOnline"));
const PayBill = lazy(() => import("@/pages/PayBill"));
const BecomeCustomer = lazy(() => import("@/pages/BecomeCustomer"));
const CreditApplication = lazy(() => import("@/pages/CreditApplication"));
const FurnaceInsurance = lazy(() => import("@/pages/FurnaceInsurance"));
const SydneyHeatingOil = lazy(() => import("@/pages/SydneyHeatingOil"));
const GlaceBayHeatingOil = lazy(() => import("@/pages/GlaceBayHeatingOil"));
const NewWaterfordHeatingOil = lazy(() => import("@/pages/NewWaterfordHeatingOil"));
const NorthSydneyHeatingOil = lazy(() => import("@/pages/NorthSydneyHeatingOil"));
const SydneyRiverHeatingOil = lazy(() => import("@/pages/SydneyRiverHeatingOil"));
const SydneyMinesHeatingOil = lazy(() => import("@/pages/SydneyMinesHeatingOil"));
const DonkinHeatingOil = lazy(() => import("@/pages/DonkinHeatingOil"));
const PortMorienHeatingOil = lazy(() => import("@/pages/PortMorienHeatingOil"));
const BirchGroveHeatingOil = lazy(() => import("@/pages/BirchGroveHeatingOil"));
const SwitchFromUltramar = lazy(() => import("@/pages/SwitchFromUltramar"));
const SwitchFromIrving = lazy(() => import("@/pages/SwitchFromIrving"));
const LocalVsBigOil = lazy(() => import("@/pages/LocalVsBigOil"));
const EmergencyHeatingOil = lazy(() => import("@/pages/EmergencyHeatingOil"));
const AutomaticDelivery = lazy(() => import("@/pages/AutomaticDelivery"));
const WinterStormPrep = lazy(() => import("@/pages/WinterStormPrep"));
const BudgetPlans = lazy(() => import("@/pages/BudgetPlans"));
const BudgetPlan = lazy(() => import("@/pages/BudgetPlan"));
const NewCustomerSpecial = lazy(() => import("@/pages/NewCustomerSpecial"));
const NewHomeownersGuide = lazy(() => import("@/pages/NewHomeownersGuide"));
const ModernHomeowner = lazy(() => import("@/pages/ModernHomeowner"));
const TextReminders = lazy(() => import("@/pages/TextReminders"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const OilTanks = lazy(() => import("@/pages/OilTanks"));
const NewCustomersWelcomed = lazy(() => import("@/pages/NewCustomersWelcomed"));
const NewHome = lazy(() => import("@/pages/NewHome"));
const Homeowner = lazy(() => import("@/pages/Homeowner"));
const Protocase = lazy(() => import("@/pages/Protocase"));
const ReferAFriend = lazy(() => import("@/pages/ReferAFriend"));
const ScheduleFurnaceCleaning = lazy(() => import("@/pages/ScheduleFurnaceCleaning"));
const Services = lazy(() => import("@/pages/Services"));
const TvGiveaways = lazy(() => import("@/pages/TvGiveaways"));
const StaffCalendar = lazy(() => import("@/pages/StaffCalendar"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const BudgetCalculator = lazy(() => import("@/pages/BudgetCalculator"));
const ThankYou = lazy(() => import("@/pages/ThankYou"));
const TermsOfUse = lazy(() => import("@/pages/TermsOfUse"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Loading component for better UX
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chart-2 mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/schedule-consultation" component={ScheduleConsultation} />
        <Route path="/orderonline" component={OrderOnline} />
        <Route path="/billpayment" component={PayBill} />
        <Route path="/become-a-customer" component={BecomeCustomer} />
        <Route path="/fuelapplication" component={CreditApplication} />
        <Route path="/insurance" component={FurnaceInsurance} />
        <Route path="/sydney-heating-oil" component={SydneyHeatingOil} />
        <Route path="/glace-bay-heating-oil" component={GlaceBayHeatingOil} />
        <Route path="/new-waterford-heating-oil" component={NewWaterfordHeatingOil} />
        <Route path="/north-sydney-heating-oil" component={NorthSydneyHeatingOil} />
        <Route path="/sydney-river-heating-oil" component={SydneyRiverHeatingOil} />
        <Route path="/sydney-mines-heating-oil" component={SydneyMinesHeatingOil} />
        <Route path="/donkin-heating-oil" component={DonkinHeatingOil} />
        <Route path="/port-morien-heating-oil" component={PortMorienHeatingOil} />
        <Route path="/birch-grove-heating-oil" component={BirchGroveHeatingOil} />
        <Route path="/switch-from-ultramar" component={SwitchFromUltramar} />
        <Route path="/switch-from-irving" component={SwitchFromIrving} />
        <Route path="/local-vs-big-oil" component={LocalVsBigOil} />
        <Route path="/emergency-heating-oil-delivery" component={EmergencyHeatingOil} />
        <Route path="/automatic" component={AutomaticDelivery} />
        <Route path="/automatic-delivery" component={AutomaticDelivery} />
        <Route path="/cape-breton-winter-storm-preparation" component={WinterStormPrep} />
        <Route path="/heating-oil-budget-plans" component={BudgetPlans} />
        <Route path="/budgetplan" component={BudgetPlan} />
        <Route path="/new-customer-special-offers" component={NewCustomerSpecial} />
        <Route path="/new-homeowner-heating-oil-guide-cape-breton" component={NewHomeownersGuide} />
        <Route path="/smart-heating-oil-modern-homeowner" component={ModernHomeowner} />
        <Route path="/textreminders" component={TextReminders} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/oil_tanks" component={OilTanks} />
        <Route path="/new-customers-welcomed" component={NewCustomersWelcomed} />
        <Route path="/newhome" component={NewHome} />
        <Route path="/homeowner" component={Homeowner} />
        <Route path="/protocase" component={Protocase} />
        <Route path="/refer-a-friend" component={ReferAFriend} />
        <Route path="/schedule-a-furnace-cleaning" component={ScheduleFurnaceCleaning} />
        <Route path="/services" component={Services} />
        <Route path="/tv-giveaways" component={TvGiveaways} />
        <Route path="/staff-calendar" component={StaffCalendar} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/budget-calculator" component={BudgetCalculator} />
        <Route path="/thanks" component={ThankYou} />
        <Route path="/terms" component={TermsOfUse} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/faq" component={FAQ} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <PerformanceOptimizer />
          <div className="relative min-h-screen">
            <Router />
            <MobileBottomBar />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
