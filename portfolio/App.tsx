import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simple loading simulation for smooth entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="relative flex flex-col items-center">
          <div className="h-24 w-24 animate-spin rounded-full border-t-4 border-b-4 border-primary"></div>
          <h2 className="mt-4 text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse">
            Initializing System...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-blob mix-blend-multiply"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
      </div>
      
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;