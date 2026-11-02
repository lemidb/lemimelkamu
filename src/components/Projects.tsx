import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronRight } from 'lucide-react';

type Category = 'enterprise' | 'product' | 'ai' | 'open-source' | 'automation';

interface Project {
  title: string;
  organization: string;
  role: string;
  description: string;
  highlights: string[];
  tags: string[];
  category: Category;
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Simulator Training Management System',
    organization: 'Ethiopian Airlines',
    role: 'Software Developer',
    description:
      'Enterprise platform coordinating flight-crew and pilot simulator training from scheduling through certification.',
    highlights: [
      'Built training workflows and scheduling automation for simulator operations.',
      'Balanced cockpit availability, instructor rosters, and pilot certification requirements.',
      'Protected end-to-end data integrity for flight-operations audit compliance.',
    ],
    tags: ['Python', 'Next.js', 'TypeScript', '.NET Core', 'Enterprise Databases'],
    category: 'enterprise',
  },
  {
    title: 'Cost Saving Planning & Achievement Control',
    organization: 'Ethiopian Airlines',
    role: 'Lead Frontend Developer',
    description:
      'Financial control system for tracking and reconciling cost-reduction targets across operational divisions.',
    highlights: [
      'Architected data-intensive interfaces, dynamic calculation grids, and reporting views.',
      'Connected Next.js and TypeScript client workflows to .NET services and SAP ABAP.',
      'Simplified cross-departmental auditing and reduced friction in data entry.',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', '.NET Core', 'SAP Integration'],
    category: 'enterprise',
  },
  {
    title: 'Enterprise Integration & Financial Pipelines',
    organization: 'Ethiopian Airlines & partner entities, including Ethiopian Electric Power',
    role: 'Senior Developer',
    description:
      'Asynchronous SAP, middleware, and financial-data pipelines spanning enterprise systems.',
    highlights: [
      'Delivered SAP ECC ALV reports, ABAP function modules, and BAPI integration points.',
      'Built a .NET worker to synchronize employee records across systems continuously.',
      'Automated scheduled SFTP ingestion and normalization of daily currency-exchange feeds.',
    ],
    tags: ['SAP ABAP', 'ECC 6.0', 'MuleSoft', 'C#', '.NET Core', 'SFTP'],
    category: 'enterprise',
  },
  {
    title: 'Fitness AI',
    organization: 'Independent product',
    role: 'Solo Creator & Full-Stack Mobile Engineer',
    description:
      'Cross-platform workout tracker combining AI-assisted form feedback with progressive-overload training.',
    highlights: [
      'Built one Flutter and Dart app for native iOS and Android experiences.',
      'Integrated Gemini for exercise-form analysis and personalized routine tuning.',
      'Tracked training volume, sets, and reps in reserve; synced sessions with Google Calendar.',
      'Developed asynchronous FastAPI services with Supabase Auth and PostgreSQL.',
    ],
    tags: ['Flutter', 'Dart', 'FastAPI', 'PostgreSQL', 'Supabase', 'Gemini API'],
    category: 'product',
  },
  {
    title: 'Hojiinet',
    organization: 'Neomoti Tech Solutions',
    role: 'Co-Founder & Full-Stack Developer',
    description:
      'Tech employment discovery platform organizing job opportunities across Ethiopia.',
    highlights: [
      'Built searchable job discovery with filters for tech stack, role, and industry tier.',
      'Created automated ingestion workflows to collect, clean, and categorize vacancies from regional job portals.',
    ],
    tags: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Supabase'],
    category: 'product',
    demoUrl: 'https://hojiinet.neomoti.com',
  },
  {
    title: 'DuwaVault',
    organization: 'Independent product',
    role: 'Creator & Full-Stack Engineer',
    description:
      'Zero-knowledge vault for private credentials, records, and notes, with encryption performed in the browser.',
    highlights: [
      'Implemented client-side key generation and encryption with the Web Crypto API so plaintext is not exposed to the server.',
      'Built a responsive, accessible interface with secure session management.',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Web Crypto API'],
    category: 'product',
    demoUrl: 'https://personal-vault-sage.vercel.app',
  },
  {
    title: 'Personal Finance & Budget Tracker',
    organization: 'Independent product',
    role: 'Creator & Full-Stack Engineer',
    description:
      'Full-stack financial ledger with budget tracking and cash-flow analytics.',
    highlights: [
      'Designed relational schemas and transaction indexing with Drizzle ORM.',
      'Built monthly budgets, balance projections, and spending-category breakdowns.',
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Neon', 'Drizzle ORM', 'Tailwind CSS'],
    category: 'product',
  },
  {
    title: 'react-generic-select',
    organization: 'Open source · npm',
    role: 'Author & Maintainer',
    description:
      'Type-safe, accessible React select primitive for async data and complex object collections.',
    highlights: [
      'Used generics to preserve end-to-end type safety in deeply nested forms.',
      'Added server-side debouncing, infinite-scroll pagination, and WAI-ARIA keyboard navigation.',
      'Published companion design patterns on DEV.to.',
    ],
    tags: ['React', 'TypeScript', 'Rollup', 'ShadCN UI', 'Accessibility'],
    category: 'open-source',
    demoUrl: 'https://www.npmjs.com/package/react-generic-select',
  },
  {
    title: 'Lemi Automates',
    organization: 'Personal automation toolkit',
    role: 'Creator',
    description:
      'Containerized automation services, Telegram bots, and browser-based data collection workers.',
    highlights: [
      'Built Telegram client and bot workflows with Telethon and python-telegram-bot.',
      'Developed collection workers with curl_cffi and Playwright for resilient browser and HTTP workflows.',
      'Packaged workers with Docker for continuous headless execution.',
    ],
    tags: ['Python', 'Telethon', 'Playwright', 'Docker', 'PostgreSQL', 'Telegram'],
    category: 'automation',
  },
  {
    title: 'Banking Infrastructure Monitoring',
    organization: 'Siinqee Bank',
    role: 'IT Trainee',
    description:
      'Lightweight monitoring and alerting tools for core-banking infrastructure.',
    highlights: [
      'Built Python daemons to monitor disk quotas, host availability, and essential network services.',
      'Automated alert routing to systems teams to support earlier incident response.',
      'Worked across Linux, LVM, shell scripting, Active Directory Services, LDAP, and SSH.',
    ],
    tags: ['Python', 'Linux', 'LVM', 'Shell Scripting', 'ADS', 'LDAP', 'SSH'],
    category: 'automation',
  },
  {
    title: 'Computer Vision & Chatbot System',
    organization: 'Jimma University AI Center',
    role: 'Junior Software Developer Intern',
    description:
      'Real-time visual analysis exposed through a bot and web interface for image-based classification.',
    highlights: [
      'Built image-analysis pipelines with Python and OpenCV.',
      'Connected image uploads to interactive Telegram and Flask experiences for rapid results.',
    ],
    tags: ['Python', 'OpenCV', 'Flask', 'Telegram Bot API', 'Computer Vision'],
    category: 'ai',
  },
];

const categoryLabels: Record<'all' | Category, string> = {
  all: 'All work',
  enterprise: 'Enterprise systems',
  product: 'Products',
  ai: 'Applied AI',
  'open-source': 'Open source',
  automation: 'Automation',
};

const categories: Array<{ value: 'all' | Category; label: string }> = [
  { value: 'all', label: categoryLabels.all },
  { value: 'enterprise', label: categoryLabels.enterprise },
  { value: 'product', label: categoryLabels.product },
  { value: 'ai', label: categoryLabels.ai },
  { value: 'open-source', label: categoryLabels['open-source'] },
  { value: 'automation', label: categoryLabels.automation },
];

const Projects = () => {
  const [filter, setFilter] = useState<'all' | Category>('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="section-container">
        <p className="section-label text-center">Selected work</p>
        <h2 className="section-title">Systems, Products & Outcomes</h2>
        <p className="section-subtitle">
          Business-critical platforms, integrations, and products—shipped across enterprise and startup environments.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(({ value, label }) => (
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
          {filtered.map((project, index) => (
            <article
              key={project.title}
              className="glass-card p-6 group transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-3">
                {categoryLabels[project.category]}
              </p>
              <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-primary/80 font-medium mb-3">
                {project.role} · {project.organization}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <ul className="space-y-2 mb-5">
                {project.highlights.slice(0, 2).map(highlight => (
                  <li key={highlight} className="flex items-start gap-2 text-xs text-foreground/75 leading-relaxed">
                    <span className="text-primary mt-px">›</span>
                    {highlight}
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

              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelected(project)}
                  className="text-xs text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  More impact <ChevronRight size={13} />
                </button>
              </div>
            </article>
          ))}
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
                  {projectRole(selected)}
                </p>
                <h2 id="project-title" className="text-xl font-bold text-foreground">{selected.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{selected.organization}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close project details"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors flex-shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{selected.description}</p>
            <div className="mb-6">
              <p className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-3">Key contributions</p>
              <ul className="space-y-3">
                {selected.highlights.map(highlight => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                    <span className="text-primary mt-px">›</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <p className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">Technology</p>
              <div className="flex flex-wrap gap-1.5">
                {selected.tags.map(tag => <span key={tag} className="tech-badge">{tag}</span>)}
              </div>
            </div>
            {selected.demoUrl && (
              <a
                href={selected.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all"
              >
                <ExternalLink size={15} /> View project
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

function projectRole(project: Project) {
  return `${project.role} · ${categoryLabels[project.category]}`;
}

export default Projects;
