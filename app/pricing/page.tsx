'use client'

import React from 'react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Glamorous',
    price: '$99/mo',
    features: [
      'Personalized Fashion Consultation',
      'Exclusive Access to New Launches',
      'Priority Customer Support',
    ],
  },
  {
    title: 'Opulent',
    price: '$199/mo',
    features: [
      'All Glamorous Features',
      'Monthly Skincare Kit',
      'VIP Event Invitations',
    ],
  },
  {
    title: 'Iconic',
    price: '$299/mo',
    features: [
      'All Opulent Features',
      'Annual Fashion Week Pass',
      'Dedicated Fashion Stylist',
    ],
  },
];

const FAQ = [
  {
    question: 'What is included in the Glamorous plan?',
    answer: 'The Glamorous plan offers personalized fashion consultations, exclusive access to new launches, and priority customer support.',
  },
  {
    question: 'How can I upgrade my plan?',
    answer: 'You can upgrade your plan anytime through your account settings or by contacting our support team.',
  },
  {
    question: 'Are there any discounts for annual subscriptions?',
    answer: 'Yes, we offer a 15% discount for annual subscriptions across all plans.',
  },
];

const PricingPage: NextPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <motion.div
        className="text-center py-20 bg-gradient-to-r from-pink-500 to-pink-700 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">luxury FashionTV cosmetics Pricing Plans</h1>
        <p className="text-xl">Experience luxury like never before</p>
      </motion.div>
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.title}
              className="bg-white border border-pink-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6 rounded-t-lg bg-pink-500 text-white">
                <h3 className="text-2xl font-semibold">{plan.title}</h3>
                <p className="mt-4 text-lg">{plan.price}</p>
              </div>
              <ul className="py-6 px-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="border-t border-gray-200 py-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-pink-500 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {FAQ.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white border border-pink-300 rounded-lg shadow-md p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-pink-500">{faq.question}</h3>
                <p className="mt-4">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
