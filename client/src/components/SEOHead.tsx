// Advanced SEO head component with performance and discoverability optimizations
import { Helmet } from "react-helmet-async";

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  structuredData?: any;
  breadcrumbSchema?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://mercerfuels.com/attached_assets/MercerFuelsLogo-04_1757980751501.png",
  ogImageAlt = "Mercer Fuels - Cape Breton Heating Oil Experts",
  structuredData,
  breadcrumbSchema,
  noindex = false,
  nofollow = false
}: SEOHeadProps) {
  
  // Clean up title and description
  const cleanTitle = title.length > 60 ? title.substring(0, 57) + "..." : title;
  const cleanDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
  
  const robotsContent = [
    noindex ? "noindex" : "index",
    nofollow ? "nofollow" : "follow",
    "max-snippet:-1",
    "max-image-preview:large",
    "max-video-preview:-1"
  ].join(", ");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{cleanTitle}</title>
      <meta name="title" content={cleanTitle} />
      <meta name="description" content={cleanDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Mercer Fuels" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={cleanTitle} />
      <meta property="og:description" content={cleanDescription} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:locale" content="en_CA" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={cleanTitle} />
      <meta name="twitter:description" content={cleanDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Mercer Fuels" />
      <meta name="publisher" content="Mercer Fuels" />
      <meta name="geo.region" content="CA-NS" />
      <meta name="geo.placename" content="Cape Breton, Nova Scotia" />
      <meta name="geo.position" content="46.1368;-60.1942" />
      <meta name="ICBM" content="46.1368, -60.1942" />
      
      {/* Local Business Info */}
      <meta name="locality" content="Cape Breton" />
      <meta name="region" content="Nova Scotia" />
      <meta name="country-name" content="Canada" />
      <meta name="telephone" content="+1-902-539-4242" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//headless.cbisland.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData, null, 2)}
        </script>
      )}
      
      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema, null, 2)}
        </script>
      )}
    </Helmet>
  );
}