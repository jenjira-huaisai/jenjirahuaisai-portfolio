import Link from 'next/link';
import Container from './Container';
import FeedbackCard from './FeedbackCard';
import { ArrowRight } from './Arrows';
import { homeTestimonials } from '@/data/content';

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
          {homeTestimonials.map((item) => (
            <li key={item.id}>
              <FeedbackCard item={item} />
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