
import React from 'react';
import { Check, CloudOff, RefreshCw, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

export type SyncState = 'online' | 'offline' | 'syncing' | 'error';

interface SyncStatusProps {
  status: SyncState;
  lastSync: Date | null;
  pendingChanges?: number;
  onSyncNow?: () => void;
}

const SyncStatus: React.FC<SyncStatusProps> = ({
  status,
  lastSync,
  pendingChanges = 0,
  onSyncNow = () => {},
}) => {
  const formatLastSync = () => {
    if (!lastSync) return 'Never synced';
    
    const now = new Date();
    const diffMs = now.getTime() - lastSync.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };
  
  const getStatusIcon = () => {
    switch (status) {
      case 'online':
        return <Check className="h-4 w-4 text-health-success" />;
      case 'offline':
        return <CloudOff className="h-4 w-4 text-health-warning" />;
      case 'syncing':
        return <RefreshCw className="h-4 w-4 animate-spin text-health-primary" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-health-alert" />;
    }
  };
  
  const getStatusText = () => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'offline':
        return 'Offline';
      case 'syncing':
        return 'Syncing...';
      case 'error':
        return 'Sync Error';
    }
  };
  
  const getStatusClass = () => {
    switch (status) {
      case 'online':
        return 'text-health-success';
      case 'offline':
        return 'text-health-warning';
      case 'syncing':
        return 'text-health-primary';
      case 'error':
        return 'text-health-alert';
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            className={cn("h-8 gap-1 px-2", getStatusClass())}
            onClick={onSyncNow}
            disabled={status === 'syncing'}
          >
            <div className="flex items-center gap-1.5">
              {getStatusIcon()}
              <span className="hidden sm:inline text-xs font-medium">
                {getStatusText()}
              </span>
              {pendingChanges > 0 && (
                <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-health-alert px-1 text-[10px] font-medium text-white">
                  {pendingChanges}
                </span>
              )}
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-xs">
            <p className="font-medium">
              {status === 'online' ? 'Connected' : status === 'offline' ? 'Working Offline' : status === 'syncing' ? 'Syncing Data' : 'Sync Failed'}
            </p>
            <p className="text-muted-foreground">Last synced: {formatLastSync()}</p>
            {pendingChanges > 0 && (
              <p className="text-health-alert">{pendingChanges} changes pending</p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SyncStatus;
