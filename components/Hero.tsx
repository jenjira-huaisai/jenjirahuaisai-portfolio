import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import { ArrowRight, ArrowDown } from './Arrows';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container>
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-eyebrow">IT STUDENT · DESIGN-MINDED DEVELOPER</p>

            <h1 id="hero-title" className="hero-title">
              Design it.
              <br />
              Build it.
              <br />
              Ship it.
            </h1>

            {/* One paragraph, no forced line breaks — max-width controls
                where it wraps, so it holds up at every screen size. */}
            <div className="hero-description">
              <p>I&apos;m Jenjira Huaisai, an IT student at NHL Stenden.</p>
              <p>Full-stack foundations across the IT programme.</p>
              <p>Growing deeper in UI and front-end development.</p>
            </div>

            <div className="hero-actions">
              <Link href="#selected-work" className="button-primary">
                View my work
                <ArrowRight />
              </Link>

              <a
                href="/jenjira-huaisai-cv.pdf"
                className="hero-secondary-action"
                download
              >
                Download CV
                <ArrowDown />
                <span className="sr-only"> (PDF)</span>
              </a>
            </div>

            <p className="hero-status">
              <span className="hero-status-line" aria-hidden="true" />
              LOOKING FOR · OPPORTUNITIES · INTERNSHIP 2027
            </p>
          </div>

          <div className="hero-visual">
            {/* width/height describe the source file's aspect ratio,
                not the rendered size — export the PNG at 1000×1400
                so it stays sharp on high-density screens. */}
            <Image
              src="/images/jenjira-portrait.png"
              alt="Jenjira Huaisai, standing with her arms folded"
              width={1000}
              height={1400}
              className="hero-portrait"
              priority
              sizes="(max-width: 64rem) 70vw, 35vw"
            />
          </div>

          <a href="#selected-work" className="hero-scroll">
            <span className="hero-scroll-text">SCROLL TO SEE MY WORK</span>
            <span className="hero-scroll-line" aria-hidden="true" />
            <ArrowDown length={20} />
          </a>
        </div>
      </Container >
    </section >
  );
}
