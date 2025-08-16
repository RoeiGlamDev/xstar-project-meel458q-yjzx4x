// FILE: hooks/use3D.ts

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for 3D interaction with luxury FashionTV cosmetics elements.
 * This hook sets up a 3D scene using Three.js tailored for high-end cosmetics.
 * 
 * @returns {React.MutableRefObject<HTMLDivElement | null>} - A ref to attach to the DOM element where the 3D scene will be rendered.
 */
export const use3D = (): React.MutableRefObject<HTMLDivElement | null> => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const { current: mountElement } = mountRef;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('white');

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, mountElement.clientWidth / mountElement.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
    mountElement.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffc0cb, 0.8); // Pink-ish light for luxury feel
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Example 3D object - a rotating cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xffc0cb });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotation for elegant interactions
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
      camera.aspect = mountElement.clientWidth / mountElement.clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountElement.removeChild(renderer.domElement);
    };
  }, []);

  return mountRef;
};
