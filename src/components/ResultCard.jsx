import React from 'react';

const Card = ({ resultObj }) => {
  return (
    <>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Ahmed Vs bot
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ahmed is victorious
            </h1>
            <p className="leading-relaxed">
              here goes the body of the text .here goes the body of the text
              .here goes the body of the text .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
