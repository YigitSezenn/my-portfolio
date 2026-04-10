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
      <div className="App bg-theme-primary min-h-screen transition-colors duration-300">
        {/* Anime Character Background - Subtle coding theme */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0">
          <svg
            className="absolute bottom-0 right-0 w-[800px] h-[800px]"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Anime-style coder silhouette */}
            <g transform="translate(150, 100)">
              {/* Head */}
              <ellipse cx="250" cy="200" rx="80" ry="90" fill="currentColor" opacity="0.8" />
              {/* Body */}
              <rect x="210" y="280" width="80" height="150" rx="10" fill="currentColor" opacity="0.8" />
              {/* Arms - typing pose */}
              <path d="M210 300 L150 350 L140 380" stroke="currentColor" strokeWidth="20" fill="none" opacity="0.8" />
              <path d="M290 300 L350 350 L360 380" stroke="currentColor" strokeWidth="20" fill="none" opacity="0.8" />
              {/* Laptop */}
              <rect x="100" y="380" width="300" height="150" rx="5" fill="currentColor" opacity="0.6" />
              <rect x="120" y="400" width="260" height="100" fill="currentColor" opacity="0.9" />
              {/* Code lines on laptop */}
              <line x1="140" y1="420" x2="220" y2="420" stroke="white" strokeWidth="3" opacity="0.5" />
              <line x1="140" y1="440" x2="280" y2="440" stroke="white" strokeWidth="3" opacity="0.5" />
              <line x1="140" y1="460" x2="250" y2="460" stroke="white" strokeWidth="3" opacity="0.5" />
              <line x1="140" y1="480" x2="320" y2="480" stroke="white" strokeWidth="3" opacity="0.5" />
              {/* Floating code symbols */}
              <text x="400" y="200" fill="currentColor" opacity="0.4" fontSize="48" fontFamily="monospace">{'{}'}</text>
              <text x="50" y="250" fill="currentColor" opacity="0.4" fontSize="36" fontFamily="monospace">{'</>'}</text>
              <text x="420" y="350" fill="currentColor" opacity="0.4" fontSize="42" fontFamily="monospace">{'()'}</text>
            </g>
          </svg>
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
