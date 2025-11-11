import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Phone, ShoppingCart, CreditCard, DollarSign, Shield, Wrench, UserPlus, Briefcase, Calendar, MessageCircle, Mail, Gift, Users, Settings, Tv } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Our Services - Heating Oil & Furnace Care | Mercer Fuels Cape Breton</title>
        <meta name="description" content="Complete heating oil services in Cape Breton: automatic delivery, emergency service, budget plans, furnace insurance & cleaning. Family-owned, serving Sydney & Glace Bay for 50+ years." />
        <meta name="keywords" content="heating oil services Cape Breton, automatic delivery Sydney NS, emergency heating oil, furnace insurance, furnace cleaning, budget plans heating oil" />
        <link rel="canonical" href="https://mercerfuels.com/services" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Services - Complete Heating Solutions | Mercer Fuels" />
        <meta property="og:description" content="From automatic delivery to furnace insurance, discover all the ways Mercer Fuels keeps Cape Breton homes warm and comfortable." />
        <meta property="og:url" content="https://mercerfuels.com/services" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mercer Fuels Services" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Mercer Fuels Cape Breton" />
        <meta name="twitter:description" content="Complete heating oil services: automatic delivery, emergency service, budget plans, furnace insurance & more." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Mercer Fuels Services" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative min-h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.75), rgba(30, 41, 59, 0.75)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-0"></div>
          
          <div className="relative z-10 container mx-auto px-4 lg:px-6 py-12 lg:py-16">
            <div className="max-w-4xl mx-auto text-center text-white space-y-6">
              <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-lg px-6 py-2" data-testid="badge-services">
                <Briefcase className="w-5 h-5 mr-2" />
                Complete Heating Solutions
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" data-testid="heading-main">
                Our <span className="text-chart-2">Services</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto" data-testid="text-hero-description">
                From automatic delivery to furnace maintenance, we provide comprehensive heating oil services to keep your Cape Breton home warm and comfortable all year long.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-8 bg-chart-2/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">50+</div>
              <div className="text-sm md:text-base text-muted-foreground">Years Serving Cape Breton</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">1000+</div>
              <div className="text-sm md:text-base text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">200+</div>
              <div className="text-sm md:text-base text-muted-foreground">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery & Ordering Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-delivery-ordering">
                Delivery & Ordering
              </h2>
              <p className="text-muted-foreground text-lg">
                Convenient heating oil delivery options for every need
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Automatic Delivery */}
              <Link href="/automatic-delivery">
                <Card className="p-6 hover-elevate h-full" data-testid="card-automatic-delivery">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                      <Truck className="w-8 h-8 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Automatic Delivery</h3>
                    <p className="text-muted-foreground flex-grow">
                      Never run out of heating oil with our automatic monitoring and delivery system.
                    </p>
                  </div>
                </Card>
              </Link>

              {/* Easy Online Ordering */}
              <Link href="/orderonline">
                <Card className="p-6 hover-elevate h-full" data-testid="card-easy-online-ordering">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                      <ShoppingCart className="w-8 h-8 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Easy Online Ordering</h3>
                    <p className="text-muted-foreground flex-grow">
                      Quick and convenient online ordering system available 24/7 for existing customers.
                    </p>
                  </div>
                </Card>
              </Link>

              {/* Competitive Pricing */}
              <Link href="/pricing">
                <Card className="p-6 hover-elevate h-full" data-testid="card-competitive-pricing">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                      <DollarSign className="w-8 h-8 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
                    <p className="text-muted-foreground flex-grow">
                      Support local and save money with our competitive heating oil prices.
                    </p>
                  </div>
                </Card>
              </Link>
            </div>

            {/* Payment & Financial Options Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-payment-options">
                Payment & Financial Options
              </h2>
              <p className="text-muted-foreground text-lg">
                Flexible payment solutions to fit your budget
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Equal Monthly Payment Plans */}
              <Link href="/budgetplan">
                <Card className="p-6 hover-elevate h-full" data-testid="card-equal-monthly-plans">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                      <CreditCard className="w-8 h-8 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Equal Monthly Payment Plans</h3>
                    <p className="text-muted-foreground flex-grow">
                      Budget-friendly equal monthly payments to help you manage heating costs throughout the year.
                    </p>
                  </div>
                </Card>
              </Link>

              {/* Easy Online Bill Payment */}
              <Link href="/billpayment">
                <Card className="p-6 hover-elevate h-full" data-testid="card-online-bill-payment">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                      <Settings className="w-8 h-8 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Easy Online Bill Payment</h3>
                    <p className="text-muted-foreground flex-grow">
                      Pay your bills quickly and securely online at your convenience.
                    </p>
                  </div>
                </Card>
              </Link>

              {/* Email Statements */}
              <Card className="p-6 h-full opacity-75" data-testid="card-email-statements">
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                    <Mail className="w-8 h-8 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Email Statements</h3>
                  <p className="text-muted-foreground flex-grow">
                    Receive your statements directly to your inbox for easy record keeping.
                  </p>
                  <Badge variant="secondary" className="w-fit mt-2">Feature Available</Badge>
                </div>
              </Card>
            </div>

            {/* Equipment & Maintenance Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-equipment-maintenance">
                Equipment & Maintenance
              </h2>
              <p className="text-muted-foreground text-lg">
                Complete furnace solutions and protection
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Furnace Equipment Installation and Financing */}
              <Link href="/oil_tanks">
                <Card className="p-6 hover-elevate h-full" data-testid="card-furnace-installation">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                      <Settings className="w-8 h-8 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Furnace Equipment Installation & Financing</h3>
                    <p className="text-muted-foreground flex-grow">
                      Professional installation services with flexible financing options available.
                    </p>
                  </div>
                </Card>
              </Link>

              {/* Cheapest Furnace Insurance */}
              <Link href="/insurance">
                <Card className="p-6 hover-elevate h-full" data-testid="card-cheapest-furnace-insurance">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                      <Shield className="w-8 h-8 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Cheapest Furnace Insurance</h3>
                    <p className="text-muted-foreground flex-grow">
                      Cape Breton's cheapest furnace insurance at $225+tax with comprehensive coverage and peace of mind.
                    </p>
                  </div>
                </Card>
              </Link>

              {/* Book a Furnace Cleaning */}
              <Link href="/schedule-a-furnace-cleaning">
                <Card className="p-6 hover-elevate h-full" data-testid="card-book-furnace-cleaning">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                      <Calendar className="w-8 h-8 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Book a Furnace Cleaning</h3>
                    <p className="text-muted-foreground flex-grow">
                      Schedule your annual furnace cleaning to keep your system running at peak efficiency.
                    </p>
                  </div>
                </Card>
              </Link>
            </div>

            {/* Customer Support & Convenience Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-support-convenience">
                Customer Support & Convenience
              </h2>
              <p className="text-muted-foreground text-lg">
                We're here to help whenever you need us
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* 24/7 Real Person Support */}
              <a href="tel:9025394242">
                <Card className="p-6 hover-elevate h-full" data-testid="card-real-person-support">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                      <Phone className="w-8 h-8 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">24/7 Real Person Support</h3>
                    <p className="text-muted-foreground flex-grow">
                      Talk to a real person anytime, day or night. No automated systems, just friendly Cape Breton service.
                    </p>
                  </div>
                </Card>
              </a>

              {/* Text Message Reminders */}
              <Link href="/textreminders" data-testid="link-text-reminders">
                <Card className="p-6 hover-elevate h-full" data-testid="card-text-reminders">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                      <MessageCircle className="w-8 h-8 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Text Message Reminders</h3>
                    <p className="text-muted-foreground flex-grow">
                      Stay informed with convenient text message updates about deliveries and service appointments.
                    </p>
                  </div>
                </Card>
              </Link>
            </div>

            {/* Rewards & Community Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-rewards-community">
                Rewards & Community
              </h2>
              <p className="text-muted-foreground text-lg">
                Extra perks for being part of the Mercer Fuels family
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Refer A Friend Program */}
              <Link href="/refer-a-friend">
                <Card className="p-6 hover-elevate h-full" data-testid="card-refer-friend">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                      <Users className="w-8 h-8 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Refer A Friend Program</h3>
                    <p className="text-muted-foreground flex-grow">
                      Earn rewards by referring your friends and neighbors to Mercer Fuels.
                    </p>
                  </div>
                </Card>
              </Link>

              {/* Social Media Giveaways */}
              <Card className="p-6 hover-elevate h-full" data-testid="card-social-giveaways">
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                    <Gift className="w-8 h-8 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Tons of Online Social Media Giveaways</h3>
                  <p className="text-muted-foreground flex-grow mb-4">
                    Follow us on social media for exciting giveaways, contests, and community events throughout the year.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a 
                      href="https://www.facebook.com/MercerFuels/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      data-testid="button-facebook-services"
                    >
                      <Button size="sm" className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white">
                        <SiFacebook className="mr-2 h-4 w-4" />
                        Like on Facebook
                      </Button>
                    </a>
                    <a 
                      href="https://www.instagram.com/mercerfuels/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      data-testid="button-instagram-services"
                    >
                      <Button size="sm" className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white">
                        <SiInstagram className="mr-2 h-4 w-4" />
                        Follow on Instagram
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>

              {/* TV Giveaways */}
              <Link href="/tv-giveaways">
                <Card className="p-6 hover-elevate h-full" data-testid="card-tv-giveaways">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-4">
                      <Tv className="w-8 h-8 text-chart-2" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">TV Giveaways</h3>
                    <p className="text-muted-foreground flex-grow">
                      Win big-screen TVs every month during heating season. Automatic entry when you order oil!
                    </p>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-chart-2/30 bg-gradient-to-br from-chart-2/5 to-chart-2/10 hover-elevate" data-testid="card-cta">
              <div className="p-8 md:p-12 text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold" data-testid="heading-cta">
                  Ready to Experience the Mercer Fuels Difference?
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Over 50 years of family-owned service in Cape Breton. Let us take care of your heating needs.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <Link href="/become-a-customer">
                    <Card className="inline-block p-4 hover-elevate" data-testid="button-become-customer">
                      <div className="flex items-center gap-2 font-semibold">
                        <UserPlus className="w-5 h-5" />
                        Become a Customer
                      </div>
                    </Card>
                  </Link>
                  
                  <a href="tel:9025394242">
                    <Card className="inline-block p-4 hover-elevate" data-testid="button-call-now">
                      <div className="flex items-center gap-2 font-semibold">
                        <Phone className="w-5 h-5" />
                        Call (902) 539-4242
                      </div>
                    </Card>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
