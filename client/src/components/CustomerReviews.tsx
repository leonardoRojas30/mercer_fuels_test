import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
import { Link } from "wouter";

const realReviews = [
  {
    name: "Edwina G.",
    location: "Cape Breton, NS",
    rating: 5,
    text: "Mercers are the best oil company i have dealt with. Last winter they even left a note in my mailbox thanking me for having everything shoveled with a few candy in a baggy. Very thoughtful",
    source: "Google",
    date: "2025"
  },
  {
    name: "Justine H.", 
    location: "Cape Breton, NS",
    rating: 5,
    text: "I am very happy I switched to Mercer, great service and local. I like supporting local whenever possible.",
    source: "Google",
    date: "2025"
  },
  {
    name: "Vivian M.",
    location: "Cape Breton, NS", 
    rating: 5,
    text: "I have been with Mercer Fuels now for a very long time and they definitely go above and beyond for their customers. Staff are always helpful and friendly, they have great customer service and if one runs out of oil, there is no waiting, oil is delivered that day. I would highly recommend Mercer Fuels to everyone.",
    source: "Google",
    date: "2025"
  },
  {
    name: "Sandra M.",
    location: "Cape Breton, NS",
    rating: 5,
    text: "You folks are simply the best…excellent service, eager to oblige and the greatest of personalities to deal with!!! Thanks for all you do💕💕 (PS…not enough stars…you truly need more)",
    source: "Google", 
    date: "2025"
  }
];

export default function CustomerReviews() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Real Reviews from Real Neighbors
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            More 5-star reviews than any other oil company in Cape Breton. See what your neighbors are saying about our family service.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              asChild
              data-testid="button-google-reviews"
              className="flex items-center gap-2"
            >
              <a href="https://share.google/30Tf1IbsDcEFulTlq" target="_blank" rel="noopener noreferrer">
                <Star className="h-4 w-4" />
                Google Reviews
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="outline"
              asChild
              data-testid="button-facebook-reviews"
              className="flex items-center gap-2"
            >
              <a href="https://www.facebook.com/MercerFuels/reviews" target="_blank" rel="noopener noreferrer">
                Facebook Reviews
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {realReviews.map((review, index) => (
            <Card key={index} className="hover-elevate border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {review.source} • {review.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{review.text}</p>
                    <div className="text-sm font-medium">
                      {review.name}
                      <span className="text-muted-foreground ml-1">• {review.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-6 p-6 bg-gradient-to-r from-chart-2/10 to-chart-2/5 rounded-xl">
            <div className="text-3xl font-bold text-chart-2 mb-2">5.0/5 Stars</div>
            <div className="text-lg text-foreground font-medium">Cape Breton's Most Trusted Oil Company</div>
            <div className="text-sm text-muted-foreground mt-2">Based on 200+ Google Reviews</div>
          </div>
          <Button 
            asChild
            size="lg"
            className="bg-chart-2 hover:bg-chart-2/90 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
            data-testid="button-join-customers"
          >
            <Link href="/become-a-customer">Start Your Service Today</Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Join 1000+ satisfied families across Cape Breton
          </p>
        </div>
      </div>
    </section>
  );
}