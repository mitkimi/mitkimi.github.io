'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !contentRef.current) return;

    // 标题动画
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: false,
        },
      }
    );

    // 内容动画
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="about">
      <div className="about-container">
        <h2 ref={titleRef} className="about-title">
          关于我
        </h2>
        <div ref={contentRef} className="about-content">
          <p className="about-paragraph">
            我是一名热爱技术的开发者，拥有多年的 Web 开发经验。专注于使用现代化的技术栈构建高质量的应用程序。
          </p>
          <p className="about-paragraph">
            我相信代码不仅仅是功能的实现，更是艺术的表达。我致力于编写简洁、可维护、高性能的代码。
          </p>
        </div>
      </div>
    </section>
  );
}