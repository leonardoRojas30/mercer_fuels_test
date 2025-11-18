import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tv, Gift, CheckCircle, Users, Trophy, Star, ShoppingCart } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const heroImage = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";

export default function TvGiveaways() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>TV Giveaways - Win Big-Screen TVs Every Month | Mercer Fuels Cape Breton</title>
        <meta name="description" content="Win big-screen TVs monthly! Mercer Fuels customers are automatically entered when ordering heating oil. We've given away 60+ TVs in 10 years. Serving Sydney & Cape Breton, Nova Scotia." />
        <meta name="keywords" content="TV giveaway Cape Breton, heating oil contest Sydney, win TV Nova Scotia, Mercer Fuels giveaway, monthly TV draw Cape Breton, heating oil prizes Sydney NS" />
        <link rel="canonical" href="https://mercerfuels.com/tv-giveaways" />
        
        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Mercer Fuels" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Win Big-Screen TVs Every Month! TV Giveaways | Mercer Fuels" />
        <meta property="og:description" content="Mercer Fuels customers automatically enter to win TVs monthly when ordering heating oil. 60+ TVs given away in 10 years!" />
        <meta property="og:url" content="https://mercerfuels.com/tv-giveaways" />
        <meta property="og:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mercer Fuels TV Giveaways" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Win Big-Screen TVs Every Month | Mercer Fuels Cape Breton" />
        <meta name="twitter:description" content="Automatic entry when you order heating oil. 60+ TVs given away in 10 years!" />
        <meta name="twitter:image" content="https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png" />
        <meta name="twitter:image:alt" content="Mercer Fuels TV Giveaways" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative min-h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.75), rgba(30, 41, 59, 0.75)), url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-0"></div>
          
          <div className="relative z-10 container mx-auto px-4 lg:px-6 py-16 lg:py-20">
            <div className="max-w-4xl mx-auto text-center text-white space-y-6">
              <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30 text-lg px-6 py-2" data-testid="badge-tv-giveaway">
                <Trophy className="w-5 h-5 mr-2" />
                Monthly TV Giveaways
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" data-testid="heading-main">
                Our Customers <span className="text-chart-2">Win TVs</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Every month during heating season, one lucky customer wins a brand new big-screen TV. Simply order heating oil and you're automatically entered!
              </p>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button 
                  asChild
                  size="lg"
                  className="bg-chart-2 hover:bg-chart-2/90 text-white font-bold border-2 border-chart-2"
                  data-testid="button-hero-become-customer"
                >
                  <Link href="/become-a-customer">
                    <Users className="mr-2 h-5 w-5" />
                    Become a Customer
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20"
                  data-testid="button-hero-order-now"
                >
                  <Link href="/orderonline">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Order Now To Enter
                  </Link>
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border-2 border-chart-2/50 rounded-2xl p-8 max-w-2xl mx-auto mt-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Tv className="w-12 h-12 text-chart-2 mx-auto mb-2" />
                    <p className="text-3xl font-bold text-chart-2">60+</p>
                    <p className="text-sm text-white/80">TVs Given Away</p>
                  </div>
                  <div>
                    <Gift className="w-12 h-12 text-chart-2 mx-auto mb-2" />
                    <p className="text-3xl font-bold text-chart-2">10+</p>
                    <p className="text-sm text-white/80">Years Running</p>
                  </div>
                  <div>
                    <Users className="w-12 h-12 text-chart-2 mx-auto mb-2" />
                    <p className="text-3xl font-bold text-chart-2">1</p>
                    <p className="text-sm text-white/80">Winner Monthly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-how-it-works">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Step 1 */}
              <Card className="p-8 text-center hover-elevate" data-testid="card-step-1">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-chart-2">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Order Heating Oil</h3>
                <p className="text-muted-foreground">
                  Place your regular heating oil order - online, by phone, or through automatic delivery.
                </p>
              </Card>

              {/* Step 2 */}
              <Card className="p-8 text-center hover-elevate" data-testid="card-step-2">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-chart-2">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Automatic Entry</h3>
                <p className="text-muted-foreground">
                  You're automatically entered into the monthly draw. No forms, no hassle!
                </p>
              </Card>

              {/* Step 3 */}
              <Card className="p-8 text-center hover-elevate" data-testid="card-step-3">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-chart-2">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Win a Big-Screen TV</h3>
                <p className="text-muted-foreground">
                  One winner is drawn each month during heating season. Could be you!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do This Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-chart-2/30 bg-gradient-to-br from-chart-2/5 to-chart-2/10 hover-elevate">
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  <Star className="w-12 h-12 text-chart-2" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6" data-testid="heading-why-giveaways">
                  Celebrating Our Loyal Customers
                </h2>
                
                <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-6">
                  For over 10 years, we've been giving away big-screen TVs as our way of saying thank you to the Cape Breton families who support our local business. We've given away more than 60 TVs to our amazing customers!
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Fair & Transparent</h4>
                      <p className="text-sm text-muted-foreground">
                        Random draws each month with winners announced publicly
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Quality TVs</h4>
                      <p className="text-sm text-muted-foreground">
                        We give away brand new big-screen TVs from top brands
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-chart-2 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Local Winners</h4>
                      <p className="text-sm text-muted-foreground">
                        Every winner is a real Cape Breton family we're proud to serve
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Giveaways Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-social-giveaways">
              Follow Us for Social Media Giveaways
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              In addition to our monthly TV giveaways, we run special contests and giveaways on our social media channels. Follow us to stay updated on all our promotions and community events!
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/MercerFuels/" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-facebook"
              >
                <Card className="p-8 hover-elevate h-full transition-all">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 rounded-full bg-[#1877F2]/10">
                      <SiFacebook className="w-12 h-12 text-[#1877F2]" />
                    </div>
                    <h3 className="text-2xl font-bold">Facebook</h3>
                    <p className="text-muted-foreground">
                      Like our page for exclusive contests, community updates, and special offers
                    </p>
                    <Button 
                      className="mt-4 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white"
                      data-testid="button-facebook"
                    >
                      Follow on Facebook
                    </Button>
                  </div>
                </Card>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/mercerfuels/" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-instagram"
              >
                <Card className="p-8 hover-elevate h-full transition-all">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 rounded-full bg-[#E1306C]/10">
                      <SiInstagram className="w-12 h-12 text-[#E1306C]" />
                    </div>
                    <h3 className="text-2xl font-bold">Instagram</h3>
                    <p className="text-muted-foreground">
                      Follow us for behind-the-scenes content, winner announcements, and Cape Breton community highlights
                    </p>
                    <Button 
                      className="mt-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white"
                      data-testid="button-instagram"
                    >
                      Follow on Instagram
                    </Button>
                  </div>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-cta">
              Ready to Enter the Next Draw?
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Become a Mercer Fuels customer today and you'll be automatically entered in our monthly TV giveaway every time you order heating oil.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-chart-2 hover:bg-chart-2/90 text-white font-bold"
                data-testid="button-become-customer"
              >
                <Link href="/become-a-customer">
                  <Users className="mr-2 h-5 w-5" />
                  Become a Customer
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                data-testid="button-order-oil"
              >
                <Link href="/orderonline">
                  Order Oil Now
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Questions? Call us at <a href="tel:9025394242" className="text-primary hover:underline font-semibold">(902) 539-4242</a>
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
