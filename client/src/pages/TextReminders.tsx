import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Smartphone, CloudSnow, Wrench, Bell, MessageSquare } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function TextReminders() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Text Message Reminders - Never Run Out of Heating Oil | Mercer Fuels</title>
        <meta name="description" content="Get free text reminders to check your oil tank, weather warnings, and furnace cleaning alerts. Join hundreds of Cape Breton families staying warm all winter. Sign up today!" />
        <meta name="keywords" content="heating oil text reminders Cape Breton, oil tank check reminders, weather warning alerts Sydney NS, furnace cleaning reminders, heating oil alerts Glace Bay, text message service Cape Breton" />
        <link rel="canonical" href="https://mercerfuels.com/textreminders" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Text Message Reminders - Never Run Out of Heating Oil" />
        <meta property="og:description" content="Get free text reminders to check your oil tank, weather warnings, and furnace cleaning alerts. Join hundreds of Cape Breton families." />
        <meta property="og:url" content="https://mercerfuels.com/textreminders" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Text Message Reminders - Never Run Out of Heating Oil" />
        <meta name="twitter:description" content="Get free text reminders to check your oil tank, weather warnings, and furnace cleaning alerts." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Text Message Reminder Service",
          "description": "Free text message reminders for heating oil tank checks, weather warnings, and furnace maintenance",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Mercer Fuels",
            "telephone": "+1-902-539-4242",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sydney",
              "addressRegion": "Nova Scotia",
              "addressCountry": "CA"
            }
          },
          "areaServed": {
            "@type": "Place",
            "name": "Cape Breton, Nova Scotia"
          }
        })}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative min-h-[800px] md:min-h-[700px] lg:min-h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-0"></div>
          
          <div className="relative z-10 container mx-auto px-4 lg:px-6 flex items-start justify-center pt-[70px] pb-8 md:pt-28 md:pb-12 lg:pt-28 lg:justify-start lg:items-center">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center w-full max-w-6xl">
              {/* Hero Content */}
              <div className="text-white space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <div className="text-lg font-medium text-chart-2">Like a Personal Assistant for Your Home</div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-testid="text-hero-title">
                    <span className="text-chart-2">Free</span> Text Message Reminders
                  </h1>
                  <p className="text-lg md:text-xl text-white/90" data-testid="text-hero-description">
                    Join hundreds of Cape Breton families who get timely reminders to check their oil tank, weather alerts, and furnace maintenance notifications.
                  </p>
                  <p className="text-base md:text-lg text-chart-2 pt-2">
                    ✓ Tank check reminders ✓ Storm warnings ✓ Maintenance alerts
                  </p>
                </div>

                {/* Quick Benefits */}
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="text-center">
                    <Bell className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-1 md:mb-2 text-chart-2" />
                    <div className="text-xs md:text-sm font-medium">Never Run Out</div>
                  </div>
                  <div className="text-center">
                    <CloudSnow className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-1 md:mb-2 text-chart-2" />
                    <div className="text-xs md:text-sm font-medium">Storm Alerts</div>
                  </div>
                  <div className="text-center">
                    <Wrench className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-1 md:mb-2 text-chart-2" />
                    <div className="text-xs md:text-sm font-medium">Maintenance</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-chart-2 hover:bg-chart-2/90 text-white font-bold shadow-lg hover:shadow-xl transition-all"
                    data-testid="button-become-customer-hero"
                  >
                    <Link href="/become-a-customer">Become a Customer</Link>
                  </Button>
                  <Button 
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary font-bold transition-all"
                    data-testid="button-call-hero"
                  >
                    <a href="tel:902-539-4242">Give us a Call</a>
                  </Button>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
                  <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="bg-gray-100 px-6 py-3 flex justify-between items-center text-xs">
                      <span className="text-gray-600">9:41</span>
                    </div>
                    <div className="p-4 space-y-3 bg-gray-50 h-[calc(100%-48px)] overflow-hidden">
                      <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                        <div className="w-10 h-10 bg-chart-2 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-semibold text-gray-900">Mercer Fuels</div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-200 rounded-2xl rounded-tl-md px-3 py-2 max-w-[80%] shadow-sm">
                          <p className="text-sm text-gray-900 leading-snug">Hey there! Time to check your oil tank 🔔</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-200 rounded-2xl rounded-tl-md px-3 py-2 max-w-[80%] shadow-sm">
                          <p className="text-sm text-gray-900 leading-snug">If you need oil, order online at mercerfuels.com/orderonline</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-200 rounded-2xl rounded-tl-md px-3 py-2 max-w-[80%] shadow-sm">
                          <p className="text-sm text-gray-900 leading-snug">Thanks for choosing Mercer Fuels!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What You'll Receive Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What You'll Receive
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Free text alerts to keep you warm and save you money
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover-elevate transition-all duration-300 shadow-md hover:shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-4">
                    <Bell className="h-7 w-7 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-foreground">Tank Check Reminders</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Get reminded every 2-3 weeks to check your oil tank with an easy online ordering link
                  </p>
                  <div className="flex items-center gap-2 text-sm text-chart-2 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    <span>Never run out of oil again</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate transition-all duration-300 shadow-md hover:shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-4">
                    <CloudSnow className="h-7 w-7 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-foreground">Weather Warnings</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Get alerts about incoming storms and bad weather so you can prepare ahead
                  </p>
                  <div className="flex items-center gap-2 text-sm text-chart-2 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    <span>Stay ahead of Cape Breton weather</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate transition-all duration-300 shadow-md hover:shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-4">
                    <Wrench className="h-7 w-7 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-foreground">Furnace Cleaning Reminders</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Annual reminders to maintain your furnace and keep it running efficiently
                  </p>
                  <div className="flex items-center gap-2 text-sm text-chart-2 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    <span>Extend your furnace's life</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Helps Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Why Text Reminders Matter
              </h2>
              <p className="text-xl text-muted-foreground">
                Stay ahead and never worry about running out of oil
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="hover-elevate">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-chart-2/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-chart-2">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Check Your Tank in Seconds</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        A quick reminder text takes 30 seconds to check your tank. It's easier than remembering to do it yourself, and you'll never run out unexpectedly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-chart-2/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-chart-2">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Prepare for Cape Breton Storms</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We monitor the weather for you. When a storm is coming, you'll get a heads-up to make sure your family has enough oil to stay warm.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-elevate">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-chart-2/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-chart-2">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Maintain Your Furnace</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Annual furnace cleaning can save you hundreds in repair costs and extend your furnace's life by years. We'll remind you when it's time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground">
                Call us today to set up your free text reminder service
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate">
                <CardContent className="p-8 text-center">
                  <a href="tel:902-539-4242">
                    <div className="text-3xl font-bold text-chart-2 mb-2 hover:underline">
                      (902) 539-4242
                    </div>
                    <p className="text-muted-foreground">Sydney & Surrounding Areas</p>
                  </a>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardContent className="p-8 text-center">
                  <a href="tel:902-849-2677">
                    <div className="text-3xl font-bold text-chart-2 mb-2 hover:underline">
                      (902) 849-2677
                    </div>
                    <p className="text-muted-foreground">Glace Bay & Surrounding Areas</p>
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="pt-8">
              <Button 
                asChild
                size="lg" 
                className="bg-chart-2 hover:bg-chart-2/90 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                data-testid="button-become-customer-cta"
              >
                <Link href="/become-a-customer">Become a Customer Today</Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Join thousands of satisfied Cape Breton families
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
