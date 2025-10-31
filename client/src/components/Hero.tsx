import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Shield, Clock, Users, Award, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function Hero() {
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
        pageContext: "Home Page Hero",
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
    <section className="relative">
      {/* Hero Background */}
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
                <div className="text-lg font-medium text-chart-2">We're Local, We're Better</div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Warmth <span className="text-chart-2">You</span> Can Rely&nbsp;On
                </h1>
                <p className="text-lg md:text-xl text-white/90">
                  Three generations serving Cape Breton. We take care of our neighbors with competitive pricing, automatic delivery, and the guarantee you'll never run out.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 py-3 md:py-4">
                <div className="text-center">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-1 md:mb-2 text-chart-2" />
                  <div className="text-xs md:text-sm font-medium">Never Run Out Guarantee</div>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-1 md:mb-2 text-chart-2" />
                  <div className="text-xs md:text-sm font-medium">24/7 Support</div>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-1 md:mb-2 text-chart-2" />
                  <div className="text-xs md:text-sm font-medium">Local Family Business</div>
                </div>
                <div className="text-center">
                  <Award className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-1 md:mb-2 text-chart-2" />
                  <div className="text-xs md:text-sm font-medium">Competitive Pricing</div>
                </div>
              </div>
            </div>

            {/* Expert Consultation Form */}
            <Card className="bg-white/95 backdrop-blur-sm mt-6 lg:mt-0 shadow-2xl border-0">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl md:text-2xl text-center font-bold">Get Your Free Expert Consultation</CardTitle>
                <p className="text-center text-muted-foreground text-sm md:text-base leading-relaxed">
                  Personalized advice on automatic delivery, budget plans, and how we can save you money vs. the big oil companies. <span className="font-medium text-foreground">100% free, no pressure.</span>
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4" data-testid="success-message">
                    <CheckCircle className="w-16 h-16 mx-auto text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                    <p className="text-gray-600">
                      We've received your request and will call you within 24 hours to discuss your heating needs.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      required
                      data-testid="input-consultation-first-name"
                    />
                    <Input
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      required
                      data-testid="input-consultation-last-name"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      data-testid="input-consultation-email"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                      data-testid="input-consultation-phone"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold py-4 text-base shadow-lg hover:shadow-xl transition-all"
                    data-testid="button-schedule-consultation"
                  >
                    Get My Free Consultation Now
                  </Button>
                  <p className="text-xs text-center text-muted-foreground leading-relaxed">
                    ✓ We'll call within 24 hours<br/>✓ No pressure, just expert advice<br/>✓ Local Cape Breton team
                  </p>
                </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}