import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Shield, Clock, Users, Award, MapPin, Truck, AlertTriangle, Zap, Timer, PhoneCall } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function EmergencyHeatingOil() {


  const handleEmergencyCall = () => {
    window.location.href = "tel:902-539-4242";
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Emergency Heating Oil Delivery Cape Breton | Same-Day Service 24/7 | Mercer Fuels</title>
        <meta name="description" content="Ran out of heating oil? Emergency 24/7 heating oil delivery across Cape Breton. Same-day service available. Call (902) 539-4242 now for immediate delivery to Sydney, Glace Bay, and all Cape Breton communities." />
        <meta name="keywords" content="emergency heating oil delivery Cape Breton, same day heating oil delivery, 24/7 heating oil service, ran out of heating oil Sydney, emergency oil delivery Glace Bay, urgent heating oil Cape Breton, immediate oil delivery Nova Scotia, heating oil emergency service" />
        <link rel="canonical" href="https://mercerfuels.com/emergency-heating-oil-delivery" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Emergency Heating Oil Delivery Cape Breton - Same-Day Service" />
        <meta property="og:description" content="24/7 emergency heating oil delivery across Cape Breton. Same-day service when you need it most. Call (902) 539-4242 now." />
        <meta property="og:url" content="https://mercerfuels.com/emergency-heating-oil-delivery" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Emergency Heating Oil Delivery Cape Breton - Mercer Fuels 24/7 Service" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emergency Heating Oil Delivery Cape Breton - Same-Day Service" />
        <meta name="twitter:description" content="24/7 emergency heating oil delivery across Cape Breton. Same-day service when you need it most. Call (902) 539-4242 now." />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Emergency Heating Oil Delivery Cape Breton" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Emergency Heating Oil Delivery Cape Breton",
          "description": "24/7 emergency heating oil delivery service across Cape Breton with same-day delivery available",
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
          "serviceType": "Emergency Heating Oil Delivery",
          "hoursAvailable": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
          "availableChannel": {
            "@type": "ServiceChannel",
            "servicePhone": "+1-902-539-4242",
            "availableLanguage": "English"
          }
        })}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Emergency Hero Section */}
      <section className="relative">
        <div 
          className="relative min-h-[600px] md:min-h-[600px] lg:min-h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(48, 99, 82, 0.8), rgba(38, 79, 66, 0.8)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center pt-[70px] pb-8 md:pt-28 md:pb-12 lg:pt-16">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <Badge className="bg-primary text-primary-foreground mb-4 animate-pulse" data-testid="badge-emergency">
                <AlertTriangle className="w-4 h-4 mr-2" />
                24/7 Emergency Service
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="heading-main">
                <span className="text-chart-2">Ran Out</span> of Heating Oil?
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100" data-testid="text-hero-description">
                Don't panic! Same-day emergency delivery available across Cape Breton. Local family business with 50+ years of keeping families warm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-chart-2 border-chart-2 text-gray-900 font-bold px-8 py-4 text-lg animate-pulse" onClick={handleEmergencyCall} data-testid="button-emergency-call">
                  <PhoneCall className="w-6 h-6 mr-2" />
                  CALL NOW: (902) 539-4242
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white px-8 py-4 text-lg" onClick={handleEmergencyCall} data-testid="button-emergency-call-2">
                  <Timer className="w-6 h-6 mr-2" />
                  Call for Emergency Service
                </Button>
              </div>
              <p className="mt-4 text-lg text-chart-2 font-semibold" data-testid="text-response-time">
                ⚡ We respond within 15 minutes • Same-day delivery when possible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Promise */}
      <section className="py-16 bg-chart-2/5 border-l-4 border-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="heading-promise">
              Our Emergency Response Promise
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto" data-testid="text-promise-intro">
              When Cape Breton families need heating oil fast, we deliver. Here's exactly what happens when you call:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center" data-testid="step-immediate-response">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">1. Immediate Response</h3>
              <p className="text-gray-700">Real person answers your emergency call. No phone trees, no waiting. We take your information and start coordinating immediately.</p>
              <Badge className="mt-2 bg-primary text-primary-foreground">Within 15 minutes</Badge>
            </div>

            <div className="text-center" data-testid="step-dispatch">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">2. Truck Dispatch</h3>
              <p className="text-gray-700">Our local Cape Breton trucks are dispatched to your location. We know every street and the fastest routes to get to you.</p>
              <Badge className="mt-2 bg-primary text-primary-foreground">Same day when possible</Badge>
            </div>

            <div className="text-center" data-testid="step-delivery">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">3. Fast Delivery</h3>
              <p className="text-gray-700">Professional delivery to your tank. We'll check your heating system and make sure everything is working properly.</p>
              <Badge className="mt-2 bg-primary text-primary-foreground">Professional service</Badge>
            </div>

            <div className="text-center" data-testid="step-follow-up">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">4. Follow-up Care</h3>
              <p className="text-gray-700">We'll call to make sure your heat is back on and discuss automatic delivery so this never happens again.</p>
              <Badge className="mt-2 bg-primary text-primary-foreground">Peace of mind</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergencies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-why-choose">
              Why Cape Breton Trusts Us for Emergency Heating Oil
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-why-choose-intro">
              When your family is cold and needs heating oil fast, these advantages make all the difference:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate" data-testid="card-local-advantage">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">Local Cape Breton Team</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No regional dispatch delays. Our trucks are based right here in Cape Breton, meaning faster response times when you need heating oil most. We know every street and weather condition.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-24-7-service">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-chart-2" />
                  <CardTitle className="text-xl">True 24/7 Availability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Real 24/7 emergency service, not just an answering machine. Our Cape Breton team responds to heating emergencies evenings, weekends, and holidays.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-weather-expertise">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">Cape Breton Weather Experts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  50+ years of Cape Breton winters. We know how to deliver heating oil safely in snowstorms, ice storms, and extreme cold when other companies can't.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-same-day-delivery">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Truck className="w-8 h-8 text-chart-2" />
                  <CardTitle className="text-xl">Same-Day Delivery</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  When possible, we deliver same-day emergency heating oil. Local business efficiency and direct relationships with suppliers mean we can move fast.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-personal-service">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">Personal Service</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  You're not just an account number in an emergency. Our team knows Cape Breton families personally and genuinely cares about keeping you warm.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-experienced-team">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-chart-2" />
                  <CardTitle className="text-xl">Experienced Team</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our delivery team has decades of experience with Cape Breton properties, heating systems, and tank configurations. Fast, safe, professional service.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Situations We Handle */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-situations">
              Emergency Heating Oil Situations We Handle
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-situations-intro">
              Whatever your heating emergency, we've seen it before and know how to help:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4" data-testid="situation-tank-empty">
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tank Ran Completely Dry</h3>
                  <p className="text-gray-600">Furnace won't start, gauges show empty. We'll deliver immediately and help you restart your heating system safely.</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="situation-gauge-broken">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Timer className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gauge Issues or Unexpected Usage</h3>
                  <p className="text-gray-600">Thought you had oil but didn't? Broken gauge? Higher than expected usage? We'll deliver and figure out what happened.</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="situation-storm-preparation">
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Storm Emergency Top-Up</h3>
                  <p className="text-gray-600">Storm coming and oil level is low? We'll deliver before the storm hits to ensure you have enough heating oil to weather it.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4" data-testid="situation-furnace-repair">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Furnace Repair Complications</h3>
                  <p className="text-gray-600">Furnace repairs used up your oil supply? Need emergency delivery while repairs are underway? We coordinate with repair technicians.</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="situation-delivery-missed">
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Missed Scheduled Delivery</h3>
                  <p className="text-gray-600">Other company missed their delivery appointment and now you're out of oil? We'll get you emergency heating oil while you sort things out.</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="situation-new-home">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">New Home or Moved Recently</h3>
                  <p className="text-gray-600">Just moved to Cape Breton? New to oil heating? Tank emptier than expected? We'll get you set up with emergency delivery and ongoing service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Information - PHONE ONLY */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" data-testid="heading-emergency-service">
                Emergency Heating Oil Service - Call Only
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="text-phone-only-intro">
                For your safety and to ensure fastest response, all emergency deliveries must be ordered by phone.
              </p>
              
              <div className="bg-primary text-primary-foreground rounded-xl p-8 mb-8">
                <div className="flex flex-col items-center gap-4">
                  <PhoneCall className="w-16 h-16 text-chart-2" />
                  <h3 className="text-2xl font-bold">Call Now for Emergency Service</h3>
                  <Button size="lg" className="bg-primary border-primary text-primary-foreground font-bold px-8 py-4 text-xl" onClick={handleEmergencyCall} data-testid="button-main-emergency-call">
                    <Phone className="w-6 h-6 mr-2" />
                    (902) 539-4242
                  </Button>
                  <p className="text-lg text-gray-200">Our phone lines are staffed 24/7 - A real person will answer</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover-elevate" data-testid="card-automatic-customers">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-primary" />
                    <CardTitle className="text-xl">Automatic Delivery Customers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <strong className="text-green-600">✓ True 24/7 Emergency Service</strong><br/>
                    If you're signed up for automatic delivery, we provide genuine 24-hour emergency heating oil delivery, 7 days a week, including holidays and overnight hours.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-call-in-customers">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Timer className="w-8 h-8 text-primary" />
                    <CardTitle className="text-xl">Call-In Delivery Customers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <strong className="text-primary">Winter After-Hours Service:</strong><br/>
                    • Weeknight emergencies: 5:00 PM - 7:00 PM<br/>
                    • Weekend emergencies: 8:00 AM - 5:00 PM<br/>
                    • Our phone lines are always open for emergency calls
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="bg-chart-2/5 border-l-4 border-chart-2 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-chart-2 mb-2">Why Phone-Only for Emergencies?</h3>
                  <ul className="text-chart-2/80 space-y-1">
                    <li>• Immediate dispatch - no waiting for forms to be processed</li>
                    <li>• Real-time coordination with our delivery trucks</li>
                    <li>• Ability to ask specific questions about your situation</li>
                    <li>• Instant confirmation of service availability in your area</li>
                    <li>• Safety protocols require voice verification for emergency deliveries</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="heading-coverage">
              Emergency Delivery Coverage Area
            </h2>
            <p className="text-xl text-primary/80" data-testid="text-coverage-intro">
              We provide 24/7 emergency heating oil delivery throughout Cape Breton:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white p-6 rounded-lg shadow" data-testid="area-sydney-region">
              <h3 className="text-xl font-bold text-primary mb-3">Sydney Region</h3>
              <ul className="text-primary/80 space-y-1">
                <li>Sydney</li>
                <li>Sydney River</li>
                <li>South Bar</li>
                <li>Whitney Pier</li>
                <li>Ashby</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow" data-testid="area-industrial-region">
              <h3 className="text-xl font-bold text-primary mb-3">Industrial Cape Breton</h3>
              <ul className="text-primary/80 space-y-1">
                <li>Glace Bay</li>
                <li>New Waterford</li>
                <li>Sydney Mines</li>
                <li>North Sydney</li>
                <li>Dominion</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow" data-testid="area-rural-communities">
              <h3 className="text-xl font-bold text-primary mb-3">Rural Communities</h3>
              <ul className="text-primary/80 space-y-1">
                <li>Donkin</li>
                <li>Port Morien</li>
                <li>Birch Grove</li>
                <li>Reserve Mines</li>
                <li>And surrounding areas</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-primary/80 text-lg" data-testid="text-coverage-note">
              Not sure if we deliver to your area? <strong>Call (902) 539-4242</strong> - if we can't help immediately, we'll refer you to someone who can.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}