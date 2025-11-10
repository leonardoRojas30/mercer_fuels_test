import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Wrench, ShieldCheck, CheckCircle, TrendingDown, Users } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Competitive Pricing - Support Local & Save Money | Mercer Fuels Cape Breton</title>
        <meta name="description" content="Supporting local doesn't mean spending more! Get competitive heating oil prices checked daily, affordable financing on equipment, and cheaper furnace insurance than big companies. Serving Sydney & Glace Bay, Nova Scotia." />
        <meta name="keywords" content="competitive heating oil prices Cape Breton, affordable heating oil Sydney, heating equipment financing Nova Scotia, furnace insurance Sydney, heating oil discounts Cape Breton, support local heating oil, family heating company Sydney" />
        <link rel="canonical" href="https://mercerfuels.com/pricing" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Support Local - Save Money! Competitive Heating Oil Pricing Cape Breton" />
        <meta property="og:description" content="Get competitive heating oil prices, affordable equipment financing, and cheaper furnace insurance. Family-owned service that saves you money." />
        <meta property="og:url" content="https://mercerfuels.com/pricing" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mercer Fuels - Competitive Pricing on Heating Oil & Services" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Support Local - Save Money! Competitive Heating Oil Pricing Cape Breton" />
        <meta name="twitter:description" content="Get competitive heating oil prices, affordable equipment financing, and cheaper furnace insurance. Family-owned service that saves you money." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Mercer Fuels Competitive Pricing" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative min-h-[550px] md:min-h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.75), rgba(30, 41, 59, 0.75)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-0"></div>
          
          <div className="relative z-10 container mx-auto px-4 lg:px-6 flex items-center justify-center min-h-[550px] md:min-h-[500px] py-20">
            <div className="text-center text-white space-y-6 max-w-4xl">
              <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-sm md:text-base px-3 md:px-4 py-1.5 mb-2">
                Supporting Local Doesn't Mean Spending More
              </Badge>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Support Local - <span className="text-chart-2">Save Money!</span>
              </h1>
              
              <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Even though we are a <strong>small local company</strong>, we offer <strong className="text-chart-2">competitive prices on all our services</strong>
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  asChild
                  size="lg"
                  variant="default"
                  className="font-bold shadow-lg"
                  data-testid="button-become-customer-hero"
                >
                  <Link href="/become-a-customer">Become A Customer</Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white font-bold"
                  data-testid="button-scroll-pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('pricing-details')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <a href="#pricing-details">Show Me How To Save</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-chart-2/10">
                  <TrendingDown className="h-8 w-8 text-chart-2" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Daily Price Checks</h3>
              <p className="text-muted-foreground">We compare our prices daily to stay competitive</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-chart-2/10">
                  <Users className="h-8 w-8 text-chart-2" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">50+ Years Local</h3>
              <p className="text-muted-foreground">Three generations serving Cape Breton families</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-chart-2/10">
                  <CheckCircle className="h-8 w-8 text-chart-2" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">No Hidden Costs</h3>
              <p className="text-muted-foreground">Clear, upfront pricing you can trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Details Section */}
      <section id="pricing-details" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              How We Save You Money
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Competitive pricing across all our services - from daily oil deliveries to equipment financing
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Furnace Oil */}
            <Card className="p-8 hover-elevate transition-all bg-white" data-testid="card-pricing-0">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-chart-2/10 mb-4">
                  <DollarSign className="h-12 w-12 text-chart-2" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Furnace Oil</h3>
                <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-sm">
                  Price Checked Daily
                </Badge>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-1 rounded-full bg-chart-2/10">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Cash Price is checked and compared to all of the other companies in Sydney, even the big national companies
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-1 rounded-full bg-chart-2/10">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Discounts to first responders, nurses, medical staff, military members and more!
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-1 rounded-full bg-chart-2/10">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Tons of giveaways and promotions!
                  </p>
                </div>
              </div>

              <Button 
                asChild
                variant="default"
                className="w-full font-bold"
                data-testid="button-become-customer-0"
              >
                <Link href="/become-a-customer">Start Saving Today</Link>
              </Button>
            </Card>

            {/* Heating Equipment */}
            <Card className="p-8 hover-elevate transition-all bg-white border-2 border-chart-2/20" data-testid="card-pricing-1">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-chart-2/10 mb-4">
                  <Wrench className="h-12 w-12 text-chart-2" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Heating Equipment</h3>
                <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-sm">
                  Most Affordable Financing
                </Badge>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-1 rounded-full bg-chart-2/10">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Best prices on payment plans for oil tanks, hot water heaters, furnaces and more!
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-1 rounded-full bg-chart-2/10">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    No hidden costs or surprises! Costs are all in, so you know exactly how much you will pay
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-1 rounded-full bg-chart-2/10">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    2, 3, or 5 year payment options available
                  </p>
                </div>
              </div>

              <Button 
                asChild
                variant="default"
                className="w-full font-bold"
                data-testid="button-become-customer-1"
              >
                <Link href="/oil_tanks">Get Financing Options</Link>
              </Button>
            </Card>

            {/* Furnace Insurance */}
            <Card className="p-8 hover-elevate transition-all bg-white" data-testid="card-pricing-2">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-chart-2/10 mb-4">
                  <ShieldCheck className="h-12 w-12 text-chart-2" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Furnace Insurance</h3>
                <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-sm">
                  Cheaper than big companies!
                </Badge>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-1 rounded-full bg-chart-2/10">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Annual Furnace Cleaning Included
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-1 rounded-full bg-chart-2/10">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    24/7 Emergency Furnace Service
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-1 rounded-full bg-chart-2/10">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Many furnace components covered
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-1 rounded-full bg-chart-2/10">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Increase the lifespan of your furnace and have peace of mind
                  </p>
                </div>
              </div>

              <Button 
                asChild
                variant="default"
                className="w-full font-bold"
                data-testid="button-become-customer-2"
              >
                <Link href="/insurance">Protect Your Furnace</Link>
              </Button>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to Save Money While Supporting Local?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Join thousands of satisfied Cape Breton families who trust us for competitive pricing and reliable service
              </p>
              <Button 
                asChild
                size="lg"
                variant="default"
                className="font-bold shadow-lg"
                data-testid="button-become-customer-bottom"
              >
                <Link href="/become-a-customer">Become a Customer Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
