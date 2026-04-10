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
