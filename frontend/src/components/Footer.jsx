import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-[#2d2d2d] px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#a3a3a3] text-sm">
            © {new Date().getFullYear()} Süleyman Yiğit. All rights reserved.
          </div>
          <div className="text-[#a3a3a3] text-sm">
            Built with React & FastAPI
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
