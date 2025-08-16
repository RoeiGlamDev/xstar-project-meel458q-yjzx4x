'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  value: number;
  description: string;
}

const achievements: Achievement[] = [
  {
    title: 'Global Reach',
    value: 50,
    description: 'Countries with distributors',
  },
  {
    title: 'Exclusive Products',
    value: 100,
    description: 'Unique luxury items',
  },
  {
    title: 'Awards',
    value: 30,
    description: 'Industry accolades',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-4xl font-bold text-pink-600 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achievements of luxury FashionTV cosmetics
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/3 p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-pink-100 p-6 rounded-lg shadow-lg text-center hover:bg-pink-200 transition-colors duration-300">
                <h3 className="text-2xl font-semibold text-pink-600">
                  {achievement.title}
                </h3>
                <p className="text-5xl font-bold text-black my-4">
                  {achievement.value}+
                </p>
                <p className="text-lg text-gray-700">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
