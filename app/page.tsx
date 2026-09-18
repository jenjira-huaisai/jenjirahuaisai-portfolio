import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import SelectedWork from '@/components/SelectedWork';
import Feedback from '@/components/Feedback';
import Capabilities from '@/components/Capabilities';
import AboutTeaser from '@/components/AboutTeaser';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <SelectedWork />
      <Feedback />
      <Capabilities />
      <AboutTeaser />
      <ContactCTA />
    </>
  );
}
