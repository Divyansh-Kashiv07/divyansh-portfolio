import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * 3D Background Component
 * Design: Cyberpunk Minimalism - Animated particles, floating spheres, and neon glow
 * Features: Parallax on mouse movement, rotating geometric shapes, starfield effect
 */
export const ThreeDBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    particles?: THREE.Points;
    spheres?: THREE.Mesh[];
    animationId?: number;
  }>({});

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0e27, 0);
    containerRef.current.appendChild(renderer.domElement);

    sceneRef.current = { scene, camera, renderer, spheres: [] };

    // Create starfield particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200;
      positions[i + 1] = (Math.random() - 0.5) * 200;
      positions[i + 2] = (Math.random() - 0.5) * 200;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00d9ff,
      size: 0.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    sceneRef.current.particles = particles;

    // Create floating spheres with neon glow
    const spheres: THREE.Mesh[] = [];
    const sphereColors = [0x00d9ff, 0xd946ef, 0x00d9ff];

    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.IcosahedronGeometry(8 + i * 5, 32);
      const material = new THREE.MeshPhongMaterial({
        color: sphereColors[i],
        emissive: sphereColors[i],
        emissiveIntensity: 0.3,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      });

      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      sphere.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

      scene.add(sphere);
      spheres.push(sphere);
    }

    sceneRef.current.spheres = spheres;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00d9ff, 1);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    // Mouse tracking for parallax
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      sceneRef.current.animationId = requestAnimationFrame(animate);

      // Rotate particles
      if (particles) {
        particles.rotation.x += 0.0001;
        particles.rotation.y += 0.0002;
      }

      // Animate spheres
      spheres.forEach((sphere, index) => {
        sphere.rotation.x += 0.001 * (index + 1);
        sphere.rotation.y += 0.002 * (index + 1);
        sphere.position.y += Math.sin(Date.now() * 0.0001 + index) * 0.02;
      });

      // Parallax camera movement
      camera.position.x = mouseX * 5;
      camera.position.y = mouseY * 5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);

      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }

      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      spheres.forEach((sphere) => {
        sphere.geometry.dispose();
        (sphere.material as THREE.Material).dispose();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};
