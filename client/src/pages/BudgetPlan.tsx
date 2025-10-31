import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, DollarSign, Calendar, TrendingDown, Shield, PiggyBank, CreditCard, Clock, BarChart, Calculator } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, url: string) => void;
  }
}

export default function BudgetPlan() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="for-form-embed-handler"]');
    
    if (existingScript) {
      // Script already exists, just initialize
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-211596548416261']", "https://form.jotform.com/");
      }
      return;
    }

    // Load the script
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-211596548416261']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      address: '',
      currentHeatingCosts: '',
      pageContext: 'Budget Plan Consultation'
    };

    try {
      await apiRequest('POST', '/api/budget-plan-leads', data);

      setIsSubmitted(true);
      toast({
        title: "Request Submitted!",
        description: "We'll contact you within 24 hours to discuss your budget plan options.",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please call us at (902) 539-4242.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Budget Plans - Equal Monthly Payments for Heating Oil | Mercer Fuels Cape Breton</title>
        <meta name="description" content="Avoid big winter heating bills with Mercer Fuels' Budget Plan. Equal monthly payments make heating oil affordable year-round in Cape Breton. Call (902) 539-4242 to get started." />
        <meta name="keywords" content="budget plan heating oil Cape Breton, equal monthly payments Sydney NS, heating oil payment plan, avoid big winter bills, affordable heating oil Glace Bay, budget heating oil delivery, monthly payment plan Nova Scotia" />
        <link rel="canonical" href="https://mercerfuels.com/budgetplan" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Budget Plans - Equal Monthly Payments for Heating Oil" />
        <meta property="og:description" content="Avoid big winter bills. Equal monthly payments make heating oil affordable year-round. Budget your heating costs just like your power bill." />
        <meta property="og:url" content="https://mercerfuels.com/budgetplan" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Budget Plans - Equal Monthly Payments for Heating Oil" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Budget Plans - Equal Monthly Payments for Heating Oil" />
        <meta name="twitter:description" content="Avoid big winter bills with equal monthly payments for heating oil. Budget your heating costs year-round." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Budget Plans - Equal Monthly Payments for Heating Oil" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Budget Plan - Equal Monthly Payment Program",
          "description": "Equal monthly payment plan for heating oil to help Cape Breton families budget their heating costs throughout the year",
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
          "serviceType": "Budget Plan Payment Program",
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
                  <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 mb-4" data-testid="badge-budget-friendly">
                    <PiggyBank className="w-4 h-4 mr-2" />
                    Budget-Friendly Heating
                  </Badge>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-testid="heading-main">
                    <span className="text-chart-2">Equal Monthly Payments</span> Make Heating Affordable
                  </h1>
                  <p className="text-lg md:text-xl text-white/90" data-testid="text-hero-description">
                    Avoid big winter bills! Spread your heating oil costs throughout the year with predictable monthly payments. Budget your heating just like your power bill.
                  </p>
                  <p className="text-base md:text-lg text-chart-2 pt-2" data-testid="text-promise">
                    ✓ Predictable monthly payments ✓ No surprise bills ✓ Budget with confidence
                  </p>
                </div>

                {/* Trust Stats */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-chart-2">50+</div>
                      <div className="text-sm">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-chart-2">Thousands</div>
                      <div className="text-sm">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-chart-2">200+</div>
                      <div className="text-sm">5-Star Reviews</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interest Form */}
              <Card id="hero-form" className="bg-white/95 backdrop-blur-sm mt-6 lg:mt-0 shadow-2xl border-0">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl md:text-2xl text-center font-bold">Get Started with Budget Plan</CardTitle>
                  <CardDescription className="text-center text-sm md:text-base leading-relaxed">
                    Talk to our team about equal monthly payments. <span className="font-medium text-foreground">Free consultation, no obligation.</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8 space-y-4" data-testid="success-message">
                      <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                      <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                      <p className="text-gray-600">
                        We've received your request and will call you within 24 hours to discuss budget plan options.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          name="firstName"
                          placeholder="First Name"
                          required
                          disabled={isLoading}
                          data-testid="input-hero-first-name"
                        />
                        <Input
                          name="lastName"
                          placeholder="Last Name"
                          required
                          disabled={isLoading}
                          data-testid="input-hero-last-name"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          placeholder="Email Address"
                          type="email"
                          required
                          disabled={isLoading}
                          data-testid="input-hero-email"
                        />
                      </div>
                      <div>
                        <Input
                          name="phone"
                          placeholder="Phone Number"
                          type="tel"
                          required
                          disabled={isLoading}
                          data-testid="input-hero-phone"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold py-4 text-base shadow-lg hover:shadow-xl transition-all"
                        disabled={isLoading}
                        data-testid="button-get-started"
                      >
                        {isLoading ? 'Submitting...' : 'Get Your Budget Plan Quote'}
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

      {/* How Budget Plan Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-how-it-works">
              How Our Budget Plan Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-how-it-works-intro">
              Simple, predictable, affordable. Here's how we help you budget your heating costs:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="step-review">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">1. Usage Review</h3>
              <p className="text-gray-700">We calculate based on your home size, number of people living in the home, hot water usage, and historical usage.</p>
            </div>

            <div className="text-center" data-testid="step-calculate">
              <div className="w-20 h-20 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-10 h-10 text-chart-2" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-chart-2">2. Monthly Amount</h3>
              <p className="text-gray-700">We divide your annual heating costs into equal monthly payments that fit your budget.</p>
            </div>

            <div className="text-center" data-testid="step-automatic">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">3. Automatic Payments</h3>
              <p className="text-gray-700">Set up automatic payments so you never have to worry about large bills or late payments.</p>
            </div>

            <div className="text-center" data-testid="step-year-end">
              <div className="w-20 h-20 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-10 h-10 text-chart-2" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-chart-2">4. Year-End Balance</h3>
              <p className="text-gray-700">At year-end, any credit or small balance is settled - no surprise bills in winter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Form */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg" data-testid="card-setup-form">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900" data-testid="heading-setup-form">
                  Sign Up for Budget Plan Online
                </CardTitle>
                <CardDescription className="text-lg" data-testid="text-form-description">
                  Fill out the form below to set up your equal monthly payment plan today.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <iframe
                  id="JotFormIFrame-211596548416261"
                  title="Mercer Fuels - Budget Plan Sign Up"
                  onLoad={() => window.parent.scrollTo(0,0)}
                  allow="geolocation; microphone; camera; fullscreen; payment"
                  src="https://form.jotform.com/211596548416261"
                  frameBorder="0"
                  style={{minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none'}}
                  scrolling="no"
                  data-testid="iframe-budget-plan-signup"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits of Budget Plan */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-benefits">
              Why Cape Breton Families Love Budget Plans
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-benefits-intro">
              Take control of your heating costs with predictable monthly payments:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate" data-testid="card-no-surprises">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">No Surprise Bills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Say goodbye to sticker shock in January and February. Your payment stays the same every month, making it easy to budget for your family's heating.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-easier-budgeting">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <PiggyBank className="w-8 h-8 text-chart-2" />
                  <CardTitle className="text-xl">Easier Budgeting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Budget your heating costs just like your power bill. Predictable monthly payments mean you always know what's coming and can plan accordingly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-spread-costs">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">Spread Out Costs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Instead of big bills during winter months, your annual heating costs are spread evenly throughout the entire year.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-automatic">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-8 h-8 text-chart-2" />
                  <CardTitle className="text-xl">Automatic Payments</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Set it and forget it. Automatic payments mean you'll never miss a payment or worry about writing checks every month.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-peace-of-mind">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">Peace of Mind</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Never worry about how you'll afford heating oil during the coldest months. Your budget plan ensures your family stays warm and comfortable.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-local-service">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-chart-2" />
                  <CardTitle className="text-xl">Local Flexibility</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Work with a local company that understands Cape Breton families. We're flexible and willing to adjust your plan if your circumstances change.
                </CardDescription>
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
                Ready to <span className="text-chart-2">Take Control</span> of Your Heating Costs?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Join hundreds of Cape Breton families who budget their heating costs with equal monthly payments
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
                  <a href="#hero-form">Get Your Quote</a>
                </Button>
              </div>
              <p className="mt-6 text-chart-2 font-medium">
                ✓ 50+ years of reliable service ✓ Local Cape Breton family business ✓ Flexible payment options
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
