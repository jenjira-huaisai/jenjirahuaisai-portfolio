import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import { ArrowRight } from './Arrows';

export default function AboutTeaser() {
  return (
    <section className="section" aria-labelledby="about-title">
      <Container>
        <div className="about-inner">
          <Image
            src="/images/jenjira-portrait-about.png"
            alt="Jenjira Huaisai"
            width={500}
            height={700}
            className="about-portrait"
            sizes="(max-width: 64rem) 60vw, 35vw"
          />

          <div>
            <h2 id="about-title" className="section-title about-title">
              I care about how things work and how they feel.
            </h2>

            <p className="about-text">
              Focused on product design, UI and front-end development. From
              problems to solutions.
            </p>

            <Link href="/about" className="text-link">
              More about me
              <ArrowRight />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
