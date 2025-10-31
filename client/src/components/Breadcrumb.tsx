import { ChevronRight, Home } from "lucide-react";
import { Link } from "wouter";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-2 text-sm text-muted-foreground ${className}`} aria-label="Breadcrumb">
      <Link href="/" className="flex items-center hover:text-primary transition-colors" data-testid="breadcrumb-home">
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4" />
          {item.href ? (
            <Link 
              href={item.href} 
              className="hover:text-primary transition-colors"
              data-testid={`breadcrumb-item-${index}`}
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium" data-testid={`breadcrumb-current-${index}`}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}

// Structured data for breadcrumb navigation
export function generateBreadcrumbSchema(items: BreadcrumbItem[], baseUrl: string = "https://mercerfuels.com") {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      // Only add items that don't duplicate home
      ...items
        .filter(item => item.href !== '/' && item.label !== 'Home')
        .map((item, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": item.label,
          "item": item.href ? `${baseUrl}${item.href}` : undefined
        }))
    ]
  };
  
  return breadcrumbList;
}