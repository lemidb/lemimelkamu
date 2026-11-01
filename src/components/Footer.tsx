import React from 'react';
import { Github, Linkedin, Youtube, Mail, ArrowUp } from 'lucide-react';

const socials = [
  { icon: <Github size={17} />,   href: 'https://github.com/lemidb',                label: 'GitHub' },
  { icon: <Linkedin size={17} />, href: 'https://linkedin.com/in/lemimelkamu',      label: 'LinkedIn' },
  { icon: <Youtube size={17} />,  href: 'https://youtube.com/shorts/ubzSf-9TGd0',  label: 'YouTube' },
  { icon: <Mail size={17} />,     href: 'mailto:lemimelkamu@gmail.com',             label: 'Email' },
];

const navLinks = [
  { name: 'Projects',   href: '#projects' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact',    href: '#contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center font-bold text-primary text-xs">
                LM
              </div>
              <span className="font-semibold text-foreground/90">Lemi Melkamu</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-stack developer & enterprise integration specialist.
              Building toward my own tech startup.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Quick links</p>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Contact</p>
            <p className="text-sm text-muted-foreground mb-1">lemimelkamu@gmail.com</p>
            <p className="text-sm text-muted-foreground mb-4">+251 977 66 84 08</p>
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} Lemi Melkamu. Crafted with care.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group"
          >
            Back to top <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
