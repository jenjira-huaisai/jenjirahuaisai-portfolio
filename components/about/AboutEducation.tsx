import Container from '../Container';
import { ArrowUpRight } from '../Arrows';
import { certificates, education, languages } from '@/data/about';
import styles from './about.module.css';

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
      {children}
      <ArrowUpRight />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function AboutEducation() {
  return (
    <section className="section" aria-labelledby="education-title">
      <Container>
        <div className={styles.educationLayout}>
          <div>
            <h2 id="education-title" className="section-label">
              EDUCATION
            </h2>
            <ol className={styles.recordList}>
              {education.map((item) => (
                <li key={item.title} className={styles.record}>
                  <p className={styles.recordPeriod}>{item.period}</p>
                  <div>
                    <h3 className={styles.recordTitle}>{item.title}</h3>
                    <p className={styles.muted}>{item.place}</p>
                    {item.note && (
                      <p className={styles.recordNote}>
                        {item.note.href ? (
                          <ExternalLink href={item.note.href}>{item.note.label}</ExternalLink>
                        ) : (
                          item.note.label
                        )}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.sideColumn}>
            <div>
              <h2 className="section-label">CERTIFICATES</h2>
              <ul className={styles.plainList}>
                {certificates.map((cert) => (
                  <li key={cert.href}>
                    <ExternalLink href={cert.href}>{cert.title}</ExternalLink>
                    <p className={styles.muted}>
                      {cert.issuer} · {cert.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="section-label">LANGUAGES</h2>
              <dl className={styles.languageList}>
                {languages.map((language) => (
                  <div key={language.name}>
                    <dt>{language.name}</dt>
                    <dd className={styles.muted}>{language.level}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}