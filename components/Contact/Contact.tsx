'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.scss';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>联系</h2>
        <p>这里展示联系信息</p>
      </div>
    </section>
  );
};

export default Contact;
