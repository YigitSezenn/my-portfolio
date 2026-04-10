import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-[60vh] px-6 py-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-[#a3a3a3] max-w-2xl">
            Feel free to reach out for collaborations, opportunities, or just to say hello.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          <a
            href="https://github.com/YigitSezenn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-[#1f1f1f] border border-[#2d2d2d] rounded-lg hover:border-white transition-all duration-200 group"
          >
            <Github className="text-[#a3a3a3] group-hover:text-white transition-colors" size={24} />
            <div>
              <div className="text-white font-medium">GitHub</div>
              <div className="text-[#a3a3a3] text-sm">@YigitSezenn</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/suleymanyigit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-[#1f1f1f] border border-[#2d2d2d] rounded-lg hover:border-white transition-all duration-200 group"
          >
            <Linkedin className="text-[#a3a3a3] group-hover:text-white transition-colors" size={24} />
            <div>
              <div className="text-white font-medium">LinkedIn</div>
              <div className="text-[#a3a3a3] text-sm">/suleymanyigit</div>
            </div>
          </a>

          <a
            href="mailto:ysezenn@outlook.com"
            className="flex items-center gap-3 px-6 py-4 bg-[#1f1f1f] border border-[#2d2d2d] rounded-lg hover:border-white transition-all duration-200 group"
          >
            <Mail className="text-[#a3a3a3] group-hover:text-white transition-colors" size={24} />
            <div>
              <div className="text-white font-medium">Email</div>
              <div className="text-[#a3a3a3] text-sm">ysezenn@outlook.com</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
