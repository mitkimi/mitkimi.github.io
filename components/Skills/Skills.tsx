'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Skills.module.scss';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: '朗链', icon: '🔗' },
  { name: '拥抱脸', icon: '🤗' },
  { name: 'OpenAI API', icon: '🧠' },
  { name: 'OpenCV', icon: '👁️' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: 'N' },
  { name: '维特', icon: '⚡' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: '棱镜', icon: '🔺' },
  { name: 'MongoDB', icon: '🍃' },
  { name: '松果', icon: '❄️' },
  { name: 'Docker', icon: '🐳' },
  { name: '维塞尔', icon: '▲' },
  { name: '条纹', icon: 'S' },
  { name: '职员', icon: 'C' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    // 技能卡片动画
    const cards = gridRef.current.children;
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef} className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>我的技能</h2>
        <p className={styles.subtitle}>构建能够解决实际问题的生产型人工智能系统</p>
        
        <div ref={gridRef} className={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>看不到你的堆栈?</p>
          <button className={styles.ctaButton}>我们来谈谈吧</button>
        </div>
      </div>
    </section>
  );
}
