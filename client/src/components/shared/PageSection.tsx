interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "muted" | "gradient";
  padding?: "sm" | "md" | "lg";
}

export default function PageSection({ 
  children, 
  className = "", 
  background = "default",
  padding = "md" 
}: PageSectionProps) {
  const backgroundClasses = {
    default: "",
    muted: "bg-muted/30",
    gradient: "bg-gradient-to-br from-chart-3/5 to-chart-1/5"
  };

  const paddingClasses = {
    sm: "py-8",
    md: "py-16", 
    lg: "py-24"
  };

  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      <div className="container mx-auto px-4 lg:px-6">
        {children}
      </div>
    </section>
  );
}