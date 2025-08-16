'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRegGem } from 'react-icons/fa';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic Couture',
    price: '$299',
    features: [
      'Personalized Style Consultation',
      'Access to Exclusive Collections',
      'Monthly Fashion Tips Newsletter',
    ],
  },
  {
    name: 'Deluxe Elegance',
    price: '$599',
    features: [
      'Dedicated Fashion Stylist',
      'Priority Access to New Arrivals',
      'Quarterly Style Box',
      'Exclusive Event Invitations',
    ],
  },
  {
    name: 'Ultimate Glamour',
    price: '$999',
    features: [
      'VIP Fashion Concierge',
      'Custom Couture Creations',
      'Annual Style Retreat',
      '24/7 Style Support Hotline',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="text-3xl font-extrabold text-pink-600 sm:text-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          luxury FashionTV cosmetics Services
        </motion.h2>
        <motion.div
          className="mt-4 text-lg leading-6 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Elevate your style with our premium fashion services tailored for the modern icon.
        </motion.p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
        {pricingTiers.map((tier) => (
          <motion.div
            key={tier.name}
            className="bg-white border border-pink-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <FaRegGem className="text-pink-500 text-4xl" />
              </div>
              <h3 className="text-lg leading-6 font-medium text-pink-600">{tier.name}</h3>
              <p className="mt-4 text-3xl font-bold text-gray-900">{tier.price}</p>
              <ul className="mt-6 space-y-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-pink-500">&#10003;</span>
                    <p className="ml-3 text-gray-600">{feature}</p>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-8 block w-full bg-pink-600 text-white text-center py-3 px-4 rounded-md hover:bg-pink-700 transition-colors duration-300"
              >
                Choose {tier.name}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
