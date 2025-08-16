'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <i className="fas fa-palette"></i>,
    title: 'Exquisite Craftsmanship',
    description: 'Our cosmetics are crafted with precision and sophistication, ensuring a luxurious experience.',
  },
  {
    icon: <i className="fas fa-gem"></i>,
    title: 'Premium Ingredients',
    description: 'We source the finest ingredients to deliver unmatched quality and performance.',
  },
  {
    icon: <i className="fas fa-star"></i>,
    title: 'Celebrity Endorsed',
    description: 'Loved by top fashion icons, "luxury FashionTV cosmetics" is the choice of the elite.',
  },
  {
    icon: <i className="fas fa-globe"></i>,
    title: 'Global Recognition',
    description: 'Available worldwide, our brand represents elegance and luxury in every corner of the globe.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-4xl font-bold text-pink-600 mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the Essence of Luxury with "luxury FashionTV cosmetics"
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-r from-pink-100 to-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <div className="text-pink-600 text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
