
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign 
} from "lucide-react";
import { StatCard } from "./StatCard";
import { RevenueChart } from "./RevenueChart";
import { ActivityChart } from "./ActivityChart";
import { TopProducts } from "./TopProducts";

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          icon={<DollarSign className="h-4 w-4" />}
          description="This month"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Customers"
          value="2,845"
          icon={<Users className="h-4 w-4" />}
          description="Active users"
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Orders"
          value="1,253"
          icon={<ShoppingCart className="h-4 w-4" />}
          description="This month"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Conversion Rate"
          value="3.2%"
          icon={<TrendingUp className="h-4 w-4" />}
          description="Last 30 days"
          trend={{ value: 1, isPositive: false }}
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <RevenueChart />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <ActivityChart />
        <TopProducts />
      </div>
    </div>
  );
}
