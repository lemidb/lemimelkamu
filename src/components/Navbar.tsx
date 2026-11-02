import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home',       href: '#home' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact',    href: '#contact' },
];

const Navbar = () => {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section highlight via IntersectionObserver
  useEffect(() => {
    const ids = navItems.map(n => n.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-3'
        : 'bg-transparent py-5'
    )}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex justify-between items-center">

        {/* Logo monogram */}
        <a href="#home" className="group flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center font-bold text-primary text-sm group-hover:bg-primary/20 transition-colors">
            LM
          </div>
          <span className="font-semibold text-foreground/90 hidden sm:block">Lemi Melkamu</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => {
            const id = item.href.slice(1);
            const active = activeSection === id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                  active
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.name}
                {active && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground glow-btn transition-all duration-200 hover:opacity-90"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={cn(
        'md:hidden overflow-hidden transition-all duration-300 border-t border-white/5',
        mobileOpen ? 'max-h-80 opacity-100 bg-background/95 backdrop-blur-xl' : 'max-h-0 opacity-0'
      )}>
        <div className="px-6 py-4 space-y-1">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                activeSection === item.href.slice(1)
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              )}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-center bg-primary text-primary-foreground"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
