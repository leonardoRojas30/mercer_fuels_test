import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Shield, Clock, Users, Award, DollarSign, Truck } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function BecomeCustomer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const leadMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const leadData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: "Not provided",
        pageContext: "Become Customer",
        additionalInfo: null
      };
      const response = await apiRequest("POST", "/api/leads", leadData);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ['/api/leads'] });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    leadMutation.mutate(formData);
  };

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script1.async = true;
    document.body.appendChild(script1);

    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.innerHTML = `window.jotformEmbedHandler("iframe[id='JotFormIFrame-201553824990257']", "https://form.jotform.com/")`;
      document.body.appendChild(script2);
    };

    return () => {
      document.body.removeChild(script1);
      const scripts = document.querySelectorAll('script[src*="jotfor"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Become a Customer | Mercer Fuels Cape Breton</title>
        <meta name="description" content="Join 2,000+ satisfied Cape Breton customers. Expert consultation, competitive pricing, automatic delivery, 24/7 service. Family-owned 50+ years." />
        <meta name="keywords" content="become heating oil customer Cape Breton, new customer Sydney NS, heating oil sign up Glace Bay, family heating company, automatic delivery signup, heating oil expert consultation" />
        <link rel="canonical" href="https://mercerfuels.com/become-a-customer" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Become a Customer - Join Cape Breton's Trusted Heating Oil Family" />
        <meta property="og:description" content="Join over 2,000 satisfied customers. Expert consultation, competitive pricing, and 24/7 service. Family-owned for 50+ years." />
        <meta property="og:url" content="https://mercerfuels.com/become-a-customer" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Become a Mercer Fuels Customer - Cape Breton Heating Oil" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Become a Customer | Mercer Fuels Cape Breton" />
        <meta name="twitter:description" content="Join over 2,000 satisfied customers. Expert consultation, competitive pricing, 24/7 service." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Become a Mercer Fuels Customer" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section - Matching Home Page */}
      <section className="relative">
        <div 
          className="relative min-h-[600px] md:min-h-[600px] lg:min-h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-0"></div>
          
          <div className="relative z-10 container mx-auto px-4 lg:px-6 flex items-center pt-[70px] pb-8 md:pt-28 md:pb-12 lg:pt-16 lg:justify-start lg:items-center">
            <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
              {/* Hero Content */}
              <div className="text-white space-y-6">
                <div className="space-y-2">
                  <div className="text-lg font-medium text-chart-2">We're Local, We're Better</div>
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Join Cape Breton's <span className="text-chart-2">Trusted</span> Oil Family
                  </h1>
                  <p className="text-xl text-white/90">
                    Three generations serving your neighbors. We'll take care of your family with competitive pricing, automatic delivery, and the guarantee you'll never run out.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                    <div className="text-sm font-medium">Never Run Out Guarantee</div>
                  </div>
                  <div className="text-center">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                    <div className="text-sm font-medium">24/7 Support</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                    <div className="text-sm font-medium">Local Family Business</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                    <div className="text-sm font-medium">Competitive Pricing</div>
                  </div>
                </div>

                {/* Trust Stats */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-3 md:px-4 md:py-4 border border-white/20 mt-6">
                  <div className="grid grid-cols-3 text-center">
                    <div className="space-y-0.5 px-3 md:px-4 border-r border-white/30">
                      <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">1000+</div>
                      <div className="text-xs md:text-sm leading-snug">Happy Customers</div>
                    </div>
                    <div className="space-y-0.5 px-3 md:px-4 border-r border-white/30">
                      <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">50+</div>
                      <div className="text-xs md:text-sm leading-snug">Years Experience</div>
                    </div>
                    <div className="space-y-0.5 px-3 md:px-4">
                      <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">3rd</div>
                      <div className="text-xs md:text-sm leading-snug">Generation Family</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expert Consultation Form */}
              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Talk to a Heating Expert</CardTitle>
                  <p className="text-center text-muted-foreground">
                    Get personalized service and competitive pricing with the quality and reliability you deserve.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8 space-y-4" data-testid="success-message">
                      <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                      <h3 className="text-xl font-bold text-gray-900">Welcome to the Family!</h3>
                      <p className="text-gray-600">
                        We've received your request and will call you within 24 hours to discuss how we can serve your family better than the big oil companies.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                        data-testid="input-become-customer-first-name"
                      />
                      <Input
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                        data-testid="input-become-customer-last-name"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        data-testid="input-become-customer-email"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                        data-testid="input-become-customer-phone"
                      />
                    </div>
                    <Button 
                      type="submit"
                      variant="default"
                      className="w-full font-semibold"
                      disabled={leadMutation.isPending}
                      data-testid="button-become-customer-submit"
                    >
                      {leadMutation.isPending ? "Submitting..." : "Talk to a Heating Expert"}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      We'll call within 24 hours • No pressure, just neighborly advice
                    </p>
                  </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Better */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-chart-2/10 text-chart-2 mb-4">Why Choose Mercer Fuels</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Quality Over Corporate
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From New Waterford to North Sydney, Cape Breton families choose us because we're neighbors who care about keeping your family warm.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="bg-chart-2/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold mb-2">Competitive Value</h3>
                <p className="text-muted-foreground">
                  We offer competitive pricing with superior local service that big oil companies simply can't match.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="bg-chart-2/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold mb-2">Never Run Out</h3>
                <p className="text-muted-foreground">
                  Our automatic delivery system monitors your usage and delivers before you run low. Guaranteed.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="bg-chart-2/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold mb-2">Real People</h3>
                <p className="text-muted-foreground">
                  Talk to locals who understand Cape Breton winters. No call centers - just neighbors helping neighbors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to Switch - Immediate Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="bg-gradient-to-r from-chart-2/5 to-chart-2/10 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-chart-2">Ready to Switch?</h3>
                <p className="text-muted-foreground mb-6">
                  Call us today and experience Cape Breton's most trusted heating oil company. Real people, competitive pricing, guaranteed service.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-chart-2" />
                    <span>Competitive pricing with superior service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-chart-2" />
                    <span>Automatic delivery - never run out again</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-chart-2" />
                    <span>Local family business since 1970</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-3 text-chart-2">Call Your Neighbors</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Sydney Office</p>
                      <Button asChild variant="default" className="w-full mb-2">
                        <a href="tel:902-539-4242" className="flex items-center justify-center gap-2">
                          <Phone className="h-4 w-4" />
                          902-539-4242
                        </a>
                      </Button>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Glace Bay Office</p>
                      <Button asChild className="w-full" variant="outline">
                        <a href="tel:902-849-2677" className="flex items-center justify-center gap-2">
                          <Phone className="h-4 w-4" />
                          902-849-2677
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Steps to Get Started */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-chart-2">
              Three Simple Steps to Better Oil Service
            </h2>
            <p className="text-xl text-muted-foreground">
              Getting started with Mercer Fuels is easy. Here's how we'll take care of your family.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-chart-2 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-chart-2">Talk to a Heating Expert</h3>
              <p className="text-muted-foreground">
                We'll discuss your heating needs, show you our pricing, and explain our automatic delivery system.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-chart-2 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-chart-2">Quick Setup</h3>
              <p className="text-muted-foreground">
                Simple paperwork, set up payment options, and we'll schedule your first delivery at your convenience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-chart-2 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-chart-2">Relax & Stay Warm</h3>
              <p className="text-muted-foreground">
                Automatic deliveries, competitive pricing, and 24/7 support. Your family will never run out of heat.
              </p>
            </div>
          </div>

          {/* JotForm Online Signup */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-6 text-chart-2">
              OR Sign up quickly and easily online
            </h3>
            <div className="max-w-4xl mx-auto">
              <iframe
                id="JotFormIFrame-201553824990257"
                title="Mercer Fuels - Customer Sign Up"
                onLoad={() => window.parent.scrollTo(0,0)}
                allow="geolocation; microphone; camera; fullscreen; payment"
                src="https://form.jotform.com/201553824990257"
                style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
                scrolling="no"
                data-testid="iframe-jotform-signup"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}