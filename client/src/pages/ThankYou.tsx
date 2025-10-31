import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const capeBretonnImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function ThankYou() {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Thank You - Mercer Fuels | We Appreciate Your Business"
        description="Thank you for choosing Mercer Fuels for your heating oil needs. We appreciate your business and support for local Cape Breton service."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-green-600">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-chart-2">
                Thank You!
              </h1>
              <p className="text-xl text-gray-700 font-medium">
                We appreciate your business - Thank you for supporting local!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="shadow-lg hover-elevate bg-chart-2 hover:bg-chart-2 text-white"
                  data-testid="button-leave-review"
                >
                  <a 
                    href="https://g.page/r/CeTuFRjJleROEAg/review" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Star className="mr-2 h-5 w-5" />
                    Leave a Review
                  </a>
                </Button>
                
                <Button 
                  asChild 
                  size="lg" 
                  variant="default"
                  className="shadow-lg hover-elevate"
                  data-testid="button-refer-friend"
                >
                  <a 
                    href="https://mercerfuels.com/refer-a-friend/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Earn $100 - Refer A Friend
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground pt-2">
                If you are happy with Mercer Fuels' service, please consider referring a friend or leaving a review!
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div 
                className="aspect-[4/3] rounded-lg shadow-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url(${capeBretonnImage})`,
                  clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
