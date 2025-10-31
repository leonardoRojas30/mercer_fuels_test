import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "wouter";
import logoSymbol from "@assets/MercerFuelsLogo-04_1757980751501.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-primary border-b border-border">
      
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" data-testid="link-home-logo">
            <img 
              src={logoSymbol} 
              alt="Mercer Fuels Logo" 
              className="h-10 w-10"
              data-testid="logo-symbol"
            />
            <div className="text-3xl font-bold text-primary dark:text-white">Mercer Fuels</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Button 
              asChild
              data-testid="button-become-customer"
              size="lg"
              className="bg-chart-3 hover:bg-chart-3/90 text-white font-semibold px-8"
            >
              <Link href="/become-a-customer">Become A Customer</Link>
            </Button>
            
            <div className="flex items-center gap-4">
              <Button asChild data-testid="button-order-online" className="bg-chart-2 hover:bg-chart-2/90 text-white font-bold border-2 border-chart-2/20 shadow-md hover:shadow-lg transition-all">
                <Link href="/orderonline">Order Online</Link>
              </Button>
              <Button asChild data-testid="button-pay-bill" className="bg-chart-2 hover:bg-chart-2/90 text-white font-bold border-2 border-chart-2/20 shadow-md hover:shadow-lg transition-all">
                <Link href="/billpayment">Pay My Bill</Link>
              </Button>
              <Button asChild data-testid="button-services" variant="outline" className="bg-white dark:bg-primary text-chart-3 dark:text-chart-3 font-bold border-2 border-chart-3/30">
                <Link href="/services">Services</Link>
              </Button>
            </div>
          </nav>

          {/* Phone Numbers */}
          <div className="hidden lg:flex items-center gap-2 bg-primary/5 dark:bg-white/10 px-4 py-2 rounded-lg">
            <Phone className="h-5 w-5 text-chart-2" />
            <div className="text-sm">
              <a href="tel:902-539-4242" className="font-semibold text-primary dark:text-white hover:text-chart-2 transition-colors">902-539-4242</a>
              <div className="text-muted-foreground">24/7 Emergency Service</div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white dark:bg-primary py-6">
            <div className="space-y-6">
              <Button 
                asChild
                className="w-full bg-chart-3 hover:bg-chart-3/90 text-white font-semibold py-3"
                data-testid="button-become-customer-mobile"
              >
                <Link href="/become-a-customer">Become A Customer</Link>
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button asChild className="bg-chart-2 hover:bg-chart-2/90 text-white font-bold border-2 border-chart-2/20 shadow-md">
                  <Link href="/orderonline">Order Online</Link>
                </Button>
                <Button asChild className="bg-chart-2 hover:bg-chart-2/90 text-white font-bold border-2 border-chart-2/20 shadow-md">
                  <Link href="/billpayment">Pay My Bill</Link>
                </Button>
                <Button asChild variant="outline" className="bg-white dark:bg-primary text-chart-3 dark:text-chart-3 font-bold border-2 border-chart-3/30 col-span-2">
                  <Link href="/services">Services</Link>
                </Button>
              </div>
              
              <div className="text-center space-y-2 bg-primary/5 dark:bg-white/10 p-4 rounded-lg">
                <div className="font-semibold text-primary dark:text-white flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-chart-2" />
                  Emergency Service
                </div>
                <a href="tel:902-539-4242" className="text-sm text-muted-foreground hover:text-chart-2 transition-colors">902-539-4242</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}