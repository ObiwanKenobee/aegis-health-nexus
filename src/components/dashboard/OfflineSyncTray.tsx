
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, Clock, Database, RefreshCw, Shield, Wifi, WifiOff } from 'lucide-react';
import { useOfflineSync } from '@/hooks/useOfflineSync';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const OfflineSyncTray: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [autoSync, setAutoSync] = useState(true);
  
  const { 
    isOnline, 
    syncStatus, 
    lastSync, 
    pendingChanges, 
    syncNow 
  } = useOfflineSync();

  const formatLastSync = () => {
    if (!lastSync) return 'Never synced';
    
    const now = new Date();
    const diffMs = now.getTime() - lastSync.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minutes ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} hours ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} days ago`;
  };

  const getStatusIcon = () => {
    switch (syncStatus) {
      case 'online':
        return <Wifi className="h-5 w-5 text-health-success" />;
      case 'offline':
        return <WifiOff className="h-5 w-5 text-health-warning" />;
      case 'syncing':
        return <RefreshCw className="h-5 w-5 animate-spin text-health-primary" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-health-alert" />;
    }
  };

  return (
    <Collapsible open={expanded} onOpenChange={setExpanded} className="w-full">
      <Card className="shadow-sm">
        <CollapsibleTrigger asChild>
          <CardHeader className="pb-3 cursor-pointer hover:bg-muted/30">
            <div className="flex items-center justify-between">
              <CardTitle className="text-md flex items-center gap-2">
                <Database className="h-4 w-4" />
                Offline Sync Status
              </CardTitle>
              <div className="flex items-center gap-2">
                {getStatusIcon()}
                {pendingChanges > 0 && (
                  <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-health-alert px-1 text-[10px] font-medium text-white">
                    {pendingChanges}
                  </span>
                )}
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Last sync: {formatLastSync()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-health-success" />
                  <span className="text-sm text-muted-foreground">Local data storage secure</span>
                </div>
              </div>
              <Button 
                onClick={syncNow} 
                disabled={syncStatus === 'syncing' || !isOnline} 
                className="bg-health-primary hover:bg-health-primary/80"
                size="sm"
              >
                <RefreshCw className={`h-4 w-4 mr-1 ${syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
                {syncStatus === 'syncing' ? 'Syncing...' : 'Sync Now'}
              </Button>
            </div>
            
            {pendingChanges > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs">Sync progress</span>
                  <span className="text-xs font-medium">{pendingChanges} pending</span>
                </div>
                <Progress value={0} className="h-1" />
              </div>
            )}
            
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="auto-sync"
                  checked={autoSync}
                  onCheckedChange={setAutoSync}
                />
                <Label htmlFor="auto-sync">Auto-sync when online</Label>
              </div>
              
              <div className="flex items-center gap-1">
                {isOnline ? (
                  <CheckCircle className="h-3 w-3 text-health-success" /> 
                ) : (
                  <AlertCircle className="h-3 w-3 text-health-warning" />
                )}
                <span className="text-xs font-medium">
                  {isOnline ? 'Online Mode' : 'Offline Mode'}
                </span>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default OfflineSyncTray;
