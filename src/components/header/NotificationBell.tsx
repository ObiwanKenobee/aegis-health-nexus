
import React, { useState } from 'react';
import { Bell, BellDot } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'alert' | 'success';
  timestamp: Date;
  read: boolean;
}

interface NotificationBellProps {
  notifications: Notification[];
  onNotificationRead?: (id: string) => void;
  onAllRead?: () => void;
}

const NotificationBell: React.FC<NotificationBellProps> = ({
  notifications,
  onNotificationRead = () => {},
  onAllRead = () => {},
}) => {
  const [open, setOpen] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const getTypeColor = (type: Notification['type']) => {
    switch (type) {
      case 'info':
        return 'bg-health-primary text-white';
      case 'warning':
        return 'bg-health-warning text-white';
      case 'alert':
        return 'bg-health-alert text-white';
      case 'success':
        return 'bg-health-success text-white';
    }
  };
  
  const formatTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };
  
  const handleNotificationClick = (id: string) => {
    onNotificationRead(id);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 relative">
          {unreadCount > 0 ? (
            <>
              <BellDot className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-health-alert px-1 text-[10px] font-medium text-white">
                {unreadCount}
              </span>
            </>
          ) : (
            <Bell className="h-5 w-5" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-4 border-b">
          <h4 className="font-medium">Notifications</h4>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={onAllRead}>
              Mark all as read
            </Button>
          )}
        </div>
        {notifications.length > 0 ? (
          <ScrollArea className="h-80">
            <div className="flex flex-col divide-y">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "p-4 cursor-pointer transition-colors hover:bg-muted/50",
                    !notification.read && "bg-muted/30"
                  )}
                  onClick={() => handleNotificationClick(notification.id)}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h5 className="font-medium text-sm flex gap-2 items-center">
                      <span className={cn("h-2 w-2 rounded-full", getTypeColor(notification.type))} />
                      {notification.title}
                    </h5>
                    <span className="text-xs text-muted-foreground">
                      {formatTime(notification.timestamp)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {notification.message}
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="p-4 text-center text-muted-foreground text-sm">
            No notifications
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default NotificationBell;
