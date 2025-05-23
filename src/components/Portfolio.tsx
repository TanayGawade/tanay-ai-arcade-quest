
import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";

const Portfolio: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projects = [
    {
      title: "LLM-Based Tumor Segmentation",
      description: "Applied large language models to the task of medical image segmentation for tumor identification and classification.",
      level: "EPIC QUEST",
      technologies: ["PyTorch", "MONAI", "Transformers", "Medical Imaging"],
      achievements: [
        "Improved segmentation accuracy by 15%",
        "Reduced false positives by 30%",
        "Implemented in research hospital setting"
      ],
      image: "/lovable-uploads/6777cf71-5350-4f6c-81c5-b851387025b9.png",
      link: "https://github.com/TanayGawade/LLm-based-tumor-segmentation"
    },
    {
      title: "Bird Sound Denoising using Residual Blocks in U-Net",
      description: "Developed an advanced model for filtering out noise from bird sound recordings using a U-Net architecture with residual blocks.",
      level: "BOSS LEVEL",
      technologies: ["Python", "TensorFlow", "Keras", "Signal Processing"],
      achievements: [
        "99.5% noise reduction while preserving bird calls",
        "Model deployed in conservation efforts",
        "Published in academic journals"
      ],
      image: "/lovable-uploads/e88d4417-d974-40d3-aa3f-c4575c942737.png",
      link: "https://github.com/TanayGawade/Bird_sound_denoising"
    },
    {
      title: "Face Recognition using Keras",
      description: "Created a robust face recognition system using deep learning techniques and Keras framework.",
      level: "MISSION COMPLETED",
      technologies: ["Python", "OpenCV", "Keras", "CNN"],
      achievements: [
        "98% accuracy on benchmark datasets",
        "Real-time recognition capabilities",
        "Optimized for edge devices"
      ],
      image: "/lovable-uploads/d1733c03-8686-4fe0-86bf-37bc5399666c.png",
      link: "https://github.com/TanayGawade/facial-recognition"
    }
  ];

  const nextLevel = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentLevel((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevLevel = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentLevel((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto scroll the projects every 5 seconds
  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      nextLevel();
    }, 5000);
    
    // Clear the interval when component unmounts
    return () => clearInterval(autoScrollInterval);
  }, []);

  return (
    <section id="portfolio" className="py-16 sm:py-20 px-4 bg-gameboy-softGray dark:bg-gameboy-dark">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-pixel text-gameboy-dark dark:text-gameboy-accent mb-4 sm:mb-6 text-center">
          PROJECT LEVELS
        </h2>
        
        <p className="text-center mb-8 sm:mb-12 text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-light max-w-2xl mx-auto">
          Explore different projects I've developed using AI and machine learning technologies.
          Each project represents a challenge conquered in my AI journey.
        </p>

        <div className="flex justify-center mb-8 sm:mb-12 overflow-hidden">
          <div className={`transition-transform duration-500 ${isAnimating ? 'scale-90 opacity-80' : 'scale-100 opacity-100'}`}>
            <GameCard 
              title={projects[currentLevel].title}
              description={projects[currentLevel].description}
              level={projects[currentLevel].level}
              technologies={projects[currentLevel].technologies}
              achievements={projects[currentLevel].achievements}
              image={projects[currentLevel].image}
              link={projects[currentLevel].link}
            />
          </div>
        </div>

        <div className="flex justify-center gap-3 sm:gap-6">
          <button 
            onClick={prevLevel} 
            className="pixel-button text-xs sm:text-sm"
            disabled={isAnimating}
          >
            PREV LEVEL
          </button>
          <button 
            onClick={nextLevel} 
            className="pixel-button text-xs sm:text-sm"
            disabled={isAnimating}
          >
            NEXT LEVEL
          </button>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="font-pixel text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-accent">
            LEVEL {currentLevel + 1}/{projects.length}
          </p>
          <div className="w-32 sm:w-48 mx-auto mt-2 progress-bar">
            <div 
              className="progress-fill transition-all duration-300" 
              style={{ width: `${((currentLevel + 1) / projects.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
