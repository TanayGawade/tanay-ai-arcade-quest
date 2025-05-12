
import React, { useState, useEffect } from "react";
import PixelAvatar from "./PixelAvatar";

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPressStart, setShowPressStart] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setShowPressStart(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setGameStarted(true);
    setShowPressStart(false);
  };

  return (
    <div id="home" className="min-h-screen pt-16 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      {!isLoaded ? (
        // Loading Screen
        <div className="w-full max-w-md text-center">
          <h2 className="font-pixel text-gameboy-dark dark:text-gameboy-accent mb-4 text-base sm:text-lg">LOADING ASSETS...</h2>
          <div className="progress-bar mx-auto">
            <div className="progress-fill animate-progress-fill"></div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <div className={`transition-all duration-500 ${gameStarted ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-pixel text-gameboy-dark dark:text-gameboy-accent mb-2">
              TANAY GAWADE
            </h1>
            <p className="text-xs sm:text-sm md:text-lg font-pixel text-gameboy-green dark:text-gameboy-light mb-6 sm:mb-8">
              AI & MACHINE LEARNING SPECIALIST
            </p>
          </div>

          <div className="mb-6 sm:mb-8 flex justify-center">
            <PixelAvatar className={`transition-all duration-500 ${gameStarted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} />
          </div>

          {showPressStart && (
            <div className="animate-blink">
              <button 
                onClick={handleStart}
                className="font-pixel text-base sm:text-lg text-gameboy-dark dark:text-gameboy-accent hover:text-gameboy-green dark:hover:text-gameboy-light transition-colors"
              >
                PRESS START
              </button>
            </div>
          )}

          {gameStarted && (
            <div className="mt-8 sm:mt-10 animate-pixel-pop">
              <p className="mb-6 text-sm sm:text-base text-gameboy-dark dark:text-gameboy-light max-w-2xl mx-auto">
                Welcome to my AI adventure! I'm an Artificial Intelligence specialist with expertise in machine learning, 
                deep learning, natural language processing, computer vision, and data analytics.
              </p>
              <a 
                href="https://drive.google.com/file/d/1h9UnXbNj9PRB8lG2Mz5rl3a7ncqXhFc6/view" 
                className="pixel-button inline-block text-xs sm:text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW RESUME
              </a>
            </div>
          )}
        </div>
      )}

      {/* CRT effect overlay */}
      <div className="crt-effect absolute inset-0 pointer-events-none"></div>
      
      {/* Decorative pixel "scanlines" */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gameboy-green dark:bg-gameboy-accent opacity-20"></div>
    </div>
  );
};

export default Hero;
