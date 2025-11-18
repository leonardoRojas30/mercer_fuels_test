import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Shield, Clock, Users, Award, MapPin, Truck, Gift, Star, Percent, Sparkles, Calendar } from "lucide-react";
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
const newCustomerFormSchema = insertLeadSchema.extend({
  currentProvider: z.string().min(1, "Please select your current provider")
});

type NewCustomerForm = z.infer<typeof newCustomerFormSchema>;

export default function NewCustomerSpecial() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<NewCustomerForm>({
    resolver: zodResolver(newCustomerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      pageContext: "New Customer Special",
      additionalInfo: "",
      currentProvider: "ultramar"
    }
  });

  const leadMutation = useMutation({
    mutationFn: async (data: NewCustomerForm) => {
      const leadData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        pageContext: "New Customer Special",
        additionalInfo: `Current Provider: ${data.currentProvider}`
      };
      const response = await apiRequest("POST", "/api/leads", leadData);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ['/api/leads'] });
    }
  });

  const onSubmit = (data: NewCustomerForm) => {
    leadMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>New Customer Special Offers Cape Breton | First Delivery Discounts | Mercer Fuels</title>
        <meta name="description" content="Special introductory offers for new heating oil customers in Cape Breton! First delivery discounts, switching incentives, and free tank inspection. Join thousands of satisfied families who switched to Mercer Fuels. Call (902) 539-4242." />
        <meta name="keywords" content="new customer heating oil specials Cape Breton, first delivery discount Sydney Nova Scotia, heating oil switching incentive, new heating oil customer offers Glace Bay, introductory heating oil prices, switch heating oil provider Cape Breton" />
        <link rel="canonical" href="https://mercerfuels.com/new-customer-special-offers" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="New Customer Special Offers Cape Breton - First Delivery Discounts" />
        <meta property="og:description" content="Special offers for new heating oil customers! First delivery discounts, switching incentives, and family business service. Join satisfied Cape Breton families." />
        <meta property="og:url" content="https://mercerfuels.com/new-customer-special-offers" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="New Customer Special Offers Cape Breton - Mercer Fuels" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New Customer Special Offers Cape Breton - First Delivery Discounts" />
        <meta name="twitter:description" content="Special offers for new heating oil customers! First delivery discounts, switching incentives, and family business service. Join satisfied Cape Breton families." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="New Customer Special Offers Cape Breton" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "New Customer Special Offers for Heating Oil Service",
          "description": "Special introductory offers and discounts for new heating oil customers in Cape Breton",
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
          "serviceType": "New Customer Heating Oil Service with Special Offers",
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
            backgroundImage: `linear-gradient(rgba(48, 99, 82, 0.8), rgba(38, 79, 66, 0.8)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center pt-[70px] pb-8 md:pt-28 md:pb-12 lg:pt-16">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <Badge className="bg-chart-2 text-white mb-4 animate-pulse" data-testid="badge-special-offer">
                <Sparkles className="w-4 h-4 mr-2" />
                Limited Time Special
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-main">
                <span className="text-chart-2">New Customer</span> Special Offers
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100" data-testid="text-hero-description">
                Join thousands of satisfied Cape Breton families! Special introductory pricing, first delivery discounts, and 50+ years of trusted family service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-chart-2 text-white px-8 py-3" data-testid="button-special-offer">
                  <Gift className="w-5 h-5 mr-2" />
                  Claim My New Customer Offer
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white font-bold px-8 py-3" asChild data-testid="button-call-now">
                  <a href="tel:902-539-4242">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (902) 539-4242
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-lg text-chart-2" data-testid="text-special-promise">
                🎁 First delivery discounts 🎁 Free tank inspection 🎁 No commitment required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-primary/5 border-l-4 border-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="heading-offers">
              Your New Customer Special Offers
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto" data-testid="text-offers-intro">
              We make switching to Cape Breton's most trusted family heating oil company easy and rewarding:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-elevate border-primary/20 bg-white" data-testid="card-offer-1">
              <CardHeader className="text-center bg-primary/10">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Percent className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-primary">First Delivery Discount</CardTitle>
                <Badge className="bg-chart-2 text-white">$100 OFF</Badge>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base text-center">
                  Get $100 off your first heating oil delivery. Start saving immediately when you switch to local family service!
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Valid for new customers only</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>No minimum order required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Stackable with other offers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate border-primary/20 bg-white" data-testid="card-offer-2">
              <CardHeader className="text-center bg-primary/10">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-primary">Free Tank & System Inspection</CardTitle>
                <Badge className="bg-chart-2 text-white">$100 VALUE</Badge>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base text-center">
                  Our heating experts will inspect your tank, gauges, and heating system for safety and efficiency - completely FREE for new customers.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Tank safety inspection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Gauge accuracy check</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Heating system overview</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate border-primary/20 bg-white" data-testid="card-offer-3">
              <CardHeader className="text-center bg-primary/10">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-primary">Automatic Delivery Setup</CardTitle>
                <Badge className="bg-chart-2 text-white">NO SETUP FEE</Badge>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base text-center">
                  Sign up for worry-free automatic delivery at no setup cost. Never run out of heating oil again! Usually $75 setup fee - FREE for new customers.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Custom delivery schedule</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Usage monitoring included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Cancel anytime, no penalty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-primary text-lg font-semibold" data-testid="text-offers-expiry">
              Limited time offers for new customers • Call within 30 days to claim all benefits
            </p>
          </div>
        </div>
      </section>

      {/* Why Families Switch */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-why-switch">
              Why Thousands of Cape Breton Families Have Switched
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-why-switch-intro">
              Beyond the special offers, here's what you get when you choose local family service over corporate heating oil companies:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-elevate" data-testid="card-personal-service">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Personal Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-center">
                  Call and talk to real Cape Breton people who know your name, not a corporate phone tree. Personal relationships matter.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-local-expertise">
              <CardHeader className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">50+ Years Local Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-center">
                  We know every street, weather pattern, and delivery challenge in Cape Breton. True local knowledge you can't get from regional companies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-competitive-pricing">
              <CardHeader className="text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">Competitive Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-center">
                  Family business efficiency means better prices. No corporate overhead or executive bonuses built into your heating oil costs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-emergency-service">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">24/7 Emergency Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-center">
                  Real emergency response from our Cape Breton team. Same-day delivery when possible, not regional dispatch delays.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-success-stories">
              New Customer Success Stories
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-success-stories-intro">
              Real Cape Breton families share why they're glad they made the switch:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-elevate" data-testid="card-story-1">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-chart-2 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg">
                  "I was hesitant to switch after 12 years with Ultramar, but the new customer discount made it easy to try. The personal service was immediately noticeable - they actually know who I am when I call! Plus the $100 off my first delivery saved me real money."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Jennifer K.</p>
                  <p className="text-sm text-gray-600">Glace Bay - Switched in 2023</p>
                  <p className="text-xs text-primary mt-1">Saved $100 with new customer offer</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-story-2">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-chart-2 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg">
                  "The free tank inspection found issues with my old tank that Irving never mentioned in 8 years! Mercer helped me understand exactly what needed fixing and their prices were much better than the corporate guys. Great way to start a relationship."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Bob & Mary L.</p>
                  <p className="text-sm text-gray-600">Sydney River - Switched in 2022</p>
                  <p className="text-xs text-primary mt-1">Free inspection saved hundreds in repairs</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-story-3">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-chart-2 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg">
                  "We were new to Cape Breton and didn't know anyone. Mercer's new customer offers made the decision easy, and now we feel like family customers instead of just account numbers. They even called to check on us during that big storm last winter."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">David & Sarah T.</p>
                  <p className="text-sm text-gray-600">North Sydney - Switched in 2024</p>
                  <p className="text-xs text-primary mt-1">Used all three new customer offers</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-story-4">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-chart-2 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg">
                  "I was spending too much time worrying about when to order heating oil. The free automatic delivery setup with no fees was perfect. Now I never think about it - my tank just stays full all year and I pay the same competitive price."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Patricia M.</p>
                  <p className="text-sm text-gray-600">Sydney Mines - Switched in 2023</p>
                  <p className="text-xs text-primary mt-1">Free automatic delivery setup ($75 value)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Claim Your Offers */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-how-to-claim">
              How to Claim Your New Customer Offers
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-how-to-claim-intro">
              It's easy to get started and claim all your new customer benefits:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="step-contact">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">1. Contact Us</h3>
              <p className="text-gray-700">Call (902) 539-4242 or fill out the form below. Mention you're a new customer interested in our special offers.</p>
            </div>

            <div className="text-center" data-testid="step-consultation">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">2. Free Consultation</h3>
              <p className="text-gray-700">Our heating expert will visit your home for the free tank inspection and discuss which offers work best for your needs.</p>
            </div>

            <div className="text-center" data-testid="step-start-service">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">3. Start Service & Save</h3>
              <p className="text-gray-700">Schedule your first discounted delivery and enjoy the personal service that thousands of Cape Breton families trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Customer Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg border-primary/20" data-testid="card-new-customer-form">
              <CardHeader className="text-center bg-primary/5">
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary" data-testid="heading-new-customer-form">
                  Claim Your New Customer Special Offers
                </CardTitle>
                <CardDescription className="text-lg text-primary" data-testid="text-form-description">
                  Join thousands of satisfied Cape Breton families! Get your special offers and experience the personal service you deserve.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {isSubmitted ? (
                  <div className="text-center py-8" data-testid="success-message">
                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      We've received your request for new customer special offers. Our Cape Breton heating expert will call you within 24 hours to discuss your benefits and schedule your free tank inspection.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
                      <p className="text-lg font-semibold text-primary mb-2">Need immediate assistance?</p>
                      <Button size="lg" className="bg-chart-2 text-white" asChild data-testid="button-immediate-call">
                        <a href="tel:902-539-4242">
                          <Phone className="w-5 h-5 mr-2" />
                          Call Now: (902) 539-4242
                        </a>
                      </Button>
                      <p className="text-sm text-primary mt-3">
                        Speak directly with our Cape Breton team about your special offers and get started today!
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Your special offers include:</strong> $100 off first delivery, free tank inspection ($100 value), and free automatic delivery setup.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-new-customer">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input {...field} data-testid="input-first-name" />
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
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input {...field} data-testid="input-last-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} data-testid="input-email" />
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
                            <FormLabel>Property Address *</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="123 Main Street, Sydney, NS" data-testid="input-address" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="currentProvider"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current heating oil provider</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-current-provider">
                                  <SelectValue placeholder="Select your current provider" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="ultramar">Ultramar</SelectItem>
                                <SelectItem value="irving">Irving Oil</SelectItem>
                                <SelectItem value="shell">Shell</SelectItem>
                                <SelectItem value="petro-canada">Petro-Canada</SelectItem>
                                <SelectItem value="other">Other company</SelectItem>
                                <SelectItem value="new-to-heating-oil">New to heating oil</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="bg-chart-2/10 border border-chart-2/30 rounded-md p-4" data-testid="info-limited-time">
                        <div className="flex items-center gap-3">
                          <Sparkles className="w-6 h-6 text-chart-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-primary">Limited Time Offers</p>
                            <p className="text-sm text-gray-700">
                              These special offers are available for new customers for a limited time. Call now to guarantee your discounts and free services!
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-chart-2 text-white py-3" 
                        disabled={leadMutation.isPending}
                        data-testid="button-submit-new-customer"
                      >
                        {leadMutation.isPending ? (
                          <>
                            <Clock className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Gift className="w-5 h-5 mr-2" />
                            Claim My New Customer Special Offers
                          </>
                        )}
                      </Button>
                      
                      <p className="text-sm text-gray-600 text-center" data-testid="text-new-customer-promise">
                        We'll call you within 24 hours to discuss your special offers and schedule your free tank inspection. Join the Cape Breton family business difference!
                      </p>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}