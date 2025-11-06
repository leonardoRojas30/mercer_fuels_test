import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Shield, Clock, Users, Award, MapPin, Truck, CloudSnow, Wind, Thermometer, Snowflake } from "lucide-react";
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
const winterStormPrepFormSchema = insertLeadSchema.extend({
  tankLevel: z.string().min(1, "Please select your current tank level")
});

type WinterStormPrepForm = z.infer<typeof winterStormPrepFormSchema>;

export default function WinterStormPrep() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isConsultationSubmitted, setIsConsultationSubmitted] = useState(false);

  // Consultation form state
  const [consultationFormData, setConsultationFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const consultationMutation = useMutation({
    mutationFn: async (data: typeof consultationFormData) => {
      const leadData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: "Not provided",
        pageContext: "Winter Storm Prep - Consultation",
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

  const form = useForm<WinterStormPrepForm>({
    resolver: zodResolver(winterStormPrepFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      pageContext: "Winter Storm Preparation",
      additionalInfo: "",
      tankLevel: "less-than-half"
    }
  });

  const leadMutation = useMutation({
    mutationFn: async (data: WinterStormPrepForm) => {
      const leadData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        pageContext: "Winter Storm Preparation",
        additionalInfo: `Tank Level: ${data.tankLevel}`
      };
      const response = await apiRequest("POST", "/api/leads", leadData);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ['/api/leads'] });
    }
  });

  const onSubmit = (data: WinterStormPrepForm) => {
    leadMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Cape Breton Winter Storm Heating Oil Preparation | Pre-Storm Delivery | Mercer Fuels</title>
        <meta name="description" content="Don't get caught in a Cape Breton winter storm without heating oil! Pre-storm delivery service ensures your tank is full before blizzards hit. Expert storm preparation with 50+ years Cape Breton winter experience. Call (902) 539-4242." />
        <meta name="keywords" content="Cape Breton winter storm preparation, pre-storm heating oil delivery, blizzard preparation Sydney Nova Scotia, winter heating oil Glace Bay, storm heating oil delivery, Cape Breton storm preparedness, winter weather heating oil, emergency pre-storm delivery" />
        <link rel="canonical" href="https://mercerfuels.com/cape-breton-winter-storm-preparation" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cape Breton Winter Storm Heating Oil Preparation - Mercer Fuels" />
        <meta property="og:description" content="Pre-storm heating oil delivery service. Don't get caught in a blizzard without heating oil. 50+ years Cape Breton winter experience." />
        <meta property="og:url" content="https://mercerfuels.com/cape-breton-winter-storm-preparation" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Cape Breton Winter Storm Heating Oil Preparation" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cape Breton Winter Storm Heating Oil Preparation - Mercer Fuels" />
        <meta name="twitter:description" content="Pre-storm heating oil delivery service. Don't get caught in a blizzard without heating oil. 50+ years Cape Breton winter experience." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Cape Breton Winter Storm Heating Oil Preparation" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Cape Breton Winter Storm Heating Oil Preparation",
          "description": "Pre-storm heating oil delivery service to prepare Cape Breton homes for winter storms and blizzards",
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
          "serviceType": "Winter Storm Preparation Heating Oil Delivery",
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
          className="relative min-h-[600px] bg-cover bg-center"
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
                  <div className="text-lg font-medium text-chart-2">Storm Season Preparation</div>
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight" data-testid="heading-main">
                    Don't Get Caught in a <span className="text-chart-2">Cape Breton Storm</span> Without Heat
                  </h1>
                  <p className="text-xl text-white/90">
                    Pre-storm heating oil delivery ensures your family stays warm when blizzards hit. 50+ years of Cape Breton winter experience - we know when storms are coming.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
                  <div className="text-center">
                    <CloudSnow className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                    <div className="text-sm font-medium">Storm Monitoring</div>
                  </div>
                  <div className="text-center">
                    <Truck className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                    <div className="text-sm font-medium">Pre-Storm Delivery</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                    <div className="text-sm font-medium">Family Safety</div>
                  </div>
                  <div className="text-center">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                    <div className="text-sm font-medium">24/7 Service</div>
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
                      <div className="text-xl md:text-2xl font-bold text-chart-2 leading-tight">24/7</div>
                      <div className="text-xs md:text-sm leading-snug">Storm Response</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expert Consultation Form */}
              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Get Your Free Expert Consultation</CardTitle>
                  <p className="text-center text-muted-foreground">
                    Talk to our storm preparation expert. We'll assess your heating needs and ensure you're ready for Cape Breton's toughest weather.
                  </p>
                </CardHeader>
                <CardContent>
                  {isConsultationSubmitted ? (
                    <div className="text-center py-8 space-y-4" data-testid="success-message-consultation">
                      <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                      <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                      <p className="text-gray-600">
                        We've received your request and will call you within 24 hours to discuss storm preparation for your home.
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
                      className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-semibold py-3"
                      data-testid="button-schedule-consultation"
                    >
                      Schedule My Free Consultation
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      We'll call within 24 hours • Expert storm prep advice
                    </p>
                  </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Storm Preparation Matters */}
      <section className="py-16 bg-primary/5 border-l-4 border-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="heading-why-matters">
              Why Cape Breton Storm Preparation Is Critical
            </h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto" data-testid="text-why-matters-intro">
              Cape Breton winter storms are unpredictable and dangerous. Being prepared with a full heating oil tank can be the difference between comfort and crisis:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border-chart-2/20" data-testid="card-storm-dangers">
              <CardHeader className="bg-chart-2/5">
                <CardTitle className="text-xl text-chart-2 flex items-center gap-3">
                  <Wind className="w-6 h-6" />
                  Cape Breton Storm Realities
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-chart-2 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-chart-2/80"><strong>Sudden Temperature Drops:</strong> From mild to -20°C in hours. Your heating oil usage can triple overnight.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-chart-2 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-chart-2/80"><strong>Multi-Day Storm Isolation:</strong> Some storms last 3-5 days. Roads become impassable for delivery trucks.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-chart-2 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-chart-2/80"><strong>Power Outages:</strong> Even with power restored, you need heating oil to warm up your cold house quickly.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-chart-2 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-chart-2/80"><strong>Emergency Response Delays:</strong> Fire departments and emergency services are overwhelmed during major storms.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-primary/20" data-testid="card-preparation-benefits">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-xl text-primary flex items-center gap-3">
                  <Shield className="w-6 h-6" />
                  Storm Preparation Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-primary/80"><strong>Peace of Mind:</strong> Sleep well knowing your family will stay warm no matter how long the storm lasts.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-primary/80"><strong>Avoid Emergency Prices:</strong> Pre-storm delivery costs less than emergency service during or after storms.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-primary/80"><strong>Protect Your Property:</strong> Consistent heat prevents frozen pipes, mold, and expensive damage to your home.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-primary/80"><strong>Family Safety:</strong> Never worry about children or elderly family members being cold during power outages.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Storm Preparation Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-service">
              How Our Cape Breton Storm Preparation Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-service-intro">
              50+ years of Cape Breton winters taught us exactly how to keep families prepared:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="step-monitoring">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudSnow className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">1. Weather Monitoring</h3>
              <p className="text-gray-700">We monitor Environment Canada forecasts, marine weather, and local conditions. When a storm is 2-3 days out, we start calling customers.</p>
            </div>

            <div className="text-center" data-testid="step-priority-delivery">
              <div className="w-20 h-20 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-10 h-10 text-chart-2" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-chart-2">2. Priority Delivery</h3>
              <p className="text-gray-700">We prioritize pre-storm deliveries, working extra hours to ensure every customer's tank is full before the storm hits Cape Breton.</p>
            </div>

            <div className="text-center" data-testid="step-post-storm">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">3. Post-Storm Check</h3>
              <p className="text-gray-700">After major storms, we call customers to ensure heating systems are working and schedule any needed emergency deliveries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cape Breton Winter Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-experience">
              50+ Years of Cape Breton Winter Experience
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-experience-intro">
              We've weathered every major Cape Breton storm since the 1970s. Here's what that experience means for your family:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-elevate" data-testid="card-local-knowledge">
              <CardHeader>
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="text-lg">Local Weather Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  We know how Cape Breton's unique geography affects storms. Which areas get hit hardest, wind patterns, and where roads close first.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-storm-timing">
              <CardHeader>
                <Clock className="w-8 h-8 text-chart-2 mb-3" />
                <CardTitle className="text-lg">Perfect Storm Timing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Experience tells us exactly when to deliver - not too early (wasted space), not too late (storm hits). Just right for maximum protection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-equipment">
              <CardHeader>
                <Truck className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="text-lg">Storm-Ready Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Our trucks are equipped for Cape Breton winter conditions. Chains, extra fuel, emergency equipment - we deliver when others can't.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-community">
              <CardHeader>
                <Users className="w-8 h-8 text-chart-2 mb-3" />
                <CardTitle className="text-lg">Community Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  We know our customers personally. Elderly neighbors, families with young children, people with medical needs - we prioritize accordingly.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Storm Stories */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-stories">
              Real Cape Breton Storm Stories
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-stories-intro">
              These are real stories from Cape Breton families who were prepared when major storms hit:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-elevate" data-testid="card-story-1">
              <CardHeader>
                <Badge className="bg-primary text-white mb-2">White Juan - 2004</Badge>
                <CardTitle className="text-lg">The Thompson Family - Sydney River</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 italic">
                  "White Juan hit us with 95cm of snow in 24 hours. We were snowed in for 4 days with no power for 3 of them. But Mercer had filled our tank just 2 days before the storm hit. While our neighbors were freezing, we were warm and comfortable. Our kids never knew how bad it really was."
                </p>
                <p className="text-sm font-semibold text-gray-900">- Jim & Carol Thompson</p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-story-2">
              <CardHeader>
                <Badge className="bg-primary text-white mb-2">February 2015 Blizzard</Badge>
                <CardTitle className="text-lg">Mrs. MacDonald - Glace Bay</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 italic">
                  "I'm 82 and live alone. When they called to say a big storm was coming, I was worried about my oil level. Mercer delivered the day before the storm and even checked my heating system. The storm lasted 3 days, but I stayed warm and safe. They probably saved my life."
                </p>
                <p className="text-sm font-semibold text-gray-900">- Dorothy MacDonald</p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-story-3">
              <CardHeader>
                <Badge className="bg-primary text-white mb-2">March 2018 Nor'easter</Badge>
                <CardTitle className="text-lg">The Murphy Family - Sydney Mines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 italic">
                  "The storm hit harder than expected - 85 km/h winds and massive snow drifts. Our power was out for 5 days. Other families had to evacuate to emergency shelters, but we had enough heating oil to last two weeks. Our home stayed at 20°C the entire time."
                </p>
                <p className="text-sm font-semibold text-gray-900">- Kevin & Sarah Murphy</p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-story-4">
              <CardHeader>
                <Badge className="bg-primary text-white mb-2">January 2022 Ice Storm</Badge>
                <CardTitle className="text-lg">Young Family - North Sydney</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 italic">
                  "The ice storm knocked out power for 6 days. We had a 3-month-old baby and were terrified about keeping him warm. Mercer had topped off our tank just before the storm hit. Our oil furnace kept the house warm even without electricity. We can't thank them enough."
                </p>
                <p className="text-sm font-semibold text-gray-900">- Michael & Jennifer (baby's health protected)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Storm Preparation Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg border-primary/20" data-testid="card-preparation-form">
              <CardHeader className="text-center bg-primary/5">
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary" data-testid="heading-preparation-form">
                  Schedule Your Storm Preparation Delivery
                </CardTitle>
                <CardDescription className="text-lg text-primary/80" data-testid="text-form-description">
                  Don't wait for the storm warnings! Get your heating oil tank filled now and have peace of mind all winter long.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {isSubmitted ? (
                  <div className="text-center py-8" data-testid="success-message">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Thank You!</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      We've received your storm preparation request. Our Cape Breton team will call you within 4 hours to schedule your pre-storm delivery and ensure you're ready for winter weather.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
                      <p className="text-lg font-semibold text-primary mb-2">Storm coming soon?</p>
                      <Button size="lg" className="bg-primary text-white" asChild data-testid="button-immediate-call">
                        <a href="tel:902-539-4242">
                          <Phone className="w-5 h-5 mr-2" />
                          Call Now: (902) 539-4242
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-storm-prep">
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
                        name="tankLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current heating oil tank level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-tank-level">
                                  <SelectValue placeholder="Select your current tank level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="less-than-half">Less than half full</SelectItem>
                                <SelectItem value="about-half">About half full</SelectItem>
                                <SelectItem value="more-than-half">More than half full</SelectItem>
                                <SelectItem value="nearly-full">Nearly full (top off)</SelectItem>
                                <SelectItem value="not-sure">Not sure - please check for me</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4" data-testid="info-storm-season">
                        <div className="flex items-center gap-3">
                          <Snowflake className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-yellow-800">Cape Breton Storm Season is Here</p>
                            <p className="text-sm text-yellow-700">
                              Don't wait for storm warnings! The best time to prepare is before storms are forecast. Call <a href="tel:902-539-4242" className="font-bold underline">(902) 539-4242</a> for immediate scheduling.
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary text-white py-3" 
                        disabled={leadMutation.isPending}
                        data-testid="button-submit-storm-prep"
                      >
                        {leadMutation.isPending ? (
                          <>
                            <Clock className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <CloudSnow className="w-5 h-5 mr-2" />
                            Schedule My Storm Preparation Delivery
                          </>
                        )}
                      </Button>
                      
                      <p className="text-sm text-gray-600 text-center" data-testid="text-storm-prep-promise">
                        We'll call you within 4 hours to schedule your storm preparation delivery. Don't get caught unprepared when Cape Breton weather turns dangerous.
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