import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

interface Review {
  name: string;
  location: string;
  text: string;
  rating: number;
  years?: string;
}

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
  reviews?: Review[];
  overallRating?: number;
  totalReviews?: number;
  googleLink?: string;
  facebookLink?: string;
}

const defaultReviews: Review[] = [
  {
    name: "Sarah MacLean",
    location: "Sydney, NS",
    text: "Three generations and they still treat us like family. Never run out of oil and the price is always fair.",
    rating: 5,
    years: "Customer for 12 years"
  },
  {
    name: "Mike Campbell", 
    location: "Glace Bay, NS",
    text: "Switched from Irving last year. Better service, better price, and they actually answer the phone when you call.",
    rating: 5,
    years: "Customer for 2 years"
  },
  {
    name: "Linda MacDonald",
    location: "New Waterford, NS", 
    text: "The automatic delivery is a lifesaver. I never have to worry about running out, especially during those cold snaps.",
    rating: 5,
    years: "Customer for 8 years"
  },
  {
    name: "Robert Morrison",
    location: "North Sydney, NS",
    text: "Local family business that actually cares. Try getting that from the big oil companies.",
    rating: 5,
    years: "Customer for 15 years"
  }
];

export default function ReviewsSection({
  title = "Real Reviews from Real Neighbors",
  subtitle = "Don't just take our word for it - hear from Cape Breton families who made the switch",
  reviews = defaultReviews,
  overallRating = 4.9,
  totalReviews = 847,
  googleLink = "https://www.google.com/search?q=mercer+fuels+reviews",
  facebookLink = "https://www.facebook.com/mercerfuels"
}: ReviewsSectionProps) {
  
  const renderStars = (rating: number, size: string = "w-4 h-4") => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`${size} ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>
          
          {/* Trust Panel */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 lg:gap-8 bg-gradient-to-r from-chart-2/10 to-chart-1/10 backdrop-blur-sm rounded-2xl px-4 py-3 md:px-8 md:py-6 border border-chart-2/20 shadow-lg max-w-sm md:max-w-3xl mx-auto">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex">
                {renderStars(5, "w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7")}
              </div>
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{overallRating}</span>
            </div>
            <div className="text-base md:text-lg lg:text-xl text-muted-foreground">
              <span className="font-semibold">{totalReviews.toLocaleString()}</span> reviews
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button variant="outline" size="default" asChild className="md:text-base">
                <a href={googleLink} target="_blank" rel="noopener noreferrer">
                  Google Reviews
                </a>
              </Button>
              <Button variant="outline" size="default" asChild className="md:text-base">
                <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-chart-2/40 mb-3" />
                  <p className="text-foreground leading-relaxed font-medium">
                    "{review.text}"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  {review.years && (
                    <p className="text-xs text-chart-2 font-medium">{review.years}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}