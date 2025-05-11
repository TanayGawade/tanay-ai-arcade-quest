
import React from "react";
import TerminalContact from "./TerminalContact";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-pixel text-gameboy-dark dark:text-gameboy-accent mb-12 text-center">
          CONTACT TERMINAL
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <TerminalContact />
          </div>
          
          <div className="flex-1 game-card">
            <h3 className="font-pixel text-lg text-gameboy-dark dark:text-gameboy-accent mb-6">
              CONNECT WITH ME
            </h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:tanaygawade@example.com" 
                className="flex items-center gap-3 text-gameboy-dark dark:text-gameboy-light hover:text-gameboy-green dark:hover:text-gameboy-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>tanaygawade@example.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/tanaygawade" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 text-gameboy-dark dark:text-gameboy-light hover:text-gameboy-green dark:hover:text-gameboy-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/tanaygawade</span>
              </a>
              
              <a 
                href="https://github.com/tanaygawade" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 text-gameboy-dark dark:text-gameboy-light hover:text-gameboy-green dark:hover:text-gameboy-accent transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>github.com/tanaygawade</span>
              </a>
            </div>
            
            <div className="mt-8">
              <h4 className="font-pixel text-sm text-gameboy-dark dark:text-gameboy-accent mb-4">
                SEND A MESSAGE
              </h4>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-3 py-2 bg-gameboy-light dark:bg-gameboy-dark border-2 border-gameboy-dark dark:border-gameboy-accent text-gameboy-dark dark:text-gameboy-light"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-3 py-2 bg-gameboy-light dark:bg-gameboy-dark border-2 border-gameboy-dark dark:border-gameboy-accent text-gameboy-dark dark:text-gameboy-light"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-3 py-2 bg-gameboy-light dark:bg-gameboy-dark border-2 border-gameboy-dark dark:border-gameboy-accent text-gameboy-dark dark:text-gameboy-light"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="pixel-button">
                    PRESS ENTER TO SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
