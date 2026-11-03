import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Github, Linkedin, Youtube } from 'lucide-react';
import {
  HERO_OFFER_LABELS,
  HERO_PARAGRAPH,
  PORTFOLIO_LINKS,
  POSITIONING_LINE,
} from '@/data/portfolio';

const ROLES = [
  'Full-Stack Next.js Engineer',
  'Python Automation & Bot Developer',
  'AI-Integrated App Builder',
  'Enterprise Integration Engineer',
] as const;

const TYPEWRITER_TIMINGS = {
  type: 65,
  delete: 35,
  pause: 1800,
} as const;

const offerLinks = HERO_OFFER_LABELS.map(label => ({ label, href: '#services' }));

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const target = ROLES[roleIndex];

    if (paused) {
      const timeout = setTimeout(() => {
        setDeleting(true);
        setPaused(false);
      }, TYPEWRITER_TIMINGS.pause);
      return () => clearTimeout(timeout);
    }

    if (!deleting && displayed.length < target.length) {
      const timeout = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        TYPEWRITER_TIMINGS.type,
      );
      return () => clearTimeout(timeout);
    }

    if (!deleting && displayed.length === target.length) {
      setPaused(true);
      return;
    }

    if (deleting && displayed.length > 0) {
      const timeout = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        TYPEWRITER_TIMINGS.delete,
      );
      return () => clearTimeout(timeout);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex(index => (index + 1) % ROLES.length);
    }
  }, [displayed, deleting, paused, prefersReducedMotion, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen min-h-dvh flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[160px]" aria-hidden="true" />
      </div>

      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="section-container z-10 pt-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-semibold mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" aria-hidden="true" />
              Open to freelance projects
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-up delay-100">
              Hi, I'm{' '}
              <span className="gradient-text">Lemi Melkamu</span>
            </h1>

            <div className="h-10 flex items-center justify-center lg:justify-start gap-1 mb-6 animate-fade-up delay-200">
              <span
                className="text-xl md:text-2xl font-mono text-muted-foreground"
                aria-hidden="true"
              >
                {prefersReducedMotion ? ROLES[0] : displayed}
              </span>
              {!prefersReducedMotion && (
                <span className="hero-blink-cursor w-0.5 h-6 bg-primary animate-[blink_1s_step-end_infinite]" aria-hidden="true" />
              )}
              <span className="sr-only">{POSITIONING_LINE}</span>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-5 animate-fade-up delay-300">
              {HERO_PARAGRAPH}
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8 animate-fade-up delay-300">
              {offerLinks.map(offer => (
                <a
                  key={offer.label}
                  href={offer.href}
                  className="tech-badge hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  {offer.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10 animate-fade-up delay-400">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm glow-btn transition-all duration-200 hover:opacity-90 flex items-center gap-2"
              >
                View My Work <ArrowRight size={15} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground font-semibold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              >
                Let's Talk
              </a>
            </div>

            <a
              href={PORTFOLIO_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <Youtube size={15} aria-hidden="true" /> Intro Video
            </a>

            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-up delay-500">
              <a
                href={PORTFOLIO_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} aria-hidden="true" />
              </a>
              <a
                href={PORTFOLIO_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <div className="h-4 w-px bg-white/10" aria-hidden="true" />
              <a
                href={PORTFOLIO_LINKS.email}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                lemimelkamu@gmail.com
              </a>
            </div>
          </div>

          <div className="relative flex-shrink-0 animate-fade-in delay-300">
            <div
              className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-spin-slow"
              style={{ margin: '-20px' }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 rounded-full border border-primary/10"
              style={{ margin: '-36px' }}
              aria-hidden="true"
            />

            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 animate-glow-pulse">
              <img
                src="/images/image.png"
                alt="Lemi Melkamu"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"
                aria-hidden="true"
              />
            </div>

            <div
              className="absolute -top-4 -right-8 glass-card px-3 py-2 rounded-xl text-xs font-semibold animate-float"
              style={{ animationDelay: '0s' }}
            >
              Shipped at Ethiopian Airlines
            </div>
            <div
              className="absolute -bottom-2 -left-10 glass-card px-3 py-2 rounded-xl text-xs font-semibold animate-float"
              style={{ animationDelay: '2s' }}
            >
              Open source on npm
            </div>
            <div
              className="absolute top-1/2 -right-12 glass-card px-3 py-2 rounded-xl text-xs font-semibold animate-float"
              style={{ animationDelay: '1s' }}
            >
              27k+ views on Reddit
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center animate-fade-up delay-600">
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
