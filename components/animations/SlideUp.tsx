'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  isVisible: boolean;
}

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const SlideUp: React.FC<SlideUpProps> = ({ children, isVisible }) => {return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideUpVariants}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-pink-500 text-white p-4 rounded-lg shadow-lg"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideUp;
