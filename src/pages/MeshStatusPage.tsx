
import React from 'react';
import GlobalHeader from '@/components/header/GlobalHeader';
import DashboardSidebar from '@/components/sidebar/DashboardSidebar';
import { useHealthStore } from '@/store/healthStore';
import { useOfflineSync } from '@/hooks/useOfflineSync';

const MeshStatusPage = () => {
  const { user, notifications, markNotificationAsRead, markAllNotificationsAsRead } = useHealthStore();
  const { syncStatus, lastSync, pendingChanges, syncNow } = useOfflineSync();

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
        onNotificationRead={markNotificationAsRead}
        onAllNotificationsAsRead={markAllNotificationsAsRead}
        onSyncNow={syncNow}
      />
      
      <div className="flex-1 flex">
        <DashboardSidebar />
        
        <main className="flex-1 container max-w-screen-2xl py-6 px-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Mesh Resilience Status</h1>
            <p className="text-muted-foreground">
              Monitor connection & data health across solar kiosks and mesh nodes
            </p>
          </div>
          
          <div className="flex items-center justify-center p-12 h-64 bg-muted/30 rounded-lg border">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
              <p className="text-muted-foreground">
                The Mesh Resilience Status dashboard is under development
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MeshStatusPage;
