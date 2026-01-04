import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "个人作品集 - Portfolio",
  description: "我的个人作品集网站，展示我的项目和技能",
};

export default function RootLayout({
  children,
}: Readonly<{  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
