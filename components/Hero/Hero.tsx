'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import GradientASCII from '@/components/GradientASCII';
import TextType from '@/components/TextType/TextType';
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
      <GradientASCII
        className="hero-gradient-ascii"
        colors={['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8']}
        shape="rise"
        characters="=+xX0S8#@"
        cellSize={18}
        density={0.8}
        glyphOpacity={0.85}
        glow={0.2}
        depthOfField={0}
        flicker={0.2}
        softness={0.5}
        scale={1}
        flow={0.5}
        speed={1}
        gradientOpacity={0.9}
        grain={0.08}
        variation={0}
        mouseInteraction
        scrambleRadius={0.1}
        clickEffect="wave"
        intro
      />
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title font-smiley">
          <TextType 
            text={["解决复杂问题", "创造简单体验"]}
            typingSpeed={100}
            pauseDuration={3000}
            showCursor={true}
            cursorCharacter="_"
          />
        </h1>
        <p ref={subtitleRef} className="hero-subtitle font-smiley">
          全栈工程师 · 产品经理 · 创 业 者
        </p>
      </div>
    </section>
  );
}
