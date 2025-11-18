import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CheckCircle, Phone, Home, Gift, Shield, Users, Star, Clock } from "lucide-react";
import { useState, useEffect } from "react";
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

const newHomeownerSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  newHomeAddress: z.string().min(5, "Please enter your new home address"),
});

type NewHomeownerForm = z.infer<typeof newHomeownerSchema>;

export default function NewHome() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<NewHomeownerForm>({
    resolver: zodResolver(newHomeownerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      newHomeAddress: "",
    },
  });

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="for-form-embed-handler"]');
    
    if (existingScript) {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-210762954534257']", "https://pci.jotform.com/");
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-210762954534257']", "https://pci.jotform.com/");
      }
    };
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const onSubmit = async (data: NewHomeownerForm) => {
    try {
      const response = await fetch('/api/new-homeowner-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsFormSubmitted(true);
        toast({
          title: "Request Submitted!",
          description: result.message || "We'll contact you soon about your new homeowner bonus.",
        });
        form.reset();
      } else {
        throw new Error(result.message || 'Failed to submit form');
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
        <title>Welcome New Homeowners - $100 Bonus | Mercer Fuels Cape Breton</title>
        <meta name="description" content="Congratulations on your new home! Claim your $100 new homeowner bonus from Mercer Fuels. Automatic delivery, new homeowners auto-approved, 200+ 5-star reviews. Serving Sydney & Glace Bay, Nova Scotia." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative min-h-[700px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.75), rgba(30, 41, 59, 0.75)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-0"></div>
          
          <div className="relative z-10 container mx-auto px-4 lg:px-6 py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              
              {/* Left Column - Messaging */}
              <div className="text-white space-y-6">
                <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-lg px-6 py-2">
                  <Gift className="w-5 h-5 mr-2" />
                  New Homeowner Bonus
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Congratulations on Your <span className="text-chart-2">New Home!</span>
                </h1>
                
                <div className="bg-white/10 backdrop-blur-sm border-2 border-chart-2/50 rounded-2xl p-8 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-chart-2 mb-2">
                    Get $100 in Free Oil
                  </p>
                  <p className="text-lg md:text-xl text-white/90">
                    Yours to use whenever you need it!
                  </p>
                </div>
                
                <p className="text-lg text-white/90 leading-relaxed">
                  Whether you need oil now or not, reach out within <strong className="text-chart-2">30 days</strong> to claim your bonus. We'll add it to your account for whenever you need it.
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Star className="w-5 h-5 text-chart-2" />
                    <span className="text-sm font-medium">200+ 5-Star Reviews</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-chart-2" />
                    <span className="text-sm font-medium">Credit Auto-Approved</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Users className="w-5 h-5 text-chart-2" />
                    <span className="text-sm font-medium">Family Owned</span>
                  </div>
                </div>

                {/* Call CTA for mobile */}
                <div className="lg:hidden">
                  <Button 
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full bg-white/10 backdrop-blur-sm border-white/30 text-white font-bold"
                    data-testid="button-call-now"
                  >
                    <a href="tel:9025394242">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: (902) 539-4242
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:ml-auto w-full max-w-md">
                <Card className="bg-white shadow-2xl border-0">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-center">Claim Your $100 Bonus</CardTitle>
                    <CardDescription className="text-center">
                      Fill out the form below and we'll call you to complete setup
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isFormSubmitted ? (
                      <div className="text-center py-8 space-y-4" data-testid="success-message">
                        <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                        <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                        <p className="text-gray-600">
                          We'll contact you soon to complete your setup and confirm your $100 bonus!
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
                            name="newHomeAddress"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input placeholder="New Home Address" {...field} data-testid="input-address" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button
                            type="submit"
                            className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold"
                            disabled={form.formState.isSubmitting}
                            data-testid="button-submit-interest"
                          >
                            {form.formState.isSubmitting ? "Submitting..." : "Claim My Bonus"}
                          </Button>
                          <p className="text-xs text-center text-muted-foreground">
                            We'll call you to complete setup and confirm your $100 bonus
                          </p>
                        </form>
                      </Form>
                    )}
                  </CardContent>
                </Card>

                {/* Call CTA for desktop */}
                <div className="hidden lg:block mt-4">
                  <Button 
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full bg-white/10 backdrop-blur-sm border-white/30 text-white font-bold"
                    data-testid="button-call-now-desktop"
                  >
                    <a href="tel:9025394242">
                      <Phone className="w-5 h-5 mr-2" />
                      Or Call: (902) 539-4242
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mercer Fuels */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why New Homeowners Choose Mercer Fuels
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We make it easy to keep your new home warm and comfortable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="hover-elevate transition-all bg-white" data-testid="card-benefit-automatic">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <Clock className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Set It and Forget It</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatic delivery keeps your tank full. Never worry about running out of oil again.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all bg-white" data-testid="card-benefit-approved">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <CheckCircle className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Credit Auto-Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  New homeowners are automatically approved for our automatic delivery service.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all bg-white" data-testid="card-benefit-reviews">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <Star className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">200+ 5-Star Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join hundreds of satisfied customers who trust us with their home heating needs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all bg-white" data-testid="card-benefit-local">
              <CardHeader className="pb-4">
                <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-3">
                  <Users className="h-7 w-7 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Local & Family-Owned</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Three generations serving Cape Breton families. We're your neighbors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Ways to Claim Your Bonus */}
      <section id="claim-options" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Three Easy Ways to Claim Your $100 Bonus
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the option that works best for you
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {/* Option 1: Quick Interest Form */}
            <Card className="bg-white shadow-lg border-2 border-chart-2/20" data-testid="card-option-express">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Express Interest</CardTitle>
                <CardDescription className="text-base">
                  Quick form - we'll call you to complete setup
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isFormSubmitted ? (
                  <div className="text-center py-8 space-y-4" data-testid="success-message">
                    <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                    <p className="text-gray-600">
                      We'll contact you soon to complete your setup and confirm your $100 bonus!
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
                        name="newHomeAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="New Home Address" {...field} data-testid="input-address" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold"
                        disabled={form.formState.isSubmitting}
                        data-testid="button-submit-interest"
                      >
                        {form.formState.isSubmitting ? "Submitting..." : "Claim My Bonus"}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        We'll call you to complete setup and confirm your $100 bonus
                      </p>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>

            {/* Option 2: Call Us */}
            <Card className="bg-white shadow-lg" data-testid="card-option-call">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Call Us</CardTitle>
                <CardDescription className="text-base">
                  Speak with our friendly local staff
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Phone className="w-16 h-16 text-chart-2 mb-6" />
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  Our team is ready to help you claim your bonus and set up automatic delivery
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="bg-chart-2 hover:bg-chart-2/90 text-white font-bold w-full"
                  data-testid="button-call-claim"
                >
                  <a href="tel:9025394242">
                    <Phone className="w-5 h-5 mr-2" />
                    (902) 539-4242
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Monday-Friday: 8:00 AM - 5:00 PM
                </p>
              </CardContent>
            </Card>

            {/* Option 3: Complete Signup Online */}
            <Card className="bg-white shadow-lg" data-testid="card-option-signup">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Sign Up Online</CardTitle>
                <CardDescription className="text-base">
                  Complete your registration now
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Home className="w-16 h-16 text-chart-2 mb-6" />
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  Fill out our complete signup form below to get started immediately
                </p>
                <Button 
                  variant="default"
                  size="lg"
                  className="w-full font-bold"
                  data-testid="button-scroll-signup"
                  onClick={() => {
                    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Complete Signup Form
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Complete Signup Form */}
      <section id="signup-form" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Your Registration Online
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fill out the form below to become a Mercer Fuels customer and claim your $100 new homeowner bonus
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-4 md:p-6" data-testid="card-jotform">
              <CardContent className="p-0">
                <iframe
                  id="JotFormIFrame-210762954534257"
                  title="Mercer Fuels - Customer Sign Up [New Homeowner]"
                  onLoad={() => window.parent.scrollTo(0,0)}
                  allowTransparency={true}
                  allow="geolocation; microphone; camera; fullscreen; payment"
                  src="https://pci.jotform.com/form/210762954534257"
                  style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
                  scrolling="no"
                  data-testid="iframe-jotform"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Reminders */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="bg-chart-2/10 border-2 border-chart-2/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                <Clock className="w-8 h-8 inline-block mr-2 text-chart-2" />
                Remember: 30-Day Window
              </h3>
              <p className="text-lg text-muted-foreground">
                Don't miss out! Claim your $100 bonus within 30 days of receiving your letter. The bonus will be added to your account and available whenever you need it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate transition-all">
                <CardHeader className="pb-4">
                  <Star className="h-8 w-8 text-chart-2 mb-2" />
                  <CardTitle>200+ Five Star Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Mercer Fuels always goes above and beyond to treat our customers well. Check out our reviews on Google and Facebook!
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all">
                <CardHeader className="pb-4">
                  <Shield className="h-8 w-8 text-chart-2 mb-2" />
                  <CardTitle>Peace of Mind</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    With automatic delivery, you'll never need to worry about being left in the cold. We keep your tank full year-round.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
