'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { Video } from '@media-apron/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import '@media-apron/react/dist/style.css';
import './CaseStudies.scss';

gsap.registerPlugin(ScrollTrigger);

type MediaType = 'video' | 'image';

interface MediaItem {
  type: MediaType;
  src: string;
  alt?: string;
}

interface Project {
  id: number;
  media: MediaItem[];
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
    media: [
      {
        type: 'video',
        src: 'https://offontime-prod.oss-cn-beijing.aliyuncs.com/cms/2025/10/31/1eca51d9-3864-4a51-95be-50795d301d6d.mp4',
      },
      {
        type: 'image',
        src: '/assets/kimi_01.JPG',
        alt: '项目一截图 1',
      },
      {
        type: 'image',
        src: '/assets/kimi_02.JPG',
        alt: '项目一截图 2',
      },
    ],
    title: '项目一',
    description:
      '这是第一个项目的详细介绍。展示了创新的设计理念和先进的技术实现。整个项目会固定在视口中心，右侧卡片内容由页面滚动驱动。',
    technologies: ['Next.js', 'Three.js', 'TypeScript'],
    details: {
      problem: [
        '品牌缺乏设计方向和目标定位',
        '决策缺乏市场调研支持',
        '设计迭代周期过长，协作成本高',
        '跨端体验不一致，难以统一视觉语言',
      ],
      solution: [
        '人工智能根据品牌分析生成设计方案',
        '具备高级编辑功能的3D可视化',
        'LLM 支持的市场调研整合',
        '组件化设计系统保证多端一致性',
      ],
      impact: [
        '获得美国专利号 US10324916B2',
        'AI Forge 加速器认证',
        '设计交付效率提升 50%',
        '多端还原误差降低 70%',
      ],
    },
  },
  {
    id: 2,
    media: [
      {
        type: 'video',
        src: 'https://offontime-prod.oss-cn-beijing.aliyuncs.com/cms/2025/11/01/e53a6aec-7354-4d8f-995b-367e88660bbb.m4v',
      },
      {
        type: 'image',
        src: '/assets/kimi_03.JPG',
        alt: '项目二截图 1',
      },
      {
        type: 'image',
        src: '/assets/kimi_04.JPG',
        alt: '项目二截图 2',
      },
    ],
    title: '项目二',
    description:
      '这是第二个项目的详细介绍。项目一结束后整体滚走，本项目跟进同样 pin 在视口中心，页面滚动控制右侧内容。',
    technologies: ['React', 'Node.js', 'MongoDB'],
    details: {
      problem: [
        '用户体验不够流畅',
        '性能需要优化',
        '首屏加载过慢影响留存',
        '接口与前端协作链路冗长',
      ],
      solution: [
        '采用最新的前端框架',
        '优化数据库查询',
        '资源懒加载与路由按需拆包',
        '接口缓存与边缘加速',
      ],
      impact: [
        '用户满意度提升 40%',
        '页面加载速度提升 60%',
        '跳出率下降 25%',
        '核心接口延迟降低 45%',
      ],
    },
  },
];

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const swiperRefs = useRef<(SwiperInstance | null)[]>([]);
  const [cardHeights, setCardHeights] = useState<number[]>([]);
  const [scrollTops, setScrollTops] = useState<number[]>(() =>
    projects.map(() => 0)
  );
  const [mediaIndexes, setMediaIndexes] = useState<number[]>(() =>
    projects.map(() => 0)
  );

  // 每个项目：右侧卡片高度对齐左侧媒体区
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    projects.forEach((_, index) => {
      const media = mediaRefs.current[index];
      if (!media) return;

      const update = () => {
        const height = media.getBoundingClientRect().height;
        if (height <= 0) return;
        setCardHeights((prev) => {
          if (prev[index] === height) return prev;
          const next = [...prev];
          next[index] = height;
          return next;
        });
      };

      const raf = requestAnimationFrame(update);
      const observer = new ResizeObserver(update);
      observer.observe(media);
      window.addEventListener('resize', update);

      cleanups.push(() => {
        cancelAnimationFrame(raf);
        observer.disconnect();
        window.removeEventListener('resize', update);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  /**
   * 每个项目独立 pin：
   * 页面滚动驱动右侧卡片内容；媒体轮播由下方 indicator / Swiper 控制
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isMobile = () => window.matchMedia('(max-width: 900px)').matches;
    const triggers: ScrollTrigger[] = [];

    const init = () => {
      triggers.forEach((t) => t.kill());
      triggers.length = 0;

      if (isMobile()) {
        cardRefs.current.forEach((card) => {
          if (card) card.scrollTop = 0;
        });
        setScrollTops(projects.map(() => 0));
        return;
      }

      projects.forEach((_, index) => {
        const block = blockRefs.current[index];
        const card = cardRefs.current[index];
        if (!block || !card) return;

        const getMaxScroll = () =>
          Math.max(0, card.scrollHeight - card.clientHeight);

        const getScrollDistance = () => {
          const maxScroll = getMaxScroll();
          const minHold = window.innerHeight * 0.55;
          const tail = window.innerHeight * 0.25;
          return Math.max(maxScroll, minHold) + tail;
        };

        const trigger = ScrollTrigger.create({
          trigger: block,
          start: 'top top',
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1,
          onUpdate: (self) => {
            const maxScroll = getMaxScroll();
            if (maxScroll <= 0) {
              card.scrollTop = 0;
              setScrollTops((prev) => {
                if (prev[index] === 0) return prev;
                const next = [...prev];
                next[index] = 0;
                return next;
              });
              return;
            }

            const contentProgress = Math.min(1, self.progress / 0.8);
            const nextTop = maxScroll * contentProgress;
            card.scrollTop = nextTop;

            setScrollTops((prev) => {
              if (Math.abs(prev[index] - nextTop) < 0.5) return prev;
              const next = [...prev];
              next[index] = nextTop;
              return next;
            });
          },
        });

        triggers.push(trigger);
      });

      ScrollTrigger.refresh();
    };

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(init);
    });

    const onResize = () => init();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      triggers.forEach((t) => t.kill());
    };
  }, [cardHeights]);

  return (
    <section id="case-studies" className="case-studies" ref={sectionRef}>
      <div className="case-studies-list">
        {projects.map((project, index) => {
          const cardHeight = cardHeights[index];
          const scrollTop = scrollTops[index] ?? 0;
          const card = cardRefs.current[index];
          const maxScroll = card
            ? Math.max(0, card.scrollHeight - card.clientHeight)
            : 0;
          const showBottomMask = maxScroll - scrollTop > 4;
          const activeMedia = mediaIndexes[index] ?? 0;

          return (
            <div
              key={project.id}
              className="case-studies-block"
              ref={(el) => {
                blockRefs.current[index] = el;
              }}
              style={
                cardHeight
                  ? ({ '--case-card-height': `${cardHeight}px` } as CSSProperties)
                  : undefined
              }
            >
              <div className="case-studies-container">
                <div className="case-studies-stage">
                  {/* 左侧：当前项目媒体 Swiper + 媒体 indicator */}
                  <div className="case-studies-left">
                    <div
                      className="case-studies-media"
                      ref={(el) => {
                        mediaRefs.current[index] = el;
                      }}
                    >
                      <Swiper
                        className="case-studies-swiper"
                        slidesPerView={1}
                        spaceBetween={0}
                        speed={450}
                        onSwiper={(swiper) => {
                          swiperRefs.current[index] = swiper;
                        }}
                        onSlideChange={(swiper) => {
                          setMediaIndexes((prev) => {
                            if (prev[index] === swiper.activeIndex) return prev;
                            const next = [...prev];
                            next[index] = swiper.activeIndex;
                            return next;
                          });
                        }}
                      >
                        {project.media.map((item, mediaIndex) => (
                          <SwiperSlide key={`${project.id}-${mediaIndex}`}>
                            <div className="case-studies-slide">
                              {item.type === 'video' ? (
                                <Video
                                  src={item.src}
                                  className="case-studies-media-item"
                                  autoPlay={mediaIndex === activeMedia}
                                  loop
                                  muted
                                  playsInline
                                />
                              ) : (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={item.src}
                                  alt={
                                    item.alt ||
                                    `${project.title} 媒体 ${mediaIndex + 1}`
                                  }
                                  className="case-studies-media-item"
                                />
                              )}
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    {/* Swiper indicator：当前项目内的图/视频，可点击切换 */}
                    {project.media.length > 1 && (
                      <div
                        className="case-studies-media-indicator"
                        role="tablist"
                        aria-label={`${project.title} 媒体指示器`}
                      >
                        {project.media.map((item, mediaIndex) => (
                          <button
                            key={`${project.id}-dot-${mediaIndex}`}
                            type="button"
                            role="tab"
                            aria-selected={activeMedia === mediaIndex}
                            aria-label={
                              item.type === 'video'
                                ? `视频 ${mediaIndex + 1}`
                                : `图片 ${mediaIndex + 1}`
                            }
                            className={`case-studies-media-dot ${
                              activeMedia === mediaIndex ? 'is-active' : ''
                            }`}
                            onClick={() => {
                              swiperRefs.current[index]?.slideTo(mediaIndex);
                              setMediaIndexes((prev) => {
                                if (prev[index] === mediaIndex) return prev;
                                const next = [...prev];
                                next[index] = mediaIndex;
                                return next;
                              });
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 右侧介绍卡片 */}
                  <div className="case-studies-right">
                    <div className="case-studies-card is-active">
                      {/* 红框区域：固定顶栏，正文在下一层滚动 */}
                      <div className="case-studies-card-header">
                        <div className="case-studies-index">
                          {String(index + 1).padStart(2, '0')} /{' '}
                          {String(projects.length).padStart(2, '0')}
                        </div>
                        <h2 className="case-studies-title">{project.title}</h2>
                      </div>

                      <div
                        className="case-studies-card-scroll"
                        ref={(el) => {
                          cardRefs.current[index] = el;
                        }}
                        onWheel={(e) => e.preventDefault()}
                      >
                        <div className="case-studies-card-body">
                          <p className="case-studies-description">
                            {project.description}
                          </p>

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
                              <h3 className="case-studies-detail-title">
                                解决方案
                              </h3>
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

                      <div
                        className={`case-studies-card-mask case-studies-card-mask--bottom ${
                          showBottomMask ? 'is-visible' : ''
                        }`}
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudies;
