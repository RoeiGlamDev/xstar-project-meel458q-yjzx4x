'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-pink-700 font-serif">
      <header className="bg-gradient-to-r from-pink-500 to-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center">luxury FashionTV cosmetics</h1>
        <p className="text-center mt-2">Where Elegance Meets Fashion</p>
      </header>

      <main className="py-16 px-8">
        {/ Hero Section /}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Discover the Essence of Luxury</h2>
          <p className="max-w-xl mx-auto">
            Dive into the world of luxury with our exclusive FashionTV cosmetics line. Crafted for those who appreciate elegance and sophistication.
          </p>
        </motion.section>

        {/ Features Section /}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-pink-100 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2">Premium Ingredients</h3>
            <p>
              Our products are crafted with the finest ingredients, ensuring a luxurious experience every time.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-pink-100 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2">Fashion-Forward Designs</h3>
            <p>
              Stay ahead of the trend with our cosmetics, designed to complement the latest fashion styles.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-pink-100 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2">Sustainable Luxury</h3>
            <p>
              Embrace sustainability with our eco-friendly packaging and responsibly sourced materials.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-pink-100 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2">Exquisite Finish</h3>
            <p>
              Achieve a flawless look with our expertly crafted formulas designed to illuminate your natural beauty.
            </p>
          </motion.div>
        </section>
      </main>

      <footer className="bg-pink-500 text-white py-4 text-center">
        <p>© 2023 luxury FashionTV cosmetics. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
