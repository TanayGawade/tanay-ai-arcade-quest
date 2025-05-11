import React from "react";
interface PixelAvatarProps {
  className?: string;
}
const PixelAvatar: React.FC<PixelAvatarProps> = ({
  className = ""
}) => {
  return <div className={`relative ${className}`}>
      <div className="w-32 h-32 md:w-48 md:h-48 bg-gameboy-green dark:bg-gameboy-accent rounded-lg pixel-border overflow-hidden pixel-art">
        {/* This is a placeholder for the pixel avatar. In a real app, we'd use an actual pixel art image */}
        <div className="w-full h-full flex items-center justify-center bg-transparent">
          <span className="font-pixel text-lg md:text-xl text-gameboy-light dark:text-gameboy-dark">TANAY</span>
        </div>
      </div>
      <div className="absolute -bottom- 4 -right- 2 bg-gameboy-light dark:bg-gameboy-dark pixel-border p-1 animate-float px-[4px] mx-px my-0 py-px rounded-lg">
        <span className="font-pixel text-xs text-gameboy-dark dark:text-gameboy-accent">AI ENTHUSIAST</span>
      </div>
    </div>;
};
export default PixelAvatar;