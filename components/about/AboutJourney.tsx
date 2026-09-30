import Container from '../Container';
import { journey, journeyIntro } from '@/data/about';
import styles from './about.module.css';

export default function AboutJourney() {
  return (
    <section className={styles.intro} aria-labelledby="about-page-title">
      <Container>
        <div className={styles.journeyLayout}>
          <div>
            <p className="section-label">MY JOURNEY</p>
            <h1 id="about-page-title" className={`section-title ${styles.pageTitle}`}>
              From Thailand to the Netherlands
            </h1>
            <p className={styles.lead}>{journeyIntro}</p>
          </div>

          {/* An ordered list: the order of the steps is the meaning */}
          <ol className={styles.timeline} aria-label="My journey so far">
            {journey.map((step) => (
              <li
                key={step.title}
                className={`${styles.step}${step.upcoming ? ` ${styles.stepUpcoming}` : ''}`}
              >
                <p className={styles.stepPeriod}>{step.period}</p>
                <span className={styles.stepRail} aria-hidden="true" />
                <div>
                  <h2 className={styles.stepTitle}>{step.title}</h2>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}