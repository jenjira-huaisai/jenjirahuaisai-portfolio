import Image from 'next/image';
import Container from './Container';
import { stats, clientLogos } from '@/data/content';
/*
 * Up to 4 logos: a still row, lined up with the 4 figures above.
 * 5 or more: a slow, endless marquee (desktop and mobile).
 * Adding a logo in data/content.ts is all it takes to switch.
 */
const MARQUEE_FROM = 5;

type Logo = (typeof clientLogos)[number];

function LogoImage({ logo, decorative }: { logo: Logo; decorative?: boolean }) {
  return (
    <Image
      src={logo.src}
      // The repeated copy in the marquee is decoration: no alt, no double reading
      alt={decorative ? '' : logo.alt}
      width={120}
      height={28}
      className={logo.portrait ? 'proof-logo-portrait' : undefined}
    />
  );
}

export default function ProofBar() {
    const isMarquee = clientLogos.length >= MARQUEE_FROM;
  return (
    <section className="proof" aria-label="Experience at a glance">
      <Container>
        <div className="proof-inner">
          <dl className="proof-figures">
            {stats.map((stat) => (
              <div className="proof-figure" key={stat.caption}>
                <dt className="sr-only">{stat.caption}</dt>
                <dd className="proof-number">{stat.number}</dd>
                <dd className="proof-caption">{stat.caption}</dd>
              </div>
            ))}
          </dl>

          <div className="proof-clients">
            <p className="proof-clients-label">WORKED WITH</p>
                        {isMarquee ? (
              <div className="proof-marquee">
                {/* Two identical lists side by side: when the first has
                    scrolled out, the second is exactly where it started,
                    so the loop has no visible jump */}
                <div className="proof-marquee-track">
                  <ul className="proof-marquee-list">
                    {clientLogos.map((logo) => (
                      <li key={logo.alt}>
                        <LogoImage logo={logo} />
                      </li>
                    ))}
                  </ul>
                  <ul className="proof-marquee-list" aria-hidden="true">
                    {clientLogos.map((logo) => (
                      <li key={logo.alt}>
                        <LogoImage logo={logo} decorative />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <ul className="proof-logos">
                {clientLogos.map((logo) => (
                  <li key={logo.alt}>
                    <LogoImage logo={logo} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
