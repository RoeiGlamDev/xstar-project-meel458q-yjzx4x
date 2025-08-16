'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  const baseClasses = 'font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  const primaryClasses = 'bg-pink-500 text-white hover:bg-pink-600 hover:scale-105 transition-transform duration-300';
  const secondaryClasses = 'bg-white text-pink-500 border border-pink-500 hover:bg-pink-100 hover:scale-105 transition-transform duration-300';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses`} ${variant === 'primary' ? primaryClasses : secondaryClasses}}
    >
      {children}
    </motion.button>
  );
};

export default Button;
