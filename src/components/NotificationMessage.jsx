import { useState } from 'react';

import { AiOutlineCloseCircle } from 'react-icons/ai/index';

const NotificationMessage = ({ body, isHit, cellId }) => {
  const [open, setOpen] = useState(true);
  const bg = isHit ? 'green-400' : 'rose-400';

  return (
    <>
      <div
        key={cellId}
        className={`${
          open ? 'not' : 'hidden'
        } w-full p-3 mt-6  bg-${bg} rounded flex items-center `}
      >
        <div
          className={`w-8 h-8 border rounded-full border-black flex flex-shrink-0 items-center justify-center`}
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z"
              fill="#000000"
            />
          </svg>
        </div>
        <div className="pl-3 w-full ">
          <div className="flex items-center justify-between">
            <p className={`text-sm leading-none text-${bg}`}>{body}</p>
            <p
              onClick={() => {
                setOpen(false);
              }}
              className={`text-xl leading-3 underline cursor-pointer  text-${bg}`}
            >
              <AiOutlineCloseCircle />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationMessage;
