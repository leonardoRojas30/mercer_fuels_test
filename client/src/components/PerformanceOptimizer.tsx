// Performance optimization component for Core Web Vitals
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero image
      const heroImage = new Image();
      heroImage.src = "https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif";
      
      // Preload logo
      const logo = new Image(); 
      logo.src = "/attached_assets/MercerFuelsLogo-04_1757980751501.png";
    };

    // Lazy load non-critical images
    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    preloadCriticalResources();
    setupLazyLoading();
  }, []);

  return (
    <Helmet>
      {/* Performance optimization meta tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Resource hints for faster loading */}
      <link rel="preconnect" href="https://headless.cbisland.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload critical resources */}
      <link 
        rel="preload" 
        href="https://headless.cbisland.com/wp-content/uploads/2025/05/DJI_0561-1024x682.avif" 
        as="image" 
        type="image/avif"
      />
      
      {/* Critical CSS for above-the-fold content */}
      <style type="text/css">{`
        /* Critical CSS for hero section */
        .hero-section {
          background-image: linear-gradient(rgba(49, 90, 74, 0.8), rgba(49, 90, 74, 0.8));
          min-height: 600px;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        
        /* Lazy loading placeholder */
        .lazy {
          background-color: #f3f4f6;
          min-height: 200px;
          transition: opacity 0.3s;
        }
        
        .lazy.loaded {
          opacity: 1;
        }
        
        /* Optimize font rendering */
        body {
          font-display: swap;
        }
      `}</style>
    </Helmet>
  );
}