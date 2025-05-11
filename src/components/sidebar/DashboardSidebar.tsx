
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Brain,
  Calendar,
  Map,
  MessageSquare,
  Settings,
  Thermometer,
  Upload,
  Sync,
  Signal,
  Info
} from 'lucide-react';
import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useHealthStore } from '@/store/healthStore';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  badge?: string | number;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  icon: Icon,
  label,
  badge
}) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      cn("flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-sidebar-accent",
        isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "text-sidebar-foreground"
      )
    }
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
    {badge && (
      <span className="ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-2 text-[10px] font-medium text-primary-foreground">
        {badge}
      </span>
    )}
  </NavLink>
);

const DashboardSidebar: React.FC<{className?: string}> = ({ className }) => {
  const { user } = useHealthStore();
  
  return (
    <div className={cn("pb-12 w-64 border-r bg-sidebar-background", className)}>
      <div className="flex h-14 items-center border-b px-4">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Shield className="h-6 w-6 text-health-primary" />
          <span>AEGIS</span>
          <span className="text-health-primary">Health</span>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold tracking-tight">{user.name}</h2>
          <p className="text-xs text-sidebar-foreground/70">{user.role}</p>
          <p className="text-xs text-sidebar-foreground/70">{user.region}</p>
        </div>
      </div>
      <ScrollArea className="px-1 py-2 h-[calc(100vh-9rem)]">
        <div className="space-y-4 px-3">
          <div className="py-2">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Main Dashboard</h2>
            <div className="space-y-1">
              <NavItem to="/" icon={Map} label="SHRUC Tracker" />
              <NavItem to="/schedule" icon={Calendar} label="Smart Schedule" />
              <NavItem to="/counselor" icon={MessageSquare} label="Counselor Tool" />
              <NavItem to="/cold-chain" icon={Thermometer} label="Cold Chain" />
            </div>
          </div>
          <Separator className="mx-2" />
          <div className="py-2">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Advanced Tools</h2>
            <div className="space-y-1">
              <NavItem to="/ai-ethics" icon={Brain} label="Ethical Impact" />
              <NavItem to="/sync-status" icon={Sync} label="Offline Sync" badge={3} />
              <NavItem to="/mesh-status" icon={Signal} label="Mesh Status" />
              <NavItem to="/data-export" icon={Upload} label="Data Export" />
            </div>
          </div>
          <Separator className="mx-2" />
          <div className="py-2">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">System</h2>
            <div className="space-y-1">
              <NavItem to="/settings" icon={Settings} label="Settings" />
              <NavItem to="/about" icon={Info} label="About" />
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default DashboardSidebar;
