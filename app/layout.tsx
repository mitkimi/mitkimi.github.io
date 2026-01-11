import type { Metadata } from "next";
import "@apron-design/react/styles";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Kimi Tin · P8 程序员再就业",
  description: "专注于创建优雅的用户体验和高性能的 Web 应用程序",
};

export default function RootLayout({
  children,
}: Readonly<{  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body apron-theme="dark">
        {children}
      </body>
    </html>
  );
}
