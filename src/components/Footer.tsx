
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground/70 hover:text-primary flex items-center gap-2 text-sm transition-colors"
                >
                  <Github size={16} />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground/70 hover:text-primary flex items-center gap-2 text-sm transition-colors"
                >
                  <Linkedin size={16} />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground/70 hover:text-primary flex items-center gap-2 text-sm transition-colors"
                >
                  <Twitter size={16} />
                  <span className="hidden sm:inline">Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
