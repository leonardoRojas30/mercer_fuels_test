import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Calculator, DollarSign, Home, Building, Building2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Helmet } from "react-helmet-async";

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('/api/admin/leads', {
        headers: {
          'Authorization': `Bearer ${password}`,
        },
      });

      if (response.ok) {
        localStorage.setItem('budgetCalcToken', password);
        onLogin();
      } else {
        setError("Invalid password");
      }
    } catch (error) {
      setError("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Lock className="h-6 w-6" />
            <CardTitle className="text-2xl">Staff Access Required</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">
            This budget calculator is for Mercer Fuels staff only
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter staff password"
                data-testid="input-budget-calc-password"
                required
              />
              {error && <p className="text-sm text-destructive">{error}</p>}
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
              data-testid="button-budget-calc-login"
            >
              {isLoading ? "Verifying..." : "Access Calculator"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function BudgetCalculator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [calculationMode, setCalculationMode] = useState<"direct" | "estimate">("estimate");
  
  // Direct input mode
  const [directLiters, setDirectLiters] = useState("");
  const [pricePerLiter, setPricePerLiter] = useState("");
  
  // Estimation mode
  const [houseType, setHouseType] = useState<"single" | "two-story" | "three-story">("two-story");
  const [hasBasement, setHasBasement] = useState<"yes" | "no">("no");
  const [heatPumps, setHeatPumps] = useState<"0" | "1" | "2" | "3">("0");
  const [hasOilHotWater, setHasOilHotWater] = useState<"yes" | "no">("no");
  const [numPeople, setNumPeople] = useState("2");
  const [thermostatTemp, setThermostatTemp] = useState("18");
  
  const [result, setResult] = useState<{
    estimatedLiters: number;
    yearlyTotal: number;
    monthlyPayment: number;
  } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('budgetCalcToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const calculateEstimate = () => {
    // HEATING USAGE CALCULATION
    // Base heating usage by house type
    let heatingLiters = 0;
    if (houseType === "single") heatingLiters = 1500;
    else if (houseType === "two-story") heatingLiters = 2200;
    else if (houseType === "three-story") heatingLiters = 2800;
    
    // Basement adjustment (adds to heating)
    if (hasBasement === "yes") {
      heatingLiters += 300;
    }
    
    // Thermostat adjustment (applies to heating only)
    const temp = parseInt(thermostatTemp) || 18;
    const tempDiff = temp - 18;
    if (tempDiff > 0) {
      const multiplier = 1 + (tempDiff * 0.10);
      heatingLiters = heatingLiters * multiplier;
    }
    
    // Heat pump reduction (applies to heating only, NOT hot water)
    const heatPumpCount = parseInt(heatPumps);
    if (heatPumpCount === 1) {
      heatingLiters = heatingLiters * 0.50; // 50% reduction
    } else if (heatPumpCount === 2) {
      heatingLiters = heatingLiters * 0.35; // 65% reduction
    } else if (heatPumpCount >= 3) {
      heatingLiters = heatingLiters * 0.25; // 75% reduction
    }
    
    // HOT WATER USAGE CALCULATION (separate, not affected by heat pumps or thermostat)
    let hotWaterLiters = 0;
    if (hasOilHotWater === "yes") {
      const people = parseInt(numPeople) || 2;
      if (people <= 2) {
        hotWaterLiters = 250;
      } else {
        hotWaterLiters = 250 + ((people - 2) * 100);
      }
    }
    
    // Total usage = heating + hot water
    const totalLiters = heatingLiters + hotWaterLiters;
    
    return Math.round(totalLiters);
  };

  const handleCalculate = () => {
    const price = parseFloat(pricePerLiter);
    
    if (!price || price <= 0) {
      alert("Please enter a valid price per liter");
      return;
    }
    
    let liters: number;
    
    if (calculationMode === "direct") {
      liters = parseFloat(directLiters);
      if (!liters || liters <= 0) {
        alert("Please enter valid usage in liters");
        return;
      }
    } else {
      liters = calculateEstimate();
    }
    
    // Calculate yearly total
    const yearlyTotal = liters * price;
    
    // Divide by 10 months and round up to nearest $10
    const monthlyBase = yearlyTotal / 10;
    const monthlyPayment = Math.ceil(monthlyBase / 10) * 10;
    
    setResult({
      estimatedLiters: Math.round(liters),
      yearlyTotal: Math.round(yearlyTotal * 100) / 100,
      monthlyPayment
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('budgetCalcToken');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <>
      <Helmet>
        <title>Budget Calculator - Mercer Fuels Staff Tool</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calculator className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">Budget Plan Calculator</h1>
                <p className="text-muted-foreground">Staff tool for calculating equal monthly payment plans</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout} data-testid="button-logout">
              Logout
            </Button>
          </div>

          {/* Main Calculator Card */}
          <Card>
            <CardHeader>
              <CardTitle>Calculate Monthly Payment Plan</CardTitle>
              <CardDescription>
                Estimate annual fuel usage and calculate 10-month equal payment plan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Price Per Liter (Always Required) */}
              <div className="space-y-2">
                <Label htmlFor="price" className="text-base font-semibold">
                  Estimated Average Price Per Liter *
                </Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={pricePerLiter}
                  onChange={(e) => setPricePerLiter(e.target.value)}
                  placeholder="e.g., 1.45"
                  data-testid="input-price-per-liter"
                  required
                />
              </div>

              {/* Calculation Mode Toggle */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Calculation Method</Label>
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant={calculationMode === "direct" ? "default" : "outline"}
                    onClick={() => setCalculationMode("direct")}
                    className="flex-1"
                    data-testid="button-mode-direct"
                  >
                    Known Usage
                  </Button>
                  <Button
                    type="button"
                    variant={calculationMode === "estimate" ? "default" : "outline"}
                    onClick={() => setCalculationMode("estimate")}
                    className="flex-1"
                    data-testid="button-mode-estimate"
                  >
                    Estimate Usage
                  </Button>
                </div>
              </div>

              {/* Direct Input Mode */}
              {calculationMode === "direct" && (
                <div className="space-y-2">
                  <Label htmlFor="direct-liters" className="text-base font-semibold">
                    Annual Usage (Liters) *
                  </Label>
                  <Input
                    id="direct-liters"
                    type="number"
                    min="0"
                    value={directLiters}
                    onChange={(e) => setDirectLiters(e.target.value)}
                    placeholder="e.g., 2200"
                    data-testid="input-direct-liters"
                    required
                  />
                </div>
              )}

              {/* Estimation Mode */}
              {calculationMode === "estimate" && (
                <div className="space-y-6">
                  {/* House Type */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">
                      Type of House
                    </Label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setHouseType("single")}
                        className={`p-4 rounded-lg border-2 transition-all hover-elevate ${
                          houseType === "single"
                            ? "border-primary bg-primary/10"
                            : "border-border bg-card"
                        }`}
                        data-testid="button-house-single"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Home className={`h-8 w-8 ${houseType === "single" ? "text-primary" : "text-muted-foreground"}`} />
                          <div className="text-center">
                            <div className="font-semibold text-sm">Single Level</div>
                            <div className="text-xs text-muted-foreground">1,500L base</div>
                          </div>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setHouseType("two-story")}
                        className={`p-4 rounded-lg border-2 transition-all hover-elevate ${
                          houseType === "two-story"
                            ? "border-primary bg-primary/10"
                            : "border-border bg-card"
                        }`}
                        data-testid="button-house-two-story"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Building className={`h-8 w-8 ${houseType === "two-story" ? "text-primary" : "text-muted-foreground"}`} />
                          <div className="text-center">
                            <div className="font-semibold text-sm">2 Story</div>
                            <div className="text-xs text-muted-foreground">2,200L base</div>
                          </div>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setHouseType("three-story")}
                        className={`p-4 rounded-lg border-2 transition-all hover-elevate ${
                          houseType === "three-story"
                            ? "border-primary bg-primary/10"
                            : "border-border bg-card"
                        }`}
                        data-testid="button-house-three-story"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Building2 className={`h-8 w-8 ${houseType === "three-story" ? "text-primary" : "text-muted-foreground"}`} />
                          <div className="text-center">
                            <div className="font-semibold text-sm">3 Story</div>
                            <div className="text-xs text-muted-foreground">2,800L base</div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Basement */}
                  <div className="space-y-2">
                    <Label htmlFor="basement" className="text-base font-semibold">
                      Basement?
                    </Label>
                    <Select value={hasBasement} onValueChange={(val: any) => setHasBasement(val)}>
                      <SelectTrigger id="basement" data-testid="select-basement">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="yes">Yes (+300L)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Heat Pumps */}
                  <div className="space-y-2">
                    <Label htmlFor="heat-pumps" className="text-base font-semibold">
                      Heat Pumps
                    </Label>
                    <Select value={heatPumps} onValueChange={(val: any) => setHeatPumps(val)}>
                      <SelectTrigger id="heat-pumps" data-testid="select-heat-pumps">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">None</SelectItem>
                        <SelectItem value="1">1 Heat Pump (-50% usage)</SelectItem>
                        <SelectItem value="2">2 Heat Pumps (-65% usage)</SelectItem>
                        <SelectItem value="3">3+ Heat Pumps (-75% usage)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Oil Hot Water */}
                  <div className="space-y-2">
                    <Label htmlFor="hot-water" className="text-base font-semibold">
                      Is Hot Water Oil or Electric?
                    </Label>
                    <Select value={hasOilHotWater} onValueChange={(val: any) => setHasOilHotWater(val)}>
                      <SelectTrigger id="hot-water" data-testid="select-hot-water">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">Electric (No Change)</SelectItem>
                        <SelectItem value="yes">Oil Fired</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Number of People (if oil hot water) */}
                  {hasOilHotWater === "yes" && (
                    <div className="space-y-2">
                      <Label htmlFor="num-people" className="text-base font-semibold">
                        How Many People Live in the House?
                      </Label>
                      <Input
                        id="num-people"
                        type="number"
                        min="1"
                        value={numPeople}
                        onChange={(e) => setNumPeople(e.target.value)}
                        data-testid="input-num-people"
                      />
                      <p className="text-sm text-muted-foreground">
                        1-2 people: 250L • Each additional person: +100L
                      </p>
                    </div>
                  )}

                  {/* Thermostat Setting */}
                  <div className="space-y-2">
                    <Label htmlFor="thermostat" className="text-base font-semibold">
                      Normal Thermostat Setting (°C)
                    </Label>
                    <Input
                      id="thermostat"
                      type="number"
                      min="15"
                      max="25"
                      value={thermostatTemp}
                      onChange={(e) => setThermostatTemp(e.target.value)}
                      data-testid="input-thermostat"
                    />
                    <p className="text-sm text-muted-foreground">
                      Base: 18°C • Each degree above increases usage by 10%
                    </p>
                  </div>
                </div>
              )}

              {/* Calculate Button */}
              <Button 
                onClick={handleCalculate} 
                className="w-full"
                size="lg"
                data-testid="button-calculate"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Calculate Payment Plan
              </Button>
            </CardContent>
          </Card>

          {/* Results Card */}
          {result && (
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Payment Plan Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground mb-1">Estimated Annual Usage</p>
                    <p className="text-2xl font-bold" data-testid="result-liters">
                      {result.estimatedLiters.toLocaleString()} L
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground mb-1">Yearly Total Cost</p>
                    <p className="text-2xl font-bold" data-testid="result-yearly">
                      ${result.yearlyTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-primary text-primary-foreground">
                    <p className="text-sm opacity-90 mb-1">Monthly Payment (10 months)</p>
                    <p className="text-3xl font-bold" data-testid="result-monthly">
                      ${result.monthlyPayment}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground text-center">
                  Monthly payment rounded up to nearest $10 for budget planning
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
