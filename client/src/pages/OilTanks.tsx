import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Phone, Shield, DollarSign, Wrench, Droplet, Flame, Users, Award, Clock } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, url: string) => void;
  }
}

const equipmentFinancingSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  equipmentInterest: z.string().min(1, "Please select equipment type"),
  additionalInfo: z.string().optional(),
});

type EquipmentFinancingForm = z.infer<typeof equipmentFinancingSchema>;

export default function OilTanks() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isBottomFormSubmitted, setIsBottomFormSubmitted] = useState(false);
  const jotformRef = useRef<HTMLDivElement>(null);
  const bottomFormRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<EquipmentFinancingForm>({
    resolver: zodResolver(equipmentFinancingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      equipmentInterest: "",
      additionalInfo: "",
    },
  });

  const bottomForm = useForm<EquipmentFinancingForm>({
    resolver: zodResolver(equipmentFinancingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      equipmentInterest: "",
      additionalInfo: "",
    },
  });

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="for-form-embed-handler"]');
    
    if (existingScript) {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-201543604949054']", "https://form.jotform.com/");
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-201543604949054']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const scrollToJotform = () => {
    jotformRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToBottomForm = () => {
    bottomFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onSubmit = async (data: EquipmentFinancingForm) => {
    try {
      const response = await fetch('/api/equipment-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
        toast({
          title: "Request Submitted!",
          description: "We'll contact you soon about heating equipment financing.",
        });
        form.reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please call us at (902) 539-4242 or try again later.",
        variant: "destructive",
      });
    }
  };

  const onBottomSubmit = async (data: EquipmentFinancingForm) => {
    try {
      const response = await fetch('/api/equipment-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsBottomFormSubmitted(true);
        toast({
          title: "Request Submitted!",
          description: "We'll contact you soon about heating equipment financing.",
        });
        bottomForm.reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please call us at (902) 539-4242 or try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Affordable Oil Tank & Heating Equipment Financing | Mercer Fuels Cape Breton</title>
        <meta name="description" content="Lowest monthly payments on new oil tanks, furnaces, and hot water heaters in Cape Breton. Finance heating equipment at wholesale prices with no markup. Steel oil tanks from $94/month. Call (902) 539-4242." />
        <meta name="keywords" content="oil tank financing Cape Breton, furnace financing Sydney Nova Scotia, heating equipment payment plans, affordable oil tanks, hot water heater financing, wholesale heating equipment prices, steel oil tank installation Cape Breton" />
        <link rel="canonical" href="https://mercerfuels.com/oil_tanks" />
        
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Affordable Oil Tank & Heating Equipment Financing | Mercer Fuels" />
        <meta property="og:description" content="Lowest monthly payments on oil tanks, furnaces, and hot water heaters. Finance at wholesale prices with no markup. Steel tanks from $94/month." />
        <meta property="og:url" content="https://mercerfuels.com/oil_tanks" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Affordable Oil Tank & Heating Equipment Financing | Mercer Fuels" />
        <meta name="twitter:description" content="Lowest monthly payments on oil tanks, furnaces, and hot water heaters. Finance at wholesale prices with no markup. Steel tanks from $94/month." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
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
                  <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 mb-4" data-testid="badge-affordable-heating">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Wholesale Prices, No Markup
                  </Badge>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-testid="heading-main">
                    Heating is a Necessity. <span className="text-chart-2">The Equipment Should Be Affordable.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/90" data-testid="text-hero-description">
                    Mercer Fuels offers the lowest monthly payments on new oil tanks, furnaces, and hot water heaters. Finance heating equipment at our wholesale prices - no markup. 2-7 year financing available.
                  </p>
                  <p className="text-base md:text-lg text-chart-2 pt-2" data-testid="text-promise">
                    ✓ Wholesale prices ✓ Flexible financing ✓ Certified installers
                  </p>
                </div>
              </div>

              {/* Equipment Financing Form */}
              <Card className="bg-white/95 backdrop-blur-sm mt-6 lg:mt-0 shadow-2xl border-0" data-testid="card-equipment-form">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl md:text-2xl text-center font-bold">Get Equipment Install and Financing Info</CardTitle>
                  <CardDescription className="text-center text-sm md:text-base leading-relaxed">
                    Free quote on oil tanks, furnaces, hot water heaters & more. <span className="font-medium text-foreground">No obligation.</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isFormSubmitted ? (
                    <div className="text-center py-8 space-y-4" data-testid="success-message">
                      <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                      <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                      <p className="text-gray-600">
                        We'll contact you within 24 hours with financing options and pricing details.
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
                                  <Input placeholder="First Name" {...field} data-testid="input-firstname" />
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
                                  <Input placeholder="Last Name" {...field} data-testid="input-lastname" />
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
                                <Input type="email" placeholder="Email Address" {...field} data-testid="input-email" />
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
                                <Input type="tel" placeholder="Phone Number" {...field} data-testid="input-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="equipmentInterest"
                          render={({ field }) => (
                            <FormItem>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-equipment">
                                    <SelectValue placeholder="What equipment are you interested in?" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Oil Tank - Steel">Oil Tank - Steel</SelectItem>
                                  <SelectItem value="Oil Tank - Fiberglass">Oil Tank - Fiberglass</SelectItem>
                                  <SelectItem value="Furnace">Furnace Installation</SelectItem>
                                  <SelectItem value="Hot Water Heater">Hot Water Heater</SelectItem>
                                  <SelectItem value="Burner">Burner</SelectItem>
                                  <SelectItem value="Multiple Items">Multiple Items</SelectItem>
                                </SelectContent>
                              </Select>
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
                                <Textarea 
                                  placeholder="Additional details or questions (optional)" 
                                  {...field} 
                                  data-testid="textarea-additional"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold"
                          disabled={form.formState.isSubmitting}
                          data-testid="button-submit-financing"
                        >
                          {form.formState.isSubmitting ? "Submitting..." : "Get Free Quote"}
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                          By submitting, you agree to be contacted about equipment install and financing options.
                        </p>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Financing Plans */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Double Bottom Steel Oil Tank Financing Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All plans include double bottom steel tank, certified installation, old tank removal, and all taxes. No surprise costs!
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              Fiberglass tanks and pay-in-full options also available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* 3 Year Inside Plan */}
            <Card className="hover-elevate transition-all bg-white" data-testid="card-plan-3year-inside">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold">3 Year Inside Tank</CardTitle>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-chart-2">$94</div>
                  <div className="text-muted-foreground">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Double Bottom Steel Tank</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Installation by Insured Technician</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Removal of Old Tank</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">All Taxes Included</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">No Surprise Costs</span>
                </div>
                <Button 
                  onClick={scrollToJotform}
                  className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold mt-4"
                  data-testid="button-interested-3year-inside"
                >
                  I'm Interested
                </Button>
              </CardContent>
            </Card>

            {/* 3 Year Outside Plan */}
            <Card className="hover-elevate transition-all bg-white" data-testid="card-plan-3year-outside">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold">3 Year Outside Tank</CardTitle>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-chart-2">$110</div>
                  <div className="text-muted-foreground">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Double Bottom Steel Tank</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Installation by Insured Technician</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Removal of Old Tank</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">All Taxes Included</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">No Surprise Costs</span>
                </div>
                <Button 
                  onClick={scrollToJotform}
                  className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold mt-4"
                  data-testid="button-interested-3year-outside"
                >
                  I'm Interested
                </Button>
              </CardContent>
            </Card>

            {/* 2 Year Inside Plan */}
            <Card className="hover-elevate transition-all bg-white" data-testid="card-plan-2year-inside">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold">2 Year Inside Tank</CardTitle>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-chart-2">$129</div>
                  <div className="text-muted-foreground">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Double Bottom Steel Tank</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Installation by Insured Technician</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Removal of Old Tank</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">All Taxes Included</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">No Surprise Costs</span>
                </div>
                <Button 
                  onClick={scrollToJotform}
                  className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold mt-4"
                  data-testid="button-interested-2year-inside"
                >
                  I'm Interested
                </Button>
              </CardContent>
            </Card>

            {/* 2 Year Outside Plan */}
            <Card className="hover-elevate transition-all bg-white" data-testid="card-plan-2year-outside">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold">2 Year Outside Tank</CardTitle>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-chart-2">$150</div>
                  <div className="text-muted-foreground">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Double Bottom Steel Tank</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Installation by Insured Technician</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Removal of Old Tank</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">All Taxes Included</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">No Surprise Costs</span>
                </div>
                <Button 
                  onClick={scrollToJotform}
                  className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold mt-4"
                  data-testid="button-interested-2year-outside"
                >
                  I'm Interested
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call Us CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              Have questions about our financing plans?
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-chart-2 hover:bg-chart-2/90 text-white font-bold"
              data-testid="button-call-financing"
            >
              <a href="tel:9025394242">
                <Phone className="w-5 h-5 mr-2" />
                Call Us: (902) 539-4242
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Equipment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More Heating Equipment Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All available with financing options. Get your custom quote below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="hover-elevate transition-all" data-testid="card-fiberglass">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <Droplet className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Fiberglass Tanks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Durable, long-lasting fiberglass oil tanks with financing available.
                </p>
                <Button 
                  onClick={scrollToBottomForm}
                  variant="outline"
                  className="w-full"
                  data-testid="button-quote-fiberglass"
                >
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all" data-testid="card-furnace">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <Flame className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Furnace Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete furnace installation by certified technicians.
                </p>
                <Button 
                  onClick={scrollToBottomForm}
                  variant="outline"
                  className="w-full"
                  data-testid="button-quote-furnace"
                >
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all" data-testid="card-hotwater">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <Droplet className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Hot Water Heaters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Energy-efficient hot water heaters with professional installation.
                </p>
                <Button 
                  onClick={scrollToBottomForm}
                  variant="outline"
                  className="w-full"
                  data-testid="button-quote-hotwater"
                >
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all" data-testid="card-burner">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <Wrench className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Burners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  High-efficiency burner replacements and installations.
                </p>
                <Button 
                  onClick={scrollToBottomForm}
                  variant="outline"
                  className="w-full"
                  data-testid="button-quote-burner"
                >
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Quote Form - Duplicate */}
      <section ref={bottomFormRef} className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-xl border-0" data-testid="card-bottom-equipment-form">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl md:text-3xl text-center font-bold">Get Your Custom Equipment Quote</CardTitle>
                <CardDescription className="text-center text-base leading-relaxed">
                  Free quote on furnaces, hot water heaters, burners & more. <span className="font-medium text-foreground">No obligation.</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isBottomFormSubmitted ? (
                  <div className="text-center py-8 space-y-4" data-testid="success-message-bottom">
                    <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                    <p className="text-gray-600">
                      We'll contact you within 24 hours with financing options and pricing details.
                    </p>
                  </div>
                ) : (
                  <Form {...bottomForm}>
                    <form onSubmit={bottomForm.handleSubmit(onBottomSubmit)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={bottomForm.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="First Name" {...field} data-testid="input-firstname-bottom" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={bottomForm.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Last Name" {...field} data-testid="input-lastname-bottom" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={bottomForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input type="email" placeholder="Email Address" {...field} data-testid="input-email-bottom" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={bottomForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input type="tel" placeholder="Phone Number" {...field} data-testid="input-phone-bottom" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={bottomForm.control}
                        name="equipmentInterest"
                        render={({ field }) => (
                          <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-equipment-bottom">
                                  <SelectValue placeholder="What equipment are you interested in?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Oil Tank - Steel">Oil Tank - Steel</SelectItem>
                                <SelectItem value="Oil Tank - Fiberglass">Oil Tank - Fiberglass</SelectItem>
                                <SelectItem value="Furnace">Furnace Installation</SelectItem>
                                <SelectItem value="Hot Water Heater">Hot Water Heater</SelectItem>
                                <SelectItem value="Burner">Burner</SelectItem>
                                <SelectItem value="Multiple Items">Multiple Items</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={bottomForm.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea 
                                placeholder="Additional details or questions (optional)" 
                                {...field} 
                                data-testid="textarea-additional-bottom"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold"
                        disabled={bottomForm.formState.isSubmitting}
                        data-testid="button-submit-financing-bottom"
                      >
                        {bottomForm.formState.isSubmitting ? "Submitting..." : "Get Free Quote"}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        By submitting, you agree to be contacted about equipment install and financing options.
                      </p>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Mercer Fuels */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Mercer Fuels for Heating Equipment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-elevate transition-all bg-white" data-testid="card-wholesale">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <DollarSign className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Wholesale Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our customers get oil tanks, furnaces, and components at our wholesale prices. No markup, ever.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all bg-white" data-testid="card-certified">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <Award className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Certified Technicians</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All installation work completed by friendly, certified, and insured local technicians.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all bg-white" data-testid="card-warranty">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <Shield className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Warranty & Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Warranty and insurance options available on all equipment installations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all bg-white" data-testid="card-financing">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <Clock className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Flexible Financing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  2-7 year financing options available on all equipment. Affordable monthly payments that fit your budget.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all bg-white" data-testid="card-experience">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <Users className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">50+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Three generations serving Cape Breton. We've installed thousands of heating systems across the island.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all bg-white" data-testid="card-service">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <Phone className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Full Service Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete service from quote to installation. We're here to help every step of the way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Oil Tank Inquiries JotForm */}
      <section ref={jotformRef} className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get an Oil Tank Quote
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fill out the form below for a detailed quote on steel or fiberglass oil tanks.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-4 md:p-6" data-testid="card-jotform">
              <CardContent className="p-0">
                <iframe
                  id="JotFormIFrame-201543604949054"
                  title="Mercer Fuels - Oil Tank Inquiries"
                  onLoad={() => window.parent.scrollTo(0,0)}
                  allowTransparency={true}
                  allow="geolocation; microphone; camera; fullscreen; payment"
                  src="https://form.jotform.com/201543604949054"
                  style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
                  scrolling="no"
                  data-testid="iframe-jotform"
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
