'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

/
 * Custom hook for luxury FashionTV cosmetics animations.
 * This hook is designed to provide elegant and high-end animations
 * for the luxury FashionTV cosmetics website, enhancing the user experience
 * with subtle yet impactful motion effects.
 *
 * @returns {object} An object containing animation controls and utility functions.
 */
export const useAnimation = () => {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  /
   * Trigger animation for luxury product reveal.
   * This should be used when showcasing luxury FashionTV cosmetics products.
   */
  const triggerProductReveal = () => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    });
    setIsAnimating(true);
  };

  /
   * Reset animation state to initial.
   * Useful for resetting views or components in luxury contexts.
   */
  const resetAnimation = () => {
    controls.start({ opacity: 0, y: 50 });
    setIsAnimating(false);
  };

  useEffect(() => {
    // Example of using animation on mount for luxury FashionTV cosmetics branding
    if (!isAnimating) {
      triggerProductReveal();
    }
  }, [isAnimating]);

  return {
    controls,
    isAnimating,
    triggerProductReveal,
    resetAnimation
  };
};

/
 * Animation component for luxury FashionTV cosmetics.
 * Utilizes the useAnimation hook to provide motion effects
 * aligned with the brand's luxury style and elegance.
 */
const AnimatedLuxuryComponent: React.FC = () => {
  const { controls } = useAnimation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="bg-gradient-to-r from-pink-500 to-white p-6 rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold text-white">
        Welcome to luxury FashionTV cosmetics
      </h1>
      <p className="text-white mt-4">
        Discover the opulence and sophistication of our exclusive fashion collection.
      </p>
    </motion.div>
  );
};

export default AnimatedLuxuryComponent;
