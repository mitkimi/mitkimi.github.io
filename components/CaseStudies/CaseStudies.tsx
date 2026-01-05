'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './CaseStudies.module.scss';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    title: '案例研究',
    subtitle: '精选作品',
    videoUrl: '/videos/case1.mp4', // 占位符
    designPlatform: '设计平台',
    duration: '历时6个月打造 | 荣获专利的创新技术 | AI Forge认证',
    problem: {
      title: '问题',
      items: [
        '品牌缺乏设计方向和目标定位。',
        '决策缺乏市场调研支持。',
      ],
    },
    solution: {
      title: '解决方案',
      items: [
        '人工智能根据品牌分析生成设计方案',
        '具备高级编辑功能的3D可视化',
        'LLM支持的市场调研整合',
      ],
    },
    impact: {
      title: '影响',
      items: [
        '获得美国专利号 US10324916B2',
        'AI Forge 加速器 (500多个申请者中选出12个)',
      ],
    },
    technologies: ['Next.js', 'Three.js', 'OpenCV', 'LLM', 'Python', 'MongoDB'],
    githubUrl: 'https://github.com',
  },
  // 可以添加更多案例
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !videoRef.current || !contentRef.current) return;

    const caseStudy = caseStudies[activeIndex];

    // 视频和内容切换动画
    gsap.to([videoRef.current, contentRef.current], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setActiveIndex((prev) => (prev + 1) % caseStudies.length);
        gsap.to([videoRef.current, contentRef.current], {
          opacity: 1,
          duration: 0.5,
        });
      },
    });

    // 滚动触发切换
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.floor(progress * caseStudies.length);
        if (newIndex !== activeIndex && newIndex < caseStudies.length) {
          setActiveIndex(newIndex);
        }
      },
    });
  }, [activeIndex]);

  const currentCase = caseStudies[activeIndex];

  return (
    <section id="case-studies" ref={sectionRef} className={styles.caseStudies}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* 左侧视频区域 */}
          <div ref={videoRef} className={styles.videoContainer}>
            <div className={styles.browserWindow}>
              <div className={styles.browserBar}>
                <div className={styles.browserControls}>
                  <span className={styles.control}>←</span>
                  <span className={styles.control}>→</span>
                  <span className={styles.control}>↻</span>
                </div>
                <div className={styles.addressBar}>
                  lasi.ai/editor?sessionId=673a4f154c1f830869bae83f-k5dhiose5
                </div>
                <div className={styles.browserActions}>
                  <span className={styles.action}>★</span>
                  <span className={styles.action}>↗</span>
                  <span className={styles.action}>⋯</span>
                  <span className={styles.action}>👤</span>
                </div>
              </div>
              <div className={styles.browserContent}>
                <div className={styles.sidebar}>
                  <div className={styles.sidebarHeader}>
                    <span>←</span>
                    <span>TALA</span>
                  </div>
                  <div className={styles.progress}>
                    <div className={styles.progressBar}></div>
                    <span>1 of 3</span>
                  </div>
                  <div className={styles.sidebarSection}>
                    <span>Collection Inspiration</span>
                    <span>↻</span>
                  </div>
                  <div className={styles.sidebarItem}>
                    <span>💡</span>
                    <span>Inspirations</span>
                    <span>↑</span>
                  </div>
                  <div className={styles.tag}>
                    <span>Empowere...</span>
                    <span>×</span>
                    <span>↓</span>
                  </div>
                  <div className={styles.loading}>Loading...</div>
                  <button className={styles.submitButton}>Submit</button>
                </div>
                <div className={styles.canvas}>
                  <div className={styles.colorPicker}>
                    <div className={styles.colorTitle}>Colour</div>
                    <div className={styles.colorGradient}></div>
                    <div className={styles.colorSliders}>
                      <div className={styles.rainbowSlider}></div>
                      <div className={styles.bwSlider}></div>
                    </div>
                    <div className={styles.colorValue}>HEX ffffff 100 %</div>
                  </div>
                  <div className={styles.assets}>
                    <span>📁</span>
                    <span>Assets</span>
                  </div>
                  <div className={styles.canvasText}>
                    find the most relevant trends to you, and
                  </div>
                  <button className={styles.exportButton}>Export</button>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧内容区域 */}
          <div ref={contentRef} className={styles.content}>
            <h2 className={styles.title}>{currentCase.title}</h2>
            <h3 className={styles.subtitle}>{currentCase.subtitle}</h3>

            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>{currentCase.designPlatform}</h4>
              <p className={styles.sectionText}>{currentCase.duration}</p>
            </div>

            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>{currentCase.problem.title}</h4>
              <ul className={styles.list}>
                {currentCase.problem.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>{currentCase.solution.title}</h4>
              <ul className={styles.list}>
                {currentCase.solution.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>{currentCase.impact.title}</h4>
              <ul className={styles.list}>
                {currentCase.impact.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.technologies}>
              {currentCase.technologies.map((tech, index) => (
                <div key={index} className={styles.techLogo}>
                  <div className={styles.techIcon}>{tech[0]}</div>
                  <span className={styles.techName}>{tech}</span>
                </div>
              ))}
            </div>

            <a href={currentCase.githubUrl} className={styles.githubLink}>
              <span className={styles.githubIcon}>🐙</span>
              <span>GitHub</span>
              <span>了解更多 →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
