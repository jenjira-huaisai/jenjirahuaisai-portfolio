import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import FeedbackCard from '@/components/FeedbackCard';
import {
  clientFeedback,
  teammateFeedback,
  projects,
  studyYears,
} from '@/data/content';

export const metadata: Metadata = {
  title: 'Feedback — Jenjira Huaisai',
  description:
    'Feedback from real clients, my employer and my project teammates at NHL Stenden.',
};

/* Only show a study year once it has teammate feedback */
const yearsWithFeedback = studyYears.filter((studyYear) =>
  teammateFeedback.some((block) => block.year === studyYear.year),
);

export default function FeedbackPage() {
  return (
    <>
      <section className="feedback-intro" aria-labelledby="feedback-page-title">
        <Container>
          <p className="section-label">FEEDBACK</p>
          <h1 id="feedback-page-title" className="section-title">
            What clients
            <br />
            and teammates say.
          </h1>
          <p className="feedback-intro-lead">
            Feedback from real clients, my employer and my project teammates at NHL Stenden.
          </p>

          <nav className="year-nav" aria-label="Jump to a group">
            <a href="#clients" className="button-secondary">
              Clients &amp; employer
            </a>
            <a href="#teammates" className="button-secondary">
              Teammates
            </a>
          </nav>
        </Container>
      </section>

      <section
        id="clients"
        className="feedback-group"
        aria-labelledby="clients-title"
      >
        <Container>
          <h2 id="clients-title" className="section-label feedback-group-label">
            CLIENTS &amp; EMPLOYER
          </h2>

          <ul className="feedback-page-grid">
            {clientFeedback.map((item) => (
              <li key={item.id}>
                <FeedbackCard item={item} showDate />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        id="teammates"
        className="feedback-group"
        aria-labelledby="teammates-title"
      >
        <Container>
          <h2 id="teammates-title" className="section-label feedback-group-label">
            TEAMMATES
          </h2>

          {yearsWithFeedback.map((studyYear) => (
            <div key={studyYear.year} className="feedback-year">
              <h3 className="section-label">
                YEAR {studyYear.year} · {studyYear.period}
              </h3>

              {teammateFeedback
                .filter((block) => block.year === studyYear.year)
                .map((block) => {
                  // The title comes from the project list, so it never gets out of sync
                  const project = projects.find((p) => p.slug === block.projectSlug);
                  if (!project) return null;

                  return (
                    <div
                      key={`${block.year}-${block.period}`}
                      className="feedback-period"
                    >
                      <div className="feedback-period-head">
                        <p className="feedback-period-dates">
                          Period {block.period} · {block.dates}
                        </p>
                        <h4 className="feedback-period-title">
                          {project.hasCaseStudy ? (
                            <Link href={`/work/${project.slug}`} className="text-link">
                              {project.title}
                            </Link>
                          ) : (
                            project.title
                          )}
                        </h4>
                      </div>

                      <ul className="feedback-page-grid">
                        {block.items.map((item) => (
                          <li key={item.id}>
                            <FeedbackCard item={item} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}