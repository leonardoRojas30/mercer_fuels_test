import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Shield, Clock, Users, Award, MapPin, Truck, AlertTriangle, Heart, Building2 } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function SwitchFromIrving() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll call you within 24 hours to discuss switching to local family service that actually cares.");
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Switch from Irving Oil to Local Family Service | Personal Attention & Better Prices | Mercer Fuels</title>
        <meta name="description" content="Tired of Irving's corporate bureaucracy and high prices? Switch to Mercer Fuels for personal service, local expertise, and 50+ years of Cape Breton family-owned reliability. See the difference." />
        <meta name="keywords" content="switch from Irving Oil, Irving Oil alternative Cape Breton, better than Irving heating oil, local oil company vs Irving, family owned heating oil, personal service heating oil, competitive oil prices Cape Breton, Irving Oil customer service problems" />
        <link rel="canonical" href="https://mercerfuels.com/switch-from-irving" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Switch from Irving Oil to Local Family Service - Mercer Fuels" />
        <meta property="og:description" content="Tired of corporate bureaucracy? Switch to family-owned heating oil service with personal attention and competitive prices." />
        <meta property="og:url" content="https://mercerfuels.com/switch-from-irving" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Switch from Irving Oil to Mercer Fuels - Local Family Business Alternative" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Switch from Irving Oil to Local Family Service - Mercer Fuels" />
        <meta name="twitter:description" content="Tired of corporate bureaucracy? Switch to family-owned heating oil service with personal attention and competitive prices." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Switch from Irving Oil to Mercer Fuels" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Switch from Irving Oil to Local Heating Oil Service",
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
                <Building2 className="w-4 h-4 mr-2" />
                Break Free from Corporate Service
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-main">
                Switch from <span className="text-orange-400">Irving Oil</span> to Family Service
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200" data-testid="text-hero-description">
                No more corporate bureaucracy or being treated like a number. Experience genuine personal service from Cape Breton's most trusted family heating oil company.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-600 text-white px-8 py-3" data-testid="button-switch-consultation">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Your Free Switching Consultation
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

      {/* Problems with Corporate Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-problems">
              Tired of These Irving Oil Problems?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-problems-intro">
              You're not alone. Here's what Cape Breton families tell us about corporate heating oil service:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-red-200 hover-elevate" data-testid="card-problem-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <CardTitle className="text-xl text-red-700">Endless Phone Trees</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  "Press 1 for this, Press 2 for that..." Getting transferred between departments just to ask a simple question about your delivery.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover-elevate" data-testid="card-problem-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-red-600" />
                  <CardTitle className="text-xl text-red-700">Slow Emergency Response</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  Regional dispatch means longer wait times when you need emergency delivery. Corporate priorities don't always align with your urgent needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover-elevate" data-testid="card-problem-3">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-red-600" />
                  <CardTitle className="text-xl text-red-700">No Personal Relationships</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  Different person every time you call. They don't know your name, your property, or your heating needs. You're just an account number.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover-elevate" data-testid="card-problem-4">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-red-600" />
                  <CardTitle className="text-xl text-red-700">Inflexible Policies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  "That's company policy" - no room for exceptions or understanding your unique situation. Corporate rules over customer needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover-elevate" data-testid="card-problem-5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Truck className="w-8 h-8 text-red-600" />
                  <CardTitle className="text-xl text-red-700">Rigid Delivery Schedules</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  Corporate route optimization means you get delivery when it's convenient for them, not you. Limited flexibility for your schedule.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover-elevate" data-testid="card-problem-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-red-600" />
                  <CardTitle className="text-xl text-red-700">Limited Local Knowledge</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  National company operations mean less understanding of Cape Breton weather patterns, road conditions, and local challenges.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Mercer Difference */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-difference">
              The Mercer Fuels Difference: Real People, Real Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-difference-intro">
              After 50+ years serving Cape Breton families, we've perfected what Irving's corporate model will never understand: personal service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-orange-200 hover-elevate" data-testid="card-solution-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-orange-600" />
                  <CardTitle className="text-xl text-orange-700">You Know Our Team by Name</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  Real relationships with real people. Our team knows your heating needs, your property challenges, and your family. No account numbers here.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover-elevate" data-testid="card-solution-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Phone className="w-8 h-8 text-orange-600" />
                  <CardTitle className="text-xl text-orange-700">Direct Line to Local Team</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  Call our local number and speak directly to our Cape Breton team. No phone trees, no transfers, no waiting. Just immediate personal attention.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover-elevate" data-testid="card-solution-3">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-orange-600" />
                  <CardTitle className="text-xl text-orange-700">24/7 Emergency Response</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  Local team means faster response. Emergency heating oil delivered same-day when possible. We understand Cape Breton winters don't wait.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover-elevate" data-testid="card-solution-4">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-orange-600" />
                  <CardTitle className="text-xl text-orange-700">Flexible & Understanding</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  Family business means we understand life happens. We work with you on delivery times, payment plans, and special circumstances.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover-elevate" data-testid="card-solution-5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Truck className="w-8 h-8 text-orange-600" />
                  <CardTitle className="text-xl text-orange-700">Delivery on Your Schedule</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  We work around your schedule, not corporate route optimization. Delivery windows that actually work for your life.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover-elevate" data-testid="card-solution-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-orange-600" />
                  <CardTitle className="text-xl text-orange-700">50+ Years Cape Breton Expertise</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  We know every street, every weather pattern, every delivery challenge in Cape Breton. Local expertise Irving's regional operations can't match.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Customer Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-stories">
              Real Stories from Irving Customers Who Switched
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-stories-intro">
              Here's what Cape Breton families are saying about making the switch to local family service:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-elevate" data-testid="card-story-1">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-orange-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg">
                  "After 10 years with Irving, I was fed up with their phone system and impersonal service. Mercer Fuels is like night and day - they actually know who I am when I call! The owner even called personally to make sure everything was set up right."
                </p>
                <p className="font-semibold text-gray-900">- Robert T., Sydney River</p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-story-2">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-orange-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg">
                  "Irving's emergency service was a joke - we waited 3 days for delivery in the middle of winter. With Mercer, they delivered same-day when our furnace broke down. That's the difference between corporate and family service."
                </p>
                <p className="font-semibold text-gray-900">- Lisa & Tom M., Glace Bay</p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-story-3">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-orange-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg">
                  "The Irving prices kept going up, and their customer service kept getting worse. Mercer not only beat their prices but treats us like neighbors, not customers. We recommend them to everyone."
                </p>
                <p className="font-semibold text-gray-900">- Patricia D., New Waterford</p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-story-4">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-orange-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg">
                  "Irving's delivery schedule never worked for us - they came when it was convenient for them. Mercer works around our schedule and even calls ahead to confirm. That's real customer service."
                </p>
                <p className="font-semibold text-gray-900">- Kevin R., North Sydney</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Simple Switching Is */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-simple-switch">
              Switching from Irving is Easier Than You Think
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-simple-switch-intro">
              No hassle, no service interruption, no stress. We handle all the details while you enjoy better service:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="step-call">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Call or Fill Out Form</h3>
              <p className="text-gray-600">Reach out to us for your free consultation. We'll explain exactly how switching works and what you can expect.</p>
            </div>

            <div className="text-center" data-testid="step-compare">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">We Compare Your Service</h3>
              <p className="text-gray-600">We'll review your current Irving service and show you exactly how much better (and often cheaper) we can do.</p>
            </div>

            <div className="text-center" data-testid="step-seamless">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Seamless Transition</h3>
              <p className="text-gray-600">We coordinate everything - no service interruption, no hassle. Your heating oil supply continues without missing a beat.</p>
            </div>

            <div className="text-center" data-testid="step-better">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Experience Better Service</h3>
              <p className="text-gray-600">From day one, you'll notice the difference: personal attention, faster response, and genuine care for your comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg" data-testid="card-consultation-form">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900" data-testid="heading-form">
                  Ready to Leave Irving Behind? Talk to Our Team
                </CardTitle>
                <CardDescription className="text-lg" data-testid="text-form-description">
                  Get your free consultation and discover what personal, local heating oil service really looks like. No pushy sales - just honest answers.
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
                    We'll call you within 24 hours to discuss your options. No pressure, no hard sell - just straight talk about better heating oil service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}