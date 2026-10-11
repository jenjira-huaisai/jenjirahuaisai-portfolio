import type { Metadata } from 'next';
import Container from '@/components/Container';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Jenjira Huaisai',
  description:
    'Get in touch with Jenjira Huaisai about a UI or front-end internship from September 2027, or a project.',
};

export default function ContactPage() {
  return (
    <section className="contact-page" aria-labelledby="contact-page-title">
      <Container>
        {/* Desktop: text on the left (40%), form on the right (60%).
            Tablet and mobile: one column, text above the form. */}
        <div className="contact-page-inner">
          <div className="contact-page-copy">
            <p className="section-label">CONTACT</p>
            <h1 id="contact-page-title" className="contact-page-title">
              Let’s talk.
            </h1>
            <p className="contact-page-intro">
              For a UI or front-end internship from September 2027, or a project you have in mind.
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
