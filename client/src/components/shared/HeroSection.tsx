import { ReactNode } from "react";

interface HeroBullet {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface HeroSectionProps {
  backgroundImage?: string;
  tagline?: string;
  headline: string;
  description: string;
  bullets?: HeroBullet[];
  children?: ReactNode; // For forms or CTA components
  overlay?: boolean;
  textAlignment?: "left" | "center";
  gridBreakpoint?: "lg" | "xl";
}

export default function HeroSection({
  backgroundImage,
  tagline,
  headline,
  description,
  bullets = [],
  children,
  overlay = true,
  textAlignment = "left",
  gridBreakpoint = "lg"
}: HeroSectionProps) {
  const backgroundStyle = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  const textAlignmentClasses = {
    left: "text-left",
    center: "text-center"
  };

  const contentAlignmentClasses = {
    left: "",
    center: "mx-auto max-w-4xl"
  };

  const descriptionClasses = {
    left: "max-w-2xl",
    center: "max-w-2xl mx-auto"
  };

  const breakpointClasses = {
    lg: {
      container: "lg:px-6",
      grid: "lg:grid-cols-2",
      heading: "lg:text-6xl",
      bullets: "lg:grid-cols-4",
      cta: "lg:justify-end lg:mt-0"
    },
    xl: {
      container: "xl:px-6",
      grid: "xl:grid-cols-2",
      heading: "xl:text-6xl",
      bullets: "xl:grid-cols-4",
      cta: "xl:justify-end xl:mt-0"
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center bg-chart-3" style={backgroundStyle}>
      {/* Overlay for better text readability */}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      )}
      
      <div className={`container mx-auto px-4 ${breakpointClasses[gridBreakpoint].container} relative z-10`}>
        <div className={`grid ${breakpointClasses[gridBreakpoint].grid} gap-12 items-center ${textAlignmentClasses[textAlignment]}`}>
          <div className={`space-y-8 ${contentAlignmentClasses[textAlignment]}`}>
            {tagline && (
              <p className="text-chart-2 font-semibold text-lg tracking-wide uppercase">
                {tagline}
              </p>
            )}
            
            <h1 className={`text-4xl ${breakpointClasses[gridBreakpoint].heading} font-bold text-white leading-tight`}>
              {headline}
            </h1>
            
            <p className={`text-xl text-white/90 leading-relaxed ${descriptionClasses[textAlignment]}`}>
              {description}
            </p>
            
            {bullets.length > 0 && (
              <div className={`grid grid-cols-2 ${breakpointClasses[gridBreakpoint].bullets} gap-6 pt-8 max-w-3xl ${textAlignment === 'center' ? 'mx-auto' : ''}`}>
                {bullets.map((bullet, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-3">
                      <bullet.icon className="h-12 w-12 text-chart-2 mx-auto" />
                    </div>
                    <p className="text-white font-medium text-sm">{bullet.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {children && (
            <div className={`flex justify-center mt-8 ${breakpointClasses[gridBreakpoint].cta}`}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}