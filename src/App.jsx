import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useDarkMode } from './hooks/useDarkMode';

const App = () => {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900">
      <Navbar isDark={isDark} toggleDark={() => setIsDark(prev => !prev)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

      <button
        onClick={() => setIsDark(prev => !prev)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default App;