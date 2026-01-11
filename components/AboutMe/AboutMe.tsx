import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './AboutMe.scss';

export default function AboutMe() {
  return (
    <section id="about" className="about-me">
      <div className="about-me-container">
        <div className="about-me-content">
          <div className="about-me-left">
            <div className="about-me-grid-four-column">
              <div className="about-me-grid-item about-me-card-group">
                <div className="about-me-card">
                  <h1 className="about-me-title"> 苹果开发者</h1>
                </div>
                <div className="about-me-card">
                  <h1 className="about-me-title">产品经理</h1>
                </div>
              </div>
              <div className="about-me-grid-item about-me-card">
                <h1 className="about-me-title">全栈工程师</h1>
                <p>我熟悉 React、Vue、云服务技术以及一些 SaaS 项目的开发。熟悉各类框架工具和支付平台的对接。</p>
              </div>
              <div className="about-me-grid-item about-me-card">
                <h1 className="about-me-title">创业者</h1>
                <p>目前在主导一个音乐（乐谱）类工具程序和一个服装定制品类的项目，我们期待能够对需要的人有所帮助。</p>
              </div>
              <div className="about-me-grid-item about-me-card">
                <h1 className="about-me-title">开源贡献者</h1>
                <p>我在 Github 上有多个开源项目，涵盖了模板类、行业软件类、组件库类等产品。欢迎 Star 和 Fork 我的项目。</p>
              </div>
            </div>
            <div className="about-me-grid-one-quarter">
              <div className="about-me-grid-span-one">
                <h1 className="about-me-title">这里放一些其他的卡片，但是具体放什么还没想好</h1>
              </div>
              <div className="about-me-grid-span-three about-me-card about-me-swiper-card">
                <div className="about-me-profile-section">
                  <div className="about-me-swiper-container">
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      spaceBetween={0}
                      slidesPerView={1}
                      pagination={{ 
                        clickable: true,
                        bulletActiveClass: 'swiper-pagination-bullet-active'
                      }}
                      loop={true}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      className="about-me-swiper"
                    >
                      <SwiperSlide>
                        <img src="/assets/kimi-01.jpg" alt="Kimi Tin 01" className="swiper-image" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/assets/kimi-02.jpg" alt="Kimi Tin 02" className="swiper-image" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/assets/kimi-03.jpg" alt="Kimi Tin 03" className="swiper-image" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="/assets/kimi-04.jpg" alt="Kimi Tin 04" className="swiper-image" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="about-me-info">
                    <h1 className="about-me-name happy-font">Kimi Tin 田昊天</h1>
                    <div className="about-me-bio">
                      <p>P8 程序员再就业</p>
                      <p>全栈开发者 & 技术专家</p>
                      <p>曾经的职业魔术师，一个管风琴票友</p>
                    </div>
                    <div className="about-me-contact">
                      <p>Email: mitkimi@gmail.com</p>
                      </div>
                    <div className="social-links">
                      <a href="https://github.com/mitkimi" target="_blank" className="social-link">
                        <img src="/assets/github.svg" alt="GitHub" className="social-icon" />
                      </a>
                      <a href="https://mitkimi.com" target="_blank" className="social-link">
                        <img src="/assets/mitkimi.svg" alt="Send" className="social-icon" />
                      </a>
                      <a href="https://www.xiaohongshu.com/user/profile/5f93f224000000000101f415" target="_blank" className="social-link">
                        <img src="/assets/redbook.svg" alt="RedBook" className="social-icon" />
                      </a>
                      <a href="https://www.douyin.com/user/MS4wLjABAAAABsgLtxWm5TObmVTb_0hupDEUpZkwOnoRADJr7C7KWFo" target="_blank" className="social-link">
                        <img src="/assets/tiktok.svg" alt="TikTok" className="social-icon" />
                      </a>
                      <a href="https://www.youtube.com/@mitkimi" target="_blank" className="social-link">
                        <img src="/assets/youtube.svg" alt="Organ" className="social-icon" />
                      </a>
                      <a href="https://kimitinorganist.cn" target="_blank" className="social-link">
                        <img src="/assets/organ.svg" alt="Organ" className="social-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-me-right">
            <div className="about-me-card-container">
              <div className="about-me-card self-introduction">
                <h1 className="about-me-title">自我介绍</h1>
                <p>我是一个拥有 12 年工作经验。自 2003 年开始学习编程到现在，已经拥有 23 年开发经验了。 目前，我专注于 React、Vue（基于 Node.js）、云服务技术以及一些 SaaS 项目的开发。 在过往的工作经验中，曾参与多个大型项目的开发。 在创业阶段，我也在带领团队做一些艺术类相关活动的策划、执行和技术支持等工作。 在工作之余，我也喜欢开源贡献和技术分享，致力于帮助其他开发者成长。</p>
              </div>
              <div className="about-me-card">
                <h1 className="about-me-title">除了写代码</h1>
                <p>我曾经是一个职业魔术师，参与过综艺节目录制，开过魔术专场，是国际华人魔术师联盟成员。</p>
                <p>音乐方面比较喜欢管风琴，是一个管风琴票友。</p>
              </div>
              <div className="about-me-card">
                <p>我喜欢收藏卡片、球鞋、手办等。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}