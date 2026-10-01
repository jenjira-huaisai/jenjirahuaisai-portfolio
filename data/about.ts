/* ---------- My journey ---------- */

export type JourneyStep = {
  period: string;
  title: string;
  text: string;
  /** The step that hasn't happened yet is drawn as an open dot */
  upcoming?: boolean;
};

export const journeyIntro =
  'I started my career as a teacher in Thailand. In 2025 I moved to the Netherlands to study IT at NHL Stenden. I now work across the stack, and my focus is UI and front-end: turning designs into interfaces that are clear, accessible and easy to use.';

export const journey: JourneyStep[] = [
  {
    period: 'Before 2025',
    title: 'Teacher in Thailand',
    text: 'Where I learned to make complex ideas simple and adapt to how each person thinks. Clear communication and problem-solving.',
  },
  {
    period: '2025',
    title: 'Moved to the Netherlands',
    text: 'Started a new chapter to combine design and technology, studying IT at NHL Stenden.',
  },
  {
    period: '2025 – 2026',
    title: 'Year 1 · NHL Stenden',
    text: 'Completed 4 course projects, 1 per period, plus 2 websites built independently for local businesses. Built my first full-stack web application (PHP, MySQL, JavaScript), live since 2025.',
  },
  {
    period: '2026 – 2027',
    title: 'Year 2 · NHL Stenden',
    text: 'School projects with real clients. Learning React and TypeScript; this site is developed with Next.js.',
  },
  {
    period: 'September 2027',
    title: 'Internship',
    text: 'Looking for a UI / front-end internship in an English-speaking team. Available from September 2027.',
    upcoming: true,
  },
];

/* ---------- Travel map ---------- */

export type Country = {
  /** Natural Earth code (ADM0_A3), matches the ids in data/world-map.ts */
  id: string;
  name: string;
  /** ISO 3166-1 alpha-2, lower case: the file name in flag-icons */
  flag: string;
};

export const homeCountry: Country = { id: 'THA', name: 'Thailand', flag: 'th' };

export const visitedCountries: Country[] = [
  { id: 'JPN', name: 'Japan', flag: 'jp' },
  { id: 'LAO', name: 'Laos', flag: 'la' },
  { id: 'MMR', name: 'Myanmar', flag: 'mm' },
  { id: 'SGP', name: 'Singapore', flag: 'sg' },
  { id: 'QAT', name: 'Qatar', flag: 'qa' },
  { id: 'NLD', name: 'Netherlands', flag: 'nl' },
  { id: 'DEU', name: 'Germany', flag: 'de' },
  { id: 'BEL', name: 'Belgium', flag: 'be' },
  { id: 'PRT', name: 'Portugal', flag: 'pt' },
];

/* ---------- Outside of study ---------- */

export type HobbyIcon = 'travel' | 'camera' | 'pen' | 'frame' | 'music';

export type Hobby = {
  icon: HobbyIcon;
  title: string;
  text: string;
  href?: string;
};

export const hobbiesIntro =
  'Outside of study, I make things with my heart, hands and ears. It sharpens how I see composition, colour and rhythm, and it shows up in the interfaces I build.';

export const hobbies: Hobby[] = [
  {
    icon: 'travel',
    title: 'Travel',
    // Counted from the list above, so it updates when a country is added
    text: `${visitedCountries.length} countries so far, exploring the world for new ideas and inspiration.`,
    href: '#where-ive-been',
  },
  {
    icon: 'camera',
    title: 'Photography',
    text: 'Framing, light and what to leave out.',
  },
  {
    icon: 'pen',
    title: 'Digital illustration',
    text: 'Drawing in Procreate.',
  },
  {
    icon: 'frame',
    title: 'Graphic design',
    text: 'Posters and visuals for fun and real clients.',
  },
  {
    icon: 'music',
    title: 'Phin',
    text: 'Playing the phin, a traditional lute from Isan in north-east Thailand.',
  },
];


/* ---------- Education & certificates ---------- */

export type EducationItem = {
  period: string;
  title: string;
  place: string;
  /** Extra line in plain text, e.g. the full programme name */
  detail?: string;
  /** Short link shown on its own line; keep the label to a few words */
  link?: { label: string; href: string };
};

export const education: EducationItem[] = [
  {
    period: '2025 – present',
    title: 'BSc Information Technology',
    place: 'NHL Stenden University of Applied Sciences, Netherlands',
  },
  {
    period: '2023',
    title: 'Master of Educational Administration',
    place: 'Khon Kaen University, Thailand',
    link: {
      label: 'Published thesis research (2024)',
      href: 'https://so02.tci-thaijo.org/index.php/jemmsu/article/view/266295',
    },
  },
  {
    period: '2022',
    title: 'CAMPUS-Asia6 Exchange Program, JASSO Scholarship',
    place: 'University of Tsukuba, Japan',
    detail:
      'Development Program for Professionals in Education Policy Management Contributing to Solving Global Issues',
    link: {
      label: 'About the programme',
      href: 'https://campusasia6.education.tsukuba.ac.jp',
    },
  },
  {
    period: '2015',
    title: 'Bachelor of Arts',
    place: 'Khon Kaen University, Thailand',
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  href: string;
};

export const certificates: Certificate[] = [
  {
    title: 'Figma for UI/UX: Master Web Design in Figma',
    issuer: 'Packt',
    year: '2026',
    href: 'https://www.coursera.org/account/accomplishments/verify/9F6YQJY3ZWZH',
  },
  {
    title: 'Introduction to Agile Development and Scrum',
    issuer: 'IBM',
    year: '2026',
    href: 'https://www.coursera.org/account/accomplishments/verify/5HHNZ3TJ3FG1',
  },
  {
    title: 'Introduction to UX/UI Design',
    issuer: 'IBM',
    year: '2026',
    href: 'https://www.coursera.org/account/accomplishments/verify/OO4IMWA8HFL4',
  },
];

/* ---------- Languages ---------- */

export const languages = [
  { name: 'Thai', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'Dutch', level: 'Learning' },
];