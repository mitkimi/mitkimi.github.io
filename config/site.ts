// 网站配置文件 - 在这里修改你的个人信息

export const siteConfig = {
  // 基本信息
  name: '我的网站',
  title: '你好，我是开发者',
  description: '一名充满热情的全栈开发者，专注于创建优雅的用户体验和高性能的 Web 应用程序',
  
  // 关于我
  about: {
    paragraphs: [
      '我是一名热爱技术的开发者，拥有多年的 Web 开发经验。专注于使用现代化的技术栈构建高质量的应用程序。',
      '我相信代码不仅仅是功能的实现，更是艺术的表达。我致力于编写简洁、可维护、高性能的代码。'
    ]
  },

  // 主要技能标签
  mainSkills: [
    { label: 'React', color: 'blue' },
    { label: 'Node.js', color: 'green' },
    { label: 'TypeScript', color: 'purple' },
    { label: 'Next.js', color: 'orange' }
  ],

  // 项目列表
  projects: [
    {
      title: '项目一',
      description: '这是一个使用 Next.js 和 TypeScript 构建的现代化 Web 应用。具有出色的性能和用户体验。',
      tags: [
        { label: 'Next.js', color: 'blue' },
        { label: 'TypeScript', color: 'purple' }
      ],
      link: '' // 可选：项目链接
    },
    {
      title: '项目二',
      description: '一个全栈应用，使用 React 和 Node.js 构建。提供完整的用户管理和数据处理功能。',
      tags: [
        { label: 'React', color: 'cyan' },
        { label: 'Node.js', color: 'green' }
      ],
      link: ''
    },
    {
      title: '项目三',
      description: '基于微服务架构的企业级应用。采用最佳实践和设计模式。',
      tags: [
        { label: 'Microservices', color: 'orange' },
        { label: 'Docker', color: 'red' }
      ],
      link: ''
    }
  ],

  // 技能分类
  skills: {
    frontend: {
      title: '前端开发',
      skills: [
        { name: 'React', color: 'blue' },
        { name: 'Vue.js', color: 'cyan' },
        { name: 'TypeScript', color: 'purple' },
        { name: 'Next.js', color: 'orange' },
        { name: 'Tailwind CSS', color: 'pink' },
        { name: 'Sass', color: 'magenta' }
      ]
    },
    backend: {
      title: '后端开发',
      skills: [
        { name: 'Node.js', color: 'green' },
        { name: 'Express', color: 'lime' },
        { name: 'NestJS', color: 'red' },
        { name: 'PostgreSQL', color: 'blue' },
        { name: 'MongoDB', color: 'orange' },
        { name: 'GraphQL', color: 'purple' }
      ]
    },
    tools: {
      title: '工具与部署',
      skills: [
        { name: 'Git', color: 'volcano' },
        { name: 'Docker', color: 'blue' },
        { name: 'GitHub Actions', color: 'cyan' },
        { name: 'Vercel', color: 'purple' },
        { name: 'AWS', color: 'geekblue' }
      ]
    },
    other: {
      title: '其他技能',
      skills: [
        { name: 'UI/UX 设计', color: 'magenta' },
        { name: '敏捷开发', color: 'red' },
        { name: '代码审查', color: 'orange' },
        { name: '性能优化', color: 'green' },
        { name: '测试驱动开发', color: 'cyan' }
      ]
    }
  },

  // 联系方式
  contact: {
    email: 'your-email@example.com',
    github: 'yourusername',
    linkedin: 'yourprofile'
  },

  // 社交链接
  social: {
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com'
  }
};

