import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Shield, Clock, Users, Award, MapPin, Truck } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumb, { generateBreadcrumbSchema } from "@/components/Breadcrumb";
import HeroSection from "@/components/shared/HeroSection";
import FeatureTiles from "@/components/shared/FeatureTiles";
import PageSection from "@/components/shared/PageSection";
import CTAGroup from "@/components/shared/CTAGroup";
import EmergencyCTA from "@/components/shared/EmergencyCTA";
import ReviewsSection from "@/components/shared/ReviewsSection";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

const heroBullets = [
  { icon: MapPin, text: "Sydney Local" },
  { icon: Clock, text: "24/7 Service" },
  { icon: Shield, text: "Never Run Out" },
  { icon: Users, text: "Family Business" }
];

const sydneyFeatures = [
  {
    icon: Truck,
    title: "Sydney Area Delivery",
    description: "Fast delivery throughout Sydney, including downtown core, residential areas, and surrounding neighborhoods like Whitney Pier and Sydney Mines.",
    cta: "Get Delivery Quote",
    onClick: () => console.log("Sydney delivery quote clicked")
  },
  {
    icon: Shield,
    title: "Emergency Service",
    description: "Never worry about running out of heating oil during Sydney's cold winters. 24/7 emergency delivery available with same-day service.",
    cta: "Call Emergency Line",
    phone: "902-539-4242"
  },
  {
    icon: Award,
    title: "Local Expertise",
    description: "Three generations of Sydney heating oil experience. We understand your home's heating needs and Cape Breton weather patterns.",
    cta: "Learn More",
    onClick: () => console.log("Local expertise clicked")
  }
];

const sydneyReviews = [
  {
    name: "Sarah MacLean",
    location: "Downtown Sydney, NS",
    text: "Mercer Fuels has been serving our family for over 15 years. They know Sydney and they care about their customers.",
    rating: 5,
    years: "Customer for 15 years"
  },
  {
    name: "Mike Campbell",
    location: "Whitney Pier, NS",
    text: "Switched from Irving last year. Much better service and they actually answer their phone when you need them.",
    rating: 5,
    years: "Customer for 2 years"
  },
  {
    name: "Linda MacDonald",
    location: "Sydney Mines, NS",
    text: "The automatic delivery program is perfect for Sydney winters. Never have to worry about running out.",
    rating: 5,
    years: "Customer for 8 years"
  },
  {
    name: "Robert Morrison",
    location: "North Sydney, NS",
    text: "Local family business that knows Cape Breton. Much better than dealing with the big oil companies.",
    rating: 5,
    years: "Customer for 12 years"
  }
];

export default function SydneyHeatingOil() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll call you within 24 hours to discuss serving your Sydney heating oil needs.");
  };

  const breadcrumbItems = [
    { label: 'Cape Breton Locations' },
    { label: 'Sydney Heating Oil' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Heating Oil Delivery Sydney NS - 50+ Years Local Service | Mercer Fuels"
        description="Trusted heating oil delivery in Sydney, Nova Scotia for 50+ years. Family-owned business with competitive prices, automatic delivery, and 24/7 emergency service. Call (902) 539-4242."
        keywords="heating oil Sydney NS, oil delivery Sydney Nova Scotia, Sydney heating oil company, emergency oil delivery Sydney, automatic delivery Sydney, Cape Breton heating oil, Whitney Pier oil delivery, North Sydney heating oil, family owned heating oil Sydney, heating oil delivery downtown Sydney, Sydney Mines heating oil"
        canonical="https://mercerfuels.com/sydney-heating-oil"
        breadcrumbSchema={breadcrumbSchema}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Heating Oil Delivery Sydney NS",
          "description": "Professional heating oil delivery service in Sydney, Nova Scotia with automatic delivery and emergency service",
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
            "name": "Sydney, Nova Scotia"
          },
          "serviceType": "Heating Oil Delivery",
          "availableChannel": {
            "@type": "ServiceChannel",
            "servicePhone": "+1-902-539-4242",
            "availableLanguage": "English"
          }
        }}
      />
      
      <Header />
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 lg:px-6 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      
      <HeroSection
        backgroundImage={heroImage}
        tagline="We're Local, We're Better"
        headline="Sydney's Trusted Heating Oil Experts"
        description="Serving Sydney families for over 50 years with reliable heating oil delivery, competitive prices, and never run out guarantee."
        bullets={heroBullets}
      >
        {/* Quick Contact Form */}
        <Card className="max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0" data-testid="card-contact-sydney">
          <CardHeader>
            <CardTitle className="text-center">Talk to a Heating Expert</CardTitle>
            <p className="text-center text-muted-foreground">
              Free consultation for Sydney residents
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="px-3 py-2 border rounded-md"
                  data-testid="input-firstname-sydney"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="px-3 py-2 border rounded-md"
                  data-testid="input-lastname-sydney"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
                data-testid="input-email-sydney"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
                data-testid="input-phone-sydney"
              />
              <button
                type="submit"
                className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold py-3 px-6 rounded-md transition-all shadow-lg hover:shadow-xl"
                data-testid="button-submit-sydney"
              >
                Get Expert Consultation
              </button>
            </form>
          </CardContent>
        </Card>
      </HeroSection>

      <PageSection background="muted">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Heating Oil Services for Sydney, NS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We know Sydney's neighborhoods, weather patterns, and heating needs. As your local heating oil company, we provide personalized service you can trust.
          </p>
        </div>
        <FeatureTiles features={sydneyFeatures} />
      </PageSection>

      <ReviewsSection
        title="Real Reviews from Sydney Neighbors"
        subtitle="Don't just take our word for it - hear from Sydney families who chose Mercer Fuels"
        reviews={sydneyReviews}
      />

      <EmergencyCTA
        title="24/7 Emergency Oil Delivery in Sydney"
        subtitle="When Sydney winters hit hard, we're here for you with emergency heating oil delivery"
        phone="902-539-4242"
        features={[
          "Same-day delivery throughout Sydney area",
          "Real person answers - available 24/7",
          "Local Sydney trucks and drivers",
          "Emergency service for 50+ years"
        ]}
      />

      <PageSection>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Frequently Asked Questions - Sydney Heating Oil
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover-elevate transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-xl">
            <CardHeader>
              <CardTitle>Do you deliver to all Sydney areas?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, we deliver throughout Greater Sydney including downtown Sydney, Sydney Mines, North Sydney, Whitney Pier, and surrounding residential areas.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-xl">
            <CardHeader>
              <CardTitle>How quickly can you deliver in Sydney?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Regular deliveries within 24-48 hours. Emergency deliveries available same-day or within hours during Sydney's cold weather emergencies.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-xl">
            <CardHeader>
              <CardTitle>What makes Mercer Fuels better for Sydney residents?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're a local Sydney area family business with 50+ years experience. We understand Cape Breton weather, have competitive pricing, and provide personalized service the big companies can't match.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-xl">
            <CardHeader>
              <CardTitle>Do you offer budget plans for Sydney customers?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, we offer flexible payment plans to help Sydney families budget their heating costs throughout the year. Contact us to discuss options that work for your situation.
              </p>
            </CardContent>
          </Card>
        </div>
      </PageSection>

      <PageSection background="gradient" className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready for Reliable Sydney Heating Oil Service?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Join thousands of satisfied Sydney customers who trust Mercer Fuels for their heating oil needs.
        </p>
        
        <CTAGroup
          primary={{
            text: "Call (902) 539-4242",
            phone: "902-539-4242",
            testId: "button-call-cta-sydney"
          }}
          secondary={{
            text: "Schedule Free Consultation",
            href: "/schedule-consultation",
            testId: "button-consultation-cta-sydney"
          }}
          subtitle="Three generations serving Cape Breton families"
        />
      </PageSection>

      <Footer />
    </div>
  );
}