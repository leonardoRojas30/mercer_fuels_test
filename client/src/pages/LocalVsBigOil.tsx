import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Shield, Clock, Users, Award, MapPin, Truck, Building2, Heart, Star, Zap } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/shared/HeroSection";
import PageSection from "@/components/shared/PageSection";
import CTAGroup from "@/components/shared/CTAGroup";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

const heroBullets = [
  { icon: Heart, text: "Cape Breton's Choice" },
  { icon: Phone, text: "Direct Line to Owner" },
  { icon: Shield, text: "50+ Years Local Trust" }
];

export default function LocalVsBigOil() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const leadMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const leadData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address: "Not provided",
        pageContext: "Local vs Big Oil",
        additionalInfo: null
      };
      const response = await apiRequest("POST", "/api/leads", leadData);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ['/api/leads'] });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    leadMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Local Family Business vs Big Oil Corporations | Why Cape Breton Chooses Mercer Fuels"
        description="See the real difference between local family heating oil service and corporate giants like Irving and Ultramar. Personal attention, better prices, and 50+ years Cape Breton expertise vs. impersonal corporate service."
      />
      <Header />

      <HeroSection
        backgroundImage={heroImage}
        tagline="We're Local, We're Better"
        headline="Local Family vs. Big Oil Corporations"
        description="Why thousands of Cape Breton families are choosing personal service over corporate bureaucracy. See the real difference for yourself."
        bullets={heroBullets}
        textAlignment="center"
        gridBreakpoint="xl"
      >
        <CTAGroup
          buttonScale="sm"
          primary={{
            text: "Experience the Difference",
            phone: "902-539-4242",
            testId: "button-experience-difference"
          }}
          secondary={{
            text: "Call Now: (902) 539-4242",
            phone: "902-539-4242",
            variant: "outline",
            testId: "button-call-now"
          }}
        />
      </HeroSection>

      <PageSection background="default">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-comparison">
              The Real Difference: Family Service vs. Corporate Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-comparison-intro">
              Here's what you actually get with each choice - no marketing fluff, just the honest truth about heating oil service in Cape Breton.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Big Oil Corporations */}
            <Card className="hover-elevate transition-all duration-300 bg-muted border-border shadow-lg" data-testid="card-big-oil">
              <CardHeader className="text-center bg-muted">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Building2 className="w-8 h-8 text-muted-foreground" />
                  <CardTitle className="text-2xl">Big Oil Corporations</CardTitle>
                </div>
                <CardDescription className="font-medium">Irving Oil, Ultramar, Shell, etc.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3" data-testid="issue-phone-service">
                    <div className="w-6 h-6 bg-muted-foreground rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone Tree Hell</h4>
                      <p className="text-muted-foreground text-sm">"Press 1 for billing, Press 2 for delivery..." You'll spend 15 minutes just trying to reach a human.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="issue-account-number">
                    <div className="w-6 h-6 bg-muted-foreground rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold mb-1">You're Just a Number</h4>
                      <p className="text-muted-foreground text-sm">Account #47291853. They don't know your name, your property, or your heating needs.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="issue-regional-dispatch">
                    <div className="w-6 h-6 bg-muted-foreground rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold mb-1">Regional Dispatch Delays</h4>
                      <p className="text-muted-foreground text-sm">Emergency service routed through Halifax or Moncton. Extra delays when you need heating oil most.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="issue-corporate-policies">
                    <div className="w-6 h-6 bg-muted-foreground rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold mb-1">Inflexible Corporate Policies</h4>
                      <p className="text-muted-foreground text-sm">"Sorry, that's company policy." No exceptions, no understanding of your unique situation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="issue-standardized-pricing">
                    <div className="w-6 h-6 bg-muted-foreground rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold mb-1">Standardized High Pricing</h4>
                      <p className="text-muted-foreground text-sm">Corporate overhead, shareholder profits, and executive bonuses all built into your heating oil price.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="issue-limited-local-knowledge">
                    <div className="w-6 h-6 bg-muted-foreground rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✗</div>
                    <div>
                      <h4 className="font-semibold mb-1">Limited Local Knowledge</h4>
                      <p className="text-muted-foreground text-sm">Regional operations don't understand Cape Breton's unique weather, roads, and community needs.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Local Family Business */}
            <Card className="hover-elevate transition-all duration-300 bg-chart-2/5 border-chart-2/20 shadow-lg" data-testid="card-local-family">
              <CardHeader className="text-center bg-primary/10">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Heart className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl text-primary">Local Family Business</CardTitle>
                </div>
                <CardDescription className="text-primary/80 font-medium">Mercer Fuels - 50+ Years Cape Breton</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3" data-testid="advantage-direct-line">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Direct Line to Our Team</h4>
                      <p className="text-primary/80 text-sm">Call (902) 539-4242 and speak directly to our Cape Breton team. No phone trees, no transfers.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="advantage-personal-relationship">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">We Know You by Name</h4>
                      <p className="text-primary/80 text-sm">Personal relationships matter. We know your heating needs, your property, and your family.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="advantage-local-response">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Local 24/7 Emergency Service</h4>
                      <p className="text-primary/80 text-sm">Our Cape Breton team responds directly. Same-day emergency delivery when possible.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="advantage-flexible-service">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Flexible & Understanding</h4>
                      <p className="text-primary/80 text-sm">Family business means we understand life happens. We work with you on special circumstances.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="advantage-competitive-pricing">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Competitive Local Pricing</h4>
                      <p className="text-primary/80 text-sm">No corporate overhead or executive bonuses. Family business efficiency means better prices for you.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3" data-testid="advantage-local-expertise">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">50+ Years Cape Breton Expertise</h4>
                      <p className="text-primary/80 text-sm">We know every street, every weather pattern, every delivery challenge in Cape Breton. True local expertise.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageSection>

      <PageSection background="muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-experiences">
              Real Cape Breton Families Share Their Experience
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-experiences-intro">
              These are actual customers who made the switch from corporate to local family service:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-elevate transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 shadow-xl" data-testid="card-customer-story-1">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-chart-2 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "15 years with Irving and their service kept getting worse. Phone calls took forever, delivery was inflexible, and they treated us like just another account. Mercer knows our name, works with our schedule, and actually cares. Should have switched years ago!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Frank & Mary S.</p>
                  <p className="text-sm text-gray-600">Sydney - Customer since 2019</p>
                  <p className="text-xs text-primary mt-1">Switched from Irving Oil</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 shadow-xl" data-testid="card-customer-story-2">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-chart-2 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Ultramar's phone system was a nightmare - press 1, press 2, hold for 20 minutes. When I call Mercer, a real person answers who knows exactly who I am. The personal attention is incredible. This is how business should be done."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Janet L.</p>
                  <p className="text-sm text-gray-600">Glace Bay - Customer since 2020</p>
                  <p className="text-xs text-primary mt-1">Switched from Ultramar</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 shadow-xl" data-testid="card-customer-story-3">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-chart-2 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Corporate oil companies see you as a number, not a person. When we had an emergency delivery need, the big company couldn't accommodate us. Mercer delivered same-day and the owner called personally to make sure we were warm. That's the difference."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Paul & Linda R.</p>
                  <p className="text-sm text-gray-600">North Sydney - Customer since 2018</p>
                  <p className="text-xs text-primary mt-1">Switched from Shell</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageSection>

      <PageSection background="default">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-why-matters">
              Why Local Family Service Matters for Your Home
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-why-matters-intro">
              When it comes to keeping your family warm through Cape Breton winters, these differences aren't just nice-to-haves - they're essential:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4" data-testid="benefit-emergency">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Situations</h3>
                  <p className="text-gray-600">When your furnace breaks down at 2 AM on a Saturday in January, you need local expertise and fast response - not a regional call center that puts you on hold.</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="benefit-reliability">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Supply</h3>
                  <p className="text-gray-600">Cape Breton weather is unpredictable. Local knowledge of storm patterns and delivery challenges means you never run out of heating oil when you need it most.</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="benefit-personal-care">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Care</h3>
                  <p className="text-gray-600">When someone knows your family's heating needs and genuinely cares about your comfort, you get proactive service instead of reactive corporate policies.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4" data-testid="benefit-flexibility">
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Flexibility</h3>
                  <p className="text-gray-600">Life happens. Kids get sick, work schedules change. Local family business works with your life instead of forcing you to fit corporate delivery windows.</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="benefit-value">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Better Value</h3>
                  <p className="text-gray-600">Local efficiency means better prices. Plus, the value of personal service, flexibility, and peace of mind is worth far more than any small price difference.</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="benefit-community">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community Connection</h3>
                  <p className="text-gray-600">Your heating oil dollars stay in Cape Breton, supporting local jobs and the local economy. You're not just a customer - you're part of our community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection background="muted">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="hover-elevate transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 shadow-xl" data-testid="card-consultation-form">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900" data-testid="heading-form">
                  Experience the Local Family Difference
                </CardTitle>
                <CardDescription className="text-lg" data-testid="text-form-description">
                  Talk to our Cape Breton team and see what personal, local heating oil service really looks like. No corporate scripts - just honest conversation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4" data-testid="success-message">
                    <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                    <p className="text-gray-600">
                      We've received your request and will call you within 24 hours to show you the local family difference.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-consultation">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                        required
                        data-testid="input-consultation-first-name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                        required
                        data-testid="input-consultation-last-name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                      required
                      data-testid="input-consultation-phone"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                      required
                      data-testid="input-consultation-email"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-chart-2 text-white py-3" data-testid="button-schedule-consultation">
                    <Phone className="w-5 h-5 mr-2" />
                    Talk to Our Local Cape Breton Team
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center" data-testid="text-consultation-promise">
                    We'll call you within 24 hours. No corporate scripts, no high-pressure sales - just a genuine conversation about better heating oil service.
                  </p>
                </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
}