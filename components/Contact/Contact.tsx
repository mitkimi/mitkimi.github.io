'use client';

import { FormEvent, ReactNode, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '@/config/site';
import './Contact.scss';

gsap.registerPlugin(ScrollTrigger);

type ContactItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  onCopy?: () => void;
  copied?: boolean;
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

type EmailApiResponse = {
  data?: {
    message?: string;
    messageId?: string;
    sentTo?: string;
  };
  success: boolean;
  timestamp?: string;
};

const EMAIL_API_URL = 'https://duo.mitkimi.com/open-api/post-email';

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 6.5h16v11H4z" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.65-.2.65-.46v-1.84c-2.67.58-3.23-1.13-3.23-1.13-.44-1.1-1.07-1.4-1.07-1.4-.87-.6.07-.58.07-.58.96.07 1.47.99 1.47.99.86 1.46 2.24 1.04 2.79.8.08-.62.33-1.04.6-1.28-2.13-.24-4.37-1.06-4.37-4.7 0-1.04.37-1.89.98-2.56-.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.61.97a9.1 9.1 0 0 1 4.75 0c1.81-1.23 2.61-.97 2.61-.97.52 1.31.19 2.28.09 2.52.61.67.98 1.52.98 2.56 0 3.65-2.25 4.46-4.39 4.69.35.3.65.88.65 1.78v2.67c0 .26.18.56.66.46A9.5 9.5 0 0 0 12 2.5Z" />
  </svg>
);

const WebsiteIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3.5 12h17M12 3c2.3 2.46 3.5 5.46 3.5 9S14.3 18.54 12 21c-2.3-2.46-3.5-5.46-3.5-9S9.7 5.46 12 3Z" />
  </svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="8" y="8" width="11" height="11" rx="2" />
    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12.5 4.2 4L19 7" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 5h5v5M19 5l-8 8" />
    <path d="M17 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h5" />
  </svg>
);

function ContactItem({ icon, label, value, href, onCopy, copied }: ContactItemProps) {
  const content = (
    <>
      <span className="contact-item__icon">{icon}</span>
      <span className="contact-item__content">
        <span className="contact-item__label">{label}</span>
        <span className="contact-item__value">{value}</span>
      </span>
    </>
  );

  return (
    <div className="contact-item">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="contact-item__main">
          {content}
        </a>
      ) : (
        <div className="contact-item__main">{content}</div>
      )}

      {onCopy ? (
        <button
          type="button"
          className="contact-item__action"
          onClick={onCopy}
          aria-label={copied ? '邮箱已复制' : '复制邮箱地址'}
          title={copied ? '已复制' : '复制邮箱'}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item__action"
          aria-label={`打开${label}`}
          title={`打开${label}`}
        >
          <ExternalIcon />
        </a>
      )}
    </div>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          section.querySelectorAll('[data-contact-reveal]'),
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.09,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 72%',
              once: true,
            },
          },
        );
      });
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${siteConfig.contact.email}`;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity() || submitStatus === 'submitting') return;

    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const content = String(data.get('message') ?? '').trim();
    const params = new URLSearchParams({
      to: siteConfig.contact.email,
      site: 'i.mitkimi.com',
      name,
      email,
      subject: `来自 ${name} 的网站联系`,
      content,
    });
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);

    setSubmitStatus('submitting');
    setSubmitMessage('');

    try {
      const response = await fetch(`${EMAIL_API_URL}?${params.toString()}`, {
        method: 'GET',
        headers: { Accept: 'application/json' },
        cache: 'no-store',
        signal: controller.signal,
      });
      const payload = (await response.json()) as EmailApiResponse;

      if (!response.ok || !payload.success) {
        throw new Error(payload.data?.message || '发送失败，请稍后再试');
      }

      form.reset();
      setSubmitStatus('success');
      setSubmitMessage(payload.data?.message || '邮件发送成功');
    } catch (error) {
      const message = error instanceof DOMException && error.name === 'AbortError'
        ? '请求超时，请检查网络后重试'
        : error instanceof Error
          ? error.message
          : '发送失败，请稍后再试';

      setSubmitStatus('error');
      setSubmitMessage(message);
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="contact" aria-labelledby="contact-title">
      <div className="contact__container">
        <div className="contact__intro">
          <div data-contact-reveal>
            <p className="contact__eyebrow">WORK WITH ME / 联系我</p>
            <h2 id="contact-title" className="contact__title font-smiley">
              项目合作
              <br />
              工作机会
            </h2>
            <p className="contact__description">
              <span>需要网站、Web 应用、SaaS 或小程序开发，欢迎聊聊项目合作。</span>
              <span>如果你正在寻找全栈工程师或产品方向伙伴，也欢迎提供工作机会。</span>
            </p>
          </div>

          <div className="contact__links" data-contact-reveal>
            <ContactItem
              icon={<MailIcon />}
              label="邮箱"
              value={siteConfig.contact.email}
              onCopy={copyEmail}
              copied={copied}
            />
            <ContactItem
              icon={<GithubIcon />}
              label="GitHub"
              value="@mitkimi"
              href={siteConfig.contact.github}
            />
            <ContactItem
              icon={<WebsiteIcon />}
              label="个人网站"
              value="mitkimi.com"
              href={siteConfig.contact.website}
            />
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-contact-reveal>
          <div className="contact-form__header">
            <div>
              <p className="contact-form__eyebrow">PROJECT OR OPPORTUNITY</p>
              <h3>告诉我你的需求</h3>
            </div>
            <span className="contact-form__status">
              <span aria-hidden="true" />
              开放合作与机会
            </span>
          </div>

          <div className="contact-form__row">
            <div className="contact-form__group">
              <label htmlFor="contact-name">怎么称呼你</label>
              <input id="contact-name" name="name" type="text" placeholder="你的名字" autoComplete="name" maxLength={80} required />
            </div>

            <div className="contact-form__group">
              <label htmlFor="contact-email">你的邮箱</label>
              <input id="contact-email" name="email" type="email" placeholder="name@example.com" autoComplete="email" maxLength={160} required />
            </div>
          </div>

          <div className="contact-form__group contact-form__group--message">
            <label htmlFor="contact-message">想聊点什么</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="简单说说你的想法、项目或想解决的问题……"
              rows={7}
              maxLength={2000}
              required
            />
          </div>

          <button
            type="submit"
            className="contact-form__submit"
            disabled={submitStatus === 'submitting'}
          >
            <span>
              {submitStatus === 'submitting'
                ? '发送中…'
                : submitStatus === 'success'
                  ? '发送成功'
                  : '发送消息'}
            </span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m5 12 14-7-4.5 14-2.8-5.2L5 12Z" />
              <path d="m11.7 13.8 3.1-3.2" />
            </svg>
          </button>
          <p
            className={`contact-form__feedback contact-form__feedback--${submitStatus}`}
            aria-live="polite"
          >
            {submitMessage}
          </p>
        </form>
      </div>
    </section>
  );
}
