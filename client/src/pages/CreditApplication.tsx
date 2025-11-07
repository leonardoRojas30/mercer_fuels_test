import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, CreditCard, Shield, Clock, CheckCircle, FileText, Award } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSection from "@/components/shared/PageSection";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

const creditSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(10, "Please enter your complete address"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  socialInsurance: z.string().min(9, "Social Insurance Number is required"),
  employmentStatus: z.string().min(1, "Please select employment status"),
  employer: z.string().optional(),
  annualIncome: z.string().min(1, "Please select income range"),
  rentOrOwn: z.string().min(1, "Please select housing status"),
  monthlyHousing: z.string().min(1, "Please enter housing payment"),
  agreeToCredit: z.boolean().refine(val => val, "You must agree to credit check"),
  agreeToTerms: z.boolean().refine(val => val, "You must agree to terms"),
});

type CreditForm = z.infer<typeof creditSchema>;

export default function CreditApplication() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<CreditForm>({
    resolver: zodResolver(creditSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      dateOfBirth: "",
      socialInsurance: "",
      employmentStatus: "",
      employer: "",
      annualIncome: "",
      rentOrOwn: "",
      monthlyHousing: "",
      agreeToCredit: false,
      agreeToTerms: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: CreditForm) => {
      // Convert boolean values to strings for backend
      const payload = {
        ...data,
        agreeToCredit: data.agreeToCredit.toString(),
        agreeToTerms: data.agreeToTerms.toString(),
      };
      return await apiRequest("POST", "/api/credit-applications", payload);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "We will review your application and contact you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please check your information and try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: CreditForm) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Credit Application | Mercer Fuels Cape Breton</title>
        <meta name="description" content="Apply for credit terms with convenient monthly payments. Quick 24-hour approval. Flexible payment options from your trusted Cape Breton heating company." />
        <meta name="keywords" content="heating oil credit application, payment plans Cape Breton, heating oil financing, flexible payments Sydney NS, oil delivery credit terms, heating budget plans" />
        <link rel="canonical" href="https://mercerfuels.com/fuelapplication" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Flexible Credit Application - Heating Oil Payment Plans" />
        <meta property="og:description" content="Apply for credit terms with convenient monthly payments. Quick 24-hour approval from your local Cape Breton heating company." />
        <meta property="og:url" content="https://mercerfuels.com/fuelapplication" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Heating Oil Credit Application - Mercer Fuels" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flexible Credit Application | Mercer Fuels" />
        <meta name="twitter:description" content="Apply for credit terms with convenient monthly payments. Quick 24-hour approval." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Credit Application - Mercer Fuels" />
      </Helmet>
      
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-0"></div>
          
          <div className="relative z-10 container mx-auto px-6 py-12">
            <div className="w-full text-center text-white">
              <div className="text-lg font-medium text-chart-2 mb-2">We're Local, We're Better</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Flexible <span className="text-chart-2">Payment</span> Plans
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
                Apply for credit terms to spread your heating costs with convenient monthly payments. Quick approval from your trusted Cape Breton neighbors.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-3 md:px-4 md:py-4 border border-white/20 max-w-2xl mx-auto">
                <div className="grid grid-cols-3 text-center">
                  <div className="space-y-0.5 px-3 md:px-4 border-r border-white/30">
                    <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">Quick</div>
                    <div className="text-xs md:text-sm leading-snug">24-Hour Approval</div>
                  </div>
                  <div className="space-y-0.5 px-3 md:px-4 border-r border-white/30">
                    <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">Flexible</div>
                    <div className="text-xs md:text-sm leading-snug">Payment Terms</div>
                  </div>
                  <div className="space-y-0.5 px-3 md:px-4">
                    <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">Local</div>
                    <div className="text-xs md:text-sm leading-snug">Family Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <PageSection background="muted">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card className="hover-elevate transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-chart-2/10 to-transparent">
                <CardTitle className="text-2xl font-bold mb-2">Credit Application</CardTitle>
                <CardDescription className="text-lg">
                  Apply for flexible payment terms with secure, confidential processing.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      {/* Personal Information */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-chart-2 border-b border-gray-200 pb-2">Personal Information</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-chart-2 font-semibold">First Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="John" {...field} data-testid="input-first-name-credit" />
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
                                <FormLabel className="text-chart-2 font-semibold">Last Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Smith" {...field} data-testid="input-last-name-credit" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-chart-2 font-semibold">Phone Number *</FormLabel>
                                <FormControl>
                                  <Input placeholder="902-555-0123" {...field} data-testid="input-phone-credit" />
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
                                <FormLabel className="text-chart-2 font-semibold">Email Address *</FormLabel>
                                <FormControl>
                                  <Input placeholder="john@example.com" {...field} data-testid="input-email-credit" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-chart-2 font-semibold">Home Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="123 Main Street, Sydney, NS" {...field} data-testid="input-address-credit" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="dateOfBirth"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-chart-2 font-semibold">Date of Birth *</FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} data-testid="input-dob-credit" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="socialInsurance"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-chart-2 font-semibold">Social Insurance Number *</FormLabel>
                                <FormControl>
                                  <Input placeholder="123-456-789" {...field} data-testid="input-sin-credit" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Employment Information */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-chart-2 border-b border-gray-200 pb-2">Employment Information</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="employmentStatus"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-chart-2 font-semibold">Employment Status *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-employment-status">
                                      <SelectValue placeholder="Select employment status" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="full-time">Full-time Employed</SelectItem>
                                    <SelectItem value="part-time">Part-time Employed</SelectItem>
                                    <SelectItem value="self-employed">Self-employed</SelectItem>
                                    <SelectItem value="retired">Retired</SelectItem>
                                    <SelectItem value="unemployed">Unemployed</SelectItem>
                                    <SelectItem value="student">Student</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="employer"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-chart-2 font-semibold">Employer Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Company name" {...field} data-testid="input-employer-credit" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="annualIncome"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-chart-2 font-semibold">Annual Income *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-annual-income">
                                    <SelectValue placeholder="Select income range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="under-25k">Under $25,000</SelectItem>
                                  <SelectItem value="25k-40k">$25,000 - $40,000</SelectItem>
                                  <SelectItem value="40k-60k">$40,000 - $60,000</SelectItem>
                                  <SelectItem value="60k-80k">$60,000 - $80,000</SelectItem>
                                  <SelectItem value="80k-100k">$80,000 - $100,000</SelectItem>
                                  <SelectItem value="over-100k">Over $100,000</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Housing Information */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-chart-2 border-b border-gray-200 pb-2">Housing Information</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="rentOrOwn"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-chart-2 font-semibold">Housing Status *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger data-testid="select-rent-own">
                                      <SelectValue placeholder="Select housing status" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="own">Own</SelectItem>
                                    <SelectItem value="rent">Rent</SelectItem>
                                    <SelectItem value="live-with-family">Live with Family</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="monthlyHousing"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-chart-2 font-semibold">Monthly Housing Payment *</FormLabel>
                                <FormControl>
                                  <Input placeholder="1200" {...field} data-testid="input-monthly-housing" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Consent */}
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="agreeToCredit"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  data-testid="checkbox-agree-credit"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm">
                                  I authorize Mercer Fuels to perform a credit check and verify the information provided. *
                                </FormLabel>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="agreeToTerms"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  data-testid="checkbox-agree-terms-credit"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm">
                                  I agree to the credit terms and understand that approval is subject to credit review. *
                                </FormLabel>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold text-lg py-3"
                        data-testid="button-submit-credit-application"
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? "Submitting..." : isSubmitted ? (
                          <span className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5" />
                            Application Submitted
                          </span>
                        ) : "Submit Credit Application"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Benefits */}
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-chart-2/10 to-transparent">
                  <CardTitle className="flex items-center gap-2 text-chart-2">
                    <Award className="h-5 w-5" />
                    Credit Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-chart-2 text-sm">Flexible Terms</p>
                        <p className="text-sm text-gray-600">Monthly payments that fit your budget</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-chart-2 text-sm">Quick Approval</p>
                        <p className="text-sm text-gray-600">Most applications approved within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-chart-2 text-sm">Local Service</p>
                        <p className="text-sm text-gray-600">Reviewed by your Cape Breton neighbors</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-chart-2">
                    <Shield className="h-5 w-5" />
                    Security & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                      <span className="text-sm">Encrypted data transmission</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                      <span className="text-sm">Secure information storage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                      <span className="text-sm">Confidential credit review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-chart-2" />
                      <span className="text-sm">Privacy protected</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="shadow-lg border-chart-2/20">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="font-bold text-chart-2 mb-2">Questions?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Call us to discuss credit options or get help with your application.
                    </p>
                    <div className="space-y-2">
                      <Button asChild className="w-full bg-chart-2 hover:bg-chart-2/90">
                        <a href="tel:902-539-4242">Call Sydney: 902-539-4242</a>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <a href="tel:902-849-2677">Call Glace Bay: 902-849-2677</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
      </PageSection>

      <Footer />
    </div>
  );
}