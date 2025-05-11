
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'ur' | 'ha' | 'sw';

export interface UserData {
  name: string;
  role: string;
  region: string;
  avatar?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'alert' | 'success';
  timestamp: Date;
  read: boolean;
}

export interface RiskFilters {
  date: Date;
  riskTypes: {
    dropout: boolean;
    coldChain: boolean;
    misinformation: boolean;
    accessibility: boolean;
    aiPrediction: boolean;
  };
  regionLevel: 'district' | 'ward' | 'union_council' | 'household';
}

interface HealthState {
  language: Language;
  user: UserData;
  notifications: Notification[];
  riskFilters: RiskFilters;
  
  // Actions
  setLanguage: (language: Language) => void;
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  addNotification: (notification: Omit<Notification, 'id' | 'read' | 'timestamp'>) => void;
  updateRiskFilters: (filters: Partial<RiskFilters>) => void;
}

// Create demo notifications
const createDemoNotifications = (): Notification[] => [
  {
    id: '1',
    title: 'Cold Chain Alert',
    message: 'Refrigerator UC-7-F3 temperature exceeds safe range. Action required.',
    type: 'alert',
    timestamp: new Date(Date.now() - 25 * 60000), // 25 minutes ago
    read: false
  },
  {
    id: '2',
    title: 'Missed Appointments',
    message: '12 appointments missed in Union Council 4 yesterday. Follow-up required.',
    type: 'warning',
    timestamp: new Date(Date.now() - 2 * 3600000), // 2 hours ago
    read: false
  },
  {
    id: '3',
    title: 'New Misinformation Report',
    message: 'New vaccine misinformation detected in Ward 6. Educational messaging needed.',
    type: 'info',
    timestamp: new Date(Date.now() - 5 * 3600000), // 5 hours ago
    read: true
  },
  {
    id: '4',
    title: 'Sync Completed',
    message: 'All data successfully synchronized with central database.',
    type: 'success',
    timestamp: new Date(Date.now() - 24 * 3600000), // 1 day ago
    read: true
  }
];

// Create the store
export const useHealthStore = create<HealthState>()(
  persist(
    (set) => ({
      language: 'en',
      user: {
        name: 'Ahmed Khan',
        role: 'Health Officer',
        region: 'KPK, Pakistan',
        avatar: ''
      },
      notifications: createDemoNotifications(),
      riskFilters: {
        date: new Date(),
        riskTypes: {
          dropout: true,
          coldChain: true,
          misinformation: true,
          accessibility: false,
          aiPrediction: true
        },
        regionLevel: 'district'
      },
      
      setLanguage: (language) => set({ language }),
      
      markNotificationAsRead: (id) => set((state) => ({
        notifications: state.notifications.map((n) => 
          n.id === id ? { ...n, read: true } : n
        )
      })),
      
      markAllNotificationsAsRead: () => set((state) => ({
        notifications: state.notifications.map((n) => ({ ...n, read: true }))
      })),
      
      addNotification: (notification) => set((state) => ({
        notifications: [
          {
            id: Date.now().toString(),
            ...notification,
            read: false,
            timestamp: new Date()
          },
          ...state.notifications
        ]
      })),
      
      updateRiskFilters: (filters) => set((state) => ({
        riskFilters: { ...state.riskFilters, ...filters }
      }))
    }),
    {
      name: 'aegis-health-storage'
    }
  )
);
