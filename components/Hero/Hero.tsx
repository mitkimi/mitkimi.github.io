'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Particles from '@/components/Particles/Particles';
import styles from './Hero.module.scss';

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
    <section id="home" ref={heroRef} className={styles.hero}>
      <div className={styles.background}>
        <Particles
          count={50}
          color="#ffffff"
          speed={0.5}
          opacity={0.1}
          size={2}
        />
      </div>
      <div className={styles.heroContent}>
        <h1 ref={titleRef} className={styles.heroTitle}>
          从概念到生产
        </h1>
        <p ref={subtitleRef} className={styles.heroSubtitle}>
          与真正了解您业务需求的合作伙伴携手，将您的愿景变为现实
        </p>
      </div>
    </section>
  );
}
