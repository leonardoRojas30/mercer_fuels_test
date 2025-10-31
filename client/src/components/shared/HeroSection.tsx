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
}

export default function HeroSection({
  backgroundImage,
  tagline,
  headline,
  description,
  bullets = [],
  children,
  overlay = true,
  textAlignment = "left"
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

  return (
    <section className="relative min-h-[600px] flex items-center bg-chart-3" style={backgroundStyle}>
      {/* Overlay for better text readability */}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      )}
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${textAlignmentClasses[textAlignment]}`}>
          <div className="space-y-8">
            {tagline && (
              <p className="text-chart-2 font-semibold text-lg tracking-wide uppercase">
                {tagline}
              </p>
            )}
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              {headline}
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              {description}
            </p>
            
            {bullets.length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
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
            <div className="flex justify-center lg:justify-end">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}