import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Shield, Clock, Users, Award, MapPin, Truck } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function GlaceBayHeatingOil() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll call you within 24 hours to discuss serving your Glace Bay heating oil needs.");
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Heating Oil Delivery Glace Bay NS - 50+ Years Local Service | Mercer Fuels</title>
        <meta name="description" content="Trusted heating oil delivery in Glace Bay, Nova Scotia for 50+ years. Family-owned business with competitive prices, automatic delivery, and 24/7 emergency service. Call (902) 539-4242." />
        <meta name="keywords" content="heating oil Glace Bay NS, oil delivery Glace Bay Nova Scotia, Glace Bay heating oil company, emergency oil delivery Glace Bay, automatic delivery Glace Bay, Cape Breton heating oil, Table Head oil delivery, Caledonia heating oil, Bridgeport oil delivery, family owned heating oil Glace Bay, heating oil delivery downtown Glace Bay" />
        <link rel="canonical" href="https://mercerfuels.com/glace-bay-heating-oil" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Heating Oil Delivery Glace Bay NS - Mercer Fuels" />
        <meta property="og:description" content="Professional heating oil delivery in Glace Bay, NS. Family-owned since 1970. Competitive prices and reliable service." />
        <meta property="og:url" content="https://mercerfuels.com/glace-bay-heating-oil" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mercer Fuels Glace Bay Heating Oil Delivery - Local Family Business" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Heating Oil Delivery Glace Bay NS - Mercer Fuels" />
        <meta name="twitter:description" content="Professional heating oil delivery in Glace Bay, NS. Family-owned since 1970. Competitive prices and reliable service." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Mercer Fuels Glace Bay Heating Oil Delivery" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Heating Oil Delivery Glace Bay NS",
          "description": "Professional heating oil delivery service in Glace Bay, Nova Scotia with automatic delivery and emergency service",
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
            "name": "Glace Bay, Nova Scotia"
          },
          "serviceType": "Heating Oil Delivery",
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
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-0"></div>
          
          <div className="relative z-10 container mx-auto px-4 lg:px-6 flex items-center pt-[70px] pb-8 md:pt-28 md:pb-12 lg:pt-16 lg:justify-start lg:items-center">
            <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
              {/* Hero Content */}
              <div className="text-white space-y-6">
                <div className="space-y-2">
                  <div className="text-lg font-medium text-chart-2">We're Local, We're Better</div>
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Glace Bay's Trusted <span className="text-chart-2">Heating Oil</span> Experts
                  </h1>
                  <p className="text-xl text-white/90">
                    Serving Glace Bay families for over 50 years with reliable heating oil delivery, competitive prices, and never run out guarantee.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                    <div className="text-sm font-medium">Glace Bay Local</div>
                  </div>
                  <div className="text-center">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                    <div className="text-sm font-medium">24/7 Service</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                    <div className="text-sm font-medium">Never Run Out</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                    <div className="text-sm font-medium">Family Business</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" data-testid="button-call-glace-bay" asChild>
                    <a href="tel:902-539-4242">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (902) 539-4242
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" data-testid="button-consultation-glace-bay" asChild>
                    <Link href="/schedule-consultation">
                      Schedule Consultation
                    </Link>
                  </Button>
                </div>

                {/* Trust Stats */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 border border-white/20 mt-4">
                  <div className="grid grid-cols-3 text-center">
                    <div className="space-y-0.5 px-2 md:px-3 border-r border-white/30">
                      <div className="text-lg md:text-xl font-bold text-chart-2 leading-tight">50+</div>
                      <div className="text-xs leading-snug">Years Experience</div>
                    </div>
                    <div className="space-y-0.5 px-2 md:px-3 border-r border-white/30">
                      <div className="text-lg md:text-xl font-bold text-chart-2 leading-tight">1000+</div>
                      <div className="text-xs leading-snug">Happy Customers</div>
                    </div>
                    <div className="space-y-0.5 px-2 md:px-3">
                      <div className="text-lg md:text-xl font-bold text-chart-2 leading-tight">200+</div>
                      <div className="text-xs leading-snug">5-Star Reviews</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <Card className="max-w-md ml-auto" data-testid="card-contact-glace-bay">
                <CardHeader>
                  <CardTitle className="text-center">Talk to a Heating Expert</CardTitle>
                  <CardDescription className="text-center">
                    Free consultation for Glace Bay residents
                  </CardDescription>
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
                        data-testid="input-firstname-glace-bay"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="px-3 py-2 border rounded-md"
                        data-testid="input-lastname-glace-bay"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2 border rounded-md"
                      data-testid="input-email-glace-bay"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2 border rounded-md"
                      data-testid="input-phone-glace-bay"
                    />
                    <Button type="submit" className="w-full" size="lg" data-testid="button-submit-glace-bay">
                      Get Expert Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Glace Bay-Specific Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Heating Oil Services for Glace Bay, NS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We know Glace Bay's neighborhoods, weather patterns, and heating needs. As your local heating oil company, we provide personalized service you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <Truck className="h-12 w-12 text-chart-2 mb-4" />
                <CardTitle>Glace Bay Area Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fast delivery throughout Glace Bay, including residential areas, Table Head, Caledonia, and surrounding communities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Downtown Glace Bay
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Table Head
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Caledonia
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Bridgeport
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <Shield className="h-12 w-12 text-chart-2 mb-4" />
                <CardTitle>Emergency Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Never worry about running out of heating oil during Glace Bay's cold winters. 24/7 emergency delivery available.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    24/7 Emergency Response
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Same-Day Delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Weekend Service
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <Award className="h-12 w-12 text-chart-2 mb-4" />
                <CardTitle>Local Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Three generations of Glace Bay heating oil experience. We understand your home's heating needs and Cape Breton weather.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    50+ Years Experience
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Local Family Business
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Cape Breton Weather Experts
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section for Glace Bay */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions - Glace Bay Heating Oil
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Do you deliver to all Glace Bay areas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we deliver throughout Greater Glace Bay including downtown Glace Bay, Table Head, Caledonia, Bridgeport, and surrounding residential areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How quickly can you deliver in Glace Bay?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular deliveries within 24-48 hours. Emergency deliveries available same-day or within hours during Glace Bay's cold weather emergencies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What makes Mercer Fuels better for Glace Bay residents?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're a local Cape Breton family business with 50+ years experience serving Glace Bay. We understand the area's unique heating needs and provide personalized service the big companies can't match.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer budget plans for Glace Bay customers?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer flexible payment plans to help Glace Bay families budget their heating costs throughout the year. Contact us to discuss options that work for your situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready for Reliable Glace Bay Heating Oil Service?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join thousands of satisfied Glace Bay customers who trust Mercer Fuels for their heating oil needs.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" data-testid="button-call-cta-glace-bay" asChild>
              <a href="tel:902-539-4242">
                <Phone className="mr-2 h-5 w-5" />
                Call (902) 539-4242
              </a>
            </Button>
            <Button size="lg" variant="outline" data-testid="button-consultation-cta-glace-bay" asChild>
              <Link href="/schedule-consultation">
                Schedule Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}