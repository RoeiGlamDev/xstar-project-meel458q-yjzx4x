import { useState } from 'react';
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  onSubmit: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
    }
  };

  return (
    <section className="bg-gradient-to-r from-pink-500 to-white py-12 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join the luxury FashionTV cosmetics Exclusive Newsletter
        </motion.h2>
        <p className="text-white mb-8">
          Stay updated with the latest trends and exclusive offers from luxury FashionTV cosmetics. Be the first to know about our luxurious new arrivals.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            className="flex-1 py-3 px-4 rounded-full border border-pink-500 text-black focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button
            type="submit"
            className="py-3 px-6 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
