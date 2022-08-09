import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Portal = ({ children }) => {
  return createPortal(
    <AnimatePresence>
      <motion.div className="absolute bg-opacity-20 z-10 w-1/5  right-0 top-0  h-full">
        {children}
      </motion.div>
    </AnimatePresence>,
    document.getElementById('portal')
  );
};
export default Portal;
