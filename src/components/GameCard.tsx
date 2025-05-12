
import React, { useState } from "react";

interface GameCardProps {
  title: string;
  description: string;
  level: string;
  technologies: string[];
  achievements: string[];
  image?: string;
  link?: string;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  level,
  technologies,
  achievements,
  image,
  link
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDetailsClick = (e: React.MouseEvent) => {
    if (link) {
      e.stopPropagation();
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div 
      className="perspective-effect cursor-pointer w-full max-w-xs sm:max-w-md mx-auto" 
      onClick={handleClick}
    >
      <div className={`relative transition-all duration-500 ${isFlipped ? "rotate-y-180" : ""}`} style={{ 
        transformStyle: "preserve-3d" 
      }}>
        {/* Front of card */}
        <div 
          className={`game-card p-4 sm:p-6 transition-opacity duration-500 ${isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div className="mb-3 flex justify-between items-center">
            <span className="bg-gameboy-green dark:bg-gameboy-accent text-gameboy-light dark:text-gameboy-dark font-pixel text-xs py-1 px-2 rounded">
              {level}
            </span>
          </div>
          
          <h3 className="font-pixel text-base sm:text-lg text-gameboy-dark dark:text-gameboy-accent mb-3">{title}</h3>
          
          {image ? (
            <div className="mb-4 border-2 border-gameboy-dark dark:border-gameboy-accent">
              <img 
                src={image} 
                alt={title} 
                className="pixel-art w-full h-24 sm:h-32 object-cover" 
              />
            </div>
          ) : (
            <div className="mb-4 h-24 sm:h-32 bg-gameboy-green dark:bg-gameboy-accent opacity-30 flex items-center justify-center">
              <span className="font-pixel text-xs sm:text-sm text-gameboy-light dark:text-gameboy-dark">
                [ PROJECT IMAGE ]
              </span>
            </div>
          )}
          
          <p className="text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-light mb-4">
            {description}
          </p>
          
          <div className="flex justify-center mt-4">
            <p className="font-pixel text-xs text-gameboy-green dark:text-gameboy-accent animate-blink">
              CLICK FOR DETAILS
            </p>
          </div>
        </div>
        
        {/* Back of card */}
        <div 
          className={`game-card p-4 sm:p-6 absolute inset-0 transition-opacity duration-500 rotate-y-180 ${isFlipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="font-pixel text-base sm:text-lg text-gameboy-dark dark:text-gameboy-accent mb-3 sm:mb-4">{title}</h3>
          
          <div className="mb-3 sm:mb-4">
            <h4 className="font-pixel text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-accent mb-2">TECHNOLOGIES:</h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-gameboy-green dark:bg-gameboy-accent text-gameboy-light dark:text-gameboy-dark text-xs py-1 px-1 sm:px-2 rounded mb-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-3 sm:mb-4">
            <h4 className="font-pixel text-xs sm:text-sm text-gameboy-dark dark:text-gameboy-accent mb-2">ACHIEVEMENTS:</h4>
            <ul className="text-xs text-gameboy-dark dark:text-gameboy-light space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="font-pixel">- {achievement}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center mt-4">
            {link ? (
              <button 
                onClick={handleDetailsClick}
                className="font-pixel text-xs bg-gameboy-green dark:bg-gameboy-accent text-gameboy-light dark:text-gameboy-dark py-1 px-3 rounded hover:opacity-80 transition-opacity"
              >
                VIEW PROJECT
              </button>
            ) : (
              <p className="font-pixel text-xs text-gameboy-green dark:text-gameboy-accent animate-blink">
                CLICK TO RETURN
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
