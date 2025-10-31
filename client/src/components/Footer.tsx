import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Mail, Facebook, Instagram, Calendar, Monitor, Gift, CheckCircle, ExternalLink, Star } from "lucide-react";
import { Link } from "wouter";
import tvImage from "@assets/latin-en-uhdtv-nu7100-un55nu7100pxpa-frontblack-121432531_1757983532255.webp";
import happyHomeLogo from "@assets/Untitled design_1757985657367.png";
import happyHomePhoto from "@assets/Untitled design (1)_1757985940405.png";
import ceeCeeGizmoTogether from "@assets/Untitled design (2)_1757986224778.png";
import gizmoSolo from "@assets/Untitled design (3)_1757986229050.png";
import ceeCeeSolo from "@assets/Untitled design (4)_1757986232735.png";
import mercerBadge from "@assets/MercerFuelsLogo-04_1757986812603.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Note: handleJotFormClick removed - buttons now use direct Link navigation

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Office Cats Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 mb-4 text-sm font-medium">
                Meet Our Celebrity Office Staff
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                CeeCee & Gizmo
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Our beloved office cats have been stealing hearts and supervising operations at Mercer Fuels. 
                From delivering Friday PSAs to supervising 50/50 draws, they're the purr-fect addition to our family business!
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {/* CeeCee & Gizmo Together */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={ceeCeeGizmoTogether} 
                  alt="CeeCee and Gizmo relaxing together"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    The Dynamic Duo
                  </h3>
                  <p className="text-gray-600 text-sm">
                    CeeCee and Gizmo enjoying some quality snuggle time between their important supervisory duties.
                  </p>
                </div>
              </div>

              {/* Gizmo Solo */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={gizmoSolo} 
                  alt="Gizmo the office cat"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Gizmo
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our dedicated supervisor who keeps a watchful eye on all office operations and 50/50 ticket sales.
                  </p>
                </div>
              </div>

              {/* CeeCee Solo */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={ceeCeeSolo} 
                  alt="CeeCee the office cat"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    CeeCee
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our official announcer who delivers Friday PSAs and loves making friends with customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-800">Customer Favorites</span>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                "We love coming to Mercer Fuels just to see CeeCee and Gizmo! They make every visit special and really show 
                what a caring, family business this is. You can tell this company has heart!"
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button 
                  asChild
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  data-testid="link-facebook-cats"
                >
                  <a 
                    href="https://www.facebook.com/MercerFuels/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    See More on Facebook
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TV Giveaway Section */}
      <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="flex justify-center lg:justify-start mb-4">
                <div className="bg-yellow-400/20 p-3 rounded-full backdrop-blur-sm">
                  <Gift className="h-10 w-10 text-yellow-300" />
                </div>
              </div>
              
              <h3 className="text-3xl lg:text-5xl font-bold leading-tight">
                <span className="text-yellow-300">Our Customers</span><br />
                <span className="text-cyan-300">Win TVs</span>
              </h3>
              
              <p className="text-xl text-white/90 max-w-xl">
                Every month from November to March, we give away a big screen TV to our amazing customers. 
                <span className="text-yellow-300 font-semibold"> In the last 10 years, we've given away over 60 TVs!</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-3 shadow-lg transform hover:scale-105 transition-all duration-200"
                  data-testid="button-order-to-enter"
                >
                  <Link href="/orderonline">Order Now To Enter</Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-purple-600 font-bold text-lg px-8 py-3 backdrop-blur-sm"
                  data-testid="button-become-customer"
                >
                  <Link href="/become-a-customer">Become A Customer</Link>
                </Button>
              </div>
            </div>
            
            {/* TV Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-cyan-400/20 blur-lg rounded-lg"></div>
                <img 
                  src={tvImage} 
                  alt="55 inch Samsung TV Prize"
                  className="relative max-w-full h-auto lg:max-w-md xl:max-w-lg drop-shadow-2xl"
                />
                <div className="absolute top-0 right-0 bg-yellow-500 text-black text-lg font-bold px-4 py-2 rounded-full transform rotate-12 shadow-lg">
                  WOW!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Happy Home Assistant Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-blue-50 to-white px-8 py-6 border-b border-gray-100 relative">
                <Badge className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs font-medium">
                  Meet Our Sister Company
                </Badge>
                
                <div className="pt-8 text-center">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <img 
                      src={happyHomeLogo} 
                      alt="Happy Home Assistant Logo"
                      className="h-24 w-auto object-contain"
                    />
                    <div className="text-left">
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        Happy Home Assistant
                      </div>
                      <p className="text-sm text-gray-600">
                        Trusted Home Appliance Cleaning Experts in Cape Breton
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Services Section */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-6">Our Services:</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">Heat Pump Cleaning</span>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">Dishwasher Cleaning</span>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">Washing Machine Cleaning</span>
                      </div>
                      <div className="text-center mt-4">
                        <span className="text-gray-600 text-sm">and more</span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Photo */}
                  <div className="text-center">
                    <img 
                      src={happyHomePhoto} 
                      alt="Happy Home Assistant Professional Technician"
                      className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                    />
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 font-medium">Professional & Certified</p>
                      <p className="text-xs text-gray-500 mt-1">Trusted service you can count on</p>
                    </div>
                  </div>

                  {/* Trust & CTAs Section */}
                  <div className="text-center">
                    {/* Trust Element */}
                    <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-lg font-bold text-gray-800">5.0</span>
                      </div>
                      <p className="text-gray-700 font-medium text-sm">
                        5-Star Rating across over 50 reviews<br />
                        Trusted by Mercer Fuels customers
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3">
                      <Button 
                        asChild
                        size="default"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
                        data-testid="button-happy-home-call"
                      >
                        <a href="tel:9025009828">
                          <Phone className="h-4 w-4 mr-2" />
                          Call (902) 500-9828
                        </a>
                      </Button>
                      <Button 
                        asChild
                        size="default"
                        variant="outline"
                        className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-sm py-2 rounded-lg transition-all"
                        data-testid="link-happy-home-website"
                      >
                        <a 
                          href="https://happyhomeassistant.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Website
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={mercerBadge} 
                    alt="Mercer Fuels Badge"
                    className="h-12 w-auto object-contain"
                  />
                  <h3 className="text-2xl font-bold text-primary-foreground">Mercer Fuels</h3>
                </div>
                <p className="text-primary-foreground/80 mb-4">
                  Three generations of reliable heating oil service in Cape Breton. 
                  When you become a customer, you become part of our family.
                </p>
                <div className="text-sm text-primary-foreground/60">
                  Family owned since the 1960s • 50+ years of trust
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Our Services</h4>
              <div className="space-y-2 text-sm">
                <div>• Automatic Oil Delivery</div>
                <div>• Emergency Same-Day Service</div>
                <div>• Furnace Cleaning & Maintenance</div>
                <div>• Equipment Installation</div>
                <div>• Equal Monthly Payment Plans</div>
                <div>• Text Message Reminders</div>
                <div>• Weather Warning Alerts</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Actions</h4>
              <div className="space-y-3">
                <Button 
                  asChild
                  variant="outline" 
                  size="default" 
                  className="w-full justify-start font-semibold border-2 border-primary-foreground/60 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all shadow-sm"
                  data-testid="button-credit-application"
                >
                  <Link href="/fuelapplication">Credit Application</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="default" 
                  className="w-full justify-start font-semibold border-2 border-primary-foreground/60 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all shadow-sm"
                  data-testid="button-furnace-insurance"
                >
                  <Link href="/insurance">Furnace Insurance Signup</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="default" 
                  className="w-full justify-start font-semibold border-2 border-primary-foreground/60 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all shadow-sm"
                  data-testid="button-order-online"
                >
                  <Link href="/orderonline">Order Online</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="default" 
                  className="w-full justify-start font-semibold border-2 border-primary-foreground/60 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all shadow-sm"
                  data-testid="button-pay-bill"
                >
                  <Link href="/billpayment">Pay My Bill</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="default" 
                  className="w-full justify-start font-semibold border-2 border-primary-foreground/60 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all shadow-sm"
                  data-testid="button-faq"
                >
                  <Link href="/faq">Frequently Asked Questions</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Cards Section */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <h4 className="text-lg font-semibold mb-6 text-center">Contact Information</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Card className="bg-primary-foreground/25 border-primary-foreground/40 shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-yellow-400" />
                    <span className="font-semibold text-yellow-400">Sydney Office</span>
                  </div>
                  <div className="text-sm text-primary-foreground/90">
                    64 Brookland Street<br />
                    Sydney, Nova Scotia<br />
                    B1P 5B2
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground/25 border-primary-foreground/40 shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-yellow-400" />
                    <span className="font-semibold text-yellow-400">Glace Bay Payment Center</span>
                  </div>
                  <div className="text-sm text-primary-foreground/90">
                    Petro-Canada<br />
                    195 Reserve Street<br />
                    Glace Bay, Nova Scotia
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground/25 border-primary-foreground/40 shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-5 w-5 text-yellow-400" />
                    <span className="font-semibold text-yellow-400">Phone Numbers</span>
                  </div>
                  <div className="text-sm text-primary-foreground/90">
                    Sydney: <a href="tel:902-539-4242" className="text-chart-2 hover:underline">902-539-4242</a><br />
                    Glace Bay: <a href="tel:902-849-2677" className="text-chart-2 hover:underline">902-849-2677</a><br />
                    <span className="text-chart-2 font-semibold">24/7 Emergency Service</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="text-sm text-primary-foreground/60">
                  © {currentYear} Mercer Fuels Ltd. All rights reserved.
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Link 
                    href="/privacy" 
                    className="text-primary-foreground/70 hover:text-chart-2 transition-colors"
                    data-testid="link-privacy"
                  >
                    Privacy Policy
                  </Link>
                  <span className="text-primary-foreground/40">•</span>
                  <Link 
                    href="/terms" 
                    className="text-primary-foreground/70 hover:text-chart-2 transition-colors"
                    data-testid="link-terms"
                  >
                    Terms of Use
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href="mailto:contact@mercerfuels.com"
                  className="flex items-center gap-2 text-sm hover:text-chart-2 transition-colors"
                  data-testid="link-email"
                >
                  <Mail className="h-4 w-4" />
                  contact@mercerfuels.com
                </a>
                
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-primary-foreground hover:text-chart-2"
                    data-testid="link-facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-primary-foreground hover:text-chart-2"
                    data-testid="link-instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}