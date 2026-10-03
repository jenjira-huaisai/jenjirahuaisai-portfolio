export type Project = {
  slug: string;
  /** Which study year it belongs to on the Work page */
  year: 1 | 2;
  /** Shown on the homepage in Selected Work */
  featured?: boolean;
  type: string;
  title: string;
  /** Short highlight shown as a black pill, e.g. a result or award */
  badge?: string;
  summary: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  prototypeUrl?: string;
  image: { src: string; alt: string };
};

/*
 * Every project, in the order it was built.
 * The Work page groups them by year; the homepage shows only
 * the ones marked featured. One list, so nothing gets out of sync.
 * Each project gets a case study page at /work/[slug].
 */
export const projects: Project[] = [
  /* ---------- Year 1 ---------- */
  {
    slug: 'circle-solutions',
    year: 1,
    type: 'Period 1 · Web Development',
    title: 'Circle Solutions',
    badge: 'My design was chosen',
    summary:
      'From client brief to a calm, trust-building website design for a software company, adapted for international expansion.',
    role: 'UI designer · Team of 6',
    // githubUrl: '',
    image: {
      src: '/images/projects/circle-solutions-card.png',
      alt: 'The Circle Solutions website design',
    },
  },
  {
    slug: 'morningstar',
    year: 1,
    type: 'Period 2 · Databases & Networks',
    title: 'The Morningstar',
    summary:
      'From privacy requirements to a secure database for a new primary school, with role-based access for 11 staff members.',
    role: 'Database engineer · Team of 3',
    // githubUrl: '',
    image: {
      src: '/images/projects/morningstar-card.png',
      alt: 'The database design for The Morningstar primary school',
    },
  },
  {
    slug: 'battlebot',
    year: 1,
    type: 'Period 3 · OOP & Hardware',
    title: 'BattleBot BB008',
    badge: 'Fastest on race day',
    summary:
      'From a blinking LED to a line-following robot in C++, built and tested week by week.',
    role: 'Team of 2',
    // githubUrl: '',
    image: {
      src: '/images/projects/battlebot-card.png',
      alt: 'The BattleBot BB008 line-following robot',
    },
  },
  {
    slug: 'winnest',
    year: 1,
    type: 'Period 4 · Project Innovate',
    title: 'Winnest',
    badge: 'My idea was chosen',
    summary:
      'From a real problem in pigeon racing to a breeding intelligence platform, designed in Figma and built as a front-end prototype.',
    role: 'Idea, UI design & front-end · Team of 5',
    // githubUrl: '',
    image: {
      src: '/images/projects/winnest-card.png',
      alt: 'The Winnest breeding intelligence platform',
    },
  },

  {
    slug: 'sukanya-thai-massage',
    year: 1,
    featured: true,
    type: 'Independent client project',
    title: 'Sukanya Thai Massage',
    summary:
      'From client requirements to a responsive business website with Maps integration for a Thai massage studio.',
    role: 'Sole designer & developer',
    liveUrl: 'https://www.sukanyathaimassage.nl',
    githubUrl: 'https://github.com/jenjira-huaisai/sukanya-thai-massage-website.git',
    image: {
      src: '/images/projects/sukanya-card.png',
      alt: 'The Sukanya Thai Massage website shown on a laptop',
    },
  },
  {
    slug: 'zon-pedicure-salon',
    year: 1,
    featured: true,
    type: 'Independent client project',
    title: 'Zon Pedicure Salon',
    summary:
      'From client requirements to a responsive website with a contact form and Maps integration for a medical pedicure practice.',
    role: 'Sole designer & developer',
    liveUrl: 'https://www.zonpedicuresalon.com',
    githubUrl: 'https://github.com/jenjira-huaisai/zonpedicuresalon-website.git',
    image: {
      src: '/images/projects/zonpedicure-card.png',
      alt: 'The Zon Pedicure Salon website shown on a laptop',
    },
  },

  /* ---------- Year 2 ---------- */
  {
    slug: 'envitron',
    year: 2,
    featured: true,
    type: 'Period 1 · Real client project',
    title: 'Envitron',
    summary:
      'Researching and prototyping an energy-demand predicting solution for a single-building Energy Management System.',
    role: 'Scrum master · Team of 5',
    // prototypeUrl: '',
    // githubUrl: '',
    image: {
      src: '/images/projects/envitron-card.png',
      alt: 'The Envitron energy demand prediction',
    },
  },
  {
    slug: 'portfolio-v2',
    year: 2,
    type: 'Independent project',
    title: 'Portfolio v2',
    summary:
      'The same portfolio 1 year later: redesigned in Figma and rebuilt in Next.js and TypeScript, with a clearer structure and accessibility built in.',
    role: 'Sole designer & developer',
    githubUrl: 'https://github.com/jenjira-huaisai/jenjira-huaisai-portfolio',
    image: {
      src: '/images/projects/portfolio-v2-card.png',
      alt: 'This portfolio, rebuilt in Next.js',
    },
  },
];

/* ---------- Work page: one block per study year ---------- */

export type StudyYear = {
  year: 1 | 2;
  period: string;
  title: string;
  focus: string;
  /** Optional second line that explains how the year works */
  format?: string;
  /** Client projects done so far, out of the total for the year */
  progress?: { done: number; total: number; note: string };
};

export const studyYears: StudyYear[] = [
  {
    year: 1,
    period: '2025 – 2026',
    title: 'Foundations',
    focus:
      'Web design, networks and databases, hardware and C++, and my first client websites.',
  },
  {
    year: 2,
    period: '2026 – 2027',
    title: 'Real clients',
    focus: 'Four real client projects, 1 per period, delivered with Scrum.',
    format:
      "Each period, a company sets the challenge. We research it, apply what we've learned, and deliver a working solution in sprints.",
    progress: {
      done: 1,
      total: 4,
      note: '3 more client projects to come this year.',
    },
  },
];

export type Testimonial = {
  id: string;
  relation: string;
  quote: string;
  name: string;
  role: string;
  organisation: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'onpapha',
    relation: 'Client',
    quote: 'Zij werkt systematisch, efficiënt en is een professionele.',
    name: 'Onpapha Phumdonkan',
    role: 'Business owner',
    organisation: 'Zon Pedicure Salon (NL)',
  },
  {
    id: 'sukanya',
    relation: 'Client',
    quote: '[waiting for client feedback]',
    name: 'Sukanya Onbuakhaow',
    role: 'Business owner',
    organisation: 'Sukanya Oosterse Massage Techniek (NL)',
  },
  {
    id: 'caleb',
    relation: 'Teammate',
    quote:
      'Your willingness to always go above and beyond to get work done. You are also a person that always wants to learn more.',
    name: 'Caleb Guitou',
    role: 'Project Innovate team leader',
    organisation: 'IT programme · NHL Stenden',
  },
];

export type Capability = {
  name: string;
  tools: string;
};

export const capabilities: Capability[] = [
  { name: 'UI & front-end development', tools: 'HTML, CSS, JavaScript, Figma, responsive layout, accessibility' },
  { name: 'Software development', tools: 'PHP, Java, OOP, Git, REST APIs' },
  { name: 'Data & databases', tools: 'MySQL, data modelling, ERD, normalisation' },
  { name: 'Hardware & systems', tools: 'Arduino, sensors, C++' },
  { name: 'Software quality & testing', tools: 'Unit testing, test plans, code review' },
  { name: 'Research & delivery', tools: 'Client requirements, Scrum, hosting, DNS, SEO basics' },
];

export type Stat = {
  number: string;
  caption: string;
};

export const stats: Stat[] = [
  { number: '2', caption: 'Independent client projects' },
  { number: '1', caption: 'Full-stack system, live since 2025' },
  { number: '1', caption: 'Client project · NHL Stenden' },
  { number: '4', caption: 'University projects' },
];

export const clientLogos = [
  { src: '/images/logos/zon.svg', alt: 'Zon Pedicure Salon' },
  { src: '/images/logos/sukanya.svg', alt: 'Sukanya Oosterse Massage Techniek' },
  { src: '/images/logos/envitron.svg', alt: 'Envitron' },
  { src: '/images/logos/koopman.png', alt: 'Koopman', portrait: true },
];
