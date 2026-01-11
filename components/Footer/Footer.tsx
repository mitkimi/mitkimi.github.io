'use client';

import './Footer.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="copyright">
            <p>Copyright &copy; {currentYear} Kimi Tin, i.mitkimi.com</p>
            <p className="beian">京ICP备15063748号-3</p>
          </div>
          <div className="links">
            <a href="https://github.com/mitkimi" target="_blank" rel="noopener noreferrer" className="link">
              <img src="/assets/github.svg" alt="GitHub" className="link-icon" />
            </a>
            <a href="https://mitkimi.com" target="_blank" rel="noopener noreferrer" className="link">
              <img src="/assets/mitkimi.svg" alt="Website" className="link-icon" />
            </a>
            <a href="https://www.xiaohongshu.com/user/profile/5f93f224000000000101f415" target="_blank" rel="noopener noreferrer" className="link">
              <img src="/assets/redbook.svg" alt="RedBook" className="link-icon" />
            </a>
            <a href="https://www.douyin.com/user/MS4wLjABAAAABsgLtxWm5TObmVTb_0hupDEUpZkwOnoRADJr7C7KWFo" target="_blank" rel="noopener noreferrer" className="link">
              <img src="/assets/tiktok.svg" alt="TikTok" className="link-icon" />
            </a>
            <a href="https://www.youtube.com/@mitkimi" target="_blank" rel="noopener noreferrer" className="link">
              <img src="/assets/youtube.svg" alt="YouTube" className="link-icon" />
            </a>
            <a href="https://kimitinorganist.cn" target="_blank" rel="noopener noreferrer" className="link">
              <img src="/assets/organ.svg" alt="Organ" className="link-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
