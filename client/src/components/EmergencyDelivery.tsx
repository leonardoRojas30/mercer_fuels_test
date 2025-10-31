import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Phone, Clock, Snowflake } from "lucide-react";

export default function EmergencyDelivery() {

  return (
    <section className="py-20 bg-gradient-to-b from-destructive/5 to-destructive/10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-destructive/10 shadow-lg">
                <AlertTriangle className="h-10 w-10 text-destructive" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-destructive">
              24/7 Emergency Oil Delivery
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Running low or completely out? Don't freeze - call our local Cape Breton team. Real people, real help, any time.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Emergency Info */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Phone className="h-6 w-6 text-destructive" />
                    Call for Immediate Emergency Help
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-destructive/5 rounded-lg">
                      <div className="text-2xl font-bold text-destructive mb-1">
                        <a href="tel:902-539-4242" className="hover:underline">902-539-4242</a>
                      </div>
                      <div className="text-sm text-muted-foreground">Sydney & Surrounding Areas</div>
                    </div>
                    <div className="text-center p-4 bg-destructive/5 rounded-lg">
                      <div className="text-2xl font-bold text-destructive mb-1">
                        <a href="tel:902-849-2677" className="hover:underline">902-849-2677</a>
                      </div>
                      <div className="text-sm text-muted-foreground">Glace Bay & Surrounding Areas</div>
                    </div>
                  </div>
                  <p className="text-center text-muted-foreground font-medium">
                    ✓ Real person answers 24/7<br/>✓ Local Cape Breton team<br/>✓ Emergency delivery available
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-6">
                <Card className="border-0 shadow-md hover:shadow-lg transition-all bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <Clock className="h-10 w-10 mx-auto mb-3 text-chart-2" />
                    <div className="font-bold text-lg">Same-Day</div>
                    <div className="text-sm text-muted-foreground">Emergency delivery when possible</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md hover:shadow-lg transition-all bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <Snowflake className="h-10 w-10 mx-auto mb-3 text-chart-2" />
                    <div className="font-bold text-lg">Storm Ready</div>
                    <div className="text-sm text-muted-foreground">Prepared for Cape Breton weather</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-gradient-to-r from-chart-2/10 to-chart-2/5 rounded-xl border border-chart-2/20">
            <div className="text-center">
              <div className="text-lg font-bold text-chart-2 mb-2">
                ✓ Our Automatic Customers Never Run Out Of Oil
              </div>
              <p className="text-foreground mb-4">
                That's our guarantee. Join our automatic delivery program and never worry about emergencies again.
              </p>
              <a href="/automatic" className="inline-flex items-center text-chart-2 font-semibold hover:underline">
                Learn About Automatic Delivery →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}