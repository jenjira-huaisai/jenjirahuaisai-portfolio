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
        <div className="contact-page-inner">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
