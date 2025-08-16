import { useState } from 'react';
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <motion.section
      className="min-h-screen bg-white text-black p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <motion.div
          className="text-4xl font-bold mb-4 text-pink-500"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Contact luxury FashionTV cosmetics
        </motion.h2>
        <p className="mb-8 text-lg">
          Reach out to luxury FashionTV cosmetics for exclusive fashion collaborations, inquiries about our premium products, or any other fashionable needs.
        </p>
        <form onSubmit={handleSubmit} className="bg-pink-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-pink-500 rounded focus:outline-none focus:border-pink-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-pink-500 rounded focus:outline-none focus:border-pink-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2" htmlFor="reason">
              Reason for Contact
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-pink-500 rounded focus:outline-none focus:border-pink-700"
            >
              <option value="" disabled>Select a reason</option>
              <option value="collaboration">Fashion Collaboration</option>
              <option value="product-inquiry">Product Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-pink-500 rounded focus:outline-none focus:border-pink-700"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-lg">
          <h3 className="text-2xl font-bold text-pink-500">Business Information</h3>
          <p>Location: 123 Fashion Ave, New York, NY 10001</p>
          <p>Business Hours: Mon-Fri, 9 AM - 6 PM</p>
          <p>Contact Number: +1 (555) 123-4567</p>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
