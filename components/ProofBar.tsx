import Image from 'next/image';
import Container from './Container';
import { stats, clientLogos } from '@/data/content';

export default function ProofBar() {
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
            <ul className="proof-logos">
              {clientLogos.map((logo) => (
                <li key={logo.alt}>
                  <Image src={logo.src} alt={logo.alt} width={120} height={28} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
