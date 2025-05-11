
import React, { useState } from "react";
import GameCard from "./GameCard";

const Portfolio: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);

  const projects = [
    {
      title: "Bird Sound Denoising using Residual Blocks in U-Net",
      description: "Developed an advanced model for filtering out noise from bird sound recordings using a U-Net architecture with residual blocks.",
      level: "BOSS LEVEL",
      technologies: ["Python", "TensorFlow", "Keras", "Signal Processing"],
      achievements: [
        "99.5% noise reduction while preserving bird calls",
        "Model deployed in conservation efforts",
        "Published in academic journals"
      ]
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
      ]
    },
    {
      title: "LLM-Based Tumor Segmentation",
      description: "Applied large language models to the task of medical image segmentation for tumor identification and classification.",
      level: "EPIC QUEST",
      technologies: ["PyTorch", "MONAI", "Transformers", "Medical Imaging"],
      achievements: [
        "Improved segmentation accuracy by 15%",
        "Reduced false positives by 30%",
        "Implemented in research hospital setting"
      ]
    }
  ];

  const nextLevel = () => {
    setCurrentLevel((prev) => (prev + 1) % projects.length);
  };

  const prevLevel = () => {
    setCurrentLevel((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-gameboy-softGray dark:bg-gameboy-dark">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-pixel text-gameboy-dark dark:text-gameboy-accent mb-6 text-center">
          PROJECT LEVELS
        </h2>
        
        <p className="text-center mb-12 text-gameboy-dark dark:text-gameboy-light max-w-2xl mx-auto">
          Explore different projects I've developed using AI and machine learning technologies.
          Each project represents a challenge conquered in my AI journey.
        </p>

        <div className="flex justify-center mb-12">
          <GameCard 
            title={projects[currentLevel].title}
            description={projects[currentLevel].description}
            level={projects[currentLevel].level}
            technologies={projects[currentLevel].technologies}
            achievements={projects[currentLevel].achievements}
          />
        </div>

        <div className="flex justify-center gap-6">
          <button 
            onClick={prevLevel} 
            className="pixel-button"
          >
            PREV LEVEL
          </button>
          <button 
            onClick={nextLevel} 
            className="pixel-button"
          >
            NEXT LEVEL
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="font-pixel text-sm text-gameboy-dark dark:text-gameboy-accent">
            LEVEL {currentLevel + 1}/{projects.length}
          </p>
          <div className="w-48 mx-auto mt-2 progress-bar">
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
