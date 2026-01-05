import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "全栈开发者",
  description: "专注于创建优雅的用户体验和高性能的 Web 应用程序",
};

export default function RootLayout({
  children,
}: Readonly<{  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
