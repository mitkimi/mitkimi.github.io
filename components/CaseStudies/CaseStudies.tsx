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
        type: 'image',
        src: '/assets/case-studies/apron-design/getting-started.png',
        alt: 'Apron Design 设计理念与组件概览',
      },
      {
        type: 'image',
        src: '/assets/case-studies/apron-design/self-introduction.png',
        alt: 'Apron Design 设计系统介绍',
      },
      {
        type: 'image',
        src: '/assets/case-studies/apron-design/updating-routing.png',
        alt: 'Apron Design 组件更新路线',
      },
    ],
    title: 'Apron Design',
    description:
      '一套面向 C 端产品的完全开源设计系统，将设计规范、跨平台组件与工程实践整合为一致的产品开发方案。',
    technologies: ['React', 'Vue 3', 'TypeScript', '微信小程序', 'Figma'],
    details: {
      problem: [
        'C 端产品缺少兼顾体验与工程效率的统一组件方案',
        'React、Vue 与微信小程序之间难以保持一致的设计语言',
        '设计规范与开发实现分离，增加协作和维护成本',
      ],
      solution: [
        '以一致、平和、意识、开放、必要为核心设计原则',
        '提供 React 16+、Vue 3 与原生微信小程序组件库',
        '通过 Figma 资源统一颜色、文字、图标和布局规范',
        '支持 Next.js 与 Nuxt.js 服务端渲染场景',
      ],
      impact: [
        '40+ 组件覆盖大部分 C 端产品场景',
        '组件库总下载量超过 3 万次',
        '以 MIT 协议开放设计与工程资源',
      ],
    },
  },
  {
    id: 2,
    media: [
      {
        type: 'video',
        src: '/assets/case-studies/vision-tempus/demo.mov',
      },
      {
        type: 'image',
        src: '/assets/case-studies/vision-tempus/hero.jpg',
        alt: '视界时光官网产品首屏',
      },
    ],
    title: '视界时光',
    description:
      '一款为 Android TV 横屏场景设计的沉浸式屏保应用，将时间、日期、实时天气、动态背景与环境音乐融入客厅大屏。',
    technologies: ['Android TV', 'Kotlin', 'DreamService', 'WebView'],
    details: {
      problem: [
        '电视闲置时缺少兼具信息价值与空间氛围的展示方式',
        '传统静态屏保容易在 OLED 屏幕上留下固定区域',
        '大屏信息层级和遥控器操作需要针对客厅距离重新设计',
      ],
      solution: [
        '以大号时间、日期和天气建立清晰的大屏信息层级',
        '提供五套循环动态背景与环境音乐主题',
        '前景信息定时移动位置，降低 OLED 烧屏风险',
        '通过 DreamService 一键设为系统屏保，并支持独立运行',
      ],
      impact: [
        '覆盖 Android TV、电视盒子及部分投影设备',
        '支持 API 23+ 与常见系统 WebView 兼容方案',
        '主题包支持远程下载与在线更新',
        '中英文界面与遥控器交互适配大屏使用场景',
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
