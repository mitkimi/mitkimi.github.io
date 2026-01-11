'use client';

import './Footer.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="copyright">
            Copyright &copy; {currentYear} Kimi Tin, i.mitkimi.com
          </p>
          <div className="links">
            <a href="https://github.com/mitkimi" target="_blank" rel="noopener noreferrer" className="link">
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
