
import React from 'react';
import GlobalHeader from '@/components/header/GlobalHeader';
import DashboardSidebar from '@/components/sidebar/DashboardSidebar';
import { useHealthStore } from '@/store/healthStore';
import { useOfflineSync } from '@/hooks/useOfflineSync';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

const CounselorToolPage = () => {
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
            <h1 className="text-3xl font-bold">Caregiver Counseling Tool</h1>
            <p className="text-muted-foreground">
              Combat misinformation with culturally adapted, linguistically inclusive tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-health-primary" />
                    Counselor Voice Bot
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center p-12 text-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      This is a placeholder for the Counselor Voice Bot component.
                    </p>
                    <p>
                      Coming soon: Voice-first, AI-enhanced myth debunking assistant for caregivers
                    </p>
                  </div>
                </CardContent>
              </Card>
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

export default CounselorToolPage;
