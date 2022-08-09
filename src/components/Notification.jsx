import React from 'react';
import Portal from './Portal';
import NotificationMessage from './NotificationMessage';
import NotificationPanel from './NotificationPanel';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getNotification } from '../store/';

export const Notification = () => {
  const notifications = useSelector(getNotification);
  return (
    <>
      <Portal>
        <NotificationPanel>
          {notifications.map((notification) => {
            return (
              notification && (
                <NotificationMessage
                  cellId={notification.cellId}
                  body={notification.body}
                  isHit={notification.isHit}
                  key={notification.cellId}
                />
              )
            );
          })}
        </NotificationPanel>
      </Portal>
    </>
  );
};
export default Notification;
