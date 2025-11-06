import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, MapPin, Clock, CheckCircle, Shield } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function PayBill() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-201264019758254']", "https://pci.jotform.com/");
      }
    };

    // Listen for JotForm submission messages
    const handleMessage = (event: MessageEvent) => {
      // Verify the message is from JotForm
      if (event.origin && !event.origin.includes('jotform.com')) {
        return;
      }

      // JotForm sends messages when form is submitted
      if (event.data && typeof event.data === 'string') {
        // JotForm sends "submission-completed" message on successful submission
        if (event.data.includes('submission') || event.data.includes('success') || event.data.includes('thank')) {
          // Redirect to thank you page
          setLocation('/thanks');
        }
      }

      // Also check for object messages
      if (event.data && typeof event.data === 'object') {
        // Try to parse if it contains submission info
        if (event.data.action === 'submission-completed' || event.data.type === 'form:submit') {
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
        title="Pay Your Bill Online - Mercer Fuels | Secure Payment Portal"
        description="Pay your heating oil bill online securely. Multiple payment options available for Mercer Fuels customers in Sydney and Cape Breton."
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
                Pay Your <span className="text-chart-2">Bill</span> Securely
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
                Quick and secure payment for our valued Cape Breton customers. Multiple payment options available for your convenience.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-3 md:px-4 md:py-4 border border-white/20 max-w-2xl mx-auto">
                <div className="grid grid-cols-3 text-center">
                  <div className="space-y-0.5 px-3 md:px-4 border-r border-white/30">
                    <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">Secure</div>
                    <div className="text-xs md:text-sm leading-snug">Encrypted Payments</div>
                  </div>
                  <div className="space-y-0.5 px-3 md:px-4 border-r border-white/30">
                    <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">Multiple</div>
                    <div className="text-xs md:text-sm leading-snug">Payment Methods</div>
                  </div>
                  <div className="space-y-0.5 px-3 md:px-4">
                    <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">24/7</div>
                    <div className="text-xs md:text-sm leading-snug">Online Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* JotForm Payment Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-chart-2/5 to-transparent">
                  <CardTitle className="text-2xl text-chart-2 mb-2">Make Your Payment</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <iframe
                    id="JotFormIFrame-201264019758254"
                    title="Mercer Fuels Bill Payment"
                    onLoad={() => window.parent.scrollTo(0,0)}
                    allow="geolocation; microphone; camera; fullscreen; payment"
                    src="https://pci.jotform.com/form/201264019758254"
                    style={{
                      minWidth: '100%',
                      maxWidth: '100%',
                      height: '539px',
                      border: 'none'
                    }}
                    scrolling="no"
                    data-testid="iframe-jotform-payment"
                  />
                  <div className="text-center text-sm text-gray-600 mt-4">
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>Your payment information is secure and encrypted</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Payment Options */}
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-chart-2/10 to-transparent">
                  <CardTitle className="flex items-center gap-2 text-chart-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-chart-2 text-sm">Multiple Payment Options</p>
                        <p className="text-sm text-gray-600">Credit card, debit, bank transfer, or in-person</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-chart-2 text-sm">Equal Monthly Payments</p>
                        <p className="text-sm text-gray-600">Spread your costs over 12 months</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-chart-2 text-sm">Auto-Pay Available</p>
                        <p className="text-sm text-gray-600">Never miss a payment again</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Locations */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-chart-2">
                    <MapPin className="h-5 w-5" />
                    Local Payment Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-chart-2 mb-1">Sydney Office</p>
                      <p className="text-sm text-gray-600 mb-2">Pay in person or drop off payment</p>
                      <p className="text-sm font-medium flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        Mon-Fri: 8am - 5pm
                      </p>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-semibold text-chart-2 mb-1">Glace Bay Payment Center</p>
                      <p className="text-sm text-gray-600 mb-2">Convenient drop-off location</p>
                      <p className="text-sm font-medium flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        24/7 Payment Drop Box
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact for Help */}
              <Card className="shadow-lg border-chart-2/20">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="font-bold text-chart-2 mb-2">Need Help?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Having trouble with your payment? Our local team is here to help.
                    </p>
                    <div className="space-y-2">
                      <Button asChild className="w-full bg-chart-2 hover:bg-chart-2/90">
                        <a href="tel:902-539-4242">Call Sydney: 902-539-4242</a>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <a href="tel:902-849-2677">Call Glace Bay: 902-849-2677</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, url: string) => void;
  }
}