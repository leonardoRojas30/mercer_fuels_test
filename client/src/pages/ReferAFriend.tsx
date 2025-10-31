import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Gift, CheckCircle, ArrowDown, Heart, DollarSign, Star } from "lucide-react";
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

export default function ReferAFriend() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="for-form-embed-handler"]');
    
    if (existingScript) {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-252306932154049']", "https://form.jotform.com/");
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-252306932154049']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const scrollToReferral = () => {
    const referralSection = document.getElementById('referral-form');
    if (referralSection) {
      referralSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Refer a Friend - $100 Credit for Both | Mercer Fuels Cape Breton</title>
        <meta name="description" content="Share the benefits of local heating oil service! Refer a friend to Mercer Fuels and you both get $100 credit. Family-owned, serving Sydney & Glace Bay for 50+ years." />
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
              <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-lg px-6 py-2">
                <Users className="w-5 h-5 mr-2" />
                Referral Program
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Share the Love, <span className="text-chart-2">Earn $100</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                When your friend signs up and gets their first delivery, you both receive a <strong className="text-chart-2">$100 credit</strong>. It's our way of saying thank you for spreading the word!
              </p>

              <div className="bg-white/10 backdrop-blur-sm border-2 border-chart-2/50 rounded-2xl p-6 max-w-xl mx-auto">
                <div className="flex items-center justify-center gap-6">
                  <div className="text-center">
                    <DollarSign className="w-10 h-10 text-chart-2 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-chart-2">$100</p>
                    <p className="text-sm text-white/80">For You</p>
                  </div>
                  <Heart className="w-8 h-8 text-chart-2" />
                  <div className="text-center">
                    <DollarSign className="w-10 h-10 text-chart-2 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-chart-2">$100</p>
                    <p className="text-sm text-white/80">For Your Friend</p>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg"
                onClick={scrollToReferral}
                className="bg-chart-2 hover:bg-chart-2/90 text-white border-chart-2 mt-4"
                data-testid="button-scroll-referral"
              >
                Refer a Friend Now
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Step 1 */}
              <Card className="p-8 text-center hover-elevate">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-chart-2">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Fill Out the Form</h3>
                <p className="text-muted-foreground">
                  Share your friend's contact information using our simple referral form below.
                </p>
              </Card>

              {/* Step 2 */}
              <Card className="p-8 text-center hover-elevate">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-chart-2">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">They Sign Up</h3>
                <p className="text-muted-foreground">
                  We'll reach out to your friend and help them get set up with Mercer Fuels.
                </p>
              </Card>

              {/* Step 3 */}
              <Card className="p-8 text-center hover-elevate">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-chart-2">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">You Both Get $100</h3>
                <p className="text-muted-foreground">
                  After their first delivery, we'll credit $100 to both your accounts.
                </p>
              </Card>
            </div>

            {/* Why Refer Section */}
            <div className="bg-muted/30 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Why Your Friends Will Love Mercer Fuels
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Local Family Business</h4>
                    <p className="text-sm text-muted-foreground">
                      50+ years serving Cape Breton with personal service you can trust
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Competitive Pricing</h4>
                    <p className="text-sm text-muted-foreground">
                      Daily price checks to ensure you're getting the best value
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Automatic Delivery</h4>
                    <p className="text-sm text-muted-foreground">
                      Never worry about running out - we monitor and deliver when you need it
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">200+ 5-Star Reviews</h4>
                    <p className="text-sm text-muted-foreground">
                      Cape Breton families trust us for reliable heating oil delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* JotForm Section */}
            <div id="referral-form" className="bg-muted/30 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Refer Your Friend
              </h2>
              
              <div className="bg-background rounded-xl p-4">
                <iframe
                  id="JotFormIFrame-252306932154049"
                  title="Mercer Fuels - Refer a Friend Form"
                  onLoad={(e) => {
                    const iframe = e.currentTarget;
                    window.parent.scrollTo(0, 0);
                  }}
                  allowTransparency={true}
                  allow="geolocation; microphone; camera; fullscreen; payment"
                  src="https://form.jotform.com/252306932154049"
                  style={{
                    minWidth: '100%',
                    maxWidth: '100%',
                    height: '539px',
                    border: 'none',
                  }}
                  scrolling="no"
                  data-testid="jotform-refer-friend"
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Questions about the referral program? Call us at <a href="tel:9025394242" className="text-primary hover:underline font-semibold">(902) 539-4242</a>
              </p>
              <p className="text-sm text-muted-foreground">
                Thank you for being a valued Mercer Fuels customer and helping us grow our local family business!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
