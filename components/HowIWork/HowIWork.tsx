'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HowIWork.module.scss';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: '方法论',
    description: '我采用专为中小企业设计的轻量级敏捷交付方法，并且我随时可以提供服务。',
    channels: [
      { name: '电子邮件', icon: '📧', color: '#FFD700' },
      { name: '视频', icon: '📹', color: '#00FF00' },
      { name: '团队', icon: '👥', color: '#9B59B6' },
      { name: '松弛', icon: '💬', color: '#FF6B6B' },
      { name: '体式', icon: '📋', color: '#FF6B6B' },
      { name: 'Trello', icon: '📌', color: '#0079BF' },
    ],
    cta: '请求频道',
  },
  {
    title: '结果',
    description: '能够带来可衡量结果的企业解决方案',
    icon: '📊',
  },
  {
    title: '能力',
    description: '技术栈展示',
    tags: ['React', 'Next.js', 'FastAPI', 'Vue', 'Pinecone', 'Prisma', 'LangChain', 'C#', 'Docker', 'Vercel', 'Stripe', 'Clerk'],
    cta: '看不到你的堆栈? 我们来聊聊吧 →',
  },
  {
    title: '安全的',
    description: '每个集成中都包含企业级身份验证',
    icon: '🛡️',
  },
  {
    title: '快速地',
    description: '6至12周内即可交付高质量解决方案',
    icon: '⚡',
  },
  {
    title: '请求服务',
    items: [
      { time: '1小时', label: '批判的', color: '#FF0000' },
      { time: '4小时', label: '紧迫的', color: '#FFD700' },
      { time: '24小时', label: '常规', color: '#CCCCCC' },
    ],
  },
  {
    title: '转化率优化',
    description: '通过漏斗分析、A/B 测试和核心网站指标性能改进来提升销售额。',
    icon: '🛒',
  },
  {
    title: 'SaaS支出治理',
    description: '发现并优化您的139+个软件订阅，消除浪费并协商更优惠的交易。',
    icon: '💰',
  },
];

export default function HowIWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    // 右下角卡片横向滚动
    const cards = cardsRef.current;
    const cardWidth = cards.children[0]?.clientWidth || 400;
    const totalWidth = cardWidth * cards.children.length;
    const scrollDistance = totalWidth - window.innerWidth;

    gsap.to(cards, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=3000',
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <section id="how-i-work" ref={sectionRef} className={styles.howIWork}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* 左侧内容区域 */}
          <div className={styles.leftContent}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>简化流程</h3>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>AI FORGE 第五期 学员</h3>
              <p className={styles.cardSubtitle}>500多人中只有12人</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>2023年人工智能专利 获奖者</h3>
              <p className={styles.cardSubtitle}>IP Hatch 2023年度优胜者</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>天空实验室2022年 决赛入围者</h3>
              <p className={styles.cardSubtitle}>250多人中排名第18</p>
            </div>
          </div>

          {/* 右下角滚动卡片区域 */}
          <div className={styles.rightContent}>
            <div ref={cardsRef} className={styles.cardsContainer}>
              {cards.map((card, index) => (
                <div key={index} className={styles.card}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  {card.description && <p className={styles.cardDescription}>{card.description}</p>}
                  {card.channels && (
                    <div className={styles.channels}>
                      {card.channels.map((channel, i) => (
                        <div key={i} className={styles.channelItem}>
                          <span className={styles.channelIcon} style={{ color: channel.color }}>
                            {channel.icon}
                          </span>
                          <span className={styles.channelName}>{channel.name}</span>
                        </div>
                      ))}
                      <button className={styles.ctaButton}>{card.cta}</button>
                    </div>
                  )}
                  {card.icon && <div className={styles.icon}>{card.icon}</div>}
                  {card.tags && (
                    <div className={styles.tags}>
                      {card.tags.map((tag, i) => (
                        <span key={i} className={styles.tag}>{tag}</span>
                      ))}
                      <a href="#" className={styles.tagLink}>{card.cta}</a>
                    </div>
                  )}
                  {card.items && (
                    <div className={styles.timeCards}>
                      {card.items.map((item, i) => (
                        <div key={i} className={styles.timeCard}>
                          <h4 className={styles.timeTitle}>{item.time}</h4>
                          <p className={styles.timeLabel} style={{ color: item.color }}>
                            {item.label}
                          </p>
                          <p className={styles.timeSubtitle}>响应保证</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
