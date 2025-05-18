
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const data = [
  { day: "Mon", customers: 45, orders: 32 },
  { day: "Tue", customers: 52, orders: 28 },
  { day: "Wed", customers: 61, orders: 43 },
  { day: "Thu", customers: 48, orders: 34 },
  { day: "Fri", customers: 74, orders: 55 },
  { day: "Sat", customers: 68, orders: 49 },
  { day: "Sun", customers: 41, orders: 27 },
];

export function ActivityChart() {
  return (
    <Card className="col-span-3 md:col-span-2">
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
            <XAxis 
              dataKey="day" 
              tick={{ fontSize: 12 }} 
              axisLine={{ stroke: '#f5f5f5' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12 }} 
              axisLine={{ stroke: '#f5f5f5' }}
              tickLine={false}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
                border: 'none' 
              }}
            />
            <Bar dataKey="customers" fill="hsl(221.2 83.2% 53.3%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="orders" fill="hsl(221.2 83.2% 73.3%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
