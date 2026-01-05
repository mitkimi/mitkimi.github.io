'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Contact.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    // 表单区域动画
    gsap.fromTo(
      sectionRef.current,
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
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: false,
        },
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={sectionRef} className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* 左侧内容 */}
          <div className={styles.leftContent}>
            <h2 className={styles.title}>从概念到生产</h2>
            <p className={styles.description}>
              与真正了解您业务需求的合作伙伴携手，将您的愿景变为现实。
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <span className={styles.contactText}>info@stavrossymeonidis.dev</span>
                <button className={styles.copyButton}>📋</button>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>💼</span>
                <span className={styles.contactText}>stav-symeonidis</span>
                <a href="https://linkedin.com" className={styles.externalLink}>↗</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🐙</span>
                <span className={styles.contactText}>@techaras</span>
                <a href="https://github.com" className={styles.externalLink}>↗</a>
              </div>
            </div>
          </div>

          {/* 右侧表单 */}
          <div className={styles.rightContent}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="约翰·多伊"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>电子邮件</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>信息</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="请介绍一下你的项目......"
                  className={styles.textarea}
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
