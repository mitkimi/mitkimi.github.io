'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.scss';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: '项目一',
    description: '这是一个使用 Next.js 和 TypeScript 构建的现代化 Web 应用。具有出色的性能和用户体验。',
    tags: ['Next.js', 'TypeScript', 'React'],
  },
  {
    title: '项目二',
    description: '一个全栈应用，使用 React 和 Node.js 构建。提供完整的用户管理和数据处理功能。',
    tags: ['React', 'Node.js', 'Express'],
  },
  {
    title: '项目三',
    description: '基于微服务架构的企业级应用。采用最佳实践和设计模式。',
    tags: ['Microservices', 'Docker', 'Kubernetes'],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !projectsRef.current) return;

    // 标题动画
    gsap.fromTo(
      titleRef.current,
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
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: false,
        },
      }
    );

    // 项目卡片动画
    const cards = projectsRef.current.children;
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="projects">
      <div className="projects-container">
        <h2 ref={titleRef} className="title">
          项目
        </h2>
        <div ref={projectsRef} className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  查看项目 →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}