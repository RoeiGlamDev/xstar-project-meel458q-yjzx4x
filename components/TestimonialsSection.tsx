'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  photoUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alexandra V.',
    review: 'The luxury FashionTV cosmetics have transformed my skincare routine. The products are exquisite and make me feel like a star every day!',
    rating: 5,
    photoUrl: '/images/alexandra.jpg',
  },
  {
    name: 'Giovanni R.',
    review: 'As a fashion model, maintaining a flawless appearance is key. The luxury FashionTV cosmetics line offers unparalleled quality and results.',
    rating: 5,
    photoUrl: '/images/giovanni.jpg',
  },
  {
    name: 'Isabella M.',
    review: 'I absolutely adore the vibrant colors and luxurious feel of luxury FashionTV cosmetics. They are my go-to choice for every runway show.',
    rating: 5,
    photoUrl: '/images/isabella.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-8">
          What Our Clients Say About luxury FashionTV cosmetics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-pink-50 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={testimonial.photoUrl}
                alt={${testimonial.name}'s photo}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold text-pink-600 mt-4 text-center">
                {testimonial.name}
              </h3>
              <p className="text-center mt-2">{testimonial.review}</p>
              <div className="flex justify-center mt-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.922 1.603-.922 1.902 0l1.286 3.964a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.453a1 1 0 00-.364 1.118l1.286 3.964c.3.922-.755 1.688-1.54 1.118l-3.37-2.453a1 1 0 00-1.176 0l-3.37 2.453c-.784.57-1.838-.196-1.54-1.118l1.286-3.964a1 1 0 00-.364-1.118L2.341 9.391c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.964z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
