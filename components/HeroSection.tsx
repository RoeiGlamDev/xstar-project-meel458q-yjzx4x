'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  heading: string;
  subheading: string;
  ctaLabel: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heading, subheading, ctaLabel }) => {
  return (
    <section className="relative bg-gradient-to-r from-pink-500 to-white text-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {heading}
          </motion.h1>
          <motion.div
            className="mt-4 text-xl sm:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {subheading}
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a
              href="#shop"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md py-3 px-8"
            >
              {ctaLabel}
            </a>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-75 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;