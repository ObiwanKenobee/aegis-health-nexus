import React from 'react';
import { 
  BarChart3, 
  Calendar, 
  Settings, 
  LifeBuoy, 
  ScrollText, 
  Thermometer, 
  HeartPulse, 
  RefreshCw, 
  Network, 
  FileExport, 
  Info
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar: React.FC = () => {
  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/',
      icon: BarChart3,
    },
    {
      name: 'Smart Schedule',
      href: '/schedule',
      icon: Calendar,
    },
    {
      name: 'Counselor Tool',
      href: '/counselor',
      icon: ScrollText,
    },
    {
      name: 'Cold Chain',
      href: '/cold-chain',
      icon: Thermometer,
    },
    {
      name: 'AI Ethics',
      href: '/ai-ethics',
      icon: HeartPulse,
    },
    {
      name: 'Sync Status',
      href: '/sync-status',
      icon: RefreshCw,
    },
    {
      name: 'Mesh Status',
      href: '/mesh-status',
      icon: Network,
    },
    {
      name: 'Data Export',
      href: '/data-export',
      icon: FileExport,
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: Settings,
    },
    {
      name: 'About',
      href: '/about',
      icon: Info,
    },
  ];

  return (
    <aside className="w-64 border-r flex-shrink-0 h-screen sticky top-0">
      <div className="p-4">
        <nav className="flex flex-col space-y-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center space-x-2 rounded-md p-2 hover:bg-secondary ${
                  isActive ? 'bg-secondary text-foreground font-medium' : 'text-muted-foreground'
                }`
              }
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <a href="https://aegis.org" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:underline">
          Powered by AEGIS.org
        </a>
        <a href="https://aegis.org" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:underline block mt-1">
          Need Help?
        </a>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
