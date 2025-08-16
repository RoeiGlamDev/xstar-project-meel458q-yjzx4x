'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-lg p-6 m-4 max-w-sm 
        bg-gradient-to-r from-pink-500 to-pink-300 
        backdrop-filter backdrop-blur-lg bg-opacity-70 
        hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
    >
      <img src={imageSrc} alt={title} className="rounded-t-xl w-full h-48 object-cover" />
      <div className="mt-4">
        <h2 className="text-xl font-bold text-pink-700 mb-2">{title}</h2>
        <p className="text-pink-900">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
