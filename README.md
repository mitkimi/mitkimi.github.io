# 个人网站

这是一个使用 Next.js 和 @apron-design/react 组件库构建的现代化个人网站。参考 [i.mitkimi.com](https://i.mitkimi.com/) 的设计风格。

## ✨ 功能特性

- 🎨 现代化的 UI 设计，使用 @apron-design/react 组件库
- 📱 完全响应式布局，支持移动端和桌面端
- 🌙 深色模式支持（跟随系统主题）
- ⚡ 静态站点生成，极快的加载速度
- 🚀 自动部署到 GitHub Pages
- 🎯 SEO 友好
- ♿ 无障碍访问支持
- 🔧 易于自定义和扩展

## 🛠️ 技术栈

- **框架**: [Next.js 16](https://nextjs.org/) - React 框架
- **UI 库**: [@apron-design/react](https://www.npmjs.com/package/@apron-design/react) - React 组件库
- **样式**: [Tailwind CSS 4](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **语言**: [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript
- **部署**: [GitHub Pages](https://pages.github.com/) - 免费静态网站托管

## 📦 项目结构

```
i.mitkimi/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 主页面
│   └── globals.css          # 全局样式
├── components/              # 可复用组件
│   ├── ProjectCard.tsx      # 项目卡片组件
│   └── SkillCard.tsx        # 技能卡片组件
├── config/                  # 配置文件
│   └── site.ts              # 网站配置（个人信息）
├── public/                  # 静态资源
├── .github/workflows/       # GitHub Actions 工作流
│   └── deploy.yml           # 自动部署配置
├── next.config.ts           # Next.js 配置
├── package.json             # 项目依赖
├── DEPLOYMENT.md            # 详细部署指南
└── README.md                # 项目说明
```

## 🚀 快速开始

### 1. 克隆或下载项目

```bash
git clone https://github.com/yourusername/i.mitkimi.git
cd i.mitkimi
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 4. 自定义内容

编辑 `config/site.ts` 文件，修改你的个人信息：

```typescript
export const siteConfig = {
  name: '你的名字',
  title: '你的标题',
  description: '你的描述',
  // ... 更多配置
};
```

### 5. 构建生产版本

```bash
npm run build
```

构建后的静态文件将输出到 `out` 目录。

### 6. 本地预览构建结果

```bash
npm run preview
```

## 📝 自定义指南

### 修改个人信息

所有个人信息都集中在 `config/site.ts` 文件中，包括：

- 基本信息（姓名、标题、描述）
- 关于我
- 技能标签
- 项目列表
- 联系方式
- 社交链接

### 修改页面样式

- **全局样式**: 编辑 `app/globals.css`
- **组件样式**: 使用 Tailwind CSS 类名
- **主题色**: 修改 `app/globals.css` 中的 CSS 变量

### 添加新页面

在 `app` 目录下创建新文件夹和 `page.tsx` 文件：

```bash
mkdir app/blog
touch app/blog/page.tsx
```

### 添加新组件

在 `components` 目录下创建新的 React 组件：

```bash
touch components/YourComponent.tsx
```

## 🌐 部署到 GitHub Pages

详细的部署步骤请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)。

### 快速部署

1. 修改 `next.config.ts` 中的 `basePath` 为你的仓库名
2. 推送代码到 GitHub
3. 在仓库设置中启用 GitHub Pages（选择 GitHub Actions）
4. 等待自动部署完成

你的网站将在 `https://yourusername.github.io/仓库名/` 可访问。

## 📚 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器（本地测试）
- `npm run lint` - 运行 ESLint 检查代码
- `npm run preview` - 预览构建后的静态网站

## 🎨 组件示例

项目包含可复用的组件：

### ProjectCard

```tsx
import ProjectCard from '@/components/ProjectCard';

<ProjectCard
  title="项目名称"
  description="项目描述"
  tags={[
    { label: 'React', color: 'blue' },
    { label: 'TypeScript', color: 'purple' }
  ]}
  link="https://github.com/..."
/>
```

### SkillCard

```tsx
import SkillCard from '@/components/SkillCard';

<SkillCard
  title="前端开发"
  skills={[
    { name: 'React', color: 'blue' },
    { name: 'Vue.js', color: 'cyan' }
  ]}
/>
```

## 🔧 配置说明

### Next.js 配置 (next.config.ts)

- `output: 'export'` - 启用静态导出
- `basePath` - 设置基础路径（用于 GitHub Pages）
- `images.unoptimized` - 禁用图片优化（GitHub Pages 限制）

### GitHub Actions 配置 (.github/workflows/deploy.yml)

自动化部署流程：
1. 检出代码
2. 安装 Node.js 和依赖
3. 构建项目
4. 部署到 GitHub Pages

## 🐛 故障排查

### 样式或资源加载失败

检查 `next.config.ts` 中的 `basePath` 是否与仓库名匹配。

### 构建失败

运行 `npm run lint` 检查代码错误。

### 部署失败

查看 GitHub Actions 日志，确保所有依赖正确安装。

更多问题请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)。

## 📄 许可证

MIT License - 可自由使用和修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 📧 Email: your-email@example.com
- 💼 GitHub: [@yourusername](https://github.com/yourusername)
- 🔗 LinkedIn: [个人资料](https://linkedin.com/in/yourprofile)

---

⭐ 如果这个项目对你有帮助，请给个 Star！
