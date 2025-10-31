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

export default function SydneyMinesHeatingOil() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll call you within 24 hours to discuss serving your Sydney Mines heating oil needs.");
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Heating Oil Delivery Sydney Mines NS - 50+ Years Local Service | Mercer Fuels</title>
        <meta name="description" content="Trusted heating oil delivery in Sydney Mines, Nova Scotia for 50+ years. Family-owned business with competitive prices, automatic delivery, and 24/7 emergency service. Call (902) 539-4242." />
        <meta name="keywords" content="heating oil Sydney Mines NS, oil delivery Sydney Mines Nova Scotia, home heating oil, automatic delivery Sydney Mines, emergency oil delivery, Cape Breton heating oil" />
        <link rel="canonical" href="https://mercerfuels.com/sydney-mines-heating-oil" />
        <meta property="og:title" content="Heating Oil Delivery Sydney Mines NS - Mercer Fuels" />
        <meta property="og:description" content="Professional heating oil delivery in Sydney Mines, NS. Family-owned since 1970. Competitive prices and reliable service." />
        <meta property="og:url" content="https://mercerfuels.com/sydney-mines-heating-oil" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Heating Oil Delivery Sydney Mines NS",
          "description": "Professional heating oil delivery service in Sydney Mines, Nova Scotia with automatic delivery and emergency service",
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
            "name": "Sydney Mines, Nova Scotia"
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
                    Sydney Mines' Trusted <span className="text-chart-2">Heating Oil</span> Experts
                  </h1>
                  <p className="text-xl text-white/90">
                    Serving Sydney Mines families for over 50 years with reliable heating oil delivery, competitive prices, and never run out guarantee.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-chart-2" />
                    <div className="text-sm font-medium">Sydney Mines Local</div>
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
                  <Button size="lg" data-testid="button-call-sydney-mines" asChild>
                    <a href="tel:902-539-4242">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (902) 539-4242
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" data-testid="button-consultation-sydney-mines" asChild>
                    <Link href="/schedule-consultation">
                      Schedule Consultation
                    </Link>
                  </Button>
                </div>

                {/* Trust Stats */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-chart-2">50+</div>
                      <div className="text-sm">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-chart-2">Thousands</div>
                      <div className="text-sm">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-chart-2">200+</div>
                      <div className="text-sm">5-Star Reviews</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <Card className="max-w-md ml-auto" data-testid="card-contact-sydney-mines">
                <CardHeader>
                  <CardTitle className="text-center">Talk to a Heating Expert</CardTitle>
                  <CardDescription className="text-center">
                    Free consultation for Sydney Mines residents
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
                        data-testid="input-firstname-sydney-mines"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="px-3 py-2 border rounded-md"
                        data-testid="input-lastname-sydney-mines"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2 border rounded-md"
                      data-testid="input-email-sydney-mines"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2 border rounded-md"
                      data-testid="input-phone-sydney-mines"
                    />
                    <Button type="submit" className="w-full" size="lg" data-testid="button-submit-sydney-mines">
                      Get Expert Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sydney Mines-Specific Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Heating Oil Services for Sydney Mines, NS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We know Sydney Mines' neighborhoods, weather patterns, and heating needs. As your local heating oil company, we provide personalized service you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <Truck className="h-12 w-12 text-chart-2 mb-4" />
                <CardTitle>Sydney Mines Area Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fast delivery throughout Sydney Mines, including McCurdy Point, residential neighborhoods, and surrounding areas.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Downtown Sydney Mines
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    McCurdy Point
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Residential Areas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Heritage Areas
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
                  Never worry about running out of heating oil during Sydney Mines' cold winters. 24/7 emergency delivery available.
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
                  Three generations of Sydney Mines heating oil experience. We understand your home's heating needs and Cape Breton weather.
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

      {/* FAQ Section for Sydney Mines */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions - Sydney Mines Heating Oil
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Do you deliver to all Sydney Mines areas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we deliver throughout Sydney Mines including downtown, McCurdy Point, heritage areas, and all residential neighborhoods.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How quickly can you deliver in Sydney Mines?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular deliveries within 24-48 hours. Emergency deliveries available same-day or within hours during Sydney Mines' cold weather emergencies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What makes Mercer Fuels better for Sydney Mines residents?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're a local Cape Breton family business with 50+ years experience serving Sydney Mines. We understand the area's unique heating needs and provide personalized service the big companies can't match.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer budget plans for Sydney Mines customers?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer flexible payment plans to help Sydney Mines families budget their heating costs throughout the year. Contact us to discuss options that work for your situation.
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
            Ready for Reliable Sydney Mines Heating Oil Service?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join thousands of satisfied Sydney Mines customers who trust Mercer Fuels for their heating oil needs.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" data-testid="button-call-cta-sydney-mines" asChild>
              <a href="tel:902-539-4242">
                <Phone className="mr-2 h-5 w-5" />
                Call (902) 539-4242
              </a>
            </Button>
            <Button size="lg" variant="outline" data-testid="button-consultation-cta-sydney-mines" asChild>
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