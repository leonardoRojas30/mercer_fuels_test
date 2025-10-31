import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Users, Award, CheckCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function ScheduleConsultation() {
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
        pageContext: "Schedule Consultation",
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

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Free Expert Consultation | Mercer Fuels Cape Breton</title>
        <meta name="description" content="Free expert heating oil consultation in Cape Breton. Discuss heating needs, budget options, automatic delivery. No obligation. Call (902) 539-4242." />
        <meta name="keywords" content="heating oil consultation Cape Breton, expert heating advice Sydney NS, free oil consultation, heating oil specialist, furnace expert Cape Breton, heating budget consultation" />
        <link rel="canonical" href="https://mercerfuels.com/schedule-consultation" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free Expert Heating Oil Consultation - Cape Breton" />
        <meta property="og:description" content="Get personalized heating oil advice from Cape Breton experts. Discuss budget options, automatic delivery, and furnace care. No obligation." />
        <meta property="og:url" content="https://mercerfuels.com/schedule-consultation" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Schedule Expert Heating Oil Consultation - Mercer Fuels" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Expert Heating Oil Consultation | Mercer Fuels" />
        <meta name="twitter:description" content="Get personalized heating oil advice from Cape Breton experts. No obligation consultation." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Schedule Consultation - Mercer Fuels" />
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
                    Talk to a Heating Expert
                  </h1>
                  <p className="text-xl text-white/90">
                    Three generations of Cape Breton expertise. Get personalized advice on automatic delivery, budget plans, and how we'll save you money vs. the big oil companies.
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
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-chart-2">Thousands</div>
                      <div className="text-sm">Of Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-chart-2">50+</div>
                      <div className="text-sm">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-chart-2">3rd</div>
                      <div className="text-sm">Generation Family</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expert Consultation Form */}
              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Get Your Free Expert Consultation</CardTitle>
                  <p className="text-center text-muted-foreground">
                    Fill out this simple form and we'll call you within 24 hours with personalized heating advice.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8 space-y-4" data-testid="success-message">
                      <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                      <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                      <p className="text-gray-600">
                        We've received your request and will call you within 24 hours to discuss your heating needs and provide expert advice.
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
                        data-testid="input-consultation-first-name"
                      />
                      <Input
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                        data-testid="input-consultation-last-name"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        data-testid="input-consultation-email"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                        data-testid="input-consultation-phone"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-semibold py-3"
                      data-testid="button-schedule-consultation"
                    >
                      Schedule My Free Consultation
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      We'll call within 24 hours • No pressure, just expert advice
                    </p>
                  </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Expert Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-chart-2/10 text-chart-2 mb-4">Expert Consultation</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What to Expect from Your Call
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our heating expert will work with you to create a plan that saves money, ensures comfort, and gives you peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="bg-chart-2/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Assessment</h3>
                <p className="text-muted-foreground">
                  We'll review your home's heating needs, current usage, and budget to create the perfect plan for your family.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="bg-chart-2/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold mb-2">Money-Saving Options</h3>
                <p className="text-muted-foreground">
                  Learn about automatic delivery, equal payment plans, and our competitive pricing with superior service.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="bg-chart-2/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-chart-2" />
                </div>
                <h3 className="text-xl font-bold mb-2">Never Run Out Plan</h3>
                <p className="text-muted-foreground">
                  Set up our automatic delivery system so you'll never worry about running out of oil again. Guaranteed.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Immediate Contact Options */}
          <div className="bg-gradient-to-r from-chart-2/5 to-chart-2/10 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Need to Talk Right Now?</h3>
                <p className="text-muted-foreground mb-6">
                  If you have an urgent heating issue or just prefer to speak directly with our expert, call us now.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-chart-2" />
                    <div>
                      <div className="font-semibold">Sydney: <a href="tel:902-539-4242" className="text-chart-2 hover:underline">902-539-4242</a></div>
                      <div className="text-sm text-muted-foreground">24/7 Emergency Service</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-chart-2" />
                    <div>
                      <div className="font-semibold">Glace Bay: <a href="tel:902-849-2677" className="text-chart-2 hover:underline">902-849-2677</a></div>
                      <div className="text-sm text-muted-foreground">Local Service Office</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-3">Emergency Service?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Out of oil or no heat? Call immediately for same-day service.
                  </p>
                  <Button className="w-full bg-destructive hover:bg-destructive/90">
                    <a href="tel:902-539-4242" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call Emergency Line
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}