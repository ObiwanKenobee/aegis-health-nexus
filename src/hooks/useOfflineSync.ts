
import { useState, useEffect, useCallback } from 'react';
import { healthDB } from '@/utils/indexedDb';

export type SyncStatus = 'online' | 'offline' | 'syncing' | 'error';

interface UseOfflineSyncOptions {
  onSyncComplete?: () => void;
  onSyncError?: (error: Error) => void;
}

export const useOfflineSync = (options?: UseOfflineSyncOptions) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>(navigator.onLine ? 'online' : 'offline');
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [pendingChanges, setPendingChanges] = useState(0);

  // Initialize IndexedDB connection
  useEffect(() => {
    healthDB.connect()
      .then(() => {
        console.log('IndexedDB connected for offline sync');
        updatePendingChangesCount();
      })
      .catch(error => {
        console.error('Failed to connect to IndexedDB:', error);
      });
      
    // Clean up
    return () => {
      healthDB.close();
    };
  }, []);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => {
      console.log('App is online');
      setIsOnline(true);
      setSyncStatus('online');
      // Automatically try to sync when connection is restored
      syncNow();
    };

    const handleOffline = () => {
      console.log('App is offline');
      setIsOnline(false);
      setSyncStatus('offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Update pending changes count
  const updatePendingChangesCount = useCallback(async () => {
    try {
      const count = await healthDB.count('syncQueue');
      setPendingChanges(count);
    } catch (error) {
      console.error('Error counting pending changes:', error);
    }
  }, []);

  // Function to add data to sync queue
  const addToSyncQueue = useCallback(async (data: any) => {
    try {
      const syncItem = {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        data,
        timestamp: new Date(),
        type: data.type || 'unknown',
        syncStatus: 'pending'
      };

      await healthDB.add('syncQueue', syncItem);
      updatePendingChangesCount();
      
      // If online, try to sync immediately
      if (isOnline) {
        syncNow();
      }
      
      return syncItem.id;
    } catch (error) {
      console.error('Error adding to sync queue:', error);
      throw error;
    }
  }, [isOnline, updatePendingChangesCount]);

  // Function to manually trigger sync
  const syncNow = useCallback(async () => {
    if (!isOnline) {
      console.log('Cannot sync while offline');
      return;
    }

    if (syncStatus === 'syncing') {
      console.log('Sync already in progress');
      return;
    }

    try {
      setSyncStatus('syncing');
      console.log('Starting sync process...');

      // Get all pending items
      const pendingItems = await healthDB.getAll('syncQueue');
      
      if (pendingItems.length === 0) {
        console.log('No items to sync');
        setSyncStatus('online');
        setLastSync(new Date());
        return;
      }

      console.log(`Syncing ${pendingItems.length} items...`);
      
      // In a real app, you would send these to your API
      // This is just a simulation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Process successful sync
      for (const item of pendingItems) {
        await healthDB.delete('syncQueue', item.id);
      }
      
      updatePendingChangesCount();
      setSyncStatus('online');
      setLastSync(new Date());
      
      if (options?.onSyncComplete) {
        options.onSyncComplete();
      }
    } catch (error) {
      console.error('Sync error:', error);
      setSyncStatus('error');
      
      if (options?.onSyncError && error instanceof Error) {
        options.onSyncError(error);
      }
    }
  }, [isOnline, syncStatus, options, updatePendingChangesCount]);

  return {
    isOnline,
    syncStatus,
    lastSync,
    pendingChanges,
    addToSyncQueue,
    syncNow
  };
};
