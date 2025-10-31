import { Button } from "@/components/ui/button";
import { Truck, Shield, DollarSign, MessageSquare, Clock, Tv, Phone } from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: Shield,
    title: "Our Automatic Customers Never Run Out Of Oil",
    description: "That's our guarantee. We monitor your usage and deliver before you need it. If your current company has let you down, it's time to switch.",
    cta: "Learn About Automatic Delivery",
    href: "/automatic"
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Supporting local doesn't mean spending more. We offer competitive pricing with the reliability and service that big companies can't match.",
    cta: "Learn How To Save",
    href: "/pricing"
  },
  {
    icon: MessageSquare,
    title: "Text Message Reminders",
    description: "Like a personal assistant for your heating! Get weather warnings, delivery reminders, and never forget to order again.",
    cta: "Set Up Text Alerts",
    href: "/textreminders"
  },
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Need oil fast? We offer same-day and next-day delivery in many areas. Real local service when you need it most.",
    cta: "Order Online",
    href: "/orderonline"
  },
  {
    icon: Clock,
    title: "24/7 Real Person Support",
    description: "When you have a heating emergency, call and speak to a real person any time. Our local staff is here to help.",
    cta: "Call Now",
    href: "tel:902-539-4242"
  },
  {
    icon: Tv,
    title: "TV And Social Media Giveaways",
    description: "Win big-screen TVs every month during heating season! Every oil order automatically enters you to win. We've given away 60+ TVs!",
    cta: "See How To Win",
    href: "/tv-giveaways"
  }
];

export default function ServiceFeatures() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Why Cape Breton Families Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three generations of innovation, reliability, and personal service. Here's what makes us different from the big oil companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const CardWrapper = feature.href.startsWith('tel:') ? 'a' : Link;
            const cardProps = feature.href.startsWith('tel:') 
              ? { href: feature.href }
              : { href: feature.href };

            return (
              <CardWrapper 
                key={index}
                {...cardProps}
                className="block hover-elevate transition-all duration-300 shadow-md hover:shadow-xl bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50 no-underline group"
                data-testid={`card-feature-${index}`}
              >
                <div className="mb-6">
                  <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-4">
                    <feature.icon className="h-7 w-7 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-foreground">{feature.title}</h3>
                </div>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  <div 
                    className="w-full px-4 py-2 border border-input bg-background rounded-md font-semibold text-sm flex items-center justify-center gap-2 group-hover:bg-chart-2 group-hover:text-white group-hover:border-chart-2 transition-all"
                    data-testid={`button-feature-${index}`}
                  >
                    {feature.href.startsWith('tel:') && <Phone className="h-4 w-4" />}
                    {feature.cta}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>

        <div className="text-center mt-16 space-y-6">
          <div>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="font-bold px-8 py-4 text-lg shadow-md hover:shadow-lg transition-all"
              data-testid="button-view-all-services"
            >
              <Link href="/services">View All Our Services</Link>
            </Button>
          </div>
          
          <div>
            <Button 
              asChild
              size="lg" 
              className="bg-chart-2 hover:bg-chart-2/90 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
              data-testid="button-schedule-consultation-features"
            >
              <Link href="/schedule-consultation">Get Your Free Consultation Today</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Join thousands of satisfied Cape Breton families
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}