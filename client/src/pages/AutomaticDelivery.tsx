import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Shield, Clock, Users, Award, MapPin, Truck, Battery, Gauge, Calendar, Bell } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, url: string) => void;
  }
}

export default function AutomaticDelivery() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="for-form-embed-handler"]');
    
    if (existingScript) {
      // Script already exists, just initialize
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-201583206708251-bottom']", "https://form.jotform.com/");
      }
      return;
    }

    // Load the script
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-201583206708251-bottom']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Never Run Out Again - Automatic Heating Oil Delivery Cape Breton | Mercer Fuels</title>
        <meta name="description" content="Never worry about running out of heating oil again! Automatic delivery service with tank monitoring across Cape Breton. Set it and forget it - we monitor your usage and deliver before you run out. Call (902) 539-4242." />
        <meta name="keywords" content="automatic heating oil delivery Cape Breton, tank monitoring Sydney Nova Scotia, scheduled oil delivery, never run out heating oil, automatic delivery service Glace Bay, heating oil monitoring system, worry-free heating oil Cape Breton" />
        <link rel="canonical" href="https://mercerfuels.com/automatic" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Never Run Out Again - Automatic Heating Oil Delivery Cape Breton" />
        <meta property="og:description" content="Automatic heating oil delivery with tank monitoring. Set it and forget it - we deliver before you run out. Peace of mind heating service." />
        <meta property="og:url" content="https://mercerfuels.com/automatic" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Automatic Heating Oil Delivery Cape Breton - Never Run Out Again" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Never Run Out Again - Automatic Heating Oil Delivery Cape Breton" />
        <meta name="twitter:description" content="Automatic heating oil delivery with tank monitoring. Set it and forget it - we deliver before you run out. Peace of mind heating service." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Automatic Heating Oil Delivery Cape Breton" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Automatic Heating Oil Delivery with Tank Monitoring",
          "description": "Automatic heating oil delivery service with tank monitoring to ensure customers never run out of heating oil",
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
          },
          "serviceType": "Automatic Heating Oil Delivery",
          "availableChannel": {
            "@type": "ServiceChannel",
            "servicePhone": "+1-902-539-4242",
            "availableLanguage": "English"
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
            <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
              {/* Hero Content */}
              <div className="text-white space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 mb-4" data-testid="badge-peace-of-mind">
                    <Battery className="w-4 h-4 mr-2" />
                    Peace of Mind Service
                  </Badge>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-testid="heading-main">
                    <span className="text-chart-2">Never Run Out</span> of Heating Oil Again
                  </h1>
                  <p className="text-lg md:text-xl text-white/90" data-testid="text-hero-description">
                    Set it and forget it! Our automatic delivery service monitors your tank and delivers heating oil before you run out. 50+ years of keeping Cape Breton families worry-free.
                  </p>
                  <p className="text-base md:text-lg text-chart-2 pt-2" data-testid="text-promise">
                    ✓ We monitor your usage ✓ Automatic deliveries ✓ Never run out again
                  </p>
                </div>
              </div>

              {/* Interest Form */}
              <Card id="hero-form" className="bg-white/95 backdrop-blur-sm mt-6 lg:mt-0 shadow-2xl border-0">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl md:text-2xl text-center font-bold">Get Started with Automatic Delivery</CardTitle>
                  <CardDescription className="text-center text-sm md:text-base leading-relaxed">
                    Join hundreds of Cape Breton families who never worry about running out. <span className="font-medium text-foreground">Free setup, no pressure.</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8 space-y-4" data-testid="success-message">
                      <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                      <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                      <p className="text-gray-600">
                        We've received your request and will call you within 24 hours to set up your automatic delivery service.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const data = {
                        firstName: formData.get('firstName') as string,
                        lastName: formData.get('lastName') as string,
                        email: formData.get('email') as string,
                        phone: formData.get('phone') as string,
                        pageContext: 'Automatic Delivery Interest'
                      };
                      
                      try {
                        const response = await fetch('/api/automatic-delivery-leads', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(data)
                        });

                        if (response.ok) {
                          setIsSubmitted(true);
                        } else {
                          console.error('Error submitting form:', response.statusText);
                          setIsSubmitted(true);
                        }
                      } catch (error) {
                        console.error('Error submitting form:', error);
                        setIsSubmitted(true);
                      }
                    }} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          name="firstName"
                          placeholder="First Name"
                          required
                          data-testid="input-hero-first-name"
                        />
                        <Input
                          name="lastName"
                          placeholder="Last Name"
                          required
                          data-testid="input-hero-last-name"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          placeholder="Email Address"
                          type="email"
                          required
                          data-testid="input-hero-email"
                        />
                      </div>
                      <div>
                        <Input
                          name="phone"
                          placeholder="Phone Number"
                          type="tel"
                          required
                          data-testid="input-hero-phone"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold py-4 text-base shadow-lg hover:shadow-xl transition-all"
                        data-testid="button-setup-automatic"
                      >
                        Get Started with Automatic Delivery
                      </Button>
                      <p className="text-xs text-center text-muted-foreground leading-relaxed">
                        ✓ We'll call within 24 hours<br/>✓ No pressure, just expert advice<br/>✓ Local Cape Breton team
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How Automatic Delivery Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-how-it-works">
              How Our Automatic Delivery Service Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-how-it-works-intro">
              Simple, reliable, worry-free. Here's exactly how we ensure you never run out of heating oil:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Steps */}
            <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center" data-testid="step-setup">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-800">1. Initial Setup</h3>
              <p className="text-gray-700">One of our heating experts will call to discuss your heating system, home size, typical usage patterns, and create your personal delivery schedule.</p>
            </div>

            <div className="text-center" data-testid="step-monitoring">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-800">2. Usage Monitoring</h3>
              <p className="text-gray-700">We track your heating oil consumption based on weather patterns, your home's usage, and seasonal variations. Smart monitoring that learns.</p>
            </div>

            <div className="text-center" data-testid="step-automatic-delivery">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-800">3. Automatic Delivery</h3>
              <p className="text-gray-700">We deliver heating oil when your tank reaches between 1/4 and 1/2 - before you ever need to worry. Scheduled around your preferences and weather forecasts.</p>
            </div>

            <div className="text-center" data-testid="step-notification">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-800">4. Seamless Service</h3>
              <p className="text-gray-700">We handle everything automatically - you'll only know we were there when you see your filled tank.</p>
            </div>
          </div>

          {/* YouTube Video */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/2lsfKlb4jWk?si=6yFsmXGH4U0dVp-z" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Benefits of Automatic Delivery */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-benefits">
              Why Cape Breton Families Choose Automatic Delivery
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-benefits-intro">
              More than convenience - it's peace of mind for your family's comfort and safety:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate" data-testid="card-never-run-out">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl">Never Run Out Again</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No more cold mornings, emergency calls, or panicking about empty tanks. We deliver when your tank reaches between 1/4 and 1/2, ensuring continuous heat for your family.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-save-money">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl">Save Money</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Automatic customers get priority pricing and avoid emergency delivery charges. Scheduled deliveries are more efficient and cost-effective than last-minute calls.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-weather-planning">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl">Weather-Smart Planning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We monitor Cape Breton weather forecasts and deliver before storms hit. Your tank stays full when you need heating oil most - during winter weather.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-personal-service">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl">Personal Service</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Unlike corporate oil companies, we know your family's heating needs personally. Customized delivery schedules that work with your lifestyle and preferences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-tank-monitoring">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Gauge className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl">Tank Health Monitoring</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our delivery team checks your tank, gauges, and heating system during each visit. We catch potential problems before they become expensive emergencies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-local-reliability">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl">Local Reliability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  50+ years serving Cape Breton families. Our local knowledge of weather patterns, road conditions, and community needs ensures reliable service year-round.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-success-stories">
              Real Cape Breton Families Love Automatic Delivery
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-success-stories-intro">
              Here's what our automatic delivery customers are saying about the peace of mind it brings:
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            <Card className="hover-elevate" data-testid="card-story-1">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-green-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg">
                  "Having been getting fuel from Mercer's for over 30 years with never a problem. Customer service is A1 and automatic delivery leaves me with no worries about forgetting to order oil!!!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Marianne G.</p>
                  <p className="text-sm text-gray-600">Cape Breton - Customer for 30+ years</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-story-2">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-green-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg">
                  "Mercer's fuels has wonderful and friendly customer service, easy payment options and reliable automatic delivery.....they give a little extra to show appreciation to their clients."
                </p>
                <p className="text-gray-700 mb-4 italic text-lg">
                  "They are great to talk to (no matter who I've reached at the office) and great to make arrangements with....they accommodated without an issue and made it easy. I have had my oil delivered on-time with automatic delivery and they seem to be right on target with fill ups. I look forward to years of service with Mercer's and I hope their level of service remains. I would recommend Mercer's to anybody."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Ashley O.</p>
                  <p className="text-sm text-gray-600">Cape Breton - New Customer</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div 
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-0"></div>
          
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-chart-2">Never Run Out</span> Again?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Join hundreds of Cape Breton families who enjoy worry-free heating with automatic delivery
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-chart-2 hover:bg-chart-2/90 text-white font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                  data-testid="button-cta-call"
                >
                  <a href="tel:902-539-4242">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (902) 539-4242
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 backdrop-blur-sm transition-all"
                  data-testid="button-cta-scroll"
                >
                  <a href="#hero-form">Get Started Online</a>
                </Button>
              </div>
              <p className="mt-6 text-chart-2 font-medium">
                ✓ 50+ years of reliable service ✓ Local Cape Breton family business ✓ Never run out guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automatic vs Manual Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-comparison">
              Automatic Delivery vs. Call In Ordering
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-comparison-intro">
              See why thousands of Cape Breton families have switched to worry-free automatic delivery:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Call In Ordering */}
            <Card className="border-gray-200 bg-gray-50" data-testid="card-manual-ordering">
              <CardHeader className="text-center bg-gray-100">
                <CardTitle className="text-2xl text-gray-800">Call In Ordering</CardTitle>
                <CardDescription className="text-gray-700">The old way of getting heating oil</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Constant Worry</h4>
                      <p className="text-gray-700 text-sm">Always checking the tank gauge, especially during cold snaps. Stress about running out at the worst possible time.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Emergency Situations</h4>
                      <p className="text-gray-700 text-sm">Risk of running out completely. Emergency deliveries cost more and may not be available during storms.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Inconvenient Timing</h4>
                      <p className="text-gray-700 text-sm">Making calls during business hours, waiting for delivery slots, working around your schedule instead of theirs.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Higher Costs</h4>
                      <p className="text-gray-700 text-sm">Emergency delivery charges, last-minute pricing, and the cost of heating system damage from running dry.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Weather Problems</h4>
                      <p className="text-gray-700 text-sm">Getting caught with low oil when storms hit. Delivery trucks can't get through, and you're left cold.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Automatic Delivery */}
            <Card className="border-green-200 bg-green-50" data-testid="card-automatic-delivery">
              <CardHeader className="text-center bg-green-100">
                <CardTitle className="text-2xl text-green-800">Automatic Delivery</CardTitle>
                <CardDescription className="text-green-700">The worry-free way to stay warm</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Complete Peace of Mind</h4>
                      <p className="text-green-700 text-sm">Never think about heating oil levels again. We monitor everything and keep your tank full automatically.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Never Run Out</h4>
                      <p className="text-green-700 text-sm">We deliver when you reach 1/4 full, so there's never a risk of running dry or damaging your heating system.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Perfect Timing</h4>
                      <p className="text-green-700 text-sm">Deliveries scheduled around your preferences and life. No more interrupting your day to arrange heating oil.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Better Pricing</h4>
                      <p className="text-green-700 text-sm">Automatic customers get priority pricing and avoid emergency charges. Scheduled deliveries are more cost-effective.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Weather-Smart Service</h4>
                      <p className="text-green-700 text-sm">We monitor forecasts and deliver before storms. Your tank is always full when Cape Breton weather gets rough.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Setup Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg" data-testid="card-setup-form">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900" data-testid="heading-setup-form">
                  Set Up Your Automatic Delivery Service
                </CardTitle>
                <CardDescription className="text-lg" data-testid="text-form-description">
                  Talk to our heating experts about automatic delivery. We'll create a custom schedule that works perfectly for your home and family.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <iframe
                  id="JotFormIFrame-201583206708251-bottom"
                  title="Mercer Fuels - Automatic Delivery Sign Up"
                  onLoad={() => window.parent.scrollTo(0,0)}
                  allow="geolocation; microphone; camera; fullscreen; payment"
                  src="https://form.jotform.com/201583206708251"
                  frameBorder="0"
                  style={{minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none'}}
                  scrolling="no"
                  data-testid="iframe-automatic-delivery-bottom-form"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}