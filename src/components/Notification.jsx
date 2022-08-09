import Portal from './Portal';
import NotificationMessage from './NotificationMessage';
import NotificationPanel from './NotificationPanel';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getNotification } from '../store/';
import { useState, useRef, useEffect } from 'react';
import { flushSync } from 'react-dom';

export const Notification = () => {
  const [notifications, setNotifications] = useState(
    useSelector(getNotification)
  );

  const containerRef = useRef(null);
  const state = useSelector((s) => s);
  const scrollToView = () => {
    document.getElementById('last')?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };
  useEffect(() => {
    setNotifications(getNotification(state));
    scrollToView();
  }, [notifications.length]);
  return (
    <>
      <Portal>
        <NotificationPanel>
          <div>
            {notifications.map((notification, index) => {
              return (
                notification &&
                (index === notifications.length - 1 ? (
                  <div
                    id="last"
                    key={notification.cellId * Math.random()}
                    ref={containerRef}
                  >
                    <NotificationMessage
                      cellId={notification.cellId}
                      body={notification.body}
                      isHit={notification.isHit}
                      key={notification.cellId * Math.random()}
                    />
                  </div>
                ) : (
                  <NotificationMessage
                    cellId={notification.cellId}
                    body={notification.body}
                    isHit={notification.isHit}
                    key={notification.cellId * Math.random()}
                  />
                ))
              );
            })}
          </div>
        </NotificationPanel>
      </Portal>
    </>
  );
};
export default Notification;
