import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CheckCircle, Phone, Users, Heart, Truck, Clock, Shield, TrendingDown, Award, Zap } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function NewCustomersWelcomed() {
  const [consultationFormData, setConsultationFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [isConsultationSubmitted, setIsConsultationSubmitted] = useState(false);

  const consultationMutation = useMutation({
    mutationFn: async (data: typeof consultationFormData) => {
      const leadData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: "Not provided",
        pageContext: "New Customers Welcomed - Schedule Consultation",
        additionalInfo: null
      };
      const response = await apiRequest("POST", "/api/leads", leadData);
      return response.json();
    },
    onSuccess: () => {
      setIsConsultationSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ['/api/leads'] });
    }
  });

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    consultationMutation.mutate(consultationFormData);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>New Customers Welcomed - Join Mercer Fuels Family | Cape Breton Heating Oil</title>
        <meta name="description" content="We're accepting new customers! Join Cape Breton's trusted family heating oil company. 50+ years of reliable service, competitive pricing, automatic delivery, and 24/7 support. Make the switch today!" />
        <meta name="keywords" content="accepting new customers heating oil Cape Breton, new heating oil customers Sydney, join Mercer Fuels, switch heating oil provider Nova Scotia, family heating oil company Cape Breton, new customer heating oil Sydney" />
        <link rel="canonical" href="https://mercerfuels.com/new-customers-welcomed" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="New Customers Welcomed - Join Mercer Fuels Family | Cape Breton" />
        <meta property="og:description" content="We're accepting new customers! Join Cape Breton's trusted family heating oil company with 50+ years of service. Competitive pricing and reliable delivery." />
        <meta property="og:url" content="https://mercerfuels.com/new-customers-welcomed" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mercer Fuels - New Customers Welcomed" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New Customers Welcomed - Join Mercer Fuels Family | Cape Breton" />
        <meta name="twitter:description" content="We're accepting new customers! Join Cape Breton's trusted family heating oil company with 50+ years of service." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="New Customers Welcomed - Mercer Fuels" />
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
          
          <div className="relative z-10 container mx-auto px-4 lg:px-6 flex items-center justify-center min-h-[600px] py-20">
            <div className="text-center text-white space-y-6 max-w-4xl">
              <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-base px-6 py-2 mb-2" data-testid="badge-accepting-customers">
                <Heart className="w-4 h-4 mr-2 inline" />
                We're Accepting New Customers!
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" data-testid="heading-main">
                Join the <span className="text-chart-2">Mercer Fuels Family</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-description">
                Three generations of Cape Breton families trust us for reliable heating oil service. Now it's your turn.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  asChild
                  size="lg"
                  variant="default"
                  className="font-bold shadow-lg"
                  data-testid="button-become-customer-hero"
                >
                  <Link href="/become-a-customer">
                    <Users className="w-5 h-5 mr-2" />
                    Become A Customer Today
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white font-bold"
                  data-testid="button-call-now"
                >
                  <a href="tel:902-539-4242">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (902) 539-4242
                  </a>
                </Button>
              </div>

              <p className="text-lg text-white/80 pt-2" data-testid="text-no-commitment">
                No commitment required • Free consultation • Same-day service available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-chart-2/10">
                  <Users className="h-8 w-8 text-chart-2" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-primary">Thousands</h3>
              <p className="text-muted-foreground">Of satisfied Cape Breton families served</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-chart-2/10">
                  <Award className="h-8 w-8 text-chart-2" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-primary">50+ Years</h3>
              <p className="text-muted-foreground">Three generations of trusted local service</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-chart-2/10">
                  <Clock className="h-8 w-8 text-chart-2" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-primary">24/7 Support</h3>
              <p className="text-muted-foreground">Real people answer when you need help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-why-join">
              Why Cape Breton Families Choose Mercer Fuels
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just accepting new customers — we're building lasting relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Reason 1 */}
            <Card className="p-8 hover-elevate transition-all bg-white" data-testid="card-reason-0">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-chart-2/10 mb-4">
                  <Shield className="h-12 w-12 text-chart-2" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Never Run Out</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-center">
                  Our automatic delivery customers never run out of oil. We monitor your usage and deliver before you need it — guaranteed.
                </p>
              </div>
            </Card>

            {/* Reason 2 */}
            <Card className="p-8 hover-elevate transition-all bg-white" data-testid="card-reason-1">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-chart-2/10 mb-4">
                  <TrendingDown className="h-12 w-12 text-chart-2" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Competitive Pricing</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-center">
                  We check our prices daily against all competitors. Supporting local doesn't mean spending more!
                </p>
              </div>
            </Card>

            {/* Reason 3 */}
            <Card className="p-8 hover-elevate transition-all bg-white" data-testid="card-reason-2">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-chart-2/10 mb-4">
                  <Heart className="h-12 w-12 text-chart-2" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Family Owned</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-center">
                  Three generations serving Cape Breton. When you call, you talk to local people who care about our community.
                </p>
              </div>
            </Card>

            {/* Reason 4 */}
            <Card className="p-8 hover-elevate transition-all bg-white" data-testid="card-reason-3">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-chart-2/10 mb-4">
                  <Truck className="h-12 w-12 text-chart-2" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Fast Delivery</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-center">
                  Same-day and next-day delivery available in most areas. Need oil fast? We've got you covered.
                </p>
              </div>
            </Card>

            {/* Reason 5 */}
            <Card className="p-8 hover-elevate transition-all bg-white" data-testid="card-reason-4">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-chart-2/10 mb-4">
                  <Zap className="h-12 w-12 text-chart-2" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Budget Friendly</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-center">
                  Equal monthly payment plans available. Budget your heating costs just like your power bill.
                </p>
              </div>
            </Card>

            {/* Reason 6 */}
            <Card className="p-8 hover-elevate transition-all bg-white" data-testid="card-reason-5">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-chart-2/10 mb-4">
                  <Phone className="h-12 w-12 text-chart-2" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Real People 24/7</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-center">
                  Heating emergency at 2am? Call and speak to a real person. No voicemail, no bots — just help.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-what-you-get">
                What You Get As A New Customer
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need for worry-free heating
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-chart-2/10">
                    <CheckCircle className="h-6 w-6 text-chart-2" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Free Consultation</h3>
                  <p className="text-muted-foreground">We'll help you choose the right delivery plan for your home and usage</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-chart-2/10">
                    <CheckCircle className="h-6 w-6 text-chart-2" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Automatic Delivery Option</h3>
                  <p className="text-muted-foreground">Never worry about running out — we monitor and deliver before you need it</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-chart-2/10">
                    <CheckCircle className="h-6 w-6 text-chart-2" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Text Reminders</h3>
                  <p className="text-muted-foreground">Get weather warnings, delivery reminders, and never forget to order again</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-chart-2/10">
                    <CheckCircle className="h-6 w-6 text-chart-2" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Budget Payment Plans</h3>
                  <p className="text-muted-foreground">Spread your heating costs over equal monthly payments</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-chart-2/10">
                    <CheckCircle className="h-6 w-6 text-chart-2" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">24/7 Emergency Service</h3>
                  <p className="text-muted-foreground">Real people answer your calls any time, day or night</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-chart-2/10">
                    <CheckCircle className="h-6 w-6 text-chart-2" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Local Service You Can Trust</h3>
                  <p className="text-muted-foreground">Supporting a Cape Breton family business that cares about our community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Consultation Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Schedule Your Free Expert Consultation</CardTitle>
                <p className="text-center text-muted-foreground">
                  Fill out this form and we'll call you within 24 hours with personalized heating advice.
                </p>
              </CardHeader>
              <CardContent>
                {isConsultationSubmitted ? (
                  <div className="text-center py-8 space-y-4" data-testid="consultation-success-message">
                    <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                    <p className="text-gray-600">
                      We've received your request and will call you within 24 hours to discuss your heating needs and provide expert advice.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleConsultationSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        value={consultationFormData.firstName}
                        onChange={(e) => setConsultationFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                        data-testid="input-consultation-first-name"
                      />
                      <Input
                        placeholder="Last Name"
                        value={consultationFormData.lastName}
                        onChange={(e) => setConsultationFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                        data-testid="input-consultation-last-name"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        value={consultationFormData.email}
                        onChange={(e) => setConsultationFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        data-testid="input-consultation-email"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Phone Number"
                        type="tel"
                        value={consultationFormData.phone}
                        onChange={(e) => setConsultationFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                        data-testid="input-consultation-phone"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="default"
                      className="w-full font-semibold"
                      disabled={consultationMutation.isPending}
                      data-testid="button-schedule-consultation"
                    >
                      {consultationMutation.isPending ? "Scheduling..." : "Schedule My Free Consultation"}
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
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-base px-4 py-1.5 mb-2">
              <Heart className="w-4 h-4 mr-2 inline" />
              Ready to Join?
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="heading-final-cta">
              We're Accepting New Customers Today
            </h2>
            
            <p className="text-xl text-white/90">
              Join thousands of satisfied Cape Breton families who trust Mercer Fuels for reliable, affordable heating oil service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild
                size="lg"
                variant="default"
                className="bg-chart-2 text-white font-bold shadow-lg border-0"
                data-testid="button-become-customer-bottom"
              >
                <Link href="/become-a-customer">
                  <Users className="w-5 h-5 mr-2" />
                  Become A Customer Now
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white font-bold"
                data-testid="button-call-bottom"
              >
                <a href="tel:902-539-4242">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (902) 539-4242
                </a>
              </Button>
            </div>

            <p className="text-white/80 pt-2">
              No pressure • No commitment • Just honest service from your Cape Breton neighbors
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
