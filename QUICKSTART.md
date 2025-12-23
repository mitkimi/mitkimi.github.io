# 快速启动指南 🚀

这是一个 5 分钟快速启动指南，帮助你快速上手这个个人网站项目。

## 第一步：安装依赖 📦

```bash
npm install
```

## 第二步：启动开发服务器 💻

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 第三步：自定义你的信息 ✏️

编辑 `config/site.ts` 文件，修改以下内容：

### 1. 基本信息

```typescript
name: '你的名字',
title: '你好，我是XXX',
description: '你的个人介绍',
```

### 2. 关于我

```typescript
about: {
  paragraphs: [
    '第一段介绍',
    '第二段介绍'
  ]
},
```

### 3. 主要技能

```typescript
mainSkills: [
  { label: 'React', color: 'blue' },
  { label: 'Node.js', color: 'green' },
  // 添加更多...
],
```

### 4. 项目展示

```typescript
projects: [
  {
    title: '你的项目名称',
    description: '项目描述',
    tags: [
      { label: '技术1', color: 'blue' },
      { label: '技术2', color: 'purple' }
    ],
    link: 'https://github.com/...' // 可选
  },
  // 添加更多项目...
],
```

### 5. 联系方式

```typescript
contact: {
  email: 'your-email@example.com',
  github: 'yourusername',
  linkedin: 'yourprofile'
},
```

## 第四步：测试构建 🔨

```bash
npm run build
```

如果构建成功，你会看到 "✓ Compiled successfully" 的消息。

## 第五步：部署到 GitHub Pages 🌐

### 1. 修改仓库配置

编辑 `next.config.ts`，将 `basePath` 改为你的仓库名：

```typescript
basePath: process.env.NODE_ENV === 'production' ? '/你的仓库名' : '',
```

### 2. 推送到 GitHub

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/你的仓库名.git
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 进入 GitHub 仓库
2. 点击 **Settings** → **Pages**
3. 在 **Source** 下选择 **GitHub Actions**

### 4. 等待部署完成

在 **Actions** 标签页查看部署进度，完成后访问：

```
https://yourusername.github.io/你的仓库名/
```

## 常用命令 📝

```bash
# 开发
npm run dev          # 启动开发服务器

# 构建
npm run build        # 构建生产版本
npm run preview      # 预览构建结果

# 代码质量
npm run lint         # 检查代码
```

## 自定义样式 🎨

### 修改主题色

编辑 `app/globals.css`：

```css
:root {
  --background: #ffffff;  /* 背景色 */
  --foreground: #171717;  /* 文字色 */
}
```

### 修改组件样式

直接在 JSX 中使用 Tailwind CSS 类名：

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  内容
</div>
```

## 添加新内容 ➕

### 添加新项目

在 `config/site.ts` 的 `projects` 数组中添加：

```typescript
{
  title: '新项目',
  description: '项目描述',
  tags: [
    { label: 'React', color: 'blue' }
  ],
  link: 'https://...'
}
```

### 添加新技能

在 `config/site.ts` 的 `skills` 对象中添加：

```typescript
frontend: {
  title: '前端开发',
  skills: [
    { name: '新技能', color: 'blue' },
    // ...
  ]
}
```

## 故障排查 🔧

### 端口被占用

```bash
# 使用其他端口
npm run dev -- -p 3001
```

### 构建失败

```bash
# 清理缓存
rm -rf .next out node_modules
npm install
npm run build
```

### 样式不生效

确保 Tailwind CSS 类名正确，并且没有拼写错误。

## 下一步 🎯

- 📖 阅读 [README.md](./README.md) 了解更多功能
- 🚀 查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 了解详细部署步骤
- 🎨 自定义更多样式和组件
- 📝 添加博客功能
- 📊 集成分析工具

## 需要帮助？ 💬

- 📧 Email: your-email@example.com
- 💼 GitHub Issues: [提交问题](https://github.com/yourusername/i.mitkimi/issues)

---

祝你使用愉快！🎉

