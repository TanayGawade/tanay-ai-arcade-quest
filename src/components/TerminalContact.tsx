
import React, { useState, useEffect } from "react";

const TerminalContact: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    "Welcome to Tanay's terminal!",
    "Type 'help' to see available commands.",
    ""
  ]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const processCommand = (cmd: string) => {
    const lowerCmd = cmd.toLowerCase().trim();
    
    switch(lowerCmd) {
      case "help":
        return [
          "Available commands:",
          "- email : Display contact email",
          "- linkedin : Get LinkedIn profile",
          "- github : Get GitHub profile",
          "- resume : Download resume",
          "- clear : Clear terminal",
          ""
        ];
      case "email":
        return ["Contact: tanaygawade@example.com", ""];
      case "linkedin":
        return ["LinkedIn: linkedin.com/in/tanaygawade", ""];
      case "github":
        return ["GitHub: github.com/tanaygawade", ""];
      case "resume":
        return ["Downloading resume...", "Resume downloaded successfully!", ""];
      case "clear":
        return [];
      default:
        return [`Command '${cmd}' not recognized. Type 'help' for available commands.`, ""];
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const newOutput = [...output, `> ${input}`, ...processCommand(input)];
    setOutput(newOutput);
    setInput("");
  };

  return (
    <div className="terminal w-full max-w-xs sm:max-w-md mx-auto h-64 sm:h-80 overflow-y-auto">
      <div className="mb-4">
        {output.map((line, index) => (
          <p key={index} className="font-pixel text-[10px] sm:text-xs leading-loose sm:leading-relaxed">{line}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <span className="font-pixel text-[10px] sm:text-xs mr-1 sm:mr-2 text-gameboy-accent">{">"}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-gameboy-accent font-pixel text-[10px] sm:text-xs"
          autoFocus
        />
        <span className={`h-3 sm:h-4 w-1 sm:w-2 bg-gameboy-accent ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}></span>
      </form>
    </div>
  );
};

export default TerminalContact;
