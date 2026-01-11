'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CaseStudies.scss';

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

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <h2>案例</h2>
        <p>这里展示案例信息</p>
      </div>
    </section>
  );
};

export default CaseStudies;
