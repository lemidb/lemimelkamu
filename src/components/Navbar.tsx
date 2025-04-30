
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-primary">
          DevPortfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={cn("w-6 h-5 relative", isMobileMenuOpen ? "transform" : "")}>
            <span className={cn(
              "absolute h-0.5 w-full bg-current transform transition-all duration-300",
              isMobileMenuOpen ? "rotate-45 top-2" : "top-0"
            )}></span>
            <span className={cn(
              "absolute h-0.5 w-full bg-current top-2 transition-all duration-300",
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            )}></span>
            <span className={cn(
              "absolute h-0.5 w-full bg-current transform transition-all duration-300",
              isMobileMenuOpen ? "-rotate-45 top-2" : "top-4"
            )}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-background/95 backdrop-blur-sm transition-all duration-300 overflow-hidden shadow-md",
        isMobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-3 space-y-3">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="block text-foreground/80 hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button asChild className="w-full">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get In Touch</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
