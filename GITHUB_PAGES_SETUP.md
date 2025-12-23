# GitHub Pages 部署配置指南 🚀

## 📋 配置概览

当前配置已优化为：
- ✅ **推送到 main 分支时自动构建**
- ✅ **部署 out 目录到 GitHub Pages**
- ✅ **支持自定义域名和子路径部署**

## 🎯 部署步骤

### 1. 创建 GitHub 仓库

```bash
# 如果还没创建仓库
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/i.mitkimi.git
git push -u origin main
```

### 2. 配置 GitHub Pages

1. 进入 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 下拉菜单中选择 **GitHub Actions**

![GitHub Pages 设置](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/pages-source-github-actions.webp)

### 3. 配置部署路径

根据你的部署方式选择：

#### 方案 A：使用子路径部署（如 username.github.io/i.mitkimi）

编辑 `.github/workflows/deploy.yml` 文件，取消注释 BASE_PATH：

```yaml
- name: Build with Next.js
  run: npm run build
  env:
    NODE_ENV: production
    BASE_PATH: /i.mitkimi  # 取消注释这行，改为你的仓库名
```

**访问地址**：`https://yourusername.github.io/i.mitkimi/`

#### 方案 B：使用自定义域名或根路径（推荐）

保持 `.github/workflows/deploy.yml` 默认配置（BASE_PATH 保持注释）：

```yaml
- name: Build with Next.js
  run: npm run build
  env:
    NODE_ENV: production
    # BASE_PATH: /i.mitkimi  # 保持注释
```

**访问地址**：
- 自定义域名：`https://yourdomain.com/`
- 用户站点：`https://yourusername.github.io/`（需要仓库名为 `yourusername.github.io`）

### 4. 自定义域名设置（可选）

如果你想使用自定义域名（如 `i.mitkimi.com`）：

#### 4.1 添加 CNAME 文件

在 `public` 目录下创建 `CNAME` 文件：

```bash
echo "i.mitkimi.com" > public/CNAME
```

#### 4.2 配置 DNS

在你的域名提供商处添加以下 DNS 记录：

**对于 Apex 域名（如 example.com）**：
```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

**对于子域名（如 www.example.com 或 i.mitkimi.com）**：
```
CNAME    i    yourusername.github.io.
```

#### 4.3 在 GitHub 中设置自定义域名

1. 进入仓库的 **Settings** > **Pages**
2. 在 **Custom domain** 输入框中填写你的域名
3. 勾选 **Enforce HTTPS**

## 🔄 自动部署流程

推送到 main 分支后，GitHub Actions 会自动：

1. **检出代码**：拉取最新代码
2. **安装依赖**：运行 `npm ci`
3. **构建项目**：运行 `npm run build`
   - 生成静态文件到 `out` 目录
   - 应用 `BASE_PATH` 配置（如果设置）
4. **上传构建产物**：上传 `out` 目录
5. **部署到 GitHub Pages**：部署到 GitHub Pages 服务

## 📁 目录结构说明

```
项目根目录/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 工作流
├── out/                    # 构建输出目录（部署此目录）
│   ├── index.html
│   ├── _next/
│   └── ...
├── public/                 # 静态资源
│   └── CNAME              # 自定义域名配置（可选）
└── next.config.ts         # Next.js 配置
```

## ⚙️ 配置说明

### next.config.ts

```typescript
{
  output: 'export',              // 静态导出模式
  basePath: process.env.BASE_PATH || '',  // 基础路径
  images: { unoptimized: true }, // 禁用图片优化
  trailingSlash: true,           // URL 尾部斜杠
}
```

### .github/workflows/deploy.yml

```yaml
on:
  push:
    branches:
      - main          # 推送到 main 分支时触发
  workflow_dispatch:  # 允许手动触发

jobs:
  build:
    # 构建步骤
    - Upload artifact
      with:
        path: ./out   # 上传 out 目录
  
  deploy:
    # 部署步骤
    - Deploy to GitHub Pages
```

## 🔍 查看部署状态

### 方法 1：GitHub Actions 页面

1. 进入仓库的 **Actions** 标签
2. 查看最新的工作流运行状态
3. 点击进入查看详细日志

### 方法 2：GitHub Pages 设置页面

1. 进入 **Settings** > **Pages**
2. 查看 **Your site is live at...** 信息
3. 点击链接访问网站

## 🐛 常见问题

### 问题 1：404 错误

**原因**：basePath 配置不正确

**解决方案**：
- 子路径部署：确保 `BASE_PATH` 与仓库名匹配
- 根路径部署：确保 `BASE_PATH` 为空

### 问题 2：样式/资源加载失败

**原因**：资源路径不正确

**解决方案**：
```bash
# 检查 basePath 配置
# 清理构建缓存
rm -rf .next out
npm run build
```

### 问题 3：自定义域名无法访问

**原因**：DNS 配置未生效

**解决方案**：
- 检查 DNS 记录是否正确
- 等待 DNS 传播（可能需要几小时）
- 使用 `nslookup` 或在线工具检查 DNS

### 问题 4：构建失败

**原因**：依赖问题或代码错误

**解决方案**：
```bash
# 本地测试构建
npm run build

# 查看 GitHub Actions 日志
# 进入 Actions 标签查看详细错误信息
```

## 🔄 更新网站

每次推送到 main 分支都会自动触发部署：

```bash
# 修改代码
git add .
git commit -m "Update website"
git push origin main

# 等待 1-2 分钟，GitHub Actions 自动完成部署
```

### 手动触发部署

1. 进入 **Actions** 标签
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 **Run workflow** 按钮
4. 选择 main 分支
5. 点击 **Run workflow**

## 📊 部署时间

- **构建时间**：约 1-2 分钟
- **部署时间**：约 30 秒
- **DNS 传播**（自定义域名）：最多 48 小时

## 🔐 权限说明

GitHub Actions 需要以下权限：

```yaml
permissions:
  contents: read    # 读取仓库内容
  pages: write      # 写入 GitHub Pages
  id-token: write   # 身份验证令牌
```

这些权限已在 `deploy.yml` 中配置。

## 📚 相关文档

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [Next.js 静态导出文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [自定义域名配置](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## ✅ 部署检查清单

在推送之前，确认：

- [ ] 代码已提交到 main 分支
- [ ] `next.config.ts` 中的 `basePath` 配置正确
- [ ] `.github/workflows/deploy.yml` 中的 `BASE_PATH` 配置正确
- [ ] 本地构建测试通过（`npm run build`）
- [ ] GitHub Pages 设置为 GitHub Actions
- [ ] （可选）CNAME 文件已添加
- [ ] （可选）DNS 记录已配置

## 🎉 部署完成

配置完成后，你的网站将在以下地址可访问：

- **子路径部署**：`https://yourusername.github.io/i.mitkimi/`
- **自定义域名**：`https://yourdomain.com/`

享受你的新网站吧！🚀

---

**需要帮助？** 查看 [GitHub Issues](https://github.com/yourusername/i.mitkimi/issues) 或参考上述文档。

