import { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi/index';
import { motion } from 'framer-motion';
import { BsFillArrowUpCircleFill } from 'react-icons/bs/index';
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
          className="w-full hidden lg:inline-block absolute shadow-2xl shadow-black  h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700 border-2 border-zinc-400 border-t-0"
        >
          <div className=" bg-rose-500 bg-opacity-50  h-screen overflow-y-auto p-2 absolute right-0">
            <div className="flex items-center justify-between">
              <p
                id="notification"
                className="text-2xl p-4 font-semibold leading-6 text-gray-800"
              >
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
                    stroke="#000000"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#000000"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <hr className="my-2" />
            {children}
            <UpArrow />
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

const UpArrow = () => {
  const scrollToTheTop = () => {
    document.getElementById('notification').scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  return (
    <>
      <span id="last" className="flex justify-center mt-2 text-4xl text-black">
        <span onClick={scrollToTheTop}>
          <BsFillArrowUpCircleFill className="hover:cursor-pointer" />
        </span>
      </span>
    </>
  );
};

export default NotificationPanel;
