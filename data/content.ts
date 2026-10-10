/*
 * Work page groups inside each year:
 * school = NHL Stenden project, independentClient = my own real client,
 * independent = my own project without a client
 */
export type ProjectGroup = 'school' | 'independentClient' | 'independent';

export type Project = {
  slug: string;
  /** Which study year it belongs to on the Work page */
  year: 1 | 2;
  /** Shown on the homepage in Selected Work */
  featured?: boolean;
  /** Which group it sits in on the Work page */
  group: ProjectGroup;
  type: string;
  /** Second, grey line under the type: when the project ran or went live */
  date: string;
  title: string;
  /** Short highlight shown as a black pill, e.g. a result or award */
  badge?: string;
  summary: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  prototypeUrl?: string;
  /**
   * Set to true only when /work/[slug] really exists.
   * Until then no "Case study" link is shown, so nobody lands on a 404.
   */
  hasCaseStudy?: boolean;
  image: { src: string; alt: string };
};

/*
 * Every project, in the order it was built.
 * The Work page groups them by year; the homepage shows only
 * the ones marked featured. One list, so nothing gets out of sync.
 */
export const projects: Project[] = [
  /* ---------- Year 1 ---------- */
  {
    slug: 'circle-solutions',
    group: 'school',
    year: 1,
    type: 'Period 1 · Web Development',
    date: 'Sep – Nov 2025',
    title: 'Circle Solutions Web Redesign',
    badge: 'My design was chosen',
    summary:
      'From client brief to a trust-building website redesign for a software company, adapted for international expansion.',
    role: 'UI designer · Team of 6',
    // githubUrl: '',
    image: {
      src: '/images/projects/circle-solutions-card.png',
      alt: 'The Circle Solutions website design',
    },
  },
  {
    slug: 'morningstar',
    group: 'school',
    year: 1,
    type: 'Period 2 · Databases & Networks',
    date: 'Nov 2025 – Jan 2026',
    title: 'The Morningstar School Management System',
    summary:
      'From privacy requirements to a secure database for a new primary school, with role-based access for school staff members.',
    role: 'Database engineer · Team of 3',
    // githubUrl: '',
    image: {
      src: '/images/projects/morningstar-card.png',
      alt: 'The database design for The Morningstar primary school',
    },
  },
  {
    slug: 'battlebot',
    group: 'school',
    year: 1,
    type: 'Period 3 · OOP & Hardware',
    date: 'Feb – Apr 2026',
    title: 'BattleBot – BB008',
    badge: 'Fastest on the curve track',
    summary:
      'From a blinking LED to a curve line-following robot in C++, built and tested week by week.',
    role: 'Team of 6 · Sub-team of 2',
    // githubUrl: '',
    image: {
      src: '/images/projects/battlebot-card.png',
      alt: 'The BattleBot BB008 line-following robot',
    },
  },
  {
    slug: 'winnest',
    group: 'school',
    year: 1,
    type: 'Period 4 · Project Innovate',
    date: 'Apr – Jun 2026',
    title: 'Winnest – Breeding Intelligence Platform',
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
    slug: 'zon-pedicure-salon',
    group: 'independentClient',
    year: 1,
    featured: true,
    type: 'Independent client project',
    date: 'Live since Jun 2026',
    title: 'Zon Pedicure Salon Business Website',
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
  {
    slug: 'sukanya-thai-massage',
    group: 'independentClient',
    year: 1,
    featured: true,
    type: 'Independent client project',
    date: 'Live since Jul 2026',
    title: 'Sukanya Thai Massage Business Website',
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

  /* ---------- Year 2 ---------- */
  {
    slug: 'envitron',
    group: 'school',
    year: 2,
    featured: true,
    type: 'Real client project · NHL Stenden',
    date: 'Sep – Nov 2026',
    title: 'Envitron – Energy Demand Prediction',
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
    group: 'independent',
    year: 2,
    type: 'Independent project',
    date: 'Rebuilt in Sep 2026',
    title: 'Portfolio Redesign and Rebuild in Next.js',
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
  /** Heading above this year's NHL Stenden projects */
  schoolLabel: string;
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
    schoolLabel: 'NHL Stenden · School projects',
    focus:
      'Web design, networks and databases, hardware and C++, and my first client websites.',
  },
  {
    year: 2,
    period: '2026 – 2027',
    title: 'Real clients · NHL Stenden',
    schoolLabel: 'NHL Stenden · Real client projects',
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

/* ---------- Feedback: homepage and /feedback ---------- */

export type Testimonial = {
  id: string;
  /** Small label at the top right of the card, e.g. "Client" */
  label: string;
  /** Exactly as the person wrote it; shorten only with "…" */
  quote: string;
  /** Language of the quote when it is not English, e.g. "nl" */
  lang?: string;
  /** English translation, shown under a non-English quote */
  translation?: string;
  name: string;
  /** One line each under the name */
  details: string[];
  /** Month the feedback was given (shown on /feedback for clients) */
  date?: string;
};

/*
 * Each person is written once and reused,
 * so the homepage and /feedback always show the same words.
 */
const onpapha: Testimonial = {
  id: 'onpapha',
  label: 'Client',
  quote: 'Zij werkt systematisch, efficiënt en professioneel.',
  lang: 'nl',
  translation: 'She works systematically, efficiently and professionally.',
  name: 'Onpapha Phumdonkan',
  details: ['Business owner', 'Zon Pedicure Salon (NL)'],
  date: 'July 2026',
};

const gerard: Testimonial = {
  id: 'gerard',
  label: 'Employer',
  quote: 'I see your role as a serious and committed team member.',
  name: 'Gerard Koopman',
  details: ['Business owner', 'Gerard en Maniwan Koopman B.V. (NL)'],
  date: 'June 2026',
};

const school = 'IT programme · NHL Stenden';

const kyra: Testimonial = {
  id: 'kyra',
  label: 'Co-team leader',
  quote:
    '…no matter the instructions we give, your work will be perfect. This results in the work being complete and up to the clients’ standards.',
  name: 'Kyra Kovacs',
  details: ['Co-team leader', school],
};

const umaru: Testimonial = {
  id: 'umaru',
  label: 'Teammate',
  quote:
    'You often step in to summarize what’s been said and ensure everyone is aligned before we move forward.',
  name: 'Mohammad Umaru Jah',
  details: ['Teammate', school],
};

const justinas: Testimonial = {
  id: 'justinas',
  label: 'Teammate',
  quote:
    'I, as your teammate, am always assured that I can rely on you as a voice of reason.',
  name: 'Justinas Launikonis',
  details: ['Teammate', school],
};

const oleksiiMorningstar: Testimonial = {
  id: 'oleksii-morningstar',
  label: 'Teammate',
  quote:
    '…when we realised we would have to rewrite the entire project from scratch, your dedication was a huge help – you were willing to work on it even at night – and in the end we managed to get everything done and successfully deliver the project.',
  name: 'Oleksii Khomiak',
  details: ['Teammate', school],
};

const michael: Testimonial = {
  id: 'michael',
  label: 'Teammate',
  quote:
    '…someone who is creative and technically capable at the same time, which is a rare combination.',
  name: 'Michael O. Boateng',
  details: ['Teammate, BattleBot – BB008', school],
};

const oleksiiWinnest: Testimonial = {
  id: 'oleksii-winnest',
  label: 'Teammate',
  quote:
    'Instead of avoiding difficulties, you take the initiative to study independently and improve your understanding, which has a positive impact on the team’s progress.',
  name: 'Oleksii Khomiak',
  details: ['Teammate', school],
};

const caleb: Testimonial = {
  id: 'caleb',
  label: 'Team leader',
  quote:
    'Your willingness to always go above and beyond to get work done. You are also a person that always wants to learn more.',
  name: 'Caleb Gaitou',
  details: ['Team leader', school],
};

/* Homepage: three cards */
export const homeTestimonials: Testimonial[] = [onpapha, gerard, michael];

/* /feedback: clients and employer */
export const clientFeedback: Testimonial[] = [onpapha, gerard];

/* /feedback: teammates, one block per study period */
export type FeedbackPeriod = {
  year: 1 | 2;
  period: number;
  /** When the period ran, e.g. "Sep – Nov 2025" */
  dates: string;
  /** Links the block to its project, so the title is never typed twice */
  projectSlug: string;
  items: Testimonial[];
};

export const teammateFeedback: FeedbackPeriod[] = [
  {
    year: 1,
    period: 1,
    dates: 'Sep – Nov 2025',
    projectSlug: 'circle-solutions',
    items: [kyra, umaru],
  },
  {
    year: 1,
    period: 2,
    dates: 'Nov 2025 – Jan 2026',
    projectSlug: 'morningstar',
    items: [justinas, oleksiiMorningstar],
  },
  {
    year: 1,
    period: 3,
    dates: 'Feb – Apr 2026',
    projectSlug: 'battlebot',
    items: [michael],
  },
  {
    year: 1,
    period: 4,
    dates: 'Apr – Jun 2026',
    projectSlug: 'winnest',
    items: [oleksiiWinnest, caleb],
  },
];

/* ---------- Homepage: capabilities, stats, logos ---------- */

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