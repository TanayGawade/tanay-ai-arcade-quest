
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gameboy-light dark:bg-gameboy-dark border-b-4 border-gameboy-green dark:border-gameboy-accent px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="text-gameboy-dark dark:text-gameboy-accent font-pixel text-lg sm:text-xl">
          TANAY_GAWADE
        </a>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gameboy-dark dark:text-gameboy-accent">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex space-x-6">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="font-pixel text-sm text-gameboy-dark dark:text-gameboy-accent hover:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gameboy-light dark:bg-gameboy-dark border-t-2 border-gameboy-green dark:border-gameboy-accent mt-3">
          <ul className="flex flex-col space-y-2 py-3">
            {navigationItems.map((item) => (
              <li key={item.name} className="px-4">
                <a 
                  href={item.href}
                  className="block font-pixel text-sm text-gameboy-dark dark:text-gameboy-accent py-2 hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
