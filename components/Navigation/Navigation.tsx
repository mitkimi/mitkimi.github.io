'use client';

import { useEffect, useState } from 'react';
import Glass from '@/components/Glass/Glass';
import './Navigation.scss';


const navItems = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'case-studies', label: '案例' },
  { id: 'skills', label: '技能' },
  { id: 'work-experience', label: '工作经历' },
  { id: 'education', label: '教育经历' },
  { id: 'contact', label: '联系' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let observer: IntersectionObserver;
    
    const updateActiveSection = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      
      // 查找当前在视图中的第一个部分
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          // 考虑到导航栏的高度，稍微调整阈值
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(navItems[i].id);
            return;
          }
        }
      }
      
      // 如果没有部分满足条件，找到最接近视口中点的部分
      let closestSectionIndex = 0;
      let minDistance = Infinity;
      const viewportCenter = window.innerHeight / 2;
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - 80); // 使用80作为目标位置，考虑导航栏高度
          
          if (distance < minDistance) {
            minDistance = distance;
            closestSectionIndex = i;
          }
        }
      }
      
      setActiveSection(navItems[closestSectionIndex].id);
    };
    
    // 初始化时更新一次
    updateActiveSection();
    
    // 添加滚动事件监听器
    window.addEventListener('scroll', updateActiveSection);
    
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <Glass
        className="glass"
        height={60}
      >
        <div className="nav-content">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </Glass>
    </nav>
  );
}
