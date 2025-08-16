import { useEffect, useRef } from 'react';
// components/effects/ParticleBackground.tsx
'use client';

import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface ParticleBackgroundProps {}

const ParticleBackground: React.FC<ParticleBackgroundProps> = () => {
  const particlesRef = React.useRef<THREE.Points>(null);

  useEffect(() => {
    const particles = particlesRef.current;
    if (particles) {
      const positions = new Float32Array(1000 * 3);
      for (let i = 0; i < 1000; i++) {
        positions[i  3] = (Math.random() - 0.5)  10;
        positions[i  3 + 1] = (Math.random() - 0.5)  10;
        positions[i  3 + 2] = (Math.random() - 0.5)  10;
      }
      particles.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas>
        <Points ref={particlesRef}>
          <PointMaterial
            color="pink"
            size={0.05}
            sizeAttenuation
            depthWrite={false}
          />
        </Points>
      </Canvas>
    </motion.div>
  );
};

export default ParticleBackground;
