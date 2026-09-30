import Container from '../Container';
import HobbyIcon from './HobbyIcon';
import { hobbies, hobbiesIntro } from '@/data/about';
import styles from './about.module.css';

export default function AboutHobbies() {
  return (
    <section className="section" aria-labelledby="hobbies-title">
      <Container>
        <p className="section-label">OUTSIDE OF STUDY</p>
        <h2 id="hobbies-title" className="section-title">
          What trains my eye.
        </h2>
        <p className={styles.lead}>{hobbiesIntro}</p>

        <ul className={styles.hobbyGrid}>
          {hobbies.map((hobby) => (
            <li key={hobby.title} className={styles.hobby}>
              <span className={styles.hobbyIcon}>
                <HobbyIcon name={hobby.icon} />
              </span>
              <div>
                <h3 className={styles.hobbyTitle}>
                  {hobby.href ? (
                    <a href={hobby.href} className={styles.inlineLink}>
                      {hobby.title}
                    </a>
                  ) : (
                    hobby.title
                  )}
                </h3>
                <p className={styles.muted}>{hobby.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}