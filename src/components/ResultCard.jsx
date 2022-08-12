import React from 'react';
import { motion } from 'framer-motion';
const Card = ({ result, index }) => {
  const {
    winner,
    playerScore,
    botScore,
    playerName,
    timePlayed,
    durationOfGame,
  } = result;
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
          <div
            className="px-8 py-10 rounded-xl relative z-10 w-full text-gray-800
          border-4 border-gray-500  opacity-100 hover:shadow-lg glass "
          >
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              {playerName} Vs bot
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              the winner : {winner}
            </h1>
            <p className="leading-relaxed ">
              The battle was epic , but {winner} manged to claim Victory here.
            </p>
            <p>Player Score: {playerScore}</p>
            <p>bot Score : {botScore}</p>
            <p>Time: {timePlayed}</p>
            <p>Duration: {durationOfGame}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
