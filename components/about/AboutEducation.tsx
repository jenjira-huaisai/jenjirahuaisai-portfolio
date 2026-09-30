import Container from '../Container';
import { ArrowUpRight } from '../Arrows';
import { certificates, education, languages } from '@/data/about';
import styles from './about.module.css';

/*
 * Links are quiet at rest (text + small arrow, no underline)
 * and underline on hover, so the section isn't covered in lines.
 */
function ExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: string;
}) {
  // Keep the last word and the arrow together, so the arrow
  // never wraps onto a line by itself
  const splitAt = children.lastIndexOf(' ') + 1;
  const start = children.slice(0, splitAt);
  const lastWord = children.slice(splitAt);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.externalLink}${className ? ` ${className}` : ''}`}
    >
      {start}
      <span className={styles.noWrap}>
        {lastWord}
        <ArrowUpRight />
      </span>
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
                    {item.detail && <p className={styles.recordDetail}>{item.detail}</p>}
                    {item.link && (
                      <ExternalLink href={item.link.href} className={styles.recordLink}>
                        {item.link.label}
                      </ExternalLink>
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
                    <dd>{language.level}</dd>
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