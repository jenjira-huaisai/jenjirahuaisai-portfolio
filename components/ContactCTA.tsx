import Link from 'next/link';
import Container from './Container';
import { ArrowRight } from './Arrows';

export default function ContactCTA() {
  return (
    <section className="section contact" aria-labelledby="contact-title">
      <Container>
        <p className="contact-eyebrow">INTERNSHIP 2027</p>

        <h2 id="contact-title" className="section-title contact-title">
          Let&rsquo;s build something that matters.
        </h2>

        <p className="contact-text">
          Available for a UI or front-end internship in the Netherlands from
          September 2027. Also open to projects, collaborations and
          conversations.
        </p>

        <Link href="/contact" className="button-primary">
          Send a message
          <ArrowRight />
        </Link>

        <p className="contact-links">
          <a href="mailto:info@jenjirahuaisai.com">info@jenjirahuaisai.com</a>
          <span className="contact-separator" aria-hidden="true">
            ·
          </span>
          <a
            href="https://www.linkedin.com/in/jenjira-huaisai"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="contact-separator" aria-hidden="true">
            ·
          </span>
          <a
            href="https://github.com/jenjira-huaisai"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </Container>
    </section>
  );
}
