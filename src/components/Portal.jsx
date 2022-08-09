import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { DefaultContext } from 'react-icons/lib';

const Portal = ({ children }) => {
  return createPortal(
    <AnimatePresence>
      <motion.div className="absolute z-10 top-0 w-full h-full">
        {children}
      </motion.div>
    </AnimatePresence>,
    document.getElementById('portal')
  );
};
export default Portal;
