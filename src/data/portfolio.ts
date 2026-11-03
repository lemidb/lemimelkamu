export const POSITIONING_LINE =
  'Full-stack engineer — Next.js products, Python automation & AI integrations';

export const HERO_PARAGRAPH =
  "I build full-stack Next.js and TypeScript products, Python automation and Telegram bots, and AI-integrated apps. I've shipped production systems at Ethiopian Airlines as well as my own products and open-source tools, and I turn messy workflows into reliable, deployed software.";

export const OFFER_NAMES = [
  'Telegram & Website Monitoring Bots',
  'Next.js SaaS Bug-Fix & Feature Sprints',
  'Scrapers & Data Pipelines',
] as const;

export type OfferName = (typeof OFFER_NAMES)[number];
export const HERO_OFFER_LABELS = [
  'Telegram & website monitoring bots',
  'Next.js bug-fix & feature sprints',
  'Scrapers & data pipelines',
] as const;

export const PORTFOLIO_LINKS = {
  portfolio: 'https://lemimelkamu.vercel.app/',
  github: 'https://github.com/lemidb',
  linkedin: 'https://linkedin.com/in/lemimelkamu',
  email: 'mailto:lemimelkamu@gmail.com',
  youtube: 'https://youtube.com/shorts/ubzSf-9TGd0',
  npmPackage: 'https://www.npmjs.com/package/react-generic-select',
  npmDemo: 'https://react-generic-select-demo-3zmt.vercel.app/',
  article:
    'https://dev.to/lemi_melkamu_25/a-different-approach-to-sharing-your-professional-profile-5eoe',
  hojiinet: 'https://hojiinet.neomoti.com/',
  duwaVault: 'https://personal-vault-sage.vercel.app/',
  budgetTracker: 'https://budget-tracker-oor2.onrender.com/dashboard',
} as const;

export type ContactSubject =
  | OfferName
  | 'AI integration'
  | 'Enterprise integration (SAP · MuleSoft · .NET)'
  | 'Something else';

export const CONTACT_SUBJECTS: readonly ContactSubject[] = [
  ...OFFER_NAMES,
  'AI integration',
  'Enterprise integration (SAP · MuleSoft · .NET)',
  'Something else',
];

export const PROJECT_FILTER_EVENT = 'portfolio:project-filter';
export const CONTACT_SUBJECT_EVENT = 'portfolio:contact-subject';

export type ProjectCategory =
  | 'Enterprise systems'
  | 'Products'
  | 'Applied AI'
  | 'Open source'
  | 'Automation';

export type ProjectTier = 'featured' | 'more' | 'enterprise';
export type ProjectStatus =
  | 'live'
  | 'in-development'
  | 'completed'
  | 'internal-production'
  | 'status-unconfirmed';

export interface ProjectLink {
  label: 'Live' | 'Demo' | 'Repo' | 'npm' | 'Article' | 'Discussion';
  href: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  organization?: string;
  categories: readonly ProjectCategory[];
  tier: ProjectTier;
  status: ProjectStatus;
  summary: string;
  clientValue: string;
  proof?: string;
  bullets: readonly string[];
  tags: readonly string[];
  links: readonly ProjectLink[];
  emptyLinksNote?: string;
}

export type ProjectFilter =
  | 'featured'
  | 'all'
  | 'Products'
  | 'Automation'
  | 'Applied AI'
  | 'Open source'
  | 'Enterprise';

export const PROJECT_FILTERS: readonly { value: ProjectFilter; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'all', label: 'All work' },
  { value: 'Products', label: 'Products' },
  { value: 'Automation', label: 'Automation' },
  { value: 'Applied AI', label: 'Applied AI' },
  { value: 'Open source', label: 'Open source' },
  { value: 'Enterprise', label: 'Enterprise' },
];

export const projects: readonly Project[] = [
  {
    id: 'react-generic-select',
    title: 'react-generic-select',
    role: 'Author & Maintainer',
    organization: 'Open source · npm',
    categories: ['Open source'],
    tier: 'featured',
    status: 'live',
    summary:
      'Type-safe, accessible React select primitive for async data and complex object collections.',
    clientValue:
      'A typed, accessible select that handles object values, async search, and pagination, so your team stops rebuilding dropdowns.',
    proof: '27,000+ views on the community Reddit discussion',
    bullets: [
      'Used generics to preserve end-to-end type safety in deeply nested forms.',
      'Added server-side debouncing, infinite-scroll pagination, and WAI-ARIA keyboard navigation.',
      'Published companion design patterns on DEV.to.',
    ],
    tags: ['React', 'TypeScript', 'Rollup', 'ShadCN UI', 'Accessibility'],
    links: [
      { label: 'npm', href: PORTFOLIO_LINKS.npmPackage },
      { label: 'Demo', href: PORTFOLIO_LINKS.npmDemo },
      { label: 'Article', href: PORTFOLIO_LINKS.article },
    ],
  },
  {
    id: 'lemi-automates',
    title: 'Lemi Automates',
    role: 'Creator',
    organization: 'Personal automation toolkit',
    categories: ['Automation'],
    tier: 'featured',
    status: 'status-unconfirmed',
    summary:
      'Containerized automation services, Telegram bots, and browser-based data collection workers.',
    clientValue:
      'Telegram bots, scrapers, and scheduled workers that remove repetitive manual work, deployed in Docker.',
    bullets: [
      'Built Telegram client and bot workflows with Telethon and python-telegram-bot.',
      'Developed collection workers with curl_cffi and Playwright for resilient browser and HTTP workflows.',
      'Packaged workers with Docker for continuous headless execution.',
    ],
    tags: ['Python', 'Telethon', 'Playwright', 'Docker', 'PostgreSQL', 'Telegram'],
    links: [],
    emptyLinksNote: 'Public repository link not provided.',
  },
  {
    id: 'proactive-monitoring',
    title: 'Proactive Monitoring System',
    role: 'Full-Stack Developer',
    categories: ['Automation'],
    tier: 'featured',
    status: 'completed',
    summary:
      'Interconnected monitoring and automation services for servers, services, and SMS delivery, with incident management in Telegram.',
    clientValue:
      'Know when servers, services, or SMS delivery fail, with alerts and incident handling in Telegram.',
    bullets: [
      'Built service monitoring and resource tracking with charted utilization reports.',
      'Added Telegram-based incident management and SMS delivery verification.',
    ],
    tags: ['Python', 'Django', 'Docker', 'Python Telegram Bot', 'Matplotlib'],
    links: [],
    emptyLinksNote: 'Private repository, walkthrough on request.',
  },
  {
    id: 'hojiinet',
    title: 'Hojiinet',
    role: 'Co-Founder & Full-Stack Developer',
    organization: 'Neomoti Tech Solutions',
    categories: ['Products'],
    tier: 'featured',
    status: 'status-unconfirmed',
    summary:
      'Tech employment discovery platform organizing job opportunities across Ethiopia. Built with Neomoti Tech Solutions, the startup I co-founded.',
    clientValue:
      'A searchable, continuously updated job discovery product, from data ingestion to filtered search UI.',
    bullets: [
      'Built searchable job discovery with filters for tech stack, role, and industry tier.',
      'Created automated ingestion workflows to collect, clean, and categorize vacancies from regional job portals.',
    ],
    tags: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Supabase'],
    links: [{ label: 'Live', href: PORTFOLIO_LINKS.hojiinet }],
  },
  {
    id: 'duwavault',
    title: 'DuwaVault',
    role: 'Creator & Full-Stack Engineer',
    organization: 'Independent product',
    categories: ['Products'],
    tier: 'featured',
    status: 'live',
    summary:
      'Zero-knowledge vault for private credentials, records, and notes, with encryption performed in the browser.',
    clientValue:
      'Browser-side encryption so sensitive data never reaches the server in plaintext.',
    bullets: [
      'Implemented client-side key generation and encryption with the Web Crypto API so plaintext is not exposed to the server.',
      'Built a responsive, accessible interface with secure session management.',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Web Crypto API'],
    links: [{ label: 'Live', href: PORTFOLIO_LINKS.duwaVault }],
  },
  {
    id: 'fitness-ai',
    title: 'Fitness AI',
    role: 'Solo Creator & Full-Stack Mobile Engineer',
    organization: 'Independent product',
    categories: ['Products', 'Applied AI'],
    tier: 'more',
    status: 'status-unconfirmed',
    summary:
      'Cross-platform workout tracker combining AI-assisted form feedback with progressive-overload training.',
    clientValue:
      'A cross-platform mobile app with AI form feedback, built solo from API to UI.',
    bullets: [
      'Built one Flutter and Dart app for native iOS and Android experiences.',
      'Integrated Gemini for exercise-form analysis and personalized routine tuning.',
      'Tracked training volume, sets, and reps in reserve; synced sessions with Google Calendar.',
      'Developed asynchronous FastAPI services with Supabase Auth and PostgreSQL.',
    ],
    tags: ['Flutter', 'Dart', 'FastAPI', 'PostgreSQL', 'Supabase', 'Gemini API'],
    links: [],
    emptyLinksNote: 'Public links not provided.',
  },
  {
    id: 'personal-finance',
    title: 'Personal Finance & Budget Tracker',
    role: 'Creator & Full-Stack Engineer',
    organization: 'Independent product',
    categories: ['Products'],
    tier: 'more',
    status: 'live',
    summary: 'Full-stack financial ledger with budget tracking and cash-flow analytics.',
    clientValue:
      'A full-stack ledger with budgeting, balance projections, and spending analytics.',
    bullets: [
      'Designed relational schemas and transaction indexing with Drizzle ORM.',
      'Built monthly budgets, balance projections, and spending-category breakdowns.',
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Neon', 'Drizzle ORM', 'Tailwind CSS'],
    links: [
      { label: 'Live', href: PORTFOLIO_LINKS.budgetTracker },
    ],
  },
  {
    id: 'computer-vision-chatbot',
    title: 'Computer Vision & Chatbot System',
    role: 'Junior Software Developer Intern',
    organization: 'Jimma University AI Center',
    categories: ['Applied AI'],
    tier: 'more',
    status: 'completed',
    summary:
      'Real-time visual analysis exposed through a bot and web interface for image-based classification.',
    clientValue:
      'Image-analysis pipelines delivered through Telegram and web interfaces.',
    bullets: [
      'Built image-analysis pipelines with Python and OpenCV.',
      'Connected image uploads to interactive Telegram and Flask experiences for rapid results.',
    ],
    tags: ['Python', 'OpenCV', 'Flask', 'Telegram Bot API', 'Computer Vision'],
    links: [],
    emptyLinksNote: 'Public links not provided.',
  },
  {
    id: 'banking-monitoring',
    title: 'Banking Infrastructure Monitoring',
    role: 'IT Trainee',
    organization: 'Siinqee Bank',
    categories: ['Automation'],
    tier: 'more',
    status: 'internal-production',
    summary: 'Lightweight monitoring and alerting tools for core-banking infrastructure.',
    clientValue:
      'Lightweight daemons that watch disks, hosts, and services and alert the right team early.',
    bullets: [
      'Built Python daemons to monitor disk quotas, host availability, and essential network services.',
      'Automated alert routing to systems teams to support earlier incident response.',
      'Worked across Linux, LVM, shell scripting, Active Directory Services, LDAP, and SSH.',
    ],
    tags: ['Python', 'Linux', 'LVM', 'Shell Scripting', 'ADS', 'LDAP', 'SSH'],
    links: [],
  },
  {
    id: 'cost-saving-control',
    title: 'Cost Saving Planning & Achievement Control',
    role: 'Lead Frontend Developer',
    organization: 'Ethiopian Airlines',
    categories: ['Enterprise systems'],
    tier: 'enterprise',
    status: 'internal-production',
    summary:
      'Financial control system for tracking and reconciling cost-reduction targets across operational divisions.',
    clientValue:
      'A finance control platform for tracking cost-reduction targets across divisions in a production enterprise environment.',
    bullets: [
      'Architected data-intensive interfaces, dynamic calculation grids, and reporting views.',
      'Connected Next.js and TypeScript client workflows to .NET services and SAP ABAP.',
      'Simplified cross-departmental auditing and reduced friction in data entry.',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', '.NET Core', 'SAP Integration'],
    links: [],
  },
  {
    id: 'enterprise-financial-pipelines',
    title: 'Enterprise Integration & Financial Pipelines',
    role: 'Senior Developer',
    organization: 'Ethiopian Airlines & partner entities, including Ethiopian Electric Power',
    categories: ['Enterprise systems'],
    tier: 'enterprise',
    status: 'internal-production',
    summary:
      'Asynchronous SAP, middleware, and financial-data pipelines spanning enterprise systems.',
    clientValue: 'Reliable SAP-to-.NET data pipelines for HR and finance data.',
    bullets: [
      'Delivered SAP ECC ALV reports, ABAP function modules, and BAPI integration points.',
      'Built a .NET worker to synchronize employee records across systems continuously.',
      'Automated scheduled SFTP ingestion and normalization of daily currency-exchange feeds.',
    ],
    tags: ['SAP ABAP', 'ECC 6.0', 'MuleSoft', 'C#', '.NET Core', 'SFTP'],
    links: [],
  },
  {
    id: 'simulator-training',
    title: 'Simulator Training Management System',
    role: 'Software Developer',
    organization: 'Ethiopian Airlines',
    categories: ['Enterprise systems'],
    tier: 'enterprise',
    status: 'internal-production',
    summary:
      'Enterprise platform coordinating flight-crew and pilot simulator training from scheduling through certification.',
    clientValue: 'Scheduling and certification workflows for pilot simulator training.',
    bullets: [
      'Built training workflows and scheduling automation for simulator operations.',
      'Balanced cockpit availability, instructor rosters, and pilot certification requirements.',
      'Protected end-to-end data integrity for flight-operations audit compliance.',
    ],
    tags: ['Python', 'Next.js', 'TypeScript', '.NET Core', 'Enterprise Databases'],
    links: [],
  },
];

export interface Service {
  title: OfferName;
  outcome: string;
  deliverables: readonly string[];
  proof: readonly { label: string; filter: ProjectFilter }[];
}

export const services: readonly Service[] = [
  {
    title: OFFER_NAMES[0],
    outcome:
      'Get alerted the moment something changes: uptime, prices, listings, job postings, or internal metrics.',
    deliverables: [
      'Python bot (python-telegram-bot / Telethon) with scheduled checks and change detection',
      'Alert routing and incident messages in Telegram',
      'Dockerized deployment with setup notes',
    ],
    proof: [
      { label: 'Proactive Monitoring System', filter: 'Automation' },
      { label: 'Lemi Automates', filter: 'Automation' },
    ],
  },
  {
    title: OFFER_NAMES[1],
    outcome:
      'Stuck bugs, half-built features, and API integrations on an existing React/Next.js codebase, shipped in focused sprints.',
    deliverables: [
      'Triage and root-cause fix',
      'Feature work with TypeScript types and API integration',
      'Clear PR notes you can review',
    ],
    proof: [
      { label: 'react-generic-select', filter: 'Open source' },
      { label: 'Hojiinet', filter: 'Products' },
      { label: 'DuwaVault', filter: 'Products' },
    ],
  },
  {
    title: OFFER_NAMES[2],
    outcome:
      'Reliable data collection from websites and APIs, cleaned and delivered where you need it.',
    deliverables: [
      'Playwright / HTTP collectors built to survive site changes',
      'Cleaning, categorizing, and storage (PostgreSQL or files)',
      'Scheduled runs with failure alerts',
    ],
    proof: [
      { label: 'Hojiinet ingestion workflows', filter: 'Products' },
      { label: 'Lemi Automates', filter: 'Automation' },
    ],
  },
];
