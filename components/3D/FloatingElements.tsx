// components/3D/FloatingElements.tsx
'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  color: string;
  size: number;
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ color, size, position }) => {
  const props = useSpring({
    position: [position[0], position[1] + Math.sin(Date.now() / 1000) * 0.2, position[2]],
    config: { duration: 2000 },
    loop: true,
  });

  return (
    <animated.mesh position={props.position as any}>
      <sphereBufferGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </animated.mesh>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <motion.div
      className="relative w-full h-screen bg-pink-500 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingElement color="pink" size={0.5} position={[0, 0, 0]} />
        <FloatingElement color="white" size={0.3} position={[2, 1, -1]} />
        <FloatingElement color="pink" size={0.4} position={[-2, -1, 1]} />
      </Canvas>
      <motion.div
        className="absolute text-5xl font-bold text-white text-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        Welcome to luxury FashionTV cosmetics
      </motion.h1>
    </motion.div>
  );
};

export default FloatingElements;
