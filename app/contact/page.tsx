'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <motion.div
        className="text-4xl font-bold text-pink-500 mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury FashionTV cosmetics
      </motion.h1>
      <motion.div
        className="w-full max-w-3xl bg-white shadow-lg rounded-lg mt-8 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form className="flex flex-col space-y-4">
          <label className="text-lg text-pink-500" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-pink-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your Name"
            required
          />

          <label className="text-lg text-pink-500" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-pink-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your Email"
            required
          />

          <label className="text-lg text-pink-500" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="border border-pink-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your Message"
            rows={5}
            required
          />

          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      <motion.div
        className="mt-10 w-full max-w-3xl bg-pink-50 shadow-lg rounded-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">
          Visit Us
        </h2>
        <p className="text-lg text-gray-800">
          luxury FashionTV cosmetics Boutique
        </p>
        <p className="text-lg text-gray-800">123 Fashion Avenue, Suite 100</p>
        <p className="text-lg text-gray-800">Paris, France</p>

        <h3 className="text-xl font-semibold text-pink-500 mt-6">
          Business Hours
        </h3>
        <ul className="text-lg text-gray-800">
          <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
          <li>Saturday: 10:00 AM - 6:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ContactPage;
