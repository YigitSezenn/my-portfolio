import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-200 dark:border-[#2d2d2d] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold text-black dark:text-white cursor-pointer"
          >
            YigitSezen
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-500 dark:text-gray-400"
            >
              .
            </motion.span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-6">
            {['projects', 'skills', 'contact'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item)}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 relative group capitalize"
              >
                {t.nav[item]}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-black dark:bg-white"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              title="Change Language"
            >
              <Globe size={16} className="text-gray-700 dark:text-gray-300" />
              <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{language.toUpperCase()}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              title="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div key="sun" initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 180, opacity: 0 }}>
                    <Sun size={18} className="text-gray-700 dark:text-gray-300" />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -180, opacity: 0 }}>
                    <Moon size={18} className="text-gray-700 dark:text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <motion.button whileTap={{ scale: 0.9 }} onClick={toggleLanguage} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
              <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{language.toUpperCase()}</span>
            </motion.button>
            
            <motion.button whileTap={{ scale: 0.9 }} onClick={toggleTheme} className="p-1.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
              {theme === 'dark' ? <Sun size={16} className="text-gray-700 dark:text-gray-300" /> : <Moon size={16} className="text-gray-700 dark:text-gray-300" />}
            </motion.button>
            
            <motion.button whileTap={{ scale: 0.9 }} className="text-black dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <AnimatePresence mode="wait">
                {isMenuOpen ? <motion.div key="close"><X size={24} /></motion.div> : <motion.div key="menu"><Menu size={24} /></motion.div>}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden">
              <div className="mt-4 pb-4 flex flex-col gap-4">
                {['projects', 'skills', 'contact'].map((item, index) => (
                  <motion.button key={item} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.1 }} onClick={() => scrollToSection(item)} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-left capitalize">
                    {t.nav[item]}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;