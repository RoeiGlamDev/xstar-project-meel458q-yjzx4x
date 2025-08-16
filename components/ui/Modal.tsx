'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="bg-white max-w-lg w-full p-6 rounded-lg shadow-lg relative"
      >
        <button
          className="absolute top-4 right-4 text-pink-500 hover:text-pink-700 transition duration-200"
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-pink-600 mb-4">{title}</h2>
        <div className="text-gray-700">{content}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
