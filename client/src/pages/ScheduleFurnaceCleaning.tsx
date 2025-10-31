import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench, Shield, DollarSign, CheckCircle, Phone, ArrowDown, Calendar, Flame, Wind, Clock } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, url: string) => void;
  }
}

export default function ScheduleFurnaceCleaning() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="for-form-embed-handler"]');
    
    if (existingScript) {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-201584999143264']", "https://form.jotform.com/");
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-201584999143264']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const scrollToCleaning = () => {
    const cleaningSection = document.getElementById('cleaning-form');
    if (cleaningSection) {
      cleaningSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Schedule Furnace Cleaning - Annual Maintenance | Mercer Fuels Cape Breton</title>
        <meta name="description" content="Book your annual furnace cleaning with Mercer Fuels. Professional maintenance keeps your heating system running efficiently, safely, and saves you money. Serving Sydney & Cape Breton for 50+ years." />
        <meta name="keywords" content="furnace cleaning Cape Breton, annual furnace maintenance Sydney NS, furnace service Cape Breton, heating system cleaning, furnace tune-up Sydney, professional furnace cleaning Nova Scotia" />
        <link rel="canonical" href="https://mercerfuels.com/schedule-a-furnace-cleaning" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Schedule Furnace Cleaning - Annual Maintenance | Mercer Fuels" />
        <meta property="og:description" content="Professional furnace cleaning and maintenance. Keep your heating system efficient and safe. Book your service with Cape Breton's trusted heating experts." />
        <meta property="og:url" content="https://mercerfuels.com/schedule-a-furnace-cleaning" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mercer Fuels Furnace Cleaning Service" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Schedule Furnace Cleaning | Mercer Fuels Cape Breton" />
        <meta name="twitter:description" content="Professional annual furnace cleaning and maintenance. Keep your heating system running efficiently and safely." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Mercer Fuels Furnace Cleaning" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative min-h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.75), rgba(30, 41, 59, 0.75)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-0"></div>
          
          <div className="relative z-10 container mx-auto px-4 lg:px-6 py-16 lg:py-20">
            <div className="max-w-4xl mx-auto text-center text-white space-y-6">
              <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-lg px-6 py-2" data-testid="badge-cleaning-service">
                <Wrench className="w-5 h-5 mr-2" />
                Annual Furnace Cleaning
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" data-testid="heading-main">
                Schedule Your Annual <span className="text-chart-2">Furnace Cleaning</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto" data-testid="text-hero-description">
                Regular furnace maintenance keeps your heating system running efficiently, extends its lifespan, and ensures your family stays safe and warm all winter long.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  asChild
                  className="bg-white text-primary hover:bg-white/90 border-white"
                  data-testid="button-call-now"
                >
                  <a href="tel:9025394242">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (902) 539-4242
                  </a>
                </Button>
                
                <Button 
                  size="lg"
                  onClick={scrollToCleaning}
                  className="bg-chart-2 hover:bg-chart-2/90 text-white border-chart-2"
                  data-testid="button-scroll-form"
                >
                  Book Online
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-benefits">
              Why Annual Furnace Cleaning Matters
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Improved Efficiency */}
              <Card className="p-6 hover-elevate" data-testid="card-benefit-efficiency">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-chart-2/10 flex-shrink-0">
                    <Flame className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Improved Efficiency</h3>
                    <p className="text-muted-foreground">
                      A clean furnace operates at peak efficiency, converting more fuel into heat for your home.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Lower Heating Costs */}
              <Card className="p-6 hover-elevate" data-testid="card-benefit-costs">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-chart-2/10 flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Lower Heating Costs</h3>
                    <p className="text-muted-foreground">
                      An efficient furnace uses less fuel, reducing your heating bills throughout the winter.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Extend Furnace Lifespan */}
              <Card className="p-6 hover-elevate" data-testid="card-benefit-lifespan">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-chart-2/10 flex-shrink-0">
                    <Clock className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Extend Furnace Lifespan</h3>
                    <p className="text-muted-foreground">
                      Regular maintenance prevents wear and tear, helping your furnace last many years longer.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Prevent Breakdowns */}
              <Card className="p-6 hover-elevate" data-testid="card-benefit-breakdowns">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-chart-2/10 flex-shrink-0">
                    <Wrench className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Prevent Breakdowns</h3>
                    <p className="text-muted-foreground">
                      Catch small issues before they become expensive repairs or leave you without heat.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Safer Operation */}
              <Card className="p-6 hover-elevate" data-testid="card-benefit-safety">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-chart-2/10 flex-shrink-0">
                    <Shield className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Safer Operation</h3>
                    <p className="text-muted-foreground">
                      Professional cleaning ensures your furnace operates safely, protecting your family from hazards.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Better Air Quality */}
              <Card className="p-6 hover-elevate" data-testid="card-benefit-air-quality">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-chart-2/10 flex-shrink-0">
                    <Wind className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Better Air Quality</h3>
                    <p className="text-muted-foreground">
                      A clean furnace means cleaner air circulation throughout your home for healthier living.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-chart-2/30 bg-gradient-to-br from-chart-2/5 to-chart-2/10 hover-elevate" data-testid="card-cta">
              <div className="p-8 md:p-12 text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold" data-testid="heading-cta">
                  Ready to Schedule Your Furnace Cleaning?
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Don't wait until the cold sets in. Book your annual furnace cleaning today and enjoy peace of mind all winter long.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <Button 
                    size="lg"
                    onClick={scrollToCleaning}
                    className="bg-chart-2 hover:bg-chart-2/90 text-white"
                    data-testid="button-cta-book"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Cleaning
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    asChild
                    data-testid="button-cta-call"
                  >
                    <a href="tel:9025394242">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (902) 539-4242
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-whats-included">
              What's Included in Your Cleaning
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-4" data-testid="item-inspection">
                <CheckCircle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Complete System Inspection</h4>
                  <p className="text-sm text-muted-foreground">
                    Thorough examination of all furnace components for wear or damage
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="item-cleaning">
                <CheckCircle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Professional Cleaning</h4>
                  <p className="text-sm text-muted-foreground">
                    Deep cleaning of burner, heat exchanger, and all critical components
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="item-efficiency">
                <CheckCircle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Efficiency Testing</h4>
                  <p className="text-sm text-muted-foreground">
                    Combustion analysis and adjustments to optimize fuel efficiency
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="item-safety">
                <CheckCircle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Safety Check</h4>
                  <p className="text-sm text-muted-foreground">
                    Testing of all safety controls and emergency shut-off systems
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="item-filter">
                <CheckCircle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Filter Replacement</h4>
                  <p className="text-sm text-muted-foreground">
                    Fresh air filter installation for improved air quality
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="item-nozzle">
                <CheckCircle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Nozzle Replacement</h4>
                  <p className="text-sm text-muted-foreground">
                    Fresh nozzle installation for optimal fuel atomization and efficiency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Callout Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-chart-2/30 bg-gradient-to-br from-chart-2/5 to-chart-2/10 hover-elevate" data-testid="card-insurance-callout">
              <div className="p-8 md:p-12 text-center space-y-4">
                <Badge className="bg-chart-2 text-white text-base px-4 py-2 mb-2" data-testid="badge-insurance-free">
                  <Shield className="w-4 h-4 mr-2" />
                  FREE with Insurance
                </Badge>
                
                <h2 className="text-2xl md:text-3xl font-bold" data-testid="heading-insurance-callout">
                  Annual Cleaning Included FREE with Mercer Fuels' Furnace Insurance
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get your annual furnace cleaning at no extra cost when you're covered by our furnace insurance plan. Plus, you'll have peace of mind with coverage on major components.
                </p>
                
                <div className="pt-4">
                  <Button 
                    size="lg"
                    asChild
                    className="bg-chart-2 hover:bg-chart-2/90 text-white"
                    data-testid="button-learn-insurance"
                  >
                    <Link href="/insurance">
                      Learn About Furnace Insurance
                      <CheckCircle className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* JotForm Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div id="cleaning-form" className="bg-muted/30 rounded-2xl p-8">
              <div className="text-center mb-8">
                <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-base px-4 py-2 mb-4" data-testid="badge-schedule-now">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Your Service
                </Badge>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4" data-testid="heading-booking-form">
                  Schedule Your Furnace Cleaning
                </h2>
                
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Fill out the form below and we'll contact you to confirm your appointment at a time that works for you.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-4">
                <iframe
                  id="JotFormIFrame-201584999143264"
                  title="Mercer Fuels - Furnace Cleaning Request"
                  onLoad={(e) => {
                    const iframe = e.currentTarget;
                    window.parent.scrollTo(0, 0);
                  }}
                  allowTransparency={true}
                  allow="geolocation; microphone; camera; fullscreen"
                  src="https://form.jotform.com/201584999143264"
                  style={{
                    minWidth: '100%',
                    maxWidth: '100%',
                    height: '539px',
                    border: 'none',
                  }}
                  scrolling="no"
                  data-testid="jotform-cleaning-request"
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Prefer to book by phone? Call us at <a href="tel:9025394242" className="text-primary hover:underline font-semibold" data-testid="link-phone-booking">(902) 539-4242</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Serving Cape Breton families for over 50 years with reliable, professional furnace service
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
