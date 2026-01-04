"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navBrand}>
          Portfolio
        </Link>
        
        <div className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>关于</a>
          <a href="#projects" className={styles.navLink}>项目</a>
          <a href="#skills" className={styles.navLink}>技能</a>
          <a href="#contact" className={styles.navLink}>联系</a>
        </div>
        
        <button className={styles.navToggle}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navigation;