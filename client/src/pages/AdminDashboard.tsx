import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  FileText, 
  ShoppingCart, 
  CreditCard,
  CheckCircle,
  XCircle,
  Clock,
  Phone,
  Mail,
  MapPin,
  Lock
} from "lucide-react";
import type { Lead, CreditApplication, Order } from "@shared/schema";

// Custom fetch wrapper that includes auth token
const authenticatedFetch = async (url: string, options: any = {}) => {
  const token = localStorage.getItem('adminToken');
  
  if (!token) {
    throw new Error('Not authenticated');
  }
  
  const headers = {
    ...options.headers,
    'Authorization': `Bearer ${token}`,
  };
  
  const response = await fetch(url, { ...options, headers });
  
  if (response.status === 401) {
    localStorage.removeItem('adminToken');
    window.location.reload();
    throw new Error('Session expired');
  }
  
  return response;
};

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/leads', {
        headers: {
          'Authorization': `Bearer ${password}`,
        },
      });

      if (response.ok) {
        localStorage.setItem('adminToken', password);
        onLogin();
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid admin password",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "An error occurred",
        variant: "destructive",
      });
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
            <CardTitle className="text-2xl">Admin Login</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">
            Enter the admin password to access the dashboard
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
                placeholder="Enter admin password"
                data-testid="input-admin-password"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
              data-testid="button-admin-login"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function AdminDashboard() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("leads");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const leadsQuery = useQuery<{ success: boolean; leads: Lead[] }>({
    queryKey: ['/api/admin/leads'],
    enabled: isAuthenticated,
  });

  const applicationsQuery = useQuery<{ success: boolean; applications: CreditApplication[] }>({
    queryKey: ['/api/admin/credit-applications'],
    enabled: isAuthenticated,
  });

  const ordersQuery = useQuery<{ success: boolean; orders: Order[] }>({
    queryKey: ['/api/admin/orders'],
    enabled: isAuthenticated,
  });

  const updateOrderMutation = useMutation({
    mutationFn: async ({ id, orderStatus }: { id: string; orderStatus: string }) => {
      return await apiRequest("PATCH", `/api/admin/orders/${id}`, { orderStatus });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/orders'] });
      toast({
        title: "Order Updated",
        description: "Order status has been updated successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Update Failed",
        description: "Failed to update order status.",
        variant: "destructive",
      });
    },
  });

  const updateApplicationMutation = useMutation({
    mutationFn: async ({ id, approvalStatus, approvalNotes }: { 
      id: string; 
      approvalStatus: string;
      approvalNotes?: string;
    }) => {
      return await apiRequest("PATCH", `/api/admin/credit-applications/${id}`, { 
        approvalStatus, 
        approvalNotes 
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/credit-applications'] });
      toast({
        title: "Application Updated",
        description: "Credit application status has been updated successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Update Failed",
        description: "Failed to update credit application status.",
        variant: "destructive",
      });
    },
  });

  const stats = {
    totalLeads: leadsQuery.data?.leads.length || 0,
    totalApplications: applicationsQuery.data?.applications.length || 0,
    totalOrders: ordersQuery.data?.orders.length || 0,
    pendingOrders: ordersQuery.data?.orders.filter(o => o.orderStatus === 'pending').length || 0,
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage leads, credit applications, and orders</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card data-testid="card-stats-leads">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-total-leads">{stats.totalLeads}</div>
            </CardContent>
          </Card>

          <Card data-testid="card-stats-applications">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Credit Applications</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-total-applications">{stats.totalApplications}</div>
            </CardContent>
          </Card>

          <Card data-testid="card-stats-orders">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-total-orders">{stats.totalOrders}</div>
            </CardContent>
          </Card>

          <Card data-testid="card-stats-pending">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-pending-orders">{stats.pendingOrders}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList data-testid="tabs-dashboard">
            <TabsTrigger value="leads" data-testid="tab-leads">
              Leads ({stats.totalLeads})
            </TabsTrigger>
            <TabsTrigger value="applications" data-testid="tab-applications">
              Credit Applications ({stats.totalApplications})
            </TabsTrigger>
            <TabsTrigger value="orders" data-testid="tab-orders">
              Orders ({stats.totalOrders})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="leads" className="space-y-4">
            {leadsQuery.isLoading ? (
              <div className="text-center py-8">Loading leads...</div>
            ) : (
              <div className="grid gap-4">
                {leadsQuery.data?.leads.map((lead) => (
                  <Card key={lead.id} data-testid={`card-lead-${lead.id}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg" data-testid={`text-lead-name-${lead.id}`}>
                            {lead.firstName} {lead.lastName}
                          </CardTitle>
                          <Badge variant="secondary" className="mt-2" data-testid={`badge-context-${lead.id}`}>
                            {lead.pageContext}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground" data-testid={`text-lead-date-${lead.id}`}>
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span data-testid={`text-lead-email-${lead.id}`}>{lead.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span data-testid={`text-lead-phone-${lead.id}`}>{lead.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span data-testid={`text-lead-address-${lead.id}`}>{lead.address}</span>
                      </div>
                      {lead.additionalInfo && (
                        <div className="mt-4 p-3 bg-muted rounded-md">
                          <p className="text-sm text-muted-foreground">Additional Info:</p>
                          <p className="text-sm" data-testid={`text-lead-info-${lead.id}`}>{lead.additionalInfo}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="applications" className="space-y-4">
            {applicationsQuery.isLoading ? (
              <div className="text-center py-8">Loading applications...</div>
            ) : (
              <div className="grid gap-4">
                {applicationsQuery.data?.applications.map((app) => (
                  <Card key={app.id} data-testid={`card-application-${app.id}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg" data-testid={`text-app-name-${app.id}`}>
                            {app.firstName} {app.lastName}
                          </CardTitle>
                          <div className="flex gap-2 mt-2">
                            <Badge 
                              variant={
                                app.approvalStatus === 'approved' ? 'default' : 
                                app.approvalStatus === 'declined' ? 'destructive' : 
                                'secondary'
                              }
                              data-testid={`badge-approval-${app.id}`}
                            >
                              {app.approvalStatus}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground" data-testid={`text-app-date-${app.id}`}>
                          {new Date(app.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Contact</p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-app-email-${app.id}`}>{app.email}</p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-app-phone-${app.id}`}>{app.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Employment</p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-app-employment-${app.id}`}>
                            {app.employmentStatus}
                          </p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-app-income-${app.id}`}>
                            {app.annualIncome}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Select
                          value={app.approvalStatus}
                          onValueChange={(value) => 
                            updateApplicationMutation.mutate({ 
                              id: app.id, 
                              approvalStatus: value 
                            })
                          }
                        >
                          <SelectTrigger className="w-[200px]" data-testid={`select-approval-${app.id}`}>
                            <SelectValue placeholder="Update status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="declined">Declined</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            {ordersQuery.isLoading ? (
              <div className="text-center py-8">Loading orders...</div>
            ) : (
              <div className="grid gap-4">
                {ordersQuery.data?.orders.map((order) => (
                  <Card key={order.id} data-testid={`card-order-${order.id}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg" data-testid={`text-order-name-${order.id}`}>
                            {order.firstName} {order.lastName}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1" data-testid={`text-order-account-${order.id}`}>
                            Account: {order.accountNumber}
                          </p>
                          <Badge 
                            variant={
                              order.orderStatus === 'delivered' ? 'default' : 
                              order.orderStatus === 'confirmed' ? 'secondary' : 
                              order.orderStatus === 'cancelled' ? 'destructive' : 
                              'outline'
                            }
                            className="mt-2"
                            data-testid={`badge-status-${order.id}`}
                          >
                            {order.orderStatus}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground" data-testid={`text-order-date-${order.id}`}>
                          {new Date(order.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Order Details</p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-order-gallons-${order.id}`}>
                            {order.gallons} gallons
                          </p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-order-delivery-${order.id}`}>
                            Delivery: {order.deliveryDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Contact</p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-order-phone-${order.id}`}>
                            {order.phone}
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium">Delivery Address</p>
                        <p className="text-sm text-muted-foreground" data-testid={`text-order-address-${order.id}`}>
                          {order.deliveryAddress}
                        </p>
                      </div>

                      {order.specialInstructions && (
                        <div className="p-3 bg-muted rounded-md">
                          <p className="text-sm font-medium">Special Instructions</p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-order-instructions-${order.id}`}>
                            {order.specialInstructions}
                          </p>
                        </div>
                      )}
                      
                      <div className="flex gap-2">
                        <Select
                          value={order.orderStatus}
                          onValueChange={(value) => 
                            updateOrderMutation.mutate({ 
                              id: order.id, 
                              orderStatus: value 
                            })
                          }
                        >
                          <SelectTrigger className="w-[200px]" data-testid={`select-status-${order.id}`}>
                            <SelectValue placeholder="Update status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
