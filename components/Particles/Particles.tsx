'use client';

import { useEffect, useRef } from 'react';
import './Particles.scss';

interface ParticlesProps {
  count?: number;
  color?: string;
  speed?: number;
  opacity?: number;
  size?: number;
}

export default function Particles({
  count = 50,
  color = '#ffffff',
  speed = 0.5,
  opacity = 0.1,
  size = 2,
}: ParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particles: HTMLDivElement[] = [];

    // 创建粒子
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.opacity = `${opacity}`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${2 + Math.random() * 3}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, [count, color, opacity, size]);

  return <div ref={containerRef} className="particles" />;
}
