
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  Settings, 
  ChevronRight, 
  Menu 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SideNavProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

interface NavItem {
  icon: React.ElementType;
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { 
    icon: LayoutDashboard, 
    title: "Dashboard", 
    href: "/" 
  },
  { 
    icon: BarChart2, 
    title: "Analytics", 
    href: "/analytics" 
  },
  { 
    icon: Users, 
    title: "Team", 
    href: "/team" 
  },
  { 
    icon: Settings, 
    title: "Settings", 
    href: "/settings" 
  },
];

export function SideNav({ collapsed, setCollapsed }: SideNavProps) {
  const location = useLocation();
  const [hovering, setHovering] = useState(false);

  return (
    <aside 
      className={cn(
        "fixed h-full bg-white border-r border-border shadow-sm transition-all duration-300 z-10",
        collapsed ? "w-16" : "w-64"
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="flex items-center justify-between p-4 h-14 border-b">
        {!collapsed && (
          <div className="font-bold text-lg text-primary">OpsDash</div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn(
            "ml-auto", 
            collapsed && !hovering && "opacity-0",
            collapsed && hovering && "opacity-100"
          )} 
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <Menu size={18} />}
        </Button>
      </div>

      <div className="mt-2 px-3">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center py-2 px-3 rounded-md group transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon size={20} className="shrink-0" />
                {!collapsed && (
                  <span className="ml-3 text-sm font-medium">{item.title}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
