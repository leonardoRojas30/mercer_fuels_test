import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle, Phone, Shield, Wrench, DollarSign, Calendar, Award, ThermometerSnowflake } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

const insuranceFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  additionalInfo: z.string().optional(),
});

type InsuranceFormData = z.infer<typeof insuranceFormSchema>;

export default function FurnaceInsurance() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsuranceFormData>({
    resolver: zodResolver(insuranceFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      additionalInfo: "",
    },
  });

  const insuranceMutation = useMutation({
    mutationFn: async (data: InsuranceFormData) => {
      const leadData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: "Not provided",
        pageContext: "Furnace Insurance Interest",
        additionalInfo: data.additionalInfo || null
      };
      const response = await apiRequest("POST", "/api/leads", leadData);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ['/api/leads'] });
    }
  });

  const onSubmit = (data: InsuranceFormData) => {
    insuranceMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Furnace Insurance $225/Year - Cheapest in Cape Breton | Mercer Fuels</title>
        <meta name="description" content="Protect your furnace with Cape Breton's most affordable insurance plan. Only $225+Tax annually with free annual cleaning and coverage on major components. Call (902) 539-4242 to learn more." />
        <meta name="keywords" content="furnace insurance Cape Breton, cheapest furnace insurance Sydney NS, furnace protection plan Nova Scotia, furnace maintenance plan, annual furnace cleaning Cape Breton, heating system insurance Sydney" />
        <link rel="canonical" href="https://mercerfuels.com/furnace-insurance" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cheapest Furnace Insurance - $225/Year | Mercer Fuels Cape Breton" />
        <meta property="og:description" content="Protect your furnace with Cape Breton's most affordable insurance. Free annual cleaning + component coverage for only $225+Tax annually." />
        <meta property="og:url" content="https://mercerfuels.com/furnace-insurance" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mercer Fuels Furnace Insurance" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cheapest Furnace Insurance - $225/Year | Mercer Fuels" />
        <meta name="twitter:description" content="Protect your furnace with Cape Breton's most affordable insurance. Free annual cleaning + coverage." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Furnace Insurance - Mercer Fuels" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative min-h-[600px] md:min-h-[600px] lg:min-h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.75), rgba(30, 41, 59, 0.75)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
          
          <div className="relative z-10 container mx-auto px-4 lg:px-6 pt-[70px] pb-8 md:pt-28 md:pb-12 lg:pt-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
              {/* Left Column - Content */}
              <div className="text-white space-y-6">
                <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-base px-6 py-2 mb-2" data-testid="badge-cheapest-insurance">
                  <Shield className="w-4 h-4 mr-2 inline" />
                  The Most Affordable in Cape Breton
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" data-testid="heading-main">
                  Cape Breton's <span className="text-chart-2">Cheapest Furnace Insurance</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed" data-testid="text-hero-description">
                  Free annual cleaning plus coverage on major furnace components. Only $225 + tax per year.
                </p>
                
                {/* Key Benefits */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="bg-chart-2/20 p-3 rounded-lg inline-block mb-2">
                      <DollarSign className="w-6 h-6 text-chart-2" />
                    </div>
                    <h3 className="font-bold text-sm mb-1">Most Affordable</h3>
                    <p className="text-white/80 text-xs">Best value</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-chart-2/20 p-3 rounded-lg inline-block mb-2">
                      <Wrench className="w-6 h-6 text-chart-2" />
                    </div>
                    <h3 className="font-bold text-sm mb-1">Free Cleaning</h3>
                    <p className="text-white/80 text-xs">Annual service</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-chart-2/20 p-3 rounded-lg inline-block mb-2">
                      <Shield className="w-6 h-6 text-chart-2" />
                    </div>
                    <h3 className="font-bold text-sm mb-1">Coverage</h3>
                    <p className="text-white/80 text-xs">Major parts</p>
                  </div>
                </div>

                {/* Trust Stats */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-3 md:px-4 md:py-4 border border-white/20 mt-6">
                  <div className="grid grid-cols-3 text-center">
                    <div className="space-y-0.5 px-3 md:px-4 border-r border-white/30">
                      <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">50+</div>
                      <div className="text-xs md:text-sm leading-snug">Years Experience</div>
                    </div>
                    <div className="space-y-0.5 px-3 md:px-4 border-r border-white/30">
                      <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">1000+</div>
                      <div className="text-xs md:text-sm leading-snug">Families Protected</div>
                    </div>
                    <div className="space-y-0.5 px-3 md:px-4">
                      <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">200+</div>
                      <div className="text-xs md:text-sm leading-snug">5-Star Reviews</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:max-w-md" id="interest-form">
                <Card className="bg-white shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Interested in Furnace Insurance?</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out this form and we'll send you the policy details and give you a call.
                    </p>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8 space-y-4" data-testid="insurance-success-message">
                        <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                        <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                        <p className="text-gray-600">
                          We've received your interest. We'll send you the policy details and call you soon to discuss setting up your coverage.
                        </p>
                      </div>
                    ) : (
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input placeholder="First Name" {...field} data-testid="input-insurance-first-name" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input placeholder="Last Name" {...field} data-testid="input-insurance-last-name" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input placeholder="Email Address" type="email" {...field} data-testid="input-insurance-email" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input placeholder="Phone Number" type="tel" {...field} data-testid="input-insurance-phone" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="additionalInfo"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Textarea placeholder="Any questions? (Optional)" rows={3} {...field} data-testid="textarea-insurance-info" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button 
                            type="submit" 
                            variant="default"
                            className="w-full font-semibold"
                            disabled={insuranceMutation.isPending}
                            data-testid="button-submit-insurance"
                          >
                            {insuranceMutation.isPending ? "Submitting..." : "Get Policy Details"}
                          </Button>
                          <p className="text-xs text-center text-muted-foreground">
                            We'll call within 24 hours • No obligation
                          </p>
                        </form>
                      </Form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-whats-included">
              What's Included in Your Insurance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive protection for your heating system at an unbeatable price
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover-elevate">
              <CardHeader>
                <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-3">
                  <Wrench className="h-8 w-8 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Free Annual Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional furnace cleaning service every year to keep your system running efficiently and safely.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-3">
                  <ThermometerSnowflake className="h-8 w-8 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Component Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Coverage on many major furnace components including pumps, motors, controls, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-3">
                  <Shield className="h-8 w-8 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Peace of Mind</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Protect yourself from unexpected repair costs and keep your family warm all winter long.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-3">
                  <DollarSign className="h-8 w-8 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Best Value Around</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The most affordable furnace insurance plan in Cape Breton at just $225 + tax annually.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-3">
                  <Calendar className="h-8 w-8 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Scheduled Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We'll schedule your annual cleaning at a time that's convenient for you and your family.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="p-3 rounded-lg bg-chart-2/10 w-fit mb-3">
                  <Award className="h-8 w-8 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Local Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Over 50 years of experience servicing furnaces throughout Cape Breton with certified technicians.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Mercer Fuels Furnace Insurance?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-chart-2/10">
                    <CheckCircle className="h-6 w-6 text-chart-2" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Save Money on Repairs</h3>
                  <p className="text-muted-foreground">
                    One major furnace repair can cost hundreds or even thousands. Our affordable coverage protects you on many major components for just $225 + tax per year.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-chart-2/10">
                    <CheckCircle className="h-6 w-6 text-chart-2" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Extend Your Furnace Life</h3>
                  <p className="text-muted-foreground">
                    Regular annual cleaning keeps your furnace running efficiently and can add years to its lifespan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-chart-2/10">
                    <CheckCircle className="h-6 w-6 text-chart-2" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Trusted Local Service</h3>
                  <p className="text-muted-foreground">
                    Mercer Fuels has been serving Cape Breton families for over 50 years. We're here when you need us.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-chart-2/10">
                    <CheckCircle className="h-6 w-6 text-chart-2" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">No Surprises</h3>
                  <p className="text-muted-foreground">
                    Budget your heating costs with confidence. Know exactly what you'll pay each year for coverage and cleaning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-base px-4 py-1.5 mb-2">
              <Shield className="w-4 h-4 mr-2 inline" />
              Protect Your Investment
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="heading-final-cta">
              Don't Wait Until It's Too Late
            </h2>
            
            <p className="text-xl text-white/90">
              Furnace breakdowns always happen at the worst time. Protect your family and your wallet with Cape Breton's most affordable furnace insurance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild
                size="lg"
                variant="default"
                className="bg-chart-2 text-white font-bold shadow-lg border-0"
                data-testid="button-get-insurance-bottom"
              >
                <a href="#interest-form">
                  <Shield className="w-5 h-5 mr-2" />
                  Get Insurance Today
                </a>
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
              Questions? Call us anytime • We're here to help
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
