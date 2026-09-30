import type { Metadata } from 'next';
import AboutJourney from '@/components/about/AboutJourney';
import AboutHobbies from '@/components/about/AboutHobbies';
import TravelMap from '@/components/about/TravelMap';
import AboutEducation from '@/components/about/AboutEducation';
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'About — Jenjira Huaisai',
  description:
    'From teacher in Thailand to IT student at NHL Stenden in the Netherlands, focused on UI and front-end development. Available for an internship from September 2027.',
};

export default function AboutPage() {
  return (
    <>
      <AboutJourney />
      <AboutHobbies />
      <TravelMap />
      <AboutEducation />
      <ContactCTA />
    </>
  );
}