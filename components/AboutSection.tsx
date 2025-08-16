'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

interface AboutSectionProps {
  companyStory: string;
  mission: string;
  team: TeamMember[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ companyStory, mission, team }) => {
  return (
    <section className="bg-pink-100 text-white py-16 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">About luxury FashionTV cosmetics</h2>
        <p className="text-lg mb-8 leading-relaxed">
          {companyStory}
        </p>
        <div className="bg-white text-pink-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg mb-8">{mission}</p>
        </div>
        <div className="mt-12">
          <h3 className="text-3xl font-semibold mb-8 text-center">Meet Our Fashion Experts</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white text-pink-900 p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
