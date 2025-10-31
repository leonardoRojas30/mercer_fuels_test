import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

// Web Vitals monitoring for performance tracking
export function initWebVitals() {
  const sendToAnalytics = (metric: any) => {
    // Log to console in development
    if (import.meta.env.DEV) {
      console.log(`[Web Vitals] ${metric.name}:`, Math.round(metric.value), 'ms');
    }
    
    // In production, you could send to analytics service
    // Example: gtag('event', metric.name, { value: Math.round(metric.value) });
    
    // Store in local storage for debugging
    const vitals = JSON.parse(localStorage.getItem('webVitals') || '[]');
    vitals.push({
      name: metric.name,
      value: Math.round(metric.value),
      timestamp: new Date().toISOString()
    });
    
    // Keep only last 10 measurements
    if (vitals.length > 10) {
      vitals.shift();
    }
    
    localStorage.setItem('webVitals', JSON.stringify(vitals));
  };

  // Track all Core Web Vitals (INP replaced FID in newer versions)
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}

// Helper function to get stored vitals for debugging
export function getStoredVitals() {
  return JSON.parse(localStorage.getItem('webVitals') || '[]');
}