import React from 'react';
import { motion } from 'framer-motion';
const Card = ({ result, index }) => {
  const { winner } = result;

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          y: -100,
          opacity: 0,
          transition: { duration: 0.2, ease: 'easeInOut' },
        }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
        className="lg:w-1/3 sm:w-1/2 p-4"
      >
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
      </motion.div>
    </>
  );
};

export default Card;
