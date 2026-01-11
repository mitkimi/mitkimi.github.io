'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Orb from '@/components/Orb/Orb';
import './Hero.scss';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !subtitleRef.current) return;

    // Hero 入场动画
    const tl = gsap.timeline();
    
    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      }
    )
    .fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    );
  }, []);

  return (
    <section id="home" ref={heroRef} className="hero">
      <Orb />
      <div className="backdrop-blur-layer" />
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title font-smiley">
          全栈工程师
        </h1>
        <p ref={subtitleRef} className="hero-subtitle font-smiley">
          解决复杂问题，创造简单体验
        </p>
      </div>
    </section>
  );
}
