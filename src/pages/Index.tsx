
import React, { useEffect } from 'react';
import GlobalHeader from '@/components/header/GlobalHeader';
import ShrucMap from '@/components/maps/ShrucMap';
import RiskFilters from '@/components/filters/RiskFilters';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useHealthStore } from '@/store/healthStore';
import { useOfflineSync } from '@/hooks/useOfflineSync';
import { useToast } from '@/components/ui/use-toast';
import { AlertTriangle, Clock, RefreshCw, Map as MapIcon } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const { user, notifications, markNotificationAsRead, markAllNotificationsAsRead, updateRiskFilters } = useHealthStore();
  
  const { 
    syncStatus, 
    lastSync, 
    pendingChanges, 
    syncNow,
    addToSyncQueue
  } = useOfflineSync({
    onSyncComplete: () => {
      toast({
        title: "Sync Completed",
        description: "All data has been synchronized successfully",
      });
    },
    onSyncError: (error) => {
      toast({
        title: "Sync Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  // Handle demo notifications
  useEffect(() => {
    const unreadCount = notifications.filter(n => !n.read).length;
    if (unreadCount > 0) {
      document.title = `(${unreadCount}) AEGIS Health Workspace`;
    } else {
      document.title = "AEGIS Health Workspace";
    }
  }, [notifications]);
  
  const handleNotificationRead = (id: string) => {
    markNotificationAsRead(id);
  };

  const handleFilterChange = (filters: any) => {
    updateRiskFilters(filters);
    
    // Demo of adding to sync queue
    addToSyncQueue({
      type: 'filter_change',
      filters
    }).then(() => {
      console.log('Filter change added to sync queue');
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <GlobalHeader 
        user={user}
        syncStatus={{
          status: syncStatus,
          lastSync,
          pendingChanges,
        }}
        notifications={notifications}
        onNotificationRead={handleNotificationRead}
        onAllNotificationsRead={markAllNotificationsAsRead}
        onSyncNow={syncNow}
      />
      
      <main className="flex-1 container max-w-screen-2xl py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">SHRUC Tracker Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor high-risk union councils and manage field operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1 space-y-6">
            <RiskFilters onFilterChange={handleFilterChange} />

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-md flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-health-warning" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>Last Sync</span>
                    </div>
                    <span className="text-sm font-medium">
                      {lastSync ? new Date(lastSync).toLocaleTimeString() : 'Never'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <RefreshCw className="h-4 w-4" />
                      <span>Connection</span>
                    </div>
                    <span 
                      className={`text-sm font-medium ${
                        syncStatus === 'online' 
                          ? 'text-health-success' 
                          : syncStatus === 'offline' 
                          ? 'text-health-warning' 
                          : syncStatus === 'error'
                          ? 'text-health-alert'
                          : 'text-health-primary'
                      }`}
                    >
                      {syncStatus === 'online' 
                        ? 'Connected' 
                        : syncStatus === 'offline' 
                        ? 'Offline' 
                        : syncStatus === 'syncing'
                        ? 'Syncing...'
                        : 'Error'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <MapIcon className="h-4 w-4" />
                      <span>Data Coverage</span>
                    </div>
                    <span className="text-sm font-medium">
                      87% Complete
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
          
          <div className="lg:col-span-3">
            <div className="h-[75vh]">
              <ShrucMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
