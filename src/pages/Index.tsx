
import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = "Tanay Gawade | AI & Machine Learning Specialist";
    
    // Prevent any automatic scrolling when the page first loads
    if (window.location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gameboy-light dark:bg-gameboy-dark text-gameboy-dark dark:text-gameboy-light">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      
      <footer className="py-8 px-4 border-t-4 border-gameboy-green dark:border-gameboy-accent">
        <div className="container mx-auto text-center">
          <p className="font-pixel text-sm text-gameboy-dark dark:text-gameboy-accent">
            © 2025 TANAY GAWADE
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
