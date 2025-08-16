'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">luxury FashionTV cosmetics</h2>
            <p className="mt-2">Elevate your beauty with our exclusive range.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/about" className="hover:underline">
              About Us
            </a>
            <a href="/products" className="hover:underline">
              Products
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-pink-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-pink-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter" className="hover:text-pink-400">
            <i className="fab fa-twitter"></i>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p>&copy; {new Date().getFullYear()} luxury FashionTV cosmetics. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
