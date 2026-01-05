import type { NextConfig } from "next";

/**
 * Next.js 配置
 * 
 * basePath 配置说明：
 * - 如果部署在 https://yourusername.github.io/i.mitkimi/ 需要设置 basePath: '/i.mitkimi'
 * - 如果使用自定义域名（如 https://yourdomain.com）或根路径部署，设置 basePath: ''
 * - 可以通过环境变量 BASE_PATH 来控制
 */
const nextConfig: NextConfig = {
  output: 'export',
  // 使用环境变量或默认为空字符串（适合自定义域名）
  // 如果部署在子路径下，设置环境变量 BASE_PATH='/your-repo-name'
  basePath: process.env.BASE_PATH || '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // 为 GitHub Pages 添加尾部斜杠
};

export default nextConfig;
