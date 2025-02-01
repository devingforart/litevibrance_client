// src/components/Notification/Notification.tsx
import React from 'react';
import './Notification.scss';
import { useNotification } from '../../context/NotificationContext';

const Notification: React.FC = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification notification--${notification.type}`}
          onClick={() => removeNotification(notification.id)}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Notification;
