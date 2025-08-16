'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4"
    >
      <label
        htmlFor={name}
        className="block text-pink-500 font-semibold mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full px-4 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-pink-700 bg-white transition duration-300"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </motion.div>
  );
};

export default Input;
