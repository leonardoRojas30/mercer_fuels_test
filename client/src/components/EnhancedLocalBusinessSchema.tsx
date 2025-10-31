// Enhanced LocalBusiness structured data for superior local SEO
import { Helmet } from "react-helmet-async";

export interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export default function EnhancedLocalBusinessSchema({ 
  name = "Mercer Fuels",
  description = "Family-owned heating oil company serving Cape Breton, Nova Scotia for over 50 years. Automatic delivery, emergency service, competitive pricing, and local expertise.",
  url = "https://mercerfuels.com",
  telephone = "+1-902-539-4242",
  email = "info@mercerfuels.com",
  address = {
    addressLocality: "Sydney",
    addressRegion: "Nova Scotia", 
    addressCountry: "CA"
  },
  aggregateRating = {
    ratingValue: 4.9,
    reviewCount: 150
  }
}: LocalBusinessSchemaProps) {
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    "name": name,
    "description": description,
    "url": url,
    "telephone": telephone,
    "email": email,
    "image": `${url}/attached_assets/MercerFuelsLogo-04_1757980751501.png`,
    "logo": `${url}/attached_assets/MercerFuelsLogo-04_1757980751501.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 46.1368,
      "longitude": -60.1942
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer", "Check"],
    "areaServed": [
      {"@type": "Place", "name": "Sydney, NS"},
      {"@type": "Place", "name": "Glace Bay, NS"}, 
      {"@type": "Place", "name": "Sydney Mines, NS"},
      {"@type": "Place", "name": "North Sydney, NS"},
      {"@type": "Place", "name": "Sydney River, NS"},
      {"@type": "Place", "name": "New Waterford, NS"},
      {"@type": "Place", "name": "Port Morien, NS"},
      {"@type": "Place", "name": "Donkin, NS"},
      {"@type": "Place", "name": "Birch Grove, NS"}
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      // Add social media profiles here when available
    ],
    "foundingDate": "1970",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "5-10"
    },
    "slogan": "We're Local, We're Better",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Heating Oil Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatic Heating Oil Delivery",
            "description": "Never run out with our automatic delivery monitoring system"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Emergency Delivery",
            "description": "Same-day emergency heating oil delivery across Cape Breton"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Budget Payment Plans",
            "description": "Spread heating costs over 12 months with no surprise bills"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furnace Insurance",
            "description": "Complete furnace coverage and maintenance protection"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema, null, 2)}
      </script>
    </Helmet>
  );
}