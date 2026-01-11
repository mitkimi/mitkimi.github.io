'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.scss';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>技能</h2>
        <p>这里展示技能信息</p>
      </div>
    </section>
  );
};

export default Skills;
