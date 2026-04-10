import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen transition-colors duration-300 bg-white dark:bg-[#0a0a0a] text-black dark:text-white">
        {/* About Me Banner */}
        <div className="fixed bottom-8 left-8 z-10 max-w-xs hidden lg:block">
          <div className="bg-white/90 dark:bg-[#1f1f1f]/90 backdrop-blur-sm border border-gray-200 dark:border-[#2d2d2d] p-4 rounded-lg shadow-lg">
            <h3 className="text-sm font-bold text-black dark:text-white mb-2">💡 About Me</h3>
            <p className="text-xs text-gray-600 dark:text-[#a3a3a3] leading-relaxed">
              QA Engineer ve Jr Mobile Developer olarak yazılım kalitesine tutkuyla bağlıyım. 
              Test otomasyonu, mobil uygulama geliştirme ve temiz kod yazma konularında deneyimliyim.
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <Header />
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
