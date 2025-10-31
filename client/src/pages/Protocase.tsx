import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Gift, Tv, ArrowDown } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, url: string) => void;
  }
}

export default function Protocase() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="for-form-embed-handler"]');
    
    if (existingScript) {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-211046135178248']", "https://pci.jotform.com/");
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-211046135178248']", "https://pci.jotform.com/");
      }
    };
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup-form');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Protocase Staff Benefits - Mercer Fuels Cape Breton</title>
        <meta name="description" content="Exclusive heating oil benefits for Protocase employees. Save 10¢/litre, get a $50 holiday bonus, and enter our TV draw. Mercer Fuels serving Sydney & Glace Bay." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative min-h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.75), rgba(30, 41, 59, 0.75)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-0"></div>
          
          <div className="relative z-10 container mx-auto px-4 lg:px-6 py-16 lg:py-20">
            <div className="max-w-4xl mx-auto text-center text-white space-y-6">
              <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-lg px-6 py-2">
                <Gift className="w-5 h-5 mr-2" />
                Protocase Employee Benefits
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Exclusive Benefits for <span className="text-chart-2">Protocase Staff</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Support local businesses while saving on your heating costs. Mercer Fuels is proud to offer special benefits to Protocase employees.
              </p>
              
              <Button 
                size="lg"
                onClick={scrollToSignup}
                className="bg-chart-2 hover:bg-chart-2/90 text-white border-chart-2 mt-4"
                data-testid="button-scroll-signup"
              >
                Sign Up Now
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Your Exclusive Benefits
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Benefit 1 - 10¢ Discount */}
              <Card className="p-8 text-center hover-elevate">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center">
                    <DollarSign className="w-8 h-8 text-chart-2" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">10¢/Litre Discount</h3>
                <p className="text-muted-foreground">
                  Save 10 cents per litre on every heating oil delivery. That's real savings all year long.
                </p>
              </Card>

              {/* Benefit 2 - $50 Holiday Bonus */}
              <Card className="p-8 text-center hover-elevate">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center">
                    <Gift className="w-8 h-8 text-chart-2" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">$50 Holiday Bonus</h3>
                <p className="text-muted-foreground">
                  Receive a $50 credit every December to help with winter heating costs.
                </p>
              </Card>

              {/* Benefit 3 - TV Draw */}
              <Card className="p-8 text-center hover-elevate">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center">
                    <Tv className="w-8 h-8 text-chart-2" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">Annual TV Draw</h3>
                <p className="text-muted-foreground">
                  Automatic entry into our exclusive annual TV draw. Every Protocase customer has a chance to win!
                </p>
              </Card>
            </div>

            {/* JotForm Section */}
            <div id="signup-form" className="bg-muted/30 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Sign Up Today
              </h2>
              
              <div className="bg-background rounded-xl p-4">
                <iframe
                  id="JotFormIFrame-211046135178248"
                  title="Mercer Fuels - Protocase Staff Sign Up"
                  onLoad={(e) => {
                    const iframe = e.currentTarget;
                    window.parent.scrollTo(0, 0);
                  }}
                  allowTransparency={true}
                  allow="geolocation; microphone; camera; fullscreen; payment"
                  src="https://pci.jotform.com/form/211046135178248"
                  style={{
                    minWidth: '100%',
                    maxWidth: '100%',
                    height: '539px',
                    border: 'none',
                  }}
                  scrolling="no"
                  data-testid="jotform-protocase-signup"
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Questions? Give us a call at <a href="tel:9025394242" className="text-primary hover:underline font-semibold">(902) 539-4242</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Mercer Fuels has been proudly serving Cape Breton families and businesses for over 50 years.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
