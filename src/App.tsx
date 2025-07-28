import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { ChevronDown, Github, ExternalLink, Heart, Star } from 'lucide-react';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: 'Plastic Memories 数据库',
      description: '包含动画角色、剧情、设定等详细资料的综合数据库',
      link: '#',
      github: '#',
      status: '开发中'
    },
    {
      title: 'Giftia 模拟器',
      description: '基于动画设定的交互式角色模拟器',
      link: '#',
      github: '#',
      status: '规划中'
    },
    {
      title: '回忆收集器',
      description: '粉丝创作内容的展示和分享平台',
      link: '#',
      github: '#',
      status: '开发中'
    },
    {
      title: 'Plastic Memories Wiki',
      description: '社区驱动的可塑性记忆百科全书',
      link: '#',
      github: '#',
      status: '维护中'
    }
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80')`
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Content */}
        <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="stroke-text">
              Plastic Memories
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-8">
            PROJECT
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            致力于可塑性记忆的爱好者项目
            <br />
            <span className="text-lg text-gray-500">
              "即使是人造的回忆，也有着无可替代的价值"
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white border-0"
              onClick={scrollToProjects}
            >
              探索项目
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-gray-300 hover:bg-white/50"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              我们的项目
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plastic Memories PROJECT 包含多个子项目，每个都致力于不同方面的内容创作和社区建设
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`card-hover transition-all duration-700 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === '开发中' ? 'bg-yellow-100 text-yellow-800' :
                      project.status === '规划中' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      访问
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      源码
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            关于我们
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Plastic Memories PROJECT 是由热爱《可塑性记忆》动画的粉丝们自发组织的项目。
            我们致力于创建与动画相关的各种工具、资源和社区平台，希望能够让更多人了解和喜爱这部作品。
          </p>
          <div className="flex justify-center items-center gap-2 text-pink-500">
            <Heart className="h-5 w-5 fill-current" />
            <span className="text-gray-600">用爱发电，非营利项目</span>
            <Heart className="h-5 w-5 fill-current" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Plastic Memories PROJECT</h3>
              <p className="text-gray-400 mb-4">
                致力于可塑性记忆的爱好者项目
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Github className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Star className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2">
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">项目列表</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">贡献指南</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">社区讨论</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">相关资源</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">官方动画</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">原作小说</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">音乐原声</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">周边商品</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p className="mb-2">
              © 2024 Plastic Memories PROJECT. 本项目为非营利性粉丝项目。
            </p>
            <p className="text-sm">
              ICP备案号：<a href="#" className="hover:text-white transition-colors">京ICP备xxxxxx号</a> | 
              版权声明：本站内容仅供学习交流使用
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
