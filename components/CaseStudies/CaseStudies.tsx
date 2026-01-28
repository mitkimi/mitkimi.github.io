'use client';

import { useEffect, useRef, useState } from 'react';
import { Video } from '@media-apron/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@media-apron/react/dist/style.css';
import './CaseStudies.scss';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  videoUrl: string;
  title: string;
  description: string;
  technologies?: string[];
  details?: {
    problem?: string[];
    solution?: string[];
    impact?: string[];
  };
}

const projects: Project[] = [
  {
    id: 1,
    videoUrl: 'https://offontime-prod.oss-cn-beijing.aliyuncs.com/cms/2025/10/31/1eca51d9-3864-4a51-95be-50795d301d6d.mp4',
    title: '项目一',
    description: '这是第一个项目的详细介绍。展示了创新的设计理念和先进的技术实现。',
    technologies: ['Next.js', 'Three.js', 'TypeScript'],
    details: {
      problem: ['品牌缺乏设计方向和目标定位', '决策缺乏市场调研支持'],
      solution: ['人工智能根据品牌分析生成设计方案', '具备高级编辑功能的3D可视化'],
      impact: ['获得美国专利号 US10324916B2', 'AI Forge 加速器认证'],
    },
  },
  {
    id: 2,
    videoUrl: 'https://offontime-prod.oss-cn-beijing.aliyuncs.com/cms/2025/11/01/e53a6aec-7354-4d8f-995b-367e88660bbb.m4v',
    title: '项目二',
    description: '这是第二个项目的详细介绍。展示了卓越的用户体验和高效的性能优化。',
    technologies: ['React', 'Node.js', 'MongoDB'],
    details: {
      problem: ['用户体验不够流畅', '性能需要优化'],
      solution: ['采用最新的前端框架', '优化数据库查询'],
      impact: ['用户满意度提升 40%', '页面加载速度提升 60%'],
    },
  },
];

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !leftRef.current || !rightRef.current) return;

    const videos = videoRefs.current.filter(Boolean);
    const contents = contentRefs.current.filter(Boolean);

    if (videos.length === 0 || contents.length === 0) return;

    // 设置每个视频的初始状态
    videos.forEach((video, index) => {
      if (video) {
        gsap.set(video, {
          opacity: index === 0 ? 1 : 0,
          scale: index === 0 ? 1 : 0.9,
        });
      }
    });

    // 设置每个内容块的初始状态
    contents.forEach((content, index) => {
      if (content) {
        gsap.set(content, {
          opacity: index === 0 ? 1 : 0,
          y: index === 0 ? 0 : 50,
        });
      }
    });

    const scrollTriggers: ScrollTrigger[] = [];

    // 为每个项目创建独立的滚动区域
    projects.forEach((_, index) => {
      const projectContent = contents[index];
      if (!projectContent) return;

      // 使用项目内容作为触发器，让每个项目在视口中心停留足够的时间
      const trigger = ScrollTrigger.create({
        trigger: projectContent,
        start: 'top 60%', // 当内容顶部到达视口60%位置时触发
        end: 'bottom 40%', // 当内容底部到达视口40%位置时结束
        scrub: false, // 不使用scrub，让切换更精确
        onEnter: () => {
          setActiveIndex(index);
          // 切换视频
          videos.forEach((video, i) => {
            if (video) {
              gsap.to(video, {
                opacity: i === index ? 1 : 0,
                scale: i === index ? 1 : 0.9,
                duration: 0.6,
                ease: 'power2.out',
              });
            }
          });
          // 切换内容
          contents.forEach((content, i) => {
            if (content) {
              gsap.to(content, {
                opacity: i === index ? 1 : 0,
                y: i === index ? 0 : 50,
                duration: 0.6,
                ease: 'power2.out',
              });
            }
          });
        },
        onLeave: () => {
          // 离开当前项目区域时，切换到下一个项目（如果存在）
          if (index < projects.length - 1) {
            setActiveIndex(index + 1);
            videos.forEach((video, i) => {
              if (video) {
                gsap.to(video, {
                  opacity: i === index + 1 ? 1 : 0,
                  scale: i === index + 1 ? 1 : 0.9,
                  duration: 0.6,
                  ease: 'power2.out',
                });
              }
            });
            contents.forEach((content, i) => {
              if (content) {
                gsap.to(content, {
                  opacity: i === index + 1 ? 1 : 0,
                  y: i === index + 1 ? 0 : 50,
                  duration: 0.6,
                  ease: 'power2.out',
                });
              }
            });
          }
        },
        onEnterBack: () => {
          setActiveIndex(index);
          videos.forEach((video, i) => {
            if (video) {
              gsap.to(video, {
                opacity: i === index ? 1 : 0,
                scale: i === index ? 1 : 0.9,
                duration: 0.6,
                ease: 'power2.out',
              });
            }
          });
          contents.forEach((content, i) => {
            if (content) {
              gsap.to(content, {
                opacity: i === index ? 1 : 0,
                y: i === index ? 0 : 50,
                duration: 0.6,
                ease: 'power2.out',
              });
            }
          });
        },
        onLeaveBack: () => {
          // 向上滚动离开当前项目时，切换到上一个项目（如果存在）
          if (index > 0) {
            setActiveIndex(index - 1);
            videos.forEach((video, i) => {
              if (video) {
                gsap.to(video, {
                  opacity: i === index - 1 ? 1 : 0,
                  scale: i === index - 1 ? 1 : 0.9,
                  duration: 0.6,
                  ease: 'power2.out',
                });
              }
            });
            contents.forEach((content, i) => {
              if (content) {
                gsap.to(content, {
                  opacity: i === index - 1 ? 1 : 0,
                  y: i === index - 1 ? 0 : 50,
                  duration: 0.6,
                  ease: 'power2.out',
                });
              }
            });
          }
        },
      });

      scrollTriggers.push(trigger);
    });

    return () => {
      scrollTriggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <section id="case-studies" className="case-studies" ref={sectionRef}>
      <div className="case-studies-container">
        <div className="case-studies-content">
          <div className="case-studies-left" ref={leftRef}>
            {/* 左侧视频区域 - 固定定位 */}
            <div className="case-studies-video-sticky">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className={`case-studies-video-wrapper ${activeIndex === index ? 'active' : ''}`}
                >
                  <Video
                    src={project.videoUrl}
                    className="case-studies-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="case-studies-right" ref={rightRef}>
            {/* 右侧项目介绍区域 */}
            <div className="case-studies-projects">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className={`case-studies-project-content ${activeIndex === index ? 'active' : ''}`}
                >
                  <div className="case-studies-card">
                    <h2 className="case-studies-title">{project.title}</h2>
                    <p className="case-studies-description">{project.description}</p>
                    
                    {project.details?.problem && (
                      <div className="case-studies-detail-section">
                        <h3 className="case-studies-detail-title">问题</h3>
                        <ul className="case-studies-detail-list">
                          {project.details.problem.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.details?.solution && (
                      <div className="case-studies-detail-section">
                        <h3 className="case-studies-detail-title">解决方案</h3>
                        <ul className="case-studies-detail-list">
                          {project.details.solution.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.details?.impact && (
                      <div className="case-studies-detail-section">
                        <h3 className="case-studies-detail-title">影响</h3>
                        <ul className="case-studies-detail-list">
                          {project.details.impact.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.technologies && (
                      <div className="case-studies-technologies">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="case-studies-tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
