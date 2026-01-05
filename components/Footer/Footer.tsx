'use client';

import styles from './Footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            Copyright © {currentYear} Stavros Symeonidis
          </p>
          <div className={styles.links}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span className={styles.linkIcon}>🐙</span>
              <span>Github</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span className={styles.linkIcon}>in</span>
              <span>LinkedIn</span>
            </a>
            <a href="#" className={styles.link}>
              隐私政策
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
