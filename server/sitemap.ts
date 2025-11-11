// XML Sitemap generator for enhanced SEO discoverability
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateSitemap(): string {
  const baseUrl = 'https://mercerfuels.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls: SitemapUrl[] = [
    // Main pages - highest priority
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/schedule-consultation`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    
    // Core service pages - high priority
    {
      loc: `${baseUrl}/insurance`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/orderonline`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/billpayment`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/creditapplication`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    
    // Location-specific pages - high local SEO value
    {
      loc: `${baseUrl}/sydney-heating-oil`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/glace-bay-heating-oil`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/birch-grove-heating-oil`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/donkin-heating-oil`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/new-waterford-heating-oil`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/north-sydney-heating-oil`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/port-morien-heating-oil`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/sydney-mines-heating-oil`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/sydney-river-heating-oil`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    
    // Service and feature pages
    {
      loc: `${baseUrl}/become-a-customer`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/local-vs-big-oil`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/switch-from-irving`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/switch-from-ultramar`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/heating-oil-budget-plans`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/automatic`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/new-homeowner-heating-oil-guide-cape-breton`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      loc: `${baseUrl}/new-customer-special-offers`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/smart-heating-oil-modern-homeowner`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      loc: `${baseUrl}/textreminders`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/pricing`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/cape-breton-winter-storm-preparation`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      loc: `${baseUrl}/emergency-heating-oil-delivery`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/thanks`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.3
    },
    
    // Legal pages
    {
      loc: `${baseUrl}/terms`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.4
    },
    {
      loc: `${baseUrl}/privacy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.4
    }
  ];

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';
  
  const urlEntries = urls.map(url => {
    let urlEntry = `  <url>
    <loc>${url.loc}</loc>`;
    
    if (url.lastmod) {
      urlEntry += `
    <lastmod>${url.lastmod}</lastmod>`;
    }
    
    if (url.changefreq) {
      urlEntry += `
    <changefreq>${url.changefreq}</changefreq>`;
    }
    
    if (url.priority) {
      urlEntry += `
    <priority>${url.priority}</priority>`;
    }
    
    urlEntry += `
  </url>`;
    
    return urlEntry;
  }).join('\n');

  return `${xmlHeader}
${urlsetOpen}
${urlEntries}
${urlsetClose}`;
}