import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-[#1f1f1f] border border-[#2d2d2d] rounded-full mb-6">
            <span className="text-[#a3a3a3] text-sm">QA Engineer & Jr Mobile Developer</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Süleyman Yiğit
        </h1>

        <p className="text-xl md:text-2xl text-[#a3a3a3] mb-8 max-w-2xl leading-relaxed">
          Building quality software through rigorous testing and elegant mobile solutions. 
          Passionate about automation, clean code, and exceptional user experiences.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-[#e5e5e5] border-white transition-colors duration-200"
            onClick={() => window.open('https://github.com/YigitSezenn', '_blank')}
          >
            <Github className="mr-2" size={20} />
            View GitHub
          </Button>
          <Button
            variant="outline"
            className="bg-transparent text-white border-[#2d2d2d] hover:border-white hover:bg-[#1f1f1f] transition-all duration-200"
            onClick={() => window.open('https://www.linkedin.com/in/suleymanyigit', '_blank')}
          >
            <Linkedin className="mr-2" size={20} />
            LinkedIn
          </Button>
        </div>

        <div className="flex flex-wrap gap-8 text-[#a3a3a3]">
          <div>
            <div className="text-3xl font-bold text-white mb-1">12+</div>
            <div className="text-sm">Public Repositories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">25+</div>
            <div className="text-sm">GitHub Followers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">5+</div>
            <div className="text-sm">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
