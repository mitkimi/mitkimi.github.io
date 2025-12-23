# 🚀 GitHub Pages 快速部署指南

## ✅ 当前配置状态

已完成配置：
- ✅ **推送到 main 分支自动构建**
- ✅ **部署根目录设置为 out 目录**
- ✅ **支持自定义域名和子路径部署**

---

## 📋 3 步快速部署

### 步骤 1：推送代码

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 步骤 2：启用 GitHub Pages

1. 打开 GitHub 仓库
2. **Settings** → **Pages**
3. **Source** 选择：**GitHub Actions**

### 步骤 3：访问网站

- 子路径：`https://yourusername.github.io/i.mitkimi/`
- 自定义域名：`https://yourdomain.com/`

---

## ⚙️ 配置选项

### 选项 A：子路径部署（需要配置）

如果仓库名是 `i.mitkimi`，编辑 `.github/workflows/deploy.yml` 第 39 行：

```yaml
BASE_PATH: /i.mitkimi  # 取消注释这行
```

### 选项 B：根路径/自定义域名（默认）

**无需修改！** 当前配置已支持。

如需自定义域名，创建 `public/CNAME` 文件：

```bash
echo "yourdomain.com" > public/CNAME
```

然后配置 DNS：
```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

---

## 📂 部署的是什么？

GitHub Actions 会自动：
1. 构建项目 → 生成 `out` 目录
2. 上传 `out` 目录的内容
3. 部署到 GitHub Pages

**out 目录包含**：
```
out/
├── index.html          # 主页
├── 404.html            # 404 页面
├── _next/              # Next.js 资源
│   ├── static/
│   │   ├── chunks/    # JS 文件
│   │   └── media/     # 字体等资源
└── *.svg               # 静态文件
```

---

## 🔄 自动部署流程

```
推送代码 → GitHub Actions 触发 → 构建 → 部署 → 完成
  ↓            ↓                   ↓      ↓       ↓
main 分支    自动检测           生成 out  上传    可访问
(1秒)       (10秒)            (1分钟)  (30秒)  (总共2分钟)
```

---

## 🔍 查看部署状态

GitHub 仓库 → **Actions** 标签 → 查看最新工作流

✅ 绿色对勾 = 部署成功  
❌ 红色叉号 = 部署失败（点击查看日志）

---

## 🎯 重要配置文件

### 1. `.github/workflows/deploy.yml`
```yaml
on:
  push:
    branches:
      - main  # ← 推送 main 分支时触发

- Upload artifact
    with:
      path: ./out  # ← 部署 out 目录
```

### 2. `next.config.ts`
```typescript
{
  output: 'export',              // ← 静态导出
  basePath: process.env.BASE_PATH || '',  // ← 路径配置
  trailingSlash: true,           // ← URL 尾部斜杠
}
```

---

## ❓ 常见问题

### Q1: 部署后 404 错误？
**A:** 检查 BASE_PATH 配置是否匹配仓库名

### Q2: 样式没有加载？
**A:** 检查浏览器控制台，确认资源路径正确

### Q3: 如何手动触发部署？
**A:** Actions → Deploy to GitHub Pages → Run workflow

### Q4: 部署到根路径还是子路径？
**A:** 
- **根路径**（如 yourdomain.com）：保持默认
- **子路径**（如 /i.mitkimi）：取消注释 BASE_PATH

---

## 📚 详细文档

需要更多信息？查看：
- 📄 [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) - 完整配置指南
- 📄 [DEPLOYMENT.md](./DEPLOYMENT.md) - 部署详细步骤

---

## ✨ 完成！

配置完成后，每次推送到 main 分支，网站会自动更新。

**当前配置：**
- ✅ 自动构建：推送到 main → 自动部署
- ✅ 部署目录：out 目录
- ✅ 访问方式：根据 BASE_PATH 配置

祝你部署顺利！🎉

