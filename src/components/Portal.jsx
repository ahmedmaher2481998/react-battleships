import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Portal = ({ children }) => {
  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        exit={{
          opacity: 0,
          x: 20,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
        className="absolute bg-opacity-20 z-10 w-1/5  right-0 top-0  h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>,
    document.getElementById('portal')
  );
};
export default Portal;
