import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Truck, Shield } from "lucide-react";

interface EmergencyCTAProps {
  title?: string;
  subtitle?: string;
  phone?: string;
  variant?: "banner" | "section" | "sticky";
  features?: string[];
}

export default function EmergencyCTA({
  title = "24/7 Emergency Oil Delivery",
  subtitle = "When you need heating oil fast, we're here for Cape Breton families",
  phone = "902-539-4242",
  variant = "section",
  features = [
    "Same-day & next-day delivery available",
    "Real person answers - not a machine", 
    "Local trucks, local drivers",
    "Emergency service since 1970"
  ]
}: EmergencyCTAProps) {

  const emergencyFeatures = [
    { icon: Clock, text: features[0] || "Same-day delivery" },
    { icon: Phone, text: features[1] || "Real person answers" },
    { icon: Truck, text: features[2] || "Local service" },
    { icon: Shield, text: features[3] || "Trusted since 1970" }
  ];

  if (variant === "banner") {
    return (
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6" />
              <span className="font-semibold">Emergency Oil Delivery:</span>
              <span className="text-red-100">{subtitle}</span>
            </div>
            <Button variant="outline" size="sm" asChild className="bg-white text-red-600 hover:bg-red-50">
              <a href={`tel:${phone}`} data-testid="button-emergency-call">
                Call {phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "sticky") {
    return (
      <div className="fixed bottom-4 right-4 z-50 max-w-sm">
        <Card className="bg-red-600 text-white border-0 shadow-2xl">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="h-5 w-5" />
              <span className="font-semibold text-sm">Emergency Service</span>
            </div>
            <Button variant="outline" size="sm" asChild className="w-full bg-white text-red-600 hover:bg-red-50">
              <a href={`tel:${phone}`} data-testid="button-emergency-sticky">
                Call {phone} Now
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            {emergencyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-red-100 text-red-600">
                  <feature.icon className="h-6 w-6" />
                </div>
                <span className="text-lg font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center lg:text-right">
            <Card className="inline-block bg-white/80 backdrop-blur-sm border-0 shadow-xl hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-red-600 mx-auto lg:mx-0 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Emergency Line</h3>
                <p className="text-3xl font-bold text-red-600 mb-4">{phone}</p>
                <p className="text-muted-foreground mb-6">Available 24/7 for heating emergencies</p>
                <Button size="lg" variant="destructive" asChild>
                  <a href={`tel:${phone}`} data-testid="button-emergency-main">
                    Call Now for Emergency Service
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}