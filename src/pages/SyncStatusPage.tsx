
import React from 'react';
import GlobalHeader from '@/components/header/GlobalHeader';
import DashboardSidebar from '@/components/sidebar/DashboardSidebar';
import OfflineSyncTray from '@/components/dashboard/OfflineSyncTray';
import { useHealthStore } from '@/store/healthStore';
import { useOfflineSync } from '@/hooks/useOfflineSync';

const SyncStatusPage = () => {
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
            <h1 className="text-3xl font-bold">Offline Sync Status</h1>
            <p className="text-muted-foreground">
              Monitor and manage data synchronization in low-connectivity environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <OfflineSyncTray />
            </div>
            <div>
              {/* Additional components could go here */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SyncStatusPage;
