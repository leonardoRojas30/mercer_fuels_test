import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ExternalLink, Star } from "lucide-react";
import happyHomeLogo from "@assets/Happy Home Assistant Logo_1757984270701.png";

export default function HappyHomeAssistant() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-50 to-white px-8 py-8 border-b border-gray-100 text-center">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4 text-xs font-medium">
                Meet Our Sister Company
              </Badge>
              
              <div className="flex justify-center mb-2">
                <img 
                  src={happyHomeLogo} 
                  alt="Happy Home Assistant Logo"
                  className="h-32 w-auto object-contain"
                />
              </div>
              
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Trusted Home Appliance Cleaning Experts in Cape Breton
              </p>
            </div>

            {/* Content Section */}
            <div className="px-8 py-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
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

                {/* Trust & CTAs Section */}
                <div className="text-center">
                  {/* Trust Element */}
                  <div className="mb-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-lg font-bold text-gray-800">4.9</span>
                    </div>
                    <p className="text-gray-700 font-medium">
                      Trusted by Mercer Fuels customers
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-4">
                    <Button 
                      asChild
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                      data-testid="button-happy-home-call"
                    >
                      <a href="tel:9025009828">
                        <Phone className="h-5 w-5 mr-2" />
                        Call (902) 500-9828
                      </a>
                    </Button>
                    <Button 
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-lg py-3 rounded-lg transition-all"
                      data-testid="link-happy-home-website"
                    >
                      <a 
                        href="https://happyhomeassistant.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
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
  );
}