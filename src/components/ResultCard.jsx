import React from 'react';

const Card = ({ title, body }) => {
  return (
    <>
      <div>
        <div className="flex  p-8 w-full bg-gray-200 shadow-md rounded-lg overflow-hidden mx-auto">
          <div
            className="relative flex flex-col items-center justify-around p-4 mr-4 w-80 h-80 rounded-2xl "
            style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
          >
            <div
              className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-300 rounded-xl -rotate-2 "
              style={{ zIndex: -1 }}
            />
            <div
              className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-400 rounded-xl rotate-2 "
              style={{ zIndex: -1 }}
            />
            <div
              className="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl "
              style={{ zIndex: -1 }}
            />
            <h3 className="z-10 p-2 text-2xl font-semibold text-purple-900">
              {title}
            </h3>
            <div className="z-10 p-2 text-purple-900">
              {/* {image or something } */}
            </div>
            <div className="z-10 p-2 text-sm text-center text-gray-500 ">
              {body}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
