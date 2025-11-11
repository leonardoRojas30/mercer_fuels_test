import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Shield, Clock, Users, Award, MapPin, Truck, DollarSign, Calendar, CreditCard, PiggyBank } from "lucide-react";
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
const budgetPlansFormSchema = insertLeadSchema.extend({
  averageUsage: z.string().min(1, "Please select your average usage")
});

type BudgetPlansForm = z.infer<typeof budgetPlansFormSchema>;

export default function BudgetPlans() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<BudgetPlansForm>({
    resolver: zodResolver(budgetPlansFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      pageContext: "Budget Plans",
      additionalInfo: "",
      averageUsage: "1000-1500"
    }
  });

  const leadMutation = useMutation({
    mutationFn: async (data: BudgetPlansForm) => {
      const leadData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        pageContext: "Budget Plans",
        additionalInfo: `Average Usage: ${data.averageUsage}`
      };
      const response = await apiRequest("POST", "/api/leads", leadData);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ['/api/leads'] });
    }
  });

  const onSubmit = (data: BudgetPlansForm) => {
    leadMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Heating Oil Budget Plans Cape Breton | Monthly Payment Plans | Mercer Fuels</title>
        <meta name="description" content="Spread your heating oil costs over 12 months with our Cape Breton budget plans. No more surprise bills or winter payment spikes. Fixed monthly payments make heating oil affordable for every family. Call (902) 539-4242." />
        <meta name="keywords" content="heating oil budget plans Cape Breton, monthly payment plans Sydney Nova Scotia, heating oil payment plans, affordable heating oil Glace Bay, heating oil financing, monthly heating costs, budget heating oil payment plans" />
        <link rel="canonical" href="https://mercerfuels.com/heating-oil-budget-plans" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Heating Oil Budget Plans Cape Breton - Monthly Payment Plans" />
        <meta property="og:description" content="Spread heating oil costs over 12 months. No surprise bills or winter spikes. Fixed monthly payments make heating affordable for every Cape Breton family." />
        <meta property="og:url" content="https://mercerfuels.com/heating-oil-budget-plans" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Heating Oil Budget Plans Cape Breton - Monthly Payments" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Heating Oil Budget Plans Cape Breton - Monthly Payment Plans" />
        <meta name="twitter:description" content="Spread heating oil costs over 12 months. No surprise bills or winter spikes. Fixed monthly payments make heating affordable for every Cape Breton family." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Heating Oil Budget Plans Cape Breton" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Heating Oil Budget Plans and Monthly Payment Options",
          "description": "Budget-friendly heating oil payment plans that spread costs over 12 months for Cape Breton families",
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
          "serviceType": "Heating Oil Budget Payment Plans",
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
              <Badge className="bg-primary text-primary-foreground mb-4" data-testid="badge-budget-friendly">
                <PiggyBank className="w-4 h-4 mr-2" />
                Budget-Friendly Heating
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-main">
                <span className="text-chart-2">No More</span> Surprise Heating Bills
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100" data-testid="text-hero-description">
                Spread your heating oil costs over 12 equal monthly payments. Predictable budgeting, no winter payment spikes, and the same trusted Cape Breton family service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-chart-2 text-white hover:bg-chart-2/90 px-8 py-3" data-testid="button-budget-plan">
                  <Calendar className="w-5 h-5 mr-2" />
                  Set Up My Budget Plan
                </Button>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3" asChild data-testid="button-call-now">
                  <a href="tel:902-539-4242">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (902) 539-4242
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-lg text-chart-2/80" data-testid="text-budget-promise">
                💡 Same oil, same service, spread over 12 months • No interest charges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-problem-solution">
              Stop Dreading Your Winter Heating Bills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-problem-solution-intro">
              Cape Breton families know the struggle - manageable summer heating costs, then BOOM! Winter bills that stress your budget for months:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <Card className="border-muted bg-muted/30" data-testid="card-old-way">
              <CardHeader className="text-center bg-muted/50">
                <DollarSign className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <CardTitle className="text-2xl">The Old Way - Payment Stress</CardTitle>
                <CardDescription>What most Cape Breton families face</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-muted">
                    <p className="font-semibold">September - October</p>
                    <p className="text-muted-foreground text-sm">$200-300/month. "Not too bad, we can handle this."</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-muted">
                    <p className="font-semibold">November - December</p>
                    <p className="text-muted-foreground text-sm">$500-700/month. "Getting expensive, but it's winter."</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-muted-foreground">
                    <p className="font-semibold">January - February</p>
                    <p className="text-muted-foreground text-sm">$800-1200/month! "How are we going to pay for this?!"</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-muted">
                    <p className="font-semibold">March - May</p>
                    <p className="text-muted-foreground text-sm">Still paying off winter heating debt while trying to get back on track.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The Budget Plan Way */}
            <Card className="border-green-200 bg-green-50" data-testid="card-budget-way">
              <CardHeader className="text-center bg-green-100">
                <PiggyBank className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-2xl text-green-800">The Budget Plan Way - Predictable Payments</CardTitle>
                <CardDescription className="text-green-700">What smart Cape Breton families do</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <p className="font-semibold text-green-800">Every Single Month</p>
                    <p className="text-green-700 text-sm">$450/month. Same amount, every month, year-round.</p>
                  </div>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-green-800 mb-2">No Surprises. No Stress.</h3>
                    <p className="text-green-700">Budget the same amount every month. No more winter payment panic or spring catch-up bills.</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded">
                    <p className="text-green-800 font-semibold text-center">
                      Annual Example: $5,400 total ÷ 12 months = $450/month
                    </p>
                    <p className="text-green-700 text-sm text-center mt-2">
                      (Your actual amount depends on your home's heating needs)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Budget Plans Work */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-how-it-works">
              How Our Budget Plans Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-how-it-works-intro">
              Simple, fair, and designed to take the stress out of heating your Cape Breton home:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center" data-testid="step-assessment">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-green-800">1. Free Assessment</h3>
              <p className="text-gray-700 text-sm">Our heating experts review your past year's usage and estimate your annual heating oil needs based on your home.</p>
            </div>

            <div className="text-center" data-testid="step-monthly-amount">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-green-800">2. Set Monthly Amount</h3>
              <p className="text-gray-700 text-sm">We calculate your fixed monthly payment by dividing your estimated annual cost by 12 months. Same payment year-round.</p>
            </div>

            <div className="text-center" data-testid="step-automatic-delivery">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-green-800">3. Automatic Delivery</h3>
              <p className="text-gray-700 text-sm">We monitor your tank and deliver heating oil as needed. You just make your predictable monthly payment.</p>
            </div>

            <div className="text-center" data-testid="step-annual-review">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-green-800">4. Annual Review</h3>
              <p className="text-gray-700 text-sm">Each year we review your actual usage and adjust your monthly payment if needed. Fair and transparent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Plan Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-benefits">
              Why Cape Breton Families Love Budget Plans
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-benefits-intro">
              It's not just about spreading payments - it's about peace of mind and better family budgeting:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate" data-testid="card-predictable-budgeting">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl">Predictable Budgeting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Budget the exact same amount every month. No more dreading winter heating bills or scrambling to find extra money when it gets cold.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-no-interest">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl">No Interest Charges</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  This isn't a loan or credit program. You pay exactly what you would pay anyway, just spread evenly across 12 months.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-summer-savings">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <PiggyBank className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl">Summer Savings Build Up</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Pay a little more in summer when your usage is low. This builds up a credit that covers your higher winter usage automatically.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-automatic-delivery">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Truck className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl">Includes Automatic Delivery</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Budget plan customers automatically get our worry-free delivery service. We monitor your tank and deliver before you run out.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-priority-service">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl">Priority Customer Status</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Budget plan customers get priority scheduling, preferred pricing, and first-priority emergency service during storms and cold snaps.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-family-business">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-xl">Family Business Flexibility</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Life happens. Unlike corporate programs, we understand when families face unexpected circumstances and work with you personally.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Customer Examples */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-examples">
              Real Cape Breton Family Budget Plan Examples
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-examples-intro">
              Here are actual examples of how budget plans help Cape Breton families manage their heating costs:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-elevate" data-testid="card-example-1">
              <CardHeader className="bg-white">
                <CardTitle className="text-lg text-green-800">The MacLeods - Sydney River</CardTitle>
                <CardDescription>3-bedroom bungalow, oil furnace & hot water</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual oil usage:</span>
                    <span className="font-semibold">1,400 gallons</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual cost:</span>
                    <span className="font-semibold">$4,900</span>
                  </div>
                  <div className="bg-green-100 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="text-green-800 font-semibold">Monthly payment:</span>
                      <span className="text-green-800 font-bold">$408</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "No more $800 winter bills! Same amount every month makes budgeting so much easier."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-example-2">
              <CardHeader className="bg-white">
                <CardTitle className="text-lg text-green-800">The Connollys - Glace Bay</CardTitle>
                <CardDescription>2-story home, older furnace, 4 family members</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual oil usage:</span>
                    <span className="font-semibold">1,800 gallons</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual cost:</span>
                    <span className="font-semibold">$6,300</span>
                  </div>
                  <div className="bg-green-100 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="text-green-800 font-semibold">Monthly payment:</span>
                      <span className="text-green-800 font-bold">$525</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "Used to get $1,200 bills in February. Now it's the same $525 every month - so much less stressful!"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-example-3">
              <CardHeader className="bg-white">
                <CardTitle className="text-lg text-green-800">The Smiths - North Sydney</CardTitle>
                <CardDescription>Small home, efficient furnace, retired couple</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual oil usage:</span>
                    <span className="font-semibold">900 gallons</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual cost:</span>
                    <span className="font-semibold">$3,150</span>
                  </div>
                  <div className="bg-green-100 p-3 rounded">
                    <div className="flex justify-between">
                      <span className="text-green-800 font-semibold">Monthly payment:</span>
                      <span className="text-green-800 font-bold">$262</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "On a fixed pension, the budget plan is a lifesaver. Same amount every month fits our retirement budget perfectly."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Budget Plan Setup Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg border-green-200" data-testid="card-budget-form">
              <CardHeader className="text-center bg-green-50">
                <CardTitle className="text-2xl md:text-3xl font-bold text-green-800" data-testid="heading-budget-form">
                  Set Up Your Heating Oil Budget Plan
                </CardTitle>
                <CardDescription className="text-lg text-green-700" data-testid="text-form-description">
                  Talk to our heating experts about creating a budget plan that works for your family. Stop stressing about winter heating bills!
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
                      We've received your budget plan request. Our Cape Breton heating expert will call you within 24 hours to create a custom payment plan that works for your family's budget.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                      <p className="text-lg font-semibold text-green-800 mb-2">Ready to start saving?</p>
                      <Button size="lg" className="bg-green-600 text-white" asChild data-testid="button-immediate-call">
                        <a href="tel:902-539-4242">
                          <Phone className="w-5 h-5 mr-2" />
                          Call Now: (902) 539-4242
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-budget-plan">
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
                        name="averageUsage"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Approximate annual heating oil usage (if known)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-average-usage">
                                  <SelectValue placeholder="Select your average usage" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="under-1000">Under 1,000 gallons</SelectItem>
                                <SelectItem value="1000-1500">1,000 - 1,500 gallons</SelectItem>
                                <SelectItem value="1500-2000">1,500 - 2,000 gallons</SelectItem>
                                <SelectItem value="over-2000">Over 2,000 gallons</SelectItem>
                                <SelectItem value="not-sure">Not sure - help me estimate</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="bg-green-50 border border-green-200 rounded-md p-4" data-testid="info-no-obligation">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-green-800">No Obligation Consultation</p>
                            <p className="text-sm text-green-700">
                              We'll review your heating needs and show you exactly how much you can save with a budget plan. No pressure, no commitment until you're ready.
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-green-600 text-white py-3" 
                        disabled={leadMutation.isPending}
                        data-testid="button-submit-budget"
                      >
                        {leadMutation.isPending ? (
                          <>
                            <Clock className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Calendar className="w-5 h-5 mr-2" />
                            Talk to a Heating Expert About Budget Plans
                          </>
                        )}
                      </Button>
                      
                      <p className="text-sm text-gray-600 text-center" data-testid="text-budget-promise">
                        We'll call you within 24 hours to review your heating usage and create a budget plan that works for your family. Stop stressing about winter heating bills!
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