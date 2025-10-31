import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Shield, Clock, Users, Award, MapPin, Truck, Smartphone, Wifi, Zap, Gauge, Bell, Battery, Settings, Calendar } from "lucide-react";
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
const modernHomeownerFormSchema = insertLeadSchema.extend({
  primaryInterest: z.string().min(1, "Please select your primary interest"),
  homeType: z.string().min(1, "Please select your home type")
});

type ModernHomeownerForm = z.infer<typeof modernHomeownerFormSchema>;

export default function ModernHomeowner() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ModernHomeownerForm>({
    resolver: zodResolver(modernHomeownerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      pageContext: "Modern Homeowner",
      additionalInfo: "",
      primaryInterest: "smart-monitoring",
      homeType: "single-family"
    }
  });

  const leadMutation = useMutation({
    mutationFn: async (data: ModernHomeownerForm) => {
      const leadData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        pageContext: "Modern Homeowner",
        additionalInfo: `Primary Interest: ${data.primaryInterest}, Home Type: ${data.homeType}`
      };
      const response = await apiRequest("POST", "/api/leads", leadData);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ['/api/leads'] });
    }
  });

  const onSubmit = (data: ModernHomeownerForm) => {
    leadMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Smart Heating Oil Service for Modern Cape Breton Homes | Technology & Convenience | Mercer Fuels</title>
        <meta name="description" content="Advanced heating oil service for modern Cape Breton homeowners. Smart monitoring, app-based ordering, automated delivery scheduling, and energy efficiency solutions. Technology meets tradition with our family business service. Call (902) 539-4242." />
        <meta name="keywords" content="smart heating oil delivery Cape Breton, modern heating oil service Sydney Nova Scotia, app-based oil ordering, automated heating oil delivery Glace Bay, smart home heating Cape Breton, energy efficient heating oil, technology heating service, modern homeowner heating oil" />
        <link rel="canonical" href="https://mercerfuels.com/smart-heating-oil-modern-homeowner" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Smart Heating Oil Service for Modern Cape Breton Homes" />
        <meta property="og:description" content="Advanced heating oil service combining technology with tradition. Smart monitoring, app ordering, automated delivery for modern Cape Breton homeowners." />
        <meta property="og:url" content="https://mercerfuels.com/smart-heating-oil-modern-homeowner" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Smart Heating Oil Service for Modern Cape Breton Homes" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smart Heating Oil Service for Modern Cape Breton Homes" />
        <meta name="twitter:description" content="Advanced heating oil service combining technology with tradition. Smart monitoring, app ordering, automated delivery for modern Cape Breton homeowners." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Smart Heating Oil Service for Modern Cape Breton Homes" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Smart Heating Oil Service for Modern Homeowners",
          "description": "Advanced heating oil delivery service with smart monitoring, app-based ordering, and automated scheduling for modern Cape Breton homes",
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
          "serviceType": "Smart Heating Oil Delivery with Technology Integration",
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
          className="relative h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(48, 99, 82, 0.8), rgba(38, 79, 66, 0.8)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <Badge className="bg-primary text-primary-foreground mb-4" data-testid="badge-smart-service">
                <Zap className="w-4 h-4 mr-2" />
                Smart Heating Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Fuel for the<br />
                Modern Homeowner
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90" data-testid="text-hero-subtitle">
                Technology meets tradition - smart heating oil solutions designed for today's Cape Breton lifestyle
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 backdrop-blur border-white/20 text-white"
                  data-testid="button-smart-features"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Explore Smart Features
                </Button>
                <Button size="lg" className="bg-primary border-primary text-primary-foreground" data-testid="button-get-started">
                  <Settings className="mr-2 h-5 w-5" />
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Technology Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-technology">
              <Wifi className="w-4 h-4 mr-2" />
              Smart Technology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-section-title">
              Advanced Features for Modern Living
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the future of heating oil service with our smart monitoring, predictive delivery, and mobile-first approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Gauge className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Tank Monitoring</CardTitle>
                <CardDescription>Real-time tank level monitoring with automated alerts and predictive delivery scheduling</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">24/7 automatic tank monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Predictive delivery scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Low fuel mobile alerts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle>Mobile App Control</CardTitle>
                <CardDescription>Complete control of your heating oil service from your smartphone or tablet</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Order oil with one tap</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Track delivery in real-time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">View usage analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Notifications</CardTitle>
                <CardDescription>Intelligent alerts and recommendations to optimize your heating efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Weather-based delivery alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Energy efficiency tips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Price optimization alerts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modern Convenience Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-convenience">
              <Clock className="w-4 h-4 mr-2" />
              Modern Convenience
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Designed for Your Busy Lifestyle
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Seamless service that fits into your schedule with zero hassle and maximum efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">Schedule deliveries around your life with evening and weekend options available.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">GPS Delivery Tracking</h3>
                  <p className="text-muted-foreground">Know exactly when your delivery will arrive with real-time GPS tracking and notifications.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contactless Service</h3>
                  <p className="text-muted-foreground">Safe, secure delivery with digital receipts and contactless payment options.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Battery className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Energy Optimization</h3>
                  <p className="text-muted-foreground">Smart analytics to help you reduce consumption and lower your heating bills.</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">Experience Smart Heating</h3>
              <p className="text-muted-foreground mb-6">
                Join the modern heating revolution. Get a personalized quote for smart heating oil service tailored to your lifestyle.
              </p>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Welcome to the Future!</h3>
                  <p className="text-muted-foreground mb-4">
                    We'll contact you within 24 hours to set up your smart heating service.
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
                      name="primaryInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What interests you most?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-primary-interest">
                                <SelectValue placeholder="Select your primary interest" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="smart-monitoring">Smart tank monitoring</SelectItem>
                              <SelectItem value="mobile-app">Mobile app control</SelectItem>
                              <SelectItem value="automated-delivery">Automated delivery</SelectItem>
                              <SelectItem value="energy-efficiency">Energy efficiency</SelectItem>
                              <SelectItem value="convenience">Convenience features</SelectItem>
                              <SelectItem value="cost-savings">Cost savings</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="homeType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Home Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-home-type">
                                <SelectValue placeholder="Select your home type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="single-family">Single family home</SelectItem>
                              <SelectItem value="townhouse">Townhouse/duplex</SelectItem>
                              <SelectItem value="condo">Condominium</SelectItem>
                              <SelectItem value="rental-property">Rental property</SelectItem>
                              <SelectItem value="vacation-home">Vacation home</SelectItem>
                              <SelectItem value="new-construction">New construction</SelectItem>
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
                      data-testid="button-submit-smart-service"
                    >
                      {leadMutation.isPending ? "Setting Up..." : "Start My Smart Service"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technology + Tradition Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-tradition-innovation">
              <Award className="w-4 h-4 mr-2" />
              Innovation Meets Tradition
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Family Business, Future Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              50+ years of Cape Breton service expertise enhanced with cutting-edge technology for the modern homeowner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Innovation</h3>
              <p className="text-muted-foreground">Latest technology integrated with proven heating oil delivery expertise.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Touch</h3>
              <p className="text-muted-foreground">High-tech solutions backed by three generations of family business service.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-muted-foreground">Cape Breton knowledge enhanced with smart monitoring and weather analytics.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Security</h3>
              <p className="text-muted-foreground">Enterprise-grade security protecting your data and smart home integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Heating Experience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join forward-thinking Cape Breton homeowners who've discovered the perfect blend of technology and tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-call-smart">
              <Link href="tel:+19025394242">
                <Phone className="mr-2 h-5 w-5" />
                Call (902) 539-4242
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-order-smart">
              <Link href="/orderonline">
                <Smartphone className="mr-2 h-5 w-5" />
                Order Smart
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}