import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './AboutMe.scss';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 定义 ScrollTrigger 类型
interface GSAPScrollTriggerInstance {
  kill: () => void;
  progress: number;
  // 添加其他可能用到的属性
}

export default function AboutMe() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [rightCardPadding, setRightCardPadding] = useState({ top: 30, bottom: 30 });
  
  // 模拟8张卡片的数据
  const cardsData = [
    { id: 1, title: "React 开发专家", content: "熟练掌握 React 生态系统，构建高性能前端应用。" },
    { id: 2, title: "Node.js 全栈", content: "具备完整的 Node.js 后端开发能力。" },
    { id: 3, title: "TypeScript 实践", content: "深度使用 TypeScript 提升代码质量与维护性。" },
    { id: 4, title: "微前端架构", content: "设计并实现微前端解决方案。" },
    { id: 5, title: "性能优化专家", content: "擅长前端性能分析与优化实践。" },
    { id: 6, title: "CI/CD 实践", content: "构建自动化部署流水线。" },
    { id: 7, title: "DevOps 工程师", content: "具备云服务运维经验。" },
    { id: 8, title: "开源贡献者", content: "积极参与多个开源项目。" },
  ];
  
  // 使用 GSAP 控制滚动容器滚动，实现固定视口效果
  useEffect(() => {
    let scrollTrigger: GSAPScrollTriggerInstance;
    
    const initScrollTrigger = () => {
      // 销毁现有的 ScrollTrigger
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
      
      const sectionElement = document.getElementById('about');
      
      if (sectionElement) {
        // 使用 GSAP ScrollTrigger 来控制滚动
        scrollTrigger = ScrollTrigger.create({
          trigger: sectionElement,
          start: 'top top',
          end: () => '+=' + (sectionElement.scrollHeight || window.innerHeight),
          pin: true,
          pinSpacing: true,
          anticipatePin: 1, // 预先计算空间
          onUpdate: (self) => {
            if (scrollContainerRef.current) {
              const maxScroll = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
              const scrolled = self.progress * maxScroll;
              
              scrollContainerRef.current.scrollTop = scrolled;
              setScrollTop(scrolled);
            }
          },
          scrub: 1, // 平滑滚动效果
        }) as GSAPScrollTriggerInstance;
      }
    };
    
    // 延迟初始化以确保 DOM 准备就绪
    requestAnimationFrame(() => {
      initScrollTrigger();
    });
    
    // 窗口大小改变时重新初始化
    window.addEventListener('resize', initScrollTrigger);
    
    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
      window.removeEventListener('resize', initScrollTrigger);
    };
  }, []);
  
  // 计算是否显示顶部遮罩 - 开始滚动时就出现
  const showTopMask = scrollTop > 0;
  
  // 计算是否显示底部遮罩 - 滚动到最底端时消失
  const isNearBottom = scrollContainerRef.current 
    ? Math.abs(scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight - scrollTop) < 5
    : false;
  
  // 设置滚动容器高度与Swiper容器一致
  useEffect(() => {
    const setScrollContainerHeight = () => {
      if (leftRef.current && scrollContainerRef.current) {
        const swiperCard = leftRef.current.querySelector('.about-me-swiper-card');
        if (swiperCard) {
          const swiperHeight = swiperCard.getBoundingClientRect().height;
          scrollContainerRef.current.style.height = `${swiperHeight}px`;
        }
      }
    };
    
    // 初始设置 - 使用requestAnimationFrame确保DOM完全渲染
    requestAnimationFrame(() => {
      setScrollContainerHeight();
    });
    
    // 窗口大小变化时重新设置
    window.addEventListener('resize', setScrollContainerHeight);
    
    return () => {
      window.removeEventListener('resize', setScrollContainerHeight);
    };
  }, []);
  
  // 实现左右两侧等高逻辑
  useEffect(() => {
    const adjustHeights = () => {
      if (leftRef.current && rightRef.current) {
        // 获取左侧高度（第一行卡片网格高度 + swiper容器高度）
        const leftTopGrid = leftRef.current.querySelector('.about-me-grid-four-column');
        const swiperCard = leftRef.current.querySelector('.about-me-swiper-card');
        
        if (leftTopGrid && swiperCard) {
          const leftTopHeight = leftTopGrid.getBoundingClientRect().height;
          const swiperCardHeight = swiperCard.getBoundingClientRect().height;
          const totalLeftHeight = leftTopHeight + swiperCardHeight + 20; // 20px是gap
          
          // 设置左侧高度
          leftRef.current.style.height = `${totalLeftHeight}px`;
          
          // 调整右侧高度
          rightRef.current.style.height = `${totalLeftHeight}px`;
          
          // 检查右侧卡片容器高度是否需要调整
          const rightCardContainer = rightRef.current.querySelector('.about-me-card-container');
          if (rightCardContainer) {
            const rightContainerHeight = rightCardContainer.getBoundingClientRect().height;
            
            if (rightContainerHeight < totalLeftHeight) {
              // 计算需要增加的间距
              const heightDiff = totalLeftHeight - rightContainerHeight;
              
              // 增加最后一个卡片的上下内边距
              setRightCardPadding({
                top: 30 + heightDiff / 2,
                bottom: 30 + heightDiff / 2
              });
            } else {
              // 如果不需要调整，重置回默认值
              setRightCardPadding({
                top: 30,
                bottom: 30
              });
            }
          }
        }
      }
    };
    
    // 初始调整
    setTimeout(adjustHeights, 100); // 延迟执行以确保DOM完全渲染
    
    // 窗口大小改变时调整
    window.addEventListener('resize', adjustHeights);
    
    // 组件卸载时移除事件监听
    return () => {
      window.removeEventListener('resize', adjustHeights);
    };
  }, []);
  
  return (
    <section id="about" className="about-me">
      <div className="about-me-container">
        <div className="about-me-content">
          <div className="about-me-left" ref={leftRef}>
            <div className="about-me-grid-four-column">
              <div className="about-me-grid-item about-me-card-group">
                <div className="about-me-card">
                  <h1 className="about-me-title"> 苹果开发者</h1>
                </div>
                <div className="about-me-card">
                  <h1 className="about-me-title">产品经理</h1>
                </div>
              </div>
              <div className="about-me-grid-item about-me-card">
                <h1 className="about-me-title">全栈工程师</h1>
                <p>我熟悉 React、Vue、云服务技术以及一些 SaaS 项目的开发。熟悉各类框架工具和支付平台的对接。</p>
              </div>
              <div className="about-me-grid-item about-me-card">
                <h1 className="about-me-title">创业者</h1>
                <p>目前在主导一个音乐（乐谱）类工具程序和一个服装定制品类的项目，我们期待能够对需要的人有所帮助。</p>
              </div>
              <div className="about-me-grid-item about-me-card">
                <h1 className="about-me-title">开源贡献者</h1>
                <p>我在 Github 上有多个开源项目，涵盖了模板类、行业软件类、组件库类等产品。欢迎 Star 和 Fork 我的项目。</p>
              </div>
            </div>
            <div className="about-me-grid-one-quarter">
              <div className="about-me-grid-span-one">
                {/* 滚动容器 */}
                <div className="scroll-container-wrapper">
                  <div 
                    className="scroll-container" 
                    ref={scrollContainerRef}
                  >
                    {cardsData.map((card) => (
                      <div key={card.id} className="about-me-card scroll-card">
                        <h1 className="about-me-title">{card.title}</h1>
                        <p>{card.content}</p>
                      </div>
                    ))}
                  </div>
                  {/* 顶部渐变遮罩 */}
                  <div className={`scroll-mask top ${showTopMask ? 'visible' : ''}`}></div>
                  {/* 底部渐变遮罩 */}
                  <div className={`scroll-mask bottom ${!isNearBottom ? 'visible' : ''}`}></div>
                </div>
              </div>
              <div className="about-me-grid-span-three about-me-card about-me-swiper-card">
                <div className="about-me-profile-section">
                  <div className="about-me-swiper-container">
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      spaceBetween={0}
                      slidesPerView={1}
                      pagination={{ 
                        clickable: true,
                        bulletActiveClass: 'swiper-pagination-bullet-active'
                      }}
                      loop={true}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      className="about-me-swiper"
                    >
                      <SwiperSlide>
                        <img src="/assets/kimi-01.jpg" alt="Kimi Tin 01" className="swiper-image" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/assets/kimi-02.jpg" alt="Kimi Tin 02" className="swiper-image" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/assets/kimi-03.jpg" alt="Kimi Tin 03" className="swiper-image" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/assets/kimi-04.jpg" alt="Kimi Tin 04" className="swiper-image" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="about-me-info">
                    <h1 className="about-me-name happy-font">Kimi Tin 田昊天</h1>
                    <div className="about-me-bio">
                      <p>P8 程序员再就业</p>
                      <p>全栈开发者 & 技术专家</p>
                      <p>曾经的职业魔术师，一个管风琴票友</p>
                    </div>
                    <div className="about-me-contact">
                      <p>Email: mitkimi@gmail.com</p>
                      </div>
                    <div className="social-links">
                      <a href="https://github.com/mitkimi" target="_blank" className="social-link">
                        <img src="/assets/github.svg" alt="GitHub" className="social-icon" />
                      </a>
                      <a href="https://mitkimi.com" target="_blank" className="social-link">
                        <img src="/assets/mitkimi.svg" alt="Send" className="social-icon" />
                      </a>
                      <a href="https://www.xiaohongshu.com/user/profile/5f93f224000000000101f415" target="_blank" className="social-link">
                        <img src="/assets/redbook.svg" alt="RedBook" className="social-icon" />
                      </a>
                      <a href="https://www.douyin.com/user/MS4wLjABAAAABsgLtxWm5TObmVTb_0hupDEUpZkwOnoRADJr7C7KWFo" target="_blank" className="social-link">
                        <img src="/assets/tiktok.svg" alt="TikTok" className="social-icon" />
                      </a>
                      <a href="https://www.youtube.com/@mitkimi" target="_blank" className="social-link">
                        <img src="/assets/youtube.svg" alt="Organ" className="social-icon" />
                      </a>
                      <a href="https://kimitinorganist.cn" target="_blank" className="social-link">
                        <img src="/assets/organ.svg" alt="Organ" className="social-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-me-right" ref={rightRef}>
            <div className="about-me-card-container">
              <div className="about-me-card self-introduction">
                <h1 className="about-me-title">自我介绍</h1>
                <p>我是一个拥有 12 年工作经验。自 2003 年开始学习编程到现在，已经拥有 23 年开发经验了。 目前，我专注于 React、Vue（基于 Node.js）、云服务技术以及一些 SaaS 项目的开发。 在过往的工作经验中，曾参与多个大型项目的开发。 在创业阶段，我也在带领团队做一些艺术类相关活动的策划、执行和技术支持等工作。 在工作之余，我也喜欢开源贡献和技术分享，致力于帮助其他开发者成长。</p>
              </div>
              <div className="about-me-card">
                <h1 className="about-me-title">除了写代码</h1>
                <p>我曾经是一个职业魔术师，参与过综艺节目录制，开过魔术专场，是国际华人魔术师联盟成员。</p>
                <p>音乐方面比较喜欢管风琴，是一个管风琴票友。</p>
              </div>
              <div 
                className={`about-me-card ${rightCardPadding.top !== 30 || rightCardPadding.bottom !== 30 ? 'adjusted-padding' : ''}`}
                style={{
                  '--adjusted-padding-top': `${rightCardPadding.top}px`,
                  '--adjusted-padding-bottom': `${rightCardPadding.bottom}px`
                } as React.CSSProperties}
              >
                <p>我喜欢收藏卡片、球鞋、手办等。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}