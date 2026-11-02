import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Youtube, ExternalLink } from 'lucide-react';

const ROLES = [
  'Full-Stack Product Engineer',
  'Enterprise Integration Engineer',
  'SAP & MuleSoft Developer',
  'Applied AI Builder',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed,  setDisplayed]  = useState('');
  const [deleting,   setDeleting]   = useState(false);
  const [paused,     setPaused]     = useState(false);

  // Typing effect
  useEffect(() => {
    const target = ROLES[roleIndex];

    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false); }, 1800);
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === target.length) {
      setPaused(true);
      return;
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, paused, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background mesh gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[160px]" />
      </div>

      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="section-container z-10 pt-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* ── Left: text ─────────────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-semibold mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Available for freelance projects
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-up delay-100">
              Hi, I'm{' '}
              <span className="gradient-text">Lemi Melkamu</span>
            </h1>

            {/* Typewriter role line */}
            <div className="h-10 flex items-center justify-center lg:justify-start gap-1 mb-6 animate-fade-up delay-200">
              <span className="text-xl md:text-2xl font-mono text-muted-foreground">
                {displayed}
              </span>
              <span className="w-0.5 h-6 bg-primary animate-[blink_1s_step-end_infinite]" />
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up delay-300">
              I build business-critical platforms and integrations—from aviation training and SAP
              financial pipelines to AI-enabled products. I take complex workflows from design to
              delivery and make them reliable, usable software.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10 animate-fade-up delay-400">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm glow-btn transition-all duration-200 hover:opacity-90 flex items-center gap-2"
              >
                View My Work <ExternalLink size={15} />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground font-semibold text-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              >
                Let's Talk
              </a>
              <a
                href="https://youtube.com/shorts/ubzSf-9TGd0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-muted-foreground font-semibold text-sm hover:border-accent/30 hover:text-accent transition-all duration-200 flex items-center gap-2"
              >
                <Youtube size={15} /> Intro Video
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-up delay-500">
              <a href="https://github.com/lemidb" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/lemimelkamu" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <div className="h-4 w-px bg-white/10" />
              <span className="text-xs text-muted-foreground">lemimelkamu@gmail.com</span>
            </div>
          </div>

          {/* ── Right: avatar + floating decoration ────────────── */}
          <div className="relative flex-shrink-0 animate-fade-in delay-300">

            {/* Spinning ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-spin-slow" style={{ margin: '-20px' }} />
            <div className="absolute inset-0 rounded-full border border-primary/10" style={{ margin: '-36px' }} />

            {/* Avatar */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 animate-glow-pulse">
              <img
                src="/images/image.png"
                alt="Lemi Melkamu"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>

            {/* Floating stat chips */}
            <div className="absolute -top-4 -right-8 glass-card px-3 py-2 rounded-xl text-xs font-semibold animate-float" style={{ animationDelay: '0s' }}>
              <span className="text-primary">4+</span> Years exp.
            </div>
            <div className="absolute -bottom-2 -left-10 glass-card px-3 py-2 rounded-xl text-xs font-semibold animate-float" style={{ animationDelay: '2s' }}>
              <span className="text-accent">Enterprise</span> scale
            </div>
            <div className="absolute top-1/2 -right-12 glass-card px-3 py-2 rounded-xl text-xs font-semibold animate-float" style={{ animationDelay: '1s' }}>
              SAP · MuleSoft
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center animate-fade-up delay-600">
          <a href="#projects" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
