import React, { useEffect, useState } from 'react';
import { ExternalLink, X, ChevronRight } from 'lucide-react';
import {
  PROJECT_FILTER_EVENT,
  PROJECT_FILTERS,
  Project,
  ProjectFilter,
  ProjectStatus,
  projects,
} from '@/data/portfolio';

const statusLabels: Record<ProjectStatus, string> = {
  live: 'Live',
  'in-development': 'In development',
  completed: 'Completed',
  'internal-production': 'Internal production',
  'status-unconfirmed': 'Status to confirm',
};

const matchesFilter = (project: Project, filter: ProjectFilter) => {
  if (filter === 'featured') return project.tier === 'featured';
  if (filter === 'all') return true;
  if (filter === 'Enterprise') return project.categories.includes('Enterprise systems');
  return project.categories.includes(filter);
};

const Projects = () => {
  const [filter, setFilter] = useState<ProjectFilter>('featured');
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const handleFilter = (event: Event) => {
      const requestedFilter = (event as CustomEvent<ProjectFilter>).detail;
      if (PROJECT_FILTERS.some(option => option.value === requestedFilter)) {
        setFilter(requestedFilter);
      }
    };

    window.addEventListener(PROJECT_FILTER_EVENT, handleFilter);
    return () => window.removeEventListener(PROJECT_FILTER_EVENT, handleFilter);
  }, []);

  const filteredProjects = projects.filter(project => matchesFilter(project, filter));

  return (
    <section id="projects" className="relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="section-container">
        <p className="section-label text-center">Selected work</p>
        <h2 className="section-title">Products, Automation & Open Source</h2>
        <p className="section-subtitle">
          Shipped products, automation systems, and open-source tools, plus the enterprise platforms behind them.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {PROJECT_FILTERS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                filter === value
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const startsEnterpriseLane =
              project.tier === 'enterprise' &&
              (index === 0 || filteredProjects[index - 1]?.tier !== 'enterprise');

            return (
              <React.Fragment key={project.id}>
                {startsEnterpriseLane && (
                  <div className="md:col-span-2 lg:col-span-3 pt-4">
                    <h3 className="text-lg font-bold text-foreground">Enterprise Work</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Enterprise Integration (SAP · MuleSoft · .NET) — available on request
                    </p>
                  </div>
                )}
                <article
                  className="glass-card p-6 group transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <p className="text-[10px] font-bold text-accent uppercase tracking-wider">
                      {project.categories.join(' · ')}
                    </p>
                    <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-muted-foreground">
                      {statusLabels[project.status]}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/90 font-medium leading-relaxed mb-3">
                    {project.clientValue}
                  </p>
                  <p className="text-xs text-primary/80 font-medium mb-3">
                    {project.role}
                    {project.organization ? ` · ${project.organization}` : ''}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  {project.proof && (
                    <p className="w-fit rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent mb-4">
                      {project.proof}
                    </p>
                  )}
                  <ul className="space-y-2 mb-5">
                    {project.bullets.slice(0, 2).map(bullet => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-xs text-foreground/75 leading-relaxed"
                      >
                        <span className="text-primary mt-px" aria-hidden="true">›</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="tech-badge">+{project.tags.length - 4}</span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/5">
                    {project.links.map(link => (
                      <a
                        key={`${link.label}-${link.href}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
                      >
                        {link.label}
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    ))}
                    {project.links.length === 0 && (
                      <p className="text-xs text-muted-foreground">
                        {project.status === 'internal-production'
                          ? 'Internal system (no public link)'
                          : project.emptyLinksNote}
                      </p>
                    )}
                    <button
                      onClick={() => setSelected(project)}
                      className="ml-auto text-xs text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      More impact <ChevronRight size={13} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            className="glass-card w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 rounded-2xl"
            onClick={event => event.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-2">
                  {selected.role}
                  {selected.organization ? ` · ${selected.organization}` : ''}
                </p>
                <h2 id="project-title" className="text-xl font-bold text-foreground">
                  {selected.title}
                </h2>
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close project details"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors flex-shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-sm text-foreground/90 font-medium leading-relaxed mb-3">
              {selected.clientValue}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {selected.summary}
            </p>
            <div className="mb-6">
              <p className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-3">
                Key contributions
              </p>
              <ul className="space-y-3">
                {selected.bullets.map(bullet => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed"
                  >
                    <span className="text-primary mt-px" aria-hidden="true">›</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <p className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                Technology
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selected.tags.map(tag => <span key={tag} className="tech-badge">{tag}</span>)}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {selected.links.map(link => (
                <a
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all"
                >
                  <ExternalLink size={15} aria-hidden="true" /> {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
