'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { FC } from 'react';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CTASection: FC<CTASectionProps> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <section className="bg-white py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-pink-600 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {description}
        </motion.p>
        <motion.div
          onClick={onButtonClick}
          className="bg-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.button>
      </div>
    </section>
  );
};

export default CTASection;
