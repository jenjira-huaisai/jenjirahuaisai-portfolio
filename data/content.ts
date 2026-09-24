/*
 * All page content lives here so sections stay presentational.
 * Adding a project later means adding one object, not touching JSX.
 */

export type Project = {
  slug: string;
  type: string;
  title: string;
  summary: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  prototypeUrl?: string;
  image: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: 'sukanya-thai-massage',
    type: 'Real client project',
    title: 'Sukanya Thai Massage',
    summary:
      'From client requirements to a responsive business website with Maps integration for a Thai massage studio.',
    role: 'Sole designer & developer',
    liveUrl: 'https://www.sukanyathaimassage.nl',
    githubUrl: 'https://github.com/jenjira-huaisai/sukanya-thai-massage',
    image: {
      src: '/images/projects/sukanya-card.png',
      alt: 'The Sukanya Thai Massage website shown on a laptop',
    },
  },
  {
    slug: 'zon-pedicure-salon',
    type: 'Real client project',
    title: 'Zon Pedicure Salon',
    summary:
      'From client requirements to a responsive website with a contact form and Maps integration for a medical pedicure practice.',
    role: 'Sole designer & developer',
    liveUrl: 'https://www.zonpedicuresalon.com',
    githubUrl: 'https://github.com/jenjira-huaisai/zon-pedicure-salon',
    image: {
      src: '/images/projects/zonpedicure-card.png',
      alt: 'The Zon Pedicure Salon website shown on a laptop',
    },
  },
  {
    slug: 'envitron',
    type: 'IT programme × real client project',
    title: 'Envitron',
    summary:
      'Researching and prototyping an energy-demand predicting solution for a single-building Energy Management System.',
    role: 'Scrum master · Team of 5',
    prototypeUrl: '#',
    githubUrl: 'https://github.com/jenjira-huaisai/envitron',
    image: {
      src: '/images/projects/envitron-card.png',
      alt: 'The Envitron energy demand prediction',
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
    quote: '[-]',
    name: 'Onpapha Phumdonkan',
    role: 'Business owner',
    organisation: 'Zon Pedicure Salon',
  },
  {
    id: 'sukanya',
    relation: 'Client',
    quote: '[-]',
    name: 'Sukanya Onbuakhaow',
    role: 'Business owner',
    organisation: 'Sukanya Oosterse Massage Techniek',
  },
  {
    id: 'caleb',
    relation: 'Teammate',
    quote: '[-]',
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

export const stats = [
  { number: '2', caption: 'Real client projects' },
  { number: '5', caption: 'Academic projects' },
];

export const clientLogos = [
  { src: '/images/logos/zon.svg', alt: 'Zon Pedicure Salon' },
  { src: '/images/logos/sukanya.svg', alt: 'Sukanya Oosterse Massage Techniek' },
  { src: '/images/logos/envitron.svg', alt: 'Envitron' },
];
