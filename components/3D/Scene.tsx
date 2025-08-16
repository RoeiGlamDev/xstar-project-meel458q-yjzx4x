import { useRef } from 'react';
'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface LuxurySceneProps {
  brandName: string;
}

const LuxuryScene: React.FC<LuxurySceneProps> = ({ brandName }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime();
      meshRef.current.rotation.y = clock.getElapsedTime();
    }
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-500 to-white">
      <motion.div
        className="text-white text-4xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Welcome to {brandName}
      </motion.h1>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh ref={meshRef} className="hover:scale-105 transition-transform duration-300">
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="pink" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default LuxuryScene;
