import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { X } from "lucide-react";

export default function MobileBottomBar() {
  const [location] = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  // Only show on home page
  if (location !== '/') {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="lg:hidden fixed bottom-4 right-6 z-50">
      <div className="flex flex-col items-end gap-2">
        {/* Close button ABOVE the panel, matching floating style */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="rounded-full h-8 w-8 bg-white dark:bg-primary text-foreground border border-border/50 shadow-2xl drop-shadow-lg"
          data-testid="button-close-utility"
          aria-label="Close utility buttons"
        >
          <X className="h-3.5 w-3.5" strokeWidth={2} />
        </Button>

        {/* Floating panel */}
        <div className="bg-white dark:bg-primary border border-border/50 rounded-lg shadow-2xl drop-shadow-lg">
          <div className="p-3">
            <div className="space-y-2">
              <Button 
                asChild
                size="sm"
                className="w-full bg-chart-2 hover:bg-chart-2/90 text-white font-bold border-2 border-chart-2/20 shadow-md hover:shadow-lg transition-all"
                data-testid="button-order-online-utility"
              >
                <Link href="/orderonline">Order Online</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="sm"
                className="w-full text-chart-3 border-chart-3 hover:bg-chart-3 hover:text-white font-bold transition-all"
                data-testid="button-pay-bill-utility"
              >
                <Link href="/billpayment">Pay My Bill</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}