import Link from 'next/link';
import Container from './Container';
import { ArrowRight } from './Arrows';
import { testimonials } from '@/data/content';

export default function Feedback() {
  return (
    <section className="section feedback" aria-labelledby="feedback-title">
      <Container>
        <p className="section-label">FEEDBACK</p>

        <h2 id="feedback-title" className="section-title feedback-title">
          What clients
          <br />
          and teammates say.
        </h2>

        <ul className="feedback-grid">
          {testimonials.map((item) => (
            <li key={item.id}>
              {/* figure/blockquote keeps the quote tied to its author
                  for screen readers, not just visually. */}
              <figure className="feedback-card">
                <div className="feedback-card-head">
                  <span className="feedback-mark" aria-hidden="true">
                    &rdquo;
                  </span>
                  <span className="feedback-role">
                    {item.relation.toUpperCase()}
                  </span>
                </div>

                <blockquote className="feedback-quote">{item.quote}</blockquote>

                <figcaption className="feedback-person">
                  <span className="feedback-name">{item.name}</span>
                  {item.role}
                  <br />
                  {item.organisation}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <Link href="/feedback" className="text-link feedback-more">
          See more
          <ArrowRight />
        </Link>
      </Container>
    </section>
  );
}
