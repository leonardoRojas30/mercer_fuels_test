import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone } from "lucide-react";

interface CTAProps {
  text: string;
  href?: string;
  phone?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "sm" | "default" | "lg";
  testId?: string;
  onClick?: () => void;
}

interface CTAGroupProps {
  primary?: CTAProps;
  secondary?: CTAProps;
  emergency?: CTAProps;
  alignment?: "left" | "center" | "right";
  spacing?: "sm" | "md" | "lg";
  buttonScale?: "sm" | "md" | "lg";
  subtitle?: string;
}

export default function CTAGroup({ 
  primary, 
  secondary, 
  emergency,
  alignment = "center",
  spacing = "md",
  buttonScale = "lg",
  subtitle 
}: CTAGroupProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  const spacingClasses = {
    sm: "mt-8",
    md: "mt-12", 
    lg: "mt-16"
  };

  const buttonScaleClasses = {
    sm: {
      primary: "bg-chart-2 text-white font-bold px-5 py-3 text-base shadow-lg transition-all",
      outline: "bg-white text-gray-900 border-2 border-white hover:bg-gray-100 font-semibold px-5 py-3 text-base shadow-lg transition-all",
      default: "font-semibold transition-all"
    },
    md: {
      primary: "bg-chart-2 text-white font-bold px-6 py-3 text-base shadow-lg transition-all",
      outline: "bg-white text-gray-900 border-2 border-white hover:bg-gray-100 font-semibold px-6 py-3 text-base shadow-lg transition-all",
      default: "font-semibold transition-all"
    },
    lg: {
      primary: "bg-chart-2 text-white font-bold px-8 py-4 text-lg shadow-lg transition-all",
      outline: "bg-white text-gray-900 border-2 border-white hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg transition-all",
      default: "font-semibold transition-all"
    }
  };

  const renderCTA = (cta: CTAProps, isPrimary = false) => {
    const scaleClasses = buttonScaleClasses[buttonScale];
    const buttonClasses = isPrimary ? 
      scaleClasses.primary :
      cta.variant === "outline" ? 
        scaleClasses.outline :
        scaleClasses.default;

    if (cta.phone) {
      return (
        <Button asChild
          variant={cta.variant || (isPrimary ? "default" : "outline")}
          size={cta.size || "lg"}
          className={buttonClasses}
          data-testid={cta.testId}
        >
          <a href={`tel:${cta.phone}`} onClick={cta.onClick}>
            <Phone className="w-4 h-4 mr-2" />
            {cta.text}
          </a>
        </Button>
      );
    }

    if (cta.href) {
      return (
        <Button asChild
          variant={cta.variant || (isPrimary ? "default" : "outline")}
          size={cta.size || "lg"}
          className={buttonClasses}
          data-testid={cta.testId}
        >
          <Link href={cta.href}>
            {cta.text}
          </Link>
        </Button>
      );
    }

    return (
      <Button
        variant={cta.variant || (isPrimary ? "default" : "outline")}
        size={cta.size || "lg"}
        className={buttonClasses}
        onClick={cta.onClick}
        data-testid={cta.testId}
      >
        {cta.text}
      </Button>
    );
  };

  return (
    <div className={`${alignmentClasses[alignment]} ${spacingClasses[spacing]}`}>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {primary && renderCTA(primary, true)}
        {secondary && renderCTA(secondary)}
        {emergency && renderCTA(emergency)}
      </div>
      {subtitle && (
        <p className="text-sm text-muted-foreground mt-3">
          {subtitle}
        </p>
      )}
    </div>
  );
}