import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app//*.{js,ts,jsx,tsx,mdx}',
    './pages//*.{js,ts,jsx,tsx,mdx}',
    './components//*.{js,ts,jsx,tsx,mdx}',
    './src//*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        white: '#ffffff',
      },
      animation: {
        'fade-in': 'fadeIn 3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
