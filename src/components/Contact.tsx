import React from 'react';
import { Mail, Phone, Github, MapPin, Send } from 'lucide-react';
import ContactForm from './ContactForm';
import { PORTFOLIO_LINKS } from '@/data/portfolio';

const contactInfo = [
  {
    icon: <Mail size={18} aria-hidden="true" />,
    label: 'Email',
    value: 'lemimelkamu@gmail.com',
    href: PORTFOLIO_LINKS.email,
    external: false,
  },
  {
    icon: <Phone size={18} aria-hidden="true" />,
    label: 'Phone',
    value: '+251 977 66 84 08',
    href:  'tel:+251977668408',
    external: false,
  },
  {
    icon: <Github size={18} aria-hidden="true" />,
    label: 'GitHub',
    value: '@lemidb',
    href: PORTFOLIO_LINKS.github,
    external: true,
  },
  {
    icon: <MapPin size={18} aria-hidden="true" />,
    label: 'Based in',
    value: 'Addis Ababa, Ethiopia',
    href:  null,
    external: false,
  },
];

const Contact = () => (
  <section id="contact" className="relative">
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-[100px]" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-[100px]" />
    </div>

    <div className="section-container relative z-10">
      <p className="section-label text-center">Get in touch</p>
      <h2 className="section-title">Let's Work Together</h2>
      <p className="section-subtitle">
        Open to freelance projects: Telegram and monitoring bots, Next.js feature sprints, scrapers and data pipelines, or AI integrations. Enterprise integration (SAP, MuleSoft, .NET) on request. Let's talk about what you're building.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">

        {/* Contact info panel */}
        <div className="lg:col-span-2 space-y-4">
          <div className="glass-card p-6 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-accent">Available for work</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Taking on select freelance engagements.
            </p>
          </div>

          {contactInfo.map(({ icon, label, value, href, external }) => (
            <div key={label} className="glass-card p-4 flex items-center gap-4 group hover:-translate-y-0.5 transition-transform duration-200">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                {icon}
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="lg:col-span-3">
          <div className="glass-card p-7">
            <div className="flex items-center gap-2 mb-6">
              <Send size={16} className="text-primary" />
              <h3 className="text-base font-bold">Send a Message</h3>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
