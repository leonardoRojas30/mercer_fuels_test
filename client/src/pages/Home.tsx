import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceFeatures from "@/components/ServiceFeatures";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import EnhancedLocalBusinessSchema from "@/components/EnhancedLocalBusinessSchema";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Mercer Fuels - 50+ Years Reliable Heating Oil Service | Cape Breton NS"
        description="Family-owned heating oil company serving Cape Breton for 50+ years. Expert consultation, automatic delivery, competitive pricing, and 24/7 support. Schedule your consultation today."
        keywords="heating oil Sydney NS, heating oil Glace Bay NS, Cape Breton heating oil, family owned oil company, automatic oil delivery, emergency heating oil, Nova Scotia heating oil service, Mercer Fuels, heating oil delivery Cape Breton, oil delivery Sydney Nova Scotia"
        canonical="https://mercerfuels.com"
        ogImageAlt="Mercer Fuels - Cape Breton Heating Oil Experts - 50+ Years Family Owned"
      />
      <EnhancedLocalBusinessSchema />
      
      <Header />
      <main>
        <Hero />
        <ServiceFeatures />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
}