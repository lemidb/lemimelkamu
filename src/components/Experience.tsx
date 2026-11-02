import React from 'react';

interface Role {
  position: string;
  org:       string;
  period:    string;
  summary:   string;
  bullets:   string[];
  tags:      string[];
}

const timeline: Role[] = [
  {
    position: 'Software Developer',
    org:      'Ethiopian Airlines',
    period:   '2024 – Present',
    summary:
      'Build business-critical aviation and financial systems, connecting operational workflows with SAP and enterprise services.',
    bullets: [
      'Developed simulator-training workflows and scheduling logic balancing cockpit availability, instructor rosters, and pilot certification.',
      'Led frontend delivery of a cost-control platform, integrating dynamic financial views with .NET services and SAP.',
      'Built SAP ABAP reports and integration points, plus .NET and SFTP pipelines for employee synchronization and exchange-rate data.',
    ],
    tags: ['SAP ECC', 'ABAP', 'MuleSoft', 'C# / .NET Core', 'Next.js', 'TypeScript'],
  },
  {
    position: 'IT Trainee',
    org:      'Siinqee Bank',
    period:   '2023 – 2024',
    summary:
      'Supported core-banking infrastructure with lightweight monitoring and proactive alerting.',
    bullets: [
      'Created Python daemons to monitor disk quotas, host availability, and essential network services.',
      'Automated alerts to systems teams to surface infrastructure issues earlier.',
    ],
    tags: ['Python', 'Linux', 'LVM', 'Shell Scripting', 'Active Directory', 'LDAP', 'SSH'],
  },
  {
    position: 'Junior Software Developer Intern',
    org:      'Jimma University AI Center',
    period:   '2023 – 2024',
    summary:
      'Applied computer vision and conversational interfaces to make image analysis accessible to users.',
    bullets: [
      'Built real-time image-analysis pipelines with OpenCV and connected them to Telegram and web interfaces.',
      'Delivered computer-vision occupancy, NLP chatbot, and infrastructure-monitoring prototypes for practical use.',
    ],
    tags: ['Python', 'OpenCV', 'Computer Vision', 'Flask', 'NLP', 'Telegram Bot API'],
  },
  {
    position: 'College Trainee — Development Program',
    org:      'Ethiopian Airlines',
    period:   'Jun – Oct 2024',
    summary:
      'Delivered internal automation and financial workflow improvements across SAP, backend services, and frontend applications.',
    bullets: [
      'Automated employee bonus calculations and daily employee/exchange-rate updates.',
      'Built accounting integrations for hotel-service payments and a web-based cost-saving planning system.',
    ],
    tags: ['SAP ABAP', 'Enterprise Integration', 'React', 'C# / .NET', 'Financial Workflows'],
  },
];

const Experience = () => (
  <section id="experience" className="relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
    </div>

    <div className="section-container">
      <p className="section-label text-center">Where I've worked</p>
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">
        From aviation and banking infrastructure to applied AI—focused on ownership, integration, and useful outcomes.
      </p>

      {/* Vertical timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline spine */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

        <div className="space-y-10">
          {timeline.map((role, i) => (
            <div key={i} className="relative pl-12">
              {/* Dot */}
              <div className="absolute left-0 top-1.5">
                <div className="timeline-dot" />
              </div>

              <div className="glass-card p-6 group hover:-translate-y-0.5 transition-transform duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {role.position}
                    </h3>
                    <p className="text-sm font-semibold text-primary/80">{role.org}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-white/5 px-2.5 py-1 rounded-full border border-white/5 flex-shrink-0 self-start">
                    {role.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{role.summary}</p>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-4">
                  {role.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-primary mt-1 flex-shrink-0">›</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {role.tags.map(tag => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
