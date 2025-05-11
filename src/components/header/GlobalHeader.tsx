
import React from 'react';
import { Separator } from '@/components/ui/separator';
import LanguageSwitcher from './LanguageSwitcher';
import UserProfile from './UserProfile';
import SyncStatus from './SyncStatus';
import NotificationBell from './NotificationBell';
import { Shield } from 'lucide-react';

interface GlobalHeaderProps {
  user: {
    name: string;
    role: string;
    region: string;
    avatar?: string;
  };
  syncStatus: {
    status: 'online' | 'offline' | 'syncing' | 'error';
    lastSync: Date | null;
    pendingChanges: number;
  };
  notifications: Array<{
    id: string;
    title: string;
    message: string;
    type: 'info' | 'warning' | 'alert' | 'success';
    timestamp: Date;
    read: boolean;
  }>;
  onLanguageChange?: (lang: string) => void;
  onSyncNow?: () => void;
  onNotificationRead?: (id: string) => void;
  onAllNotificationsRead?: () => void;
  onLogout?: () => void;
  onSettings?: () => void;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  user,
  syncStatus,
  notifications,
  onLanguageChange,
  onSyncNow,
  onNotificationRead,
  onAllNotificationsRead,
  onLogout,
  onSettings,
}) => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center gap-2 font-bold text-lg mr-4">
          <Shield className="h-6 w-6 text-health-primary" />
          <span>AEGIS</span>
          <span className="text-health-primary">Health</span>
        </div>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <nav className="flex-1 flex items-center">
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm font-medium">Workspace</span>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <SyncStatus 
            status={syncStatus.status}
            lastSync={syncStatus.lastSync}
            pendingChanges={syncStatus.pendingChanges}
            onSyncNow={onSyncNow}
          />
          <NotificationBell 
            notifications={notifications}
            onNotificationRead={onNotificationRead}
            onAllRead={onAllNotificationsRead}
          />
          <LanguageSwitcher 
            currentLanguage="en"
            onLanguageChange={onLanguageChange}
          />
          <UserProfile 
            user={user} 
            onLogout={onLogout}
            onSettings={onSettings}
          />
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
