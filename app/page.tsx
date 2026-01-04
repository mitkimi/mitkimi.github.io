"use client";

import { useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './styles/globals.module.scss';

// 注册GSAP插件
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    // 尝试导入并初始化Lenis
    const initSmoothScroll = async () => {
      try {
        const lenisModule = await import('lenis');
        const Lenis = lenisModule.default;
        
        // 初始化Lenis平滑滚动
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        // 使Lenis与GSAP兼容
        function raf(time: number) {
          lenis.raf(time);
          ScrollTrigger.update();
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // 清理之前的ScrollTrigger
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Hero部分动画
        if (titleRef.current && subtitleRef.current) {
          gsap.fromTo(
            [titleRef.current, subtitleRef.current],
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top center",
                end: "bottom center",
              },
            }
          );
        }

        // 滚动触发的动画
        sectionsRef.current.forEach((section, index) => {
          if (section) {
            gsap.fromTo(
              section,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        });

        // 项目卡片动画
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
              },
            }
          );
        });

        // 清理函数
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          lenis.destroy();
        };
      } catch (error) {
        console.warn('Lenis not available, falling back to default scroll behavior');
        
        // 清理之前的ScrollTrigger
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Hero部分动画
        if (titleRef.current && subtitleRef.current) {
          gsap.fromTo(
            [titleRef.current, subtitleRef.current],
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heroRef.current,
                start: "top center",
                end: "bottom center",
              },
            }
          );
        }

        // 滚动触发的动画
        sectionsRef.current.forEach((section, index) => {
          if (section) {
            gsap.fromTo(
              section,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        });

        // 项目卡片动画
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
              },
            }
          );
        });

        // 清理函数
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }
    };

    initSmoothScroll();
  }, []);

  // 用于跟踪section引用
  const addToRefs = (el: HTMLElement | null, index: number) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div className={styles.relative}>
      <Navigation />
      
      {/* Hero Section */}
      <section 
        id="hero"
        className={styles.sectionHero} 
        ref={heroRef}
      >
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h1 
              className={styles.heroTitle} 
              ref={titleRef}
            >
              全栈开发者
            </h1>
            <p 
              className={styles.heroSubtitle}
              ref={subtitleRef} 
            >
              专注于创造卓越的用户体验
            </p>
          </div>
        </div>
      </section>

      {/* 关于我 */}
      <section 
        id="about"
        className={styles.section}
        ref={(el) => addToRefs(el, 0)}
      >
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h2 className={styles.sectionTitle}>关于我</h2>
            <p className={styles.sectionText}>
              我是一名全栈开发者，专注于构建高性能、用户友好的应用程序。
              我拥有丰富的前端和后端开发经验，致力于创造出色的用户体验。
              我热衷于使用最新的技术来解决复杂的问题，并持续学习新的工具和框架。
            </p>
          </div>
        </div>
      </section>

      {/* 项目 */}
      <section 
        id="projects"
        className={styles.section}
        ref={(el) => addToRefs(el, 1)}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>项目</h2>
          <div className={styles.grid}>
            <div className="project-card">
              <h3 className={styles.cardTitle}>项目一</h3>
              <p className={styles.cardText}>这是一个创新的Web应用程序，使用最新的前端技术构建。</p>
              <a href="#contact" className={styles.cardLink}>了解更多 →</a>
            </div>
            <div className="project-card">
              <h3 className={styles.cardTitle}>项目二</h3>
              <p className={styles.cardText}>一个高性能的后端API，为多个前端应用提供数据支持。</p>
              <a href="#contact" className={styles.cardLink}>了解更多 →</a>
            </div>
            <div className="project-card">
              <h3 className={styles.cardTitle}>项目三</h3>
              <p className={styles.cardText}>移动优先的响应式网站，为用户提供无缝体验。</p>
              <a href="#contact" className={styles.cardLink}>了解更多 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 技能 */}
      <section 
        id="skills"
        className={styles.section}
        ref={(el) => addToRefs(el, 2)}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>技能</h2>
          <div className={styles.skillsContainer}>
            <span className={styles.skillTag}>React</span>
            <span className={styles.skillTag}>TypeScript</span>
            <span className={styles.skillTag}>Node.js</span>
            <span className={styles.skillTag}>Next.js</span>
            <span className={styles.skillTag}>GraphQL</span>
            <span className={styles.skillTag}>MongoDB</span>
            <span className={styles.skillTag}>AWS</span>
            <span className={styles.skillTag}>Docker</span>
          </div>
        </div>
      </section>

      {/* 联系 */}
      <section 
        id="contact"
        className={styles.section}
        ref={(el) => addToRefs(el, 3)}
      >
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h2 className={styles.sectionTitle}>联系</h2>
            <p className={styles.sectionText}>
              准备开始下一个项目？让我们聊聊如何合作。
            </p>
            <a 
              href="mailto:contact@example.com" 
              className={styles.contactButton}
            >
              发送邮件
            </a>
          </div>
        </div>
      </section>
      
      {/* 页脚 */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} 个人作品集. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
}