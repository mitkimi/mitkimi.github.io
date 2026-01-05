'use client';

import { useEffect, useState } from 'react';
import Glass from '@/components/Glass/Glass';
import styles from './Navigation.module.scss';

const navItems = [
  { id: 'home', label: '首页' },
  { id: 'how-i-work', label: '工作方式' },
  { id: 'case-studies', label: '案例研究' },
  { id: 'skills', label: '技能' },
  { id: 'about', label: '关于我' },
  { id: 'contact', label: '联系' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navigation}>
      <Glass className={styles.glass}>
        <div className={styles.navContent}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </Glass>
    </nav>
  );
}
