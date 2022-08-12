import { Portal, NotificationPanel, NotificationMessage } from '../components';
import { useSelector } from 'react-redux';
import { getNotification } from '../store/';
import { useState, useRef, useEffect } from 'react';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    // id="last"
                    className="mb-8"
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
