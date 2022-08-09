import React from 'react';
import { motion } from 'framer-motion';
import { victory } from '../assets';
const Winner = () => {
  return (
    <motion.div>
      <img className="w-full " src={victory} alt="Victory parade" />
    </motion.div>
  );
};

export default Winner;
