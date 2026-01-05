'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AboutMe.module.scss';

gsap.registerPlugin(ScrollTrigger);

const experienceCards = [
  { icon: '🔗', title: '朗链' },
  { icon: '☁️', title: '多租户SaaS' },
  { icon: '🛡️', title: '安全' },
];

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    // 左下角卡片滚动动画
    const cards = cardsRef.current;
    const cardHeight = cards.children[0]?.clientHeight || 200;
    const totalHeight = cardHeight * cards.children.length;
    const scrollDistance = totalHeight - window.innerHeight * 0.5;

    gsap.to(cards, {
      y: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=2000',
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className={styles.aboutMe}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* 左侧经验卡片 */}
          <div className={styles.leftSidebar}>
            <div className={styles.sidebarLabel}>经验</div>
            <div ref={cardsRef} className={styles.cardsContainer}>
              {experienceCards.map((card, index) => (
                <div key={index} className={styles.experienceCard}>
                  <div className={styles.cardIcon}>{card.icon}</div>
                  {card.title && <div className={styles.cardTitle}>{card.title}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* 中间主要内容 */}
          <div className={styles.mainContent}>
            <div className={styles.profileImage}>
              {/* 占位符图片 */}
              <div className={styles.imagePlaceholder}></div>
            </div>
            <div className={styles.profileInfo}>
              <h2 className={styles.name}>斯塔夫罗斯·西米奥尼迪斯</h2>
              <p className={styles.role}>拥有多项专利的人工智能开发人员兼首席技术官</p>
              <div className={styles.socialLinks}>
                <a href="https://github.com" className={styles.socialLink}>
                  <span className={styles.socialIcon}>🐙</span>
                </a>
                <a href="https://linkedin.com" className={styles.socialLink}>
                  <span className={styles.socialIcon}>in</span>
                </a>
              </div>
            </div>
          </div>

          {/* 右侧卡片 */}
          <div className={styles.rightSidebar}>
            <div className={styles.rightCard}>
              <h3 className={styles.rightCardTitle}>以业务为先的技术领导者</h3>
              <p className={styles.rightCardText}>
                从机器学习研究到联合创始人兼首席技术官，我逐渐明白，如果没有商业影响，再出色的技术也毫无意义。我构建的每一个系统都始于一个问题：它将如何推动业务发展？
              </p>
            </div>
            <div className={styles.rightCard}>
              <h3 className={styles.rightCardTitle}>可扩展解决方案</h3>
              <div className={styles.lightningIcon}>⚡</div>
            </div>
          </div>
        </div>

        {/* 底部信息卡片 */}
        <div className={styles.bottomCards}>
          <div className={styles.bottomCard}>
            <p className={styles.bottomCardText}>本季度新增2位客户</p>
          </div>
          <div className={styles.bottomCard}>
            <div className={styles.rocketIcon}>🚀</div>
            <h3 className={styles.bottomCardTitle}>企业合规标准</h3>
            <p className={styles.bottomCardSubtitle}>从原型到量产</p>
          </div>
        </div>
      </div>
    </section>
  );
}
