
import { useState } from "react";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div className="min-h-screen flex">
      <SideNav collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={cn(
        "flex-1 transition-all duration-300",
        collapsed ? "ml-16" : "ml-64"
      )}>
        <TopNav />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
