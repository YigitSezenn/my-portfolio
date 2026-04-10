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
          {/* Hatsune Miku Background */}
          <div className="fixed inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/hatsune-miku-bg.jpg)',
                filter: 'brightness(0.3) saturate(1.2)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/80 via-purple-900/70 to-pink-900/80 dark:from-cyan-950/90 dark:via-purple-950/80 dark:to-pink-950/90" />
            <div className="absolute inset-0 backdrop-blur-sm" />
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
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
