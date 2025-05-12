
import React from "react";
import { useIsMobile } from "../hooks/use-mobile";

interface PixelAvatarProps {
  className?: string;
}

const PixelAvatar: React.FC<PixelAvatarProps> = ({
  className = ""
}) => {
  const isMobile = useIsMobile();
  
  return <div className={`relative ${className}`}>
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gameboy-green dark:bg-gameboy-accent rounded-lg pixel-border overflow-hidden pixel-art">
        <img 
          src="/lovable-uploads/0179d6e4-af21-46b1-8f45-2b8c227cc63c.png" 
          alt="Tanay Gawade" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`absolute ${isMobile ? '-bottom-4 right-0' : '-bottom-2 -right-2'} bg-gameboy-light dark:bg-gameboy-dark pixel-border p-1 animate-float rounded-full py-[2px] px-[4px]`}>
        <span className="font-pixel text-[8px] sm:text-xs text-gameboy-dark dark:text-gameboy-accent">AI ENTHUSIAST</span>
      </div>
    </div>;
};

export default PixelAvatar;
