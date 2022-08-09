import { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi/index';
import { motion } from 'framer-motion';
const NotificationPanel = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {open ? (
        <motion.div
          key={'Notification-panel'}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          exit={{
            X: 0,
            opacity: 0,
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
          className="w-full absolute h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="notification"
        >
          <div className=" bg-mainred bg-opacity-50  h-screen overflow-y-auto p-8 absolute right-0">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold leading-6 text-gray-800">
                Notification bar
              </p>
              <div className="cursor-pointer" onClick={() => setOpen(false)}>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {children}
          </div>
        </motion.div>
      ) : (
        <div
          onClick={() => setOpen(true)}
          className=" m-4 text-4xl absolute right-0 text-white ml-auto "
        >
          <HiOutlineMenuAlt1 />
        </div>
      )}
    </>
  );
};

export default NotificationPanel;
