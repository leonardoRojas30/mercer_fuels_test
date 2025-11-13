import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Shield, Clock, Users, Award, MapPin, Truck, AlertTriangle, Heart } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function SwitchFromUltramar() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll call you within 24 hours to discuss switching to local family service.");
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Switch from Ultramar to Local Family Service | Better Prices & Personal Attention | Mercer Fuels</title>
        <meta name="description" content="Tired of Ultramar's corporate service and high prices? Switch to Mercer Fuels for personal attention, competitive pricing, and 50+ years of family-owned reliability in Cape Breton. Compare the difference." />
        <meta name="keywords" content="switch from Ultramar, Ultramar alternative Cape Breton, better than Ultramar heating oil, local oil company vs Ultramar, family owned heating oil, personal service heating oil, competitive oil prices Cape Breton, heating oil customer service problems" />
        <link rel="canonical" href="https://mercerfuels.com/switch-from-ultramar" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Switch from Ultramar to Local Family Service - Mercer Fuels" />
        <meta property="og:description" content="Tired of corporate service? Switch to family-owned heating oil service with personal attention and competitive prices." />
        <meta property="og:url" content="https://mercerfuels.com/switch-from-ultramar" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Switch from Ultramar to Mercer Fuels - Local Family Business Alternative" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Switch from Ultramar to Local Family Service - Mercer Fuels" />
        <meta name="twitter:description" content="Tired of corporate service? Switch to family-owned heating oil service with personal attention and competitive prices." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Switch from Ultramar to Mercer Fuels" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Switch from Ultramar to Local Heating Oil Service",
          "description": "Local family-owned heating oil service alternative to corporate providers with personal attention and competitive pricing",
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
          <div className="absolute inset-0 flex items-center justify-center pt-[70px] pb-8 md:pt-28 md:pb-12 lg:pt-16">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <Badge className="bg-orange-600 text-white mb-4" data-testid="badge-switch-offer">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Tired of Corporate Service?
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-main">
                Switch from <span className="text-orange-400">Ultramar</span> to Local Family Service
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200" data-testid="text-hero-description">
                Stop being just another account number. Get the personal attention and competitive prices you deserve from Cape Breton's most trusted family-owned heating oil company.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-600 text-white px-8 py-3" data-testid="button-switch-consultation">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Your Switching Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white px-8 py-3" asChild data-testid="button-call-now">
                  <a href="tel:902-539-4242">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: (902) 539-4242
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-why-switch">
              Why Cape Breton Families Are Switching to Mercer Fuels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-switch-intro">
              After 50+ years serving Cape Breton, we know the difference personal service makes. Here's what you get when you switch from corporate to family-owned:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate" data-testid="card-personal-service">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-orange-600" />
                  <CardTitle className="text-xl">Personal Service</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <strong>With Ultramar:</strong> Call center, automated systems, account numbers<br/><br/>
                  <strong className="text-orange-600">With Mercer Fuels:</strong> You know our team by name. We know your heating needs, your property, and your family.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-response-time">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-orange-600" />
                  <CardTitle className="text-xl">Faster Response</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <strong>With Ultramar:</strong> Regional call centers, delayed callbacks, scheduling delays<br/><br/>
                  <strong className="text-orange-600">With Mercer Fuels:</strong> Local team answers your calls. Emergency service available 24/7. Same-day delivery when possible.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-competitive-pricing">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-orange-600" />
                  <CardTitle className="text-xl">Competitive Pricing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <strong>With Ultramar:</strong> Corporate overhead, standardized pricing<br/><br/>
                  <strong className="text-orange-600">With Mercer Fuels:</strong> Local family business efficiency means better prices. No hidden fees, transparent pricing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Comparison - Problem/Solution Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Header with Stats Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm mb-4" data-testid="badge-switchers">
              <Users className="w-4 h-4" />
              200+ Families Switched from Ultramar This Year
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-comparison">
              See Why Cape Breton Families Are Switching
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-comparison-intro">
              Real problems with corporate service — and how Mercer Fuels solves them.
            </p>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            
            {/* Comparison 1: Customer Service */}
            <Card className="overflow-hidden border-0 shadow-lg hover-elevate transition-all duration-300" data-testid="card-comparison-service">
              <div className="bg-gray-100 px-5 py-3 border-b-2 border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">✗</div>
                  <span className="text-sm font-medium">Call center, long waits, endless transfers</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-6 text-white">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-600 text-lg font-bold flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Direct Line to Local Team</h3>
                    <p className="text-white/95 text-sm leading-relaxed">
                      Call (902) 539-4242 and speak to our Cape Breton team immediately. No phone trees, no hold music — just personal relationships and immediate attention.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Comparison 2: Emergency Response */}
            <Card className="overflow-hidden border-0 shadow-lg hover-elevate transition-all duration-300" data-testid="card-comparison-emergency">
              <div className="bg-gray-100 px-5 py-3 border-b-2 border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">✗</div>
                  <span className="text-sm font-medium">Regional dispatch, potential delays</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-6 text-white">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-600 text-lg font-bold flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Local 24/7 Emergency Service</h3>
                    <p className="text-white/95 text-sm leading-relaxed">
                      Our Cape Breton team responds directly to your emergency. No routing through regional offices. Same-day delivery when possible because we're right here.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Comparison 3: Delivery Flexibility */}
            <Card className="overflow-hidden border-0 shadow-lg hover-elevate transition-all duration-300" data-testid="card-comparison-flexibility">
              <div className="bg-gray-100 px-5 py-3 border-b-2 border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">✗</div>
                  <span className="text-sm font-medium">Standardized routes, limited flexibility</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-6 text-white">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-600 text-lg font-bold flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Flexible Scheduling</h3>
                    <p className="text-white/95 text-sm leading-relaxed">
                      We accommodate your needs and know your property. Need a specific delivery time? Have special access requirements? We work with you, not against you.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Comparison 4: Local Knowledge */}
            <Card className="overflow-hidden border-0 shadow-lg hover-elevate transition-all duration-300" data-testid="card-comparison-knowledge">
              <div className="bg-gray-100 px-5 py-3 border-b-2 border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">✗</div>
                  <span className="text-sm font-medium">Regional operations, limited local expertise</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-6 text-white">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-600 text-lg font-bold flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">50+ Years Cape Breton Experience</h3>
                    <p className="text-white/95 text-sm leading-relaxed">
                      We know every street, every weather pattern, every delivery challenge in Cape Breton. Born and raised here — true local expertise you can trust.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Comparison 5: Pricing */}
            <Card className="overflow-hidden border-0 shadow-lg hover-elevate transition-all duration-300" data-testid="card-comparison-pricing">
              <div className="bg-gray-100 px-5 py-3 border-b-2 border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">✗</div>
                  <span className="text-sm font-medium">Corporate pricing, potential hidden fees</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-6 text-white">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-600 text-lg font-bold flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Transparent, Competitive Pricing</h3>
                    <p className="text-white/95 text-sm leading-relaxed">
                      No corporate overhead or hidden fees. Family business efficiency means better prices for Cape Breton families. Clear, honest pricing every time.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Comparison 6: Personal Relationships */}
            <Card className="overflow-hidden border-0 shadow-lg hover-elevate transition-all duration-300" data-testid="card-comparison-personal">
              <div className="bg-gray-100 px-5 py-3 border-b-2 border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">✗</div>
                  <span className="text-sm font-medium">You're just an account number</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-6 text-white">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-600 text-lg font-bold flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">We Know You by Name</h3>
                    <p className="text-white/95 text-sm leading-relaxed">
                      Personal relationships matter. We remember your heating needs, your property details, and your family. You're a valued neighbor, not account #47291853.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Switching Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-switching-process">
              Switching is Easy - We Handle Everything
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-switching-intro">
              No hassle, no interruption to your heating service. Here's how simple it is:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="step-consultation">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
              <p className="text-gray-600">Call us or fill out our form. We'll discuss your current service and show you the Mercer difference.</p>
            </div>

            <div className="text-center" data-testid="step-pricing">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Pricing Comparison</h3>
              <p className="text-gray-600">We'll provide transparent pricing and show you how much you can save with local family service.</p>
            </div>

            <div className="text-center" data-testid="step-setup">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">We Handle Setup</h3>
              <p className="text-gray-600">We coordinate the transition, set up your account, and ensure seamless service continuation.</p>
            </div>

            <div className="text-center" data-testid="step-service">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Better Service Starts</h3>
              <p className="text-gray-600">Experience the difference of personal attention, competitive pricing, and local reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg" data-testid="card-consultation-form">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900" data-testid="heading-form">
                  Ready to Switch? Talk to a Heating Expert
                </CardTitle>
                <CardDescription className="text-lg" data-testid="text-form-description">
                  Get your free switching consultation and see how much you can save with local family service. No pressure, just honest advice.
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                        data-testid="input-first-name"
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
                        data-testid="input-last-name"
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
                      data-testid="input-phone"
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
                      data-testid="input-email"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-orange-600 text-white py-3" data-testid="button-submit-consultation">
                    <Phone className="w-5 h-5 mr-2" />
                    Get My Free Switching Consultation
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center" data-testid="text-consultation-promise">
                    We'll call you within 24 hours to discuss your switching options. No pressure, no sales pitch - just honest advice from Cape Breton's heating oil experts.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="heading-trust">
              Join Hundreds of Cape Breton Families Who've Made the Switch
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-elevate" data-testid="card-testimonial-1">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-orange-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Switched from Ultramar last winter. The difference is night and day. When I call Mercer, I get a real person who knows my name and my heating needs. Never going back to corporate service!"
                </p>
                <p className="font-semibold text-gray-900">- Sarah M., Glace Bay</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-testimonial-2">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-orange-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The personal service is incredible. They know our property, remember our delivery preferences, and actually care about keeping us warm. Corporate companies just can't compete with that."
                </p>
                <p className="font-semibold text-gray-900">- Mike R., Sydney</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-testimonial-3">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-orange-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Best decision we made was switching to Mercer. Better prices, faster service, and they treat you like family instead of just another account number. Wish we'd switched years ago!"
                </p>
                <p className="font-semibold text-gray-900">- Jennifer L., North Sydney</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}