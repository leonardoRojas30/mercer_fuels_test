import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

export interface FeatureTile {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  onClick?: () => void;
  href?: string;
  phone?: string;
}

interface FeatureTilesProps {
  features: FeatureTile[];
  columns?: 2 | 3;
  variant?: "default" | "modern";
}

export default function FeatureTiles({ 
  features, 
  columns = 3,
  variant = "modern" 
}: FeatureTilesProps) {
  const gridClasses = {
    2: "grid md:grid-cols-2 gap-8",
    3: "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
  };

  const handleFeatureClick = (feature: FeatureTile, index: number) => {
    if (feature.phone) {
      window.location.href = `tel:${feature.phone}`;
    } else if (feature.onClick) {
      feature.onClick();
    } else {
      console.log(`${feature.title} feature clicked`);
      // TODO: Remove mock functionality - integrate with actual feature pages
    }
  };

  return (
    <div className={gridClasses[columns]}>
      {features.map((feature, index) => (
        <Card key={index} className="hover-elevate transition-all duration-300 border-0 shadow-md hover:shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="mb-4">
              <div className="p-3 rounded-xl bg-chart-2/10 w-fit mb-4">
                <feature.icon className="h-7 w-7 text-chart-2" />
              </div>
              <CardTitle className="text-xl font-bold leading-tight">{feature.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-0">
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            <Button 
              variant="outline" 
              className="w-full font-semibold"
              onClick={() => handleFeatureClick(feature, index)}
              data-testid={`button-feature-${index}`}
            >
              {feature.cta}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}