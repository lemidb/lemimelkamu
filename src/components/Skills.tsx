import React from 'react';

interface SkillGroup {
  label: string;
  color: string;
  skills: string[];
  categoryLabel?: string;
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Full-Stack Product Development',
    color: 'from-indigo-500/20 to-blue-500/10 border-indigo-500/20',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Dart'],
  },
  {
    label: 'Backend, APIs & Data',
    color: 'from-cyan-500/20 to-sky-500/10 border-cyan-500/20',
    skills: ['C#', '.NET Core', 'Python', 'FastAPI', 'Flask', 'REST APIs', 'API Integration', 'PostgreSQL', 'Supabase'],
  },
  {
    label: 'Applied AI & Automation',
    color: 'from-emerald-500/20 to-green-500/10 border-emerald-500/20',
    skills: ['Gemini API', 'Computer Vision', 'OpenCV', 'NLP', 'Telegram Bots', 'Playwright', 'Web Scraping', 'Data Pipelines', 'Docker'],
  },
  {
    label: 'Security & Infrastructure',
    color: 'from-amber-500/20 to-yellow-500/10 border-amber-500/20',
    skills: ['Web Crypto API', 'Supabase Auth', 'Linux', 'LVM', 'LDAP', 'SSH', 'SFTP'],
  },
  {
    label: 'Enterprise Systems & Integration',
    categoryLabel: 'Enterprise',
    color: 'from-violet-500/20 to-indigo-500/10 border-violet-500/20',
    skills: ['SAP ECC 6.0', 'SAP ABAP', 'RFC / BAPIs', 'MuleSoft', 'DataWeave', 'FI/CO', 'SAP FBCJ', 'SFTP'],
  },
];

const Skills = () => (
  <section id="skills" className="relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
    </div>

    <div className="section-container">
      <p className="section-label text-center">What I know</p>
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">
        A focused toolkit for production Next.js products, Python automation, and AI integrations, backed by enterprise integration experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, gi) => (
          <div
            key={group.label}
            className={`glass-card p-6 bg-gradient-to-br ${group.color} border`}
            style={{ animationDelay: `${gi * 80}ms` }}
          >
            {group.categoryLabel && (
              <span className="inline-flex mb-2 px-2 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {group.categoryLabel}
              </span>
            )}
            <h3 className="text-sm font-bold text-foreground mb-4">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs rounded-md bg-background/50 text-foreground/80 border border-white/5 font-medium hover:border-white/15 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Language proficiency row */}
      <div className="mt-8 glass-card p-6 border border-white/5">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Languages spoken</p>
        <div className="flex flex-wrap gap-4">
          {[
            { lang: 'English',     level: 'Professional' },
            { lang: 'Amharic',     level: 'Native' },
            { lang: 'Afan Oromo',  level: 'Native' },
          ].map(({ lang, level }) => (
            <div key={lang} className="flex items-center gap-2">
              <span className="font-semibold text-sm text-foreground">{lang}</span>
              <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-white/5 border border-white/5">{level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
