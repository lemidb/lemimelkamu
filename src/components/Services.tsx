import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  CONTACT_SUBJECT_EVENT,
  PROJECT_FILTER_EVENT,
  ProjectFilter,
  services,
} from '@/data/portfolio';

const Services = () => (
  <section id="services" className="relative">
    <div className="section-container">
      <p className="section-label text-center">Services</p>
      <h2 className="section-title">What I Can Build For You</h2>
      <p className="section-subtitle">
        Focused engagements with a clear outcome. Pick one, or tell me what you need.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <article key={service.title} className="glass-card p-6 flex flex-col">
            <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {service.outcome}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-primary/80 mb-3">
              Typical deliverables
            </h4>
            <ul className="space-y-2 mb-6">
              {service.deliverables.map(deliverable => (
                <li
                  key={deliverable}
                  className="flex items-start gap-2 text-sm text-foreground/75 leading-relaxed"
                >
                  <span className="text-primary mt-px" aria-hidden="true">›</span>
                  {deliverable}
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary/80 mb-3">
                Proof
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.proof.map(proof => (
                  <a
                    key={`${proof.label}-${proof.filter}`}
                    href="#projects"
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent<ProjectFilter>(PROJECT_FILTER_EVENT, {
                          detail: proof.filter,
                        }),
                      );
                    }}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
                  >
                    {proof.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent(CONTACT_SUBJECT_EVENT, { detail: service.title }),
                );
              }}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground glow-btn transition-all duration-200 hover:opacity-90"
            >
              Discuss this <ArrowRight size={15} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
