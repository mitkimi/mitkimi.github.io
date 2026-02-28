'use client';

import { useState } from 'react';
import { Form, FormItem, Input, Textarea, Button } from '@apron-design/react';
import './Contact.scss';

interface FormData {
  name: string;
  email: string;
  subject: string;
  content: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    content: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        'https://duo.mitkimi.com/open-api/post-email?to=mitkimicn@gmail.com&site=i.mitkimi.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          content: ''
        });
      }
    } catch (error) {
      console.error('提交失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const socialLinks = [
    { name: '小红书', icon: '/assets/redbook.svg', url: 'https://xhslink.com/m/5UjSSWU8q9v' },
    { name: '抖音', icon: '/assets/tiktok.svg', url: 'https://www.douyin.com/user/MS4wLjABAAAABsgLtxWm5TObmVTb_0hupDEUpZkwOnoRADJr7C7KWFo' },
    { name: 'Instagram', icon: '/assets/instagram.svg', url: 'https://www.instagram.com/kimi.tin?igsh=MW5zNWp6bzRjOWRiaQ%3D%3D&utm_source=qr' },
    { name: 'GitHub', icon: '/assets/github.svg', url: 'https://github.com/mitkimi' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="left-content">
            <h2 className="title">联系</h2>
            <div className="slogan">
              <p>解决复杂问题</p>
              <p>创造简单体验</p>
            </div>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={link.icon} alt={link.name} className="social-icon" />
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="right-content">
            <Form layout="vertical" onSubmit={handleSubmit}>
              <FormItem label="称呼">
                <Input
                  placeholder="请输入您的称呼"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
              </FormItem>
              <FormItem label="邮箱">
                <Input
                  type="email"
                  placeholder="请输入您的邮箱"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
              </FormItem>
              <FormItem label="主题">
                <Input
                  placeholder="请输入主题"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  required
                />
              </FormItem>
              <FormItem label="消息">
                <Textarea
                  placeholder="请输入您的消息"
                  value={formData.content}
                  onChange={(e) => handleChange('content', e.target.value)}
                  required
                  rows={4}
                />
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                >
                  {loading ? '发送中...' : success ? '发送成功' : '发送消息'}
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
