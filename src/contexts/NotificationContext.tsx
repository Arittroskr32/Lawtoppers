import React, { useEffect, useState, createContext, useContext } from 'react';
export type NotificationType = 'info' | 'success' | 'warning' | 'error';
export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}
interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotification: (id: string) => void;
  clearAllNotifications: () => void;
}
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
export const NotificationProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    // Initialize with demo notifications
    return [{
      id: '1',
      type: 'info',
      title: 'New Course Available',
      message: 'Check out our new course on Constitutional Law!',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      read: false
    }, {
      id: '2',
      type: 'success',
      title: 'Exam Results Published',
      message: 'Results for the mock BAR exam are now available.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      read: false
    }, {
      id: '3',
      type: 'warning',
      title: 'Upcoming Deadline',
      message: 'Your assignment is due in 48 hours.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
      read: true
    }, {
      id: '4',
      type: 'error',
      title: 'Payment Failed',
      message: 'Your last payment attempt was unsuccessful.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      read: true
    }, {
      id: '5',
      type: 'info',
      title: 'System Maintenance',
      message: 'The system will be down for maintenance on Sunday, 2AM-4AM.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36),
      read: true
    }];
  });
  const [unreadCount, setUnreadCount] = useState<number>(0);
  useEffect(() => {
    // Update unread count whenever notifications change
    setUnreadCount(notifications.filter(n => !n.read).length);
  }, [notifications]);
  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substring(2, 9),
      timestamp: new Date(),
      read: false
    };
    setNotifications(prev => [newNotification, ...prev]);
  };
  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(notification => notification.id === id ? {
      ...notification,
      read: true
    } : notification));
  };
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notification => ({
      ...notification,
      read: true
    })));
  };
  const clearNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };
  const clearAllNotifications = () => {
    setNotifications([]);
  };
  return <NotificationContext.Provider value={{
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    markAllAsRead,
    clearNotification,
    clearAllNotifications
  }}>
      {children}
    </NotificationContext.Provider>;
};
export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};