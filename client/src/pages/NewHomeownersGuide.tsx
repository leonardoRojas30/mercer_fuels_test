import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Shield, Clock, Users, Award, MapPin, Truck, Home, BookOpen, DollarSign, Heart, Key, Star, Lightbulb, Calculator } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { insertLeadSchema } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

// Form validation schema extending insertLeadSchema
const newHomeownerFormSchema = insertLeadSchema.extend({
  homeClosingDate: z.string().min(1, "Please select when you're closing"),
  currentHeatingSystem: z.string().min(1, "Please select your heating system type")
});

type NewHomeownerForm = z.infer<typeof newHomeownerFormSchema>;

export default function NewHomeownersGuide() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<NewHomeownerForm>({
    resolver: zodResolver(newHomeownerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      pageContext: "New Homeowners Guide",
      additionalInfo: "",
      homeClosingDate: "within-30-days",
      currentHeatingSystem: "oil-furnace"
    }
  });

  const leadMutation = useMutation({
    mutationFn: async (data: NewHomeownerForm) => {
      const leadData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        pageContext: "New Homeowners Guide",
        additionalInfo: `Closing Date: ${data.homeClosingDate}, Heating System: ${data.currentHeatingSystem}`
      };
      const response = await apiRequest("POST", "/api/leads", leadData);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ['/api/leads'] });
    }
  });

  const onSubmit = (data: NewHomeownerForm) => {
    leadMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>New Homeowner's Complete Guide to Heating Oil Cape Breton | First-Time Buyers | Mercer Fuels</title>
        <meta name="description" content="Complete guide for new Cape Breton homeowners choosing heating oil service. Learn about tank maintenance, delivery scheduling, budget planning, and family business benefits. Special offers for first-time buyers. Call (902) 539-4242." />
        <meta name="keywords" content="new homeowner heating oil guide Cape Breton, first time home buyer heating oil Sydney Nova Scotia, heating oil for new homes Glace Bay, homeowner heating oil advice, Cape Breton home heating guide, new house heating oil setup, first home heating oil service" />
        <link rel="canonical" href="https://mercerfuels.com/new-homeowner-heating-oil-guide-cape-breton" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="New Homeowner's Complete Guide to Heating Oil Cape Breton" />
        <meta property="og:description" content="Complete guide for new Cape Breton homeowners. Tank maintenance, delivery scheduling, budget planning, and special first-time buyer offers." />
        <meta property="og:url" content="https://mercerfuels.com/new-homeowner-heating-oil-guide-cape-breton" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="New Homeowner's Guide to Heating Oil Cape Breton" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New Homeowner's Complete Guide to Heating Oil Cape Breton" />
        <meta name="twitter:description" content="Complete guide for new Cape Breton homeowners. Tank maintenance, delivery scheduling, budget planning, and special first-time buyer offers." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="New Homeowner's Guide to Heating Oil Cape Breton" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "New Homeowner's Guide to Heating Oil Service",
          "description": "Complete guide and service for new homeowners in Cape Breton choosing heating oil for their first home",
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
          "serviceType": "New Homeowner Heating Oil Service and Guidance",
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
          className="relative min-h-[600px] md:min-h-[600px] lg:min-h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(17, 28, 89, 0.8), rgba(17, 28, 89, 0.8)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center pt-[70px] pb-8 md:pt-28 md:pb-12 lg:pt-16">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <Badge className="bg-primary text-primary-foreground mb-4" data-testid="badge-new-homeowner">
                <Home className="w-4 h-4 mr-2" />
                New Homeowner's Guide
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Your Complete Guide to<br />
                Heating Oil in Cape Breton
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90" data-testid="text-hero-subtitle">
                Everything new homeowners need to know about choosing, maintaining, and budgeting for heating oil service
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 backdrop-blur border-white/20 text-white"
                  data-testid="button-download-guide"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Download Free Guide
                </Button>
                <Button size="lg" className="bg-primary border-primary text-primary-foreground" data-testid="button-get-quote">
                  <Calculator className="mr-2 h-5 w-5" />
                  Get New Homeowner Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Homeowner Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-first-time-buyers">
              <Key className="w-4 h-4 mr-2" />
              First-Time Homebuyers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-section-title">
              Special Benefits for New Cape Breton Homeowners
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We understand buying your first home is exciting and overwhelming. Let our 50+ years of Cape Breton experience guide you through heating oil basics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>First Delivery Discount</CardTitle>
                <CardDescription>Special pricing for your first heating oil delivery as a new homeowner</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">$100 off first delivery - any amount</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Free tank inspection included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">No setup fees for new accounts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Homeowner Education</CardTitle>
                <CardDescription>Complete guidance on heating oil systems, maintenance, and best practices</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Tank safety and maintenance guide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Seasonal heating tips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Energy efficiency recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle>Personal Support</CardTitle>
                <CardDescription>Dedicated support from our family business team throughout your first year</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Direct phone line for questions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Quarterly check-ins first year</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Priority emergency service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Essential Knowledge Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-essential-knowledge">
              <Lightbulb className="w-4 h-4 mr-2" />
              Essential Knowledge
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Every New Homeowner Should Know
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Master the basics of heating oil service with insights from 50+ years serving Cape Breton families.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Understanding Delivery Schedules</h3>
                  <p className="text-muted-foreground">Learn how to track your usage, plan deliveries, and never run out of heating oil during Cape Breton winters.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tank Safety & Maintenance</h3>
                  <p className="text-muted-foreground">Essential maintenance tips to keep your heating oil tank safe, efficient, and compliant with local regulations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calculator className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Budget Planning</h3>
                  <p className="text-muted-foreground">Smart budgeting strategies for heating costs, seasonal price variations, and money-saving programs available.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Emergency Preparedness</h3>
                  <p className="text-muted-foreground">How to prepare for Cape Breton winter storms and what to do if you experience heating system emergencies.</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">Get Your Personal Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free consultation with our heating experts. We'll assess your home's needs and create a customized heating plan.
              </p>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-4">
                    We'll contact you within 24 hours to schedule your consultation.
                  </p>
                  <Button asChild data-testid="button-call-now">
                    <Link href="tel:+19025394242">
                      <Phone className="mr-2 h-4 w-4" />
                      Call (902) 539-4242
                    </Link>
                  </Button>
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
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} data-testid="input-first-name" />
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
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Smith" {...field} data-testid="input-last-name" />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
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
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="(902) 123-4567" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Home Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St, Sydney, NS" {...field} data-testid="input-address" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="homeClosingDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>When are you closing on your home?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-closing-date">
                                <SelectValue placeholder="Select closing timeframe" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="within-30-days">Within 30 days</SelectItem>
                              <SelectItem value="1-3-months">1-3 months</SelectItem>
                              <SelectItem value="3-6-months">3-6 months</SelectItem>
                              <SelectItem value="already-closed">Already closed</SelectItem>
                              <SelectItem value="looking-to-buy">Still looking to buy</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="currentHeatingSystem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What type of heating system does your home have?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-heating-system">
                                <SelectValue placeholder="Select heating system type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="oil-furnace">Oil furnace</SelectItem>
                              <SelectItem value="oil-boiler">Oil boiler</SelectItem>
                              <SelectItem value="electric-heat">Electric heat</SelectItem>
                              <SelectItem value="gas-heat">Natural gas</SelectItem>
                              <SelectItem value="wood-stove">Wood stove</SelectItem>
                              <SelectItem value="heat-pump">Heat pump</SelectItem>
                              <SelectItem value="not-sure">Not sure</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={leadMutation.isPending}
                      data-testid="button-submit-consultation"
                    >
                      {leadMutation.isPending ? "Submitting..." : "Schedule My Free Consultation"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Family Business Trust Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-family-business">
              <Users className="w-4 h-4 mr-2" />
              Family Business Since 1970
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Cape Breton Families Choose Mercer Fuels
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three generations of experience serving new and established homeowners throughout Cape Breton.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">50+ Years Experience</h3>
              <p className="text-muted-foreground">Three generations serving Cape Breton families with reliable heating oil delivery.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Knowledge</h3>
              <p className="text-muted-foreground">Born and raised in Cape Breton, we understand local weather patterns and home heating needs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
              <p className="text-muted-foreground">Direct access to our family team - no call centers, just neighbors helping neighbors.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Trusted</h3>
              <p className="text-muted-foreground">Thousands of satisfied customers who've trusted us through multiple Cape Breton winters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make Your House a Warm Home?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of Cape Breton families who trust Mercer Fuels for reliable, affordable heating oil service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-call-emergency">
              <Link href="tel:+19025394242">
                <Phone className="mr-2 h-5 w-5" />
                Call (902) 539-4242
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-order-online">
              <Link href="/orderonline">
                <Truck className="mr-2 h-5 w-5" />
                Order Online
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}