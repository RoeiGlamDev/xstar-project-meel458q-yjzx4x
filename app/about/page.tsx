'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

const team: TeamMember[] = [
  {
    name: 'Jane Doe',
    position: 'Founder & CEO',
    bio: 'Jane has over 20 years of experience in the luxury fashion industry and founded luxury FashionTV cosmetics to bring high-end products to discerning customers.',
    imageUrl: '/images/team/jane-doe.jpg',
  },
  {
    name: 'John Smith',
    position: 'Creative Director',
    bio: 'John is a visionary in the realm of fashion design, ensuring every product reflects the elegance and sophistication of our brand.',
    imageUrl: '/images/team/john-smith.jpg',
  },
  {
    name: 'Alice Johnson',
    position: 'Marketing Director',
    bio: 'Alice leads our marketing team with innovative strategies that resonate with our luxury-focused audience.',
    imageUrl: '/images/team/alice-johnson.jpg',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-pink-500 min-h-screen p-4 sm:p-8">
      <motion.div
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About luxury FashionTV cosmetics
      </motion.h1>
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our History</h2>
        <p className="text-lg leading-relaxed mb-6">
          Established in the heart of the fashion world, luxury FashionTV cosmetics has been a pioneer in luxury beauty products. Our journey began with a mission to redefine beauty standards by integrating high fashion and cosmetics. Over the years, we have stayed true to our vision, delivering exquisite products that reflect elegance and innovation.
        </p>
      </motion.section>
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <p className="text-lg leading-relaxed mb-6">
          At luxury FashionTV cosmetics, we value excellence, innovation, and sustainability. We believe in crafting products that not only enhance beauty but also respect the environment. Our commitment to quality and luxury is unwavering, ensuring our customers receive nothing but the best.
        </p>
      </motion.section>
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.imageUrl}
                alt={${member.name}}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-pink-600 font-medium">{member.position}</p>
              <p className="text-gray-700 mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
