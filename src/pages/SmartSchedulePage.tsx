
import React from 'react';
import GlobalHeader from '@/components/header/GlobalHeader';
import DashboardSidebar from '@/components/sidebar/DashboardSidebar';
import SmartScheduleFlow from '@/components/dashboard/SmartScheduleFlow';
import { useHealthStore } from '@/store/healthStore';
import { useOfflineSync } from '@/hooks/useOfflineSync';

const SmartSchedulePage = () => {
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
            <h1 className="text-3xl font-bold">Smart Scheduling Console</h1>
            <p className="text-muted-foreground">
              Plan and optimize vaccine routes with AI-powered scheduling
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <SmartScheduleFlow />
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

export default SmartSchedulePage;
