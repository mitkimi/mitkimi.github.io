'use client';

import { Card, CardHeader, CardBody, Space, Tag, Divider, Avatar, Link, Button } from '@apron-design/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* 装饰性背景元素 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 -left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* 导航栏 */}
      <header className="glass-effect dark:glass-effect-dark backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <h1 className="text-xl font-bold gradient-text-blue animate-fadeIn">✨ 我的网站</h1>
          <nav className="flex gap-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">关于</Link>
            <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">项目</Link>
            <Link href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">技能</Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">联系</Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero 区域 */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-scaleIn">
              <Avatar 
                size="large"
                className="mb-8 mx-auto shadow-2xl ring-4 ring-blue-200 dark:ring-blue-900"
                style={{ backgroundColor: '#3b82f6', fontSize: '48px', width: '140px', height: '140px' }}
              >
                👨‍💻
              </Avatar>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <span className="text-gray-900 dark:text-white">你好，我是 </span>
              <span className="gradient-text-blue inline-block">开发者</span>
          </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              一名充满热情的<span className="font-semibold text-blue-600 dark:text-blue-400">全栈开发者</span>，专注于创建优雅的用户体验和高性能的 Web 应用程序 🚀
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center mb-10 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <Tag color="blue" className="text-base px-4 py-2">💙 React</Tag>
              <Tag color="green" className="text-base px-4 py-2">💚 Node.js</Tag>
              <Tag color="purple" className="text-base px-4 py-2">💜 TypeScript</Tag>
              <Tag color="orange" className="text-base px-4 py-2">🧡 Next.js</Tag>
            </div>
            
            <div className="flex gap-4 justify-center animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                联系我 📧
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full border-2 border-gray-300 dark:border-gray-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                查看项目 👀
              </a>
            </div>
          </div>
        </section>

        {/* 分隔线装饰 */}
        <div className="flex items-center justify-center py-8">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
        </div>

        {/* 关于我 */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                <span className="gradient-text">关于我</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">了解更多关于我的信息</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 border-t-4 border-blue-500 card-hover animate-slideInLeft bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
                <CardBody>
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">技术热情</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    我是一名热爱技术的开发者，拥有多年的 Web 开发经验。
                    专注于使用现代化的技术栈构建高质量的应用程序。
                  </p>
                </CardBody>
              </Card>
              
              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 border-t-4 border-purple-500 card-hover animate-slideInRight bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900" style={{ animationDelay: '0.2s' }}>
                <CardBody>
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">代码艺术</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    我相信代码不仅仅是功能的实现，更是艺术的表达。
                    我致力于编写简洁、可维护、高性能的代码。
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* 项目展示 */}
        <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative">
          {/* 背景装饰 */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                <span className="gradient-text">精选项目</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">这是我最近参与的一些精彩项目</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-2xl card-hover cursor-pointer border-0 overflow-hidden group animate-fadeIn bg-white dark:bg-gray-800">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🚀</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">项目一</h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    这是一个使用 Next.js 和 TypeScript 构建的现代化 Web 应用。
                    具有出色的性能和用户体验。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Tag color="blue" className="text-sm">Next.js</Tag>
                    <Tag color="purple" className="text-sm">TypeScript</Tag>
                  </div>
                  <div className="mt-6 text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                    查看详情 →
                  </div>
                </CardBody>
              </Card>

              <Card className="shadow-2xl card-hover cursor-pointer border-0 overflow-hidden group animate-fadeIn bg-white dark:bg-gray-800" style={{ animationDelay: '0.1s' }}>
                <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">⚡</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">项目二</h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    一个全栈应用，使用 React 和 Node.js 构建。
                    提供完整的用户管理和数据处理功能。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Tag color="cyan" className="text-sm">React</Tag>
                    <Tag color="green" className="text-sm">Node.js</Tag>
                  </div>
                  <div className="mt-6 text-green-600 dark:text-green-400 font-semibold group-hover:translate-x-2 transition-transform">
                    查看详情 →
                  </div>
                </CardBody>
              </Card>

              <Card className="shadow-2xl card-hover cursor-pointer border-0 overflow-hidden group animate-fadeIn bg-white dark:bg-gray-800" style={{ animationDelay: '0.2s' }}>
                <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🎯</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">项目三</h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    基于微服务架构的企业级应用。
                    采用最佳实践和设计模式。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Tag color="orange" className="text-sm">Microservices</Tag>
                    <Tag color="red" className="text-sm">Docker</Tag>
                  </div>
                  <div className="mt-6 text-orange-600 dark:text-orange-400 font-semibold group-hover:translate-x-2 transition-transform">
                    查看详情 →
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* 技能 */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                <span className="gradient-text">技能专长</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">我掌握的技术栈和工具</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 card-hover border-l-4 border-blue-500 animate-slideInLeft bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">⚛️</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">前端开发</h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="flex flex-wrap gap-2">
                    <Tag color="blue" className="text-sm px-3 py-1 transition-transform hover:scale-110">React</Tag>
                    <Tag color="cyan" className="text-sm px-3 py-1 transition-transform hover:scale-110">Vue.js</Tag>
                    <Tag color="purple" className="text-sm px-3 py-1 transition-transform hover:scale-110">TypeScript</Tag>
                    <Tag color="orange" className="text-sm px-3 py-1 transition-transform hover:scale-110">Next.js</Tag>
                    <Tag color="pink" className="text-sm px-3 py-1 transition-transform hover:scale-110">Tailwind CSS</Tag>
                    <Tag color="magenta" className="text-sm px-3 py-1 transition-transform hover:scale-110">Sass</Tag>
                  </div>
                </CardBody>
              </Card>

              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 card-hover border-l-4 border-green-500 animate-slideInRight bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🔧</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">后端开发</h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="flex flex-wrap gap-2">
                    <Tag color="green" className="text-sm px-3 py-1 transition-transform hover:scale-110">Node.js</Tag>
                    <Tag color="lime" className="text-sm px-3 py-1 transition-transform hover:scale-110">Express</Tag>
                    <Tag color="red" className="text-sm px-3 py-1 transition-transform hover:scale-110">NestJS</Tag>
                    <Tag color="blue" className="text-sm px-3 py-1 transition-transform hover:scale-110">PostgreSQL</Tag>
                    <Tag color="orange" className="text-sm px-3 py-1 transition-transform hover:scale-110">MongoDB</Tag>
                    <Tag color="purple" className="text-sm px-3 py-1 transition-transform hover:scale-110">GraphQL</Tag>
                  </div>
                </CardBody>
              </Card>

              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 card-hover border-l-4 border-purple-500 animate-slideInLeft bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🚀</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">工具与部署</h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="flex flex-wrap gap-2">
                    <Tag color="volcano" className="text-sm px-3 py-1 transition-transform hover:scale-110">Git</Tag>
                    <Tag color="blue" className="text-sm px-3 py-1 transition-transform hover:scale-110">Docker</Tag>
                    <Tag color="cyan" className="text-sm px-3 py-1 transition-transform hover:scale-110">GitHub Actions</Tag>
                    <Tag color="purple" className="text-sm px-3 py-1 transition-transform hover:scale-110">Vercel</Tag>
                    <Tag color="geekblue" className="text-sm px-3 py-1 transition-transform hover:scale-110">AWS</Tag>
                  </div>
                </CardBody>
              </Card>

              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 card-hover border-l-4 border-pink-500 animate-slideInRight bg-gradient-to-br from-pink-50 to-white dark:from-gray-800 dark:to-gray-900" style={{ animationDelay: '0.3s' }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">✨</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">其他技能</h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="flex flex-wrap gap-2">
                    <Tag color="magenta" className="text-sm px-3 py-1 transition-transform hover:scale-110">UI/UX 设计</Tag>
                    <Tag color="red" className="text-sm px-3 py-1 transition-transform hover:scale-110">敏捷开发</Tag>
                    <Tag color="orange" className="text-sm px-3 py-1 transition-transform hover:scale-110">代码审查</Tag>
                    <Tag color="green" className="text-sm px-3 py-1 transition-transform hover:scale-110">性能优化</Tag>
                    <Tag color="cyan" className="text-sm px-3 py-1 transition-transform hover:scale-110">测试驱动开发</Tag>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                <span className="gradient-text">联系我</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                让我们一起创造些什么吧！💫
              </p>
            </div>
            
            <Card className="shadow-2xl border-0 overflow-hidden animate-scaleIn bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardBody>
                <p className="text-xl mb-10 text-gray-700 dark:text-gray-300 leading-relaxed">
                  如果您有任何问题或想要合作，欢迎随时联系我！<br/>
                  我很乐意与您交流 🤝
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <a 
                    href="mailto:your-email@example.com" 
                    className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">📧</div>
                    <div className="font-bold text-lg mb-2">邮箱</div>
                    <div className="text-sm opacity-90">your-email@example.com</div>
                  </a>
                  
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-6 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">💻</div>
                    <div className="font-bold text-lg mb-2">GitHub</div>
                    <div className="text-sm opacity-90">@yourusername</div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">🔗</div>
                    <div className="font-bold text-lg mb-2">LinkedIn</div>
                    <div className="text-sm opacity-90">个人资料</div>
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-12 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-2xl font-bold gradient-text-blue mb-2">✨ 我的网站</h3>
            <p className="text-gray-400 text-center max-w-md">
              用心创造，用代码改变世界
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-xl">💻</span>
              </div>
            </a>
            <a 
              href="https://twitter.com" 
            target="_blank"
            rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-xl">🐦</span>
              </div>
          </a>
          <a
              href="https://linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-xl">🔗</span>
              </div>
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 我的个人网站. 保留所有权利. Made with ❤️ and Next.js
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
