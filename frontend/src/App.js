import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App min-h-screen transition-colors duration-300 relative overflow-hidden">
          {/* Hatsune Miku Background - Visible */}
          <div className="fixed inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/hatsune-miku-bg.jpg)',
                filter: 'brightness(0.6)',
                transform: 'scale(1.1)'
              }}
            />
            {/* Light cyan/pink gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-600/30 to-pink-500/20" />
          </div>

          {/* Content with glassmorphism */}
          <div className="relative z-10">
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
