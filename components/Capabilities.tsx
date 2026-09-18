import Link from 'next/link';
import Container from './Container';
import { ArrowRight } from './Arrows';
import { capabilities } from '@/data/content';

export default function Capabilities() {
  return (
    <section className="section" aria-labelledby="capabilities-title">
      <Container>
        <p className="section-label">CAPABILITIES</p>

        <h2 id="capabilities-title" className="section-title capabilities-title">
          Broad in technology.
          <br />
          Deeper in UI and front-end.
        </h2>

        <ul className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <li className="capability" key={capability.name}>
              <div className="capability-body">
                <p className="capability-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="capability-name">{capability.name}</h3>
                <p className="capability-tools">{capability.tools}</p>
              </div>
            </li>
          ))}
        </ul>

        <Link href="/capabilities" className="text-link">
          View my capabilities
          <ArrowRight />
        </Link>
      </Container>
    </section>
  );
}
