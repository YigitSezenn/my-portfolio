import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-gray-200 dark:border-[#2d2d2d] px-6 py-8 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-600 dark:text-[#a3a3a3] text-sm">
            © {new Date().getFullYear()} Süleyman Yiğit. {t.footer.rights}
          </div>
          <div className="text-gray-600 dark:text-[#a3a3a3] text-sm">
            {t.footer.builtWith}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
