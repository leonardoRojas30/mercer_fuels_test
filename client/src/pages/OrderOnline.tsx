import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, CheckCircle, AlertCircle, Clock, Shield } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSection from "@/components/shared/PageSection";
import SEOHead from "@/components/SEOHead";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function OrderOnline() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-201254386933053']", "https://form.jotform.com/");
      }
    };

    // Listen for JotForm submission messages
    const handleMessage = (event: MessageEvent) => {
      // Debug: Log all messages to see what JotForm sends
      console.log('Received postMessage:', {
        origin: event.origin,
        data: event.data,
        type: typeof event.data
      });

      // Verify the message is from JotForm
      if (event.origin && !event.origin.includes('jotform.com')) {
        console.log('Message rejected - not from JotForm');
        return;
      }

      // JotForm sends messages when form is submitted
      if (event.data && typeof event.data === 'string') {
        console.log('String message from JotForm:', event.data);
        // JotForm sends "submission-completed" message on successful submission
        if (event.data.includes('submission') || event.data.includes('success') || event.data.includes('thank')) {
          console.log('Redirect triggered!');
          // Redirect to thank you page
          setLocation('/thanks');
        }
      }

      // Also check for object messages
      if (event.data && typeof event.data === 'object') {
        console.log('Object message from JotForm:', event.data);
        // Try to parse if it contains submission info
        if (event.data.action === 'submission-completed' || event.data.type === 'form:submit') {
          console.log('Redirect triggered from object message!');
          setLocation('/thanks');
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleMessage);
    };
  }, [setLocation]);

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Order Heating Oil Online - Mercer Fuels | Fast Sydney Delivery"
        description="Existing customers can place heating oil orders online for quick delivery in Sydney, Glace Bay, and Cape Breton. Same-day delivery available for emergency orders."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-0"></div>
          
          <div className="relative z-10 container mx-auto px-6 py-12">
            <div className="w-full text-center text-white">
              <div className="text-lg font-medium text-chart-2 mb-2">We're Local, We're Better</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Order <span className="text-chart-2">Heating Oil</span> Online
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
                Fast, reliable delivery to your home. Same-day service available for our valued customers.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-3 md:px-4 md:py-4 border border-white/20 max-w-2xl mx-auto">
                <div className="grid grid-cols-3 text-center">
                  <div className="space-y-0.5 px-3 md:px-4 border-r border-white/30">
                    <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">Same-Day</div>
                    <div className="text-xs md:text-sm leading-snug">Delivery Available</div>
                  </div>
                  <div className="space-y-0.5 px-3 md:px-4 border-r border-white/30">
                    <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">24/7</div>
                    <div className="text-xs md:text-sm leading-snug">Emergency Service</div>
                  </div>
                  <div className="space-y-0.5 px-3 md:px-4">
                    <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">50+</div>
                    <div className="text-xs md:text-sm leading-snug">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageSection background="muted">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* JotForm Iframe */}
          <div className="lg:col-span-2">
            <Card className="hover-elevate transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-chart-2/10 to-transparent">
                <CardTitle className="text-2xl font-bold mb-2">Place Your Oil Order</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <iframe
                  id="JotFormIFrame-201254386933053"
                  title="Mercer Fuels Online Ordering"
                  onLoad={() => window.parent.scrollTo(0,0)}
                  allow="geolocation; microphone; camera; fullscreen; payment"
                  src="https://form.jotform.com/mercerfuels/onlineordering"
                  style={{
                    minWidth: '100%',
                    maxWidth: '100%',
                    height: '539px',
                    border: 'none'
                  }}
                  scrolling="no"
                  data-testid="iframe-jotform-order"
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Service Features */}
            <Card className="hover-elevate transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 shadow-xl" data-testid="sidebar-card-features">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-chart-2 font-bold">
                  <Truck className="h-5 w-5" />
                  Why Order from Mercer?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-chart-2 text-sm">Same-Day Available</p>
                      <p className="text-sm text-muted-foreground">Orders placed before 2pm may be delivered same day</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-chart-2 text-sm">Competitive Pricing</p>
                      <p className="text-sm text-muted-foreground">We maintain competitive rates with superior local service</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-chart-2 text-sm">Local Family Service</p>
                      <p className="text-sm text-muted-foreground">Three generations serving Cape Breton families</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New Customer Notice */}
            <Card className="hover-elevate transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 shadow-xl" data-testid="sidebar-card-newcustomer">
              <CardContent className="p-6">
                <div className="text-center">
                  <AlertCircle className="h-8 w-8 text-chart-2 mx-auto mb-3" />
                  <h3 className="font-bold text-chart-2 mb-2">New Customer?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You can fill out this form to order online. Or if you'd like a consultation first, click below.
                  </p>
                  <Button asChild className="w-full shadow-lg transition-all" variant="outline" data-testid="button-new-customer-link">
                    <Link href="/schedule-consultation">Schedule Consultation</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
}

declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, url: string) => void;
  }
}
