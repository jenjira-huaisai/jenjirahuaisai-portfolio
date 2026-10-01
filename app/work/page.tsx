import type { Metadata } from 'next';
import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import ContactCTA from '@/components/ContactCTA';
import { projects, studyYears } from '@/data/content';

export const metadata: Metadata = {
  title: 'Work — Jenjira Huaisai',
  description:
    'All projects by Jenjira Huaisai, year by year: school modules at NHL Stenden, real client projects and independent work.',
};

export default function WorkPage() {
  return (
    <>
      <section className="work-intro" aria-labelledby="work-page-title">
        <Container>
          <p className="section-label">WORK</p>
          <h1 id="work-page-title" className="section-title">
            All projects,
            <br />
            year by year.
          </h1>
          <p className="work-intro-lead">
            School modules, real clients and projects of my own, 
            <br />
            in the order I
            built them, so you can see how my skills have grown.
          </p>

          <nav className="year-nav" aria-label="Jump to a year">
            {studyYears.map((studyYear) => (
              <a
                key={studyYear.year}
                href={`#year-${studyYear.year}`}
                className="button-secondary"
              >
                Year {studyYear.year}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {studyYears.map((studyYear) => {
        const yearProjects = projects.filter((p) => p.year === studyYear.year);
        const titleId = `year-${studyYear.year}-title`;
        const progress = studyYear.progress;

        return (
          <section
            key={studyYear.year}
            id={`year-${studyYear.year}`}
            className="year-section"
            aria-labelledby={titleId}
          >
            <Container>
              <div className="year-head">
                <div>
                  <p className="section-label">
                    YEAR {studyYear.year} · {studyYear.period}
                  </p>
                  <h2 id={titleId} className="year-title">
                    {studyYear.title}
                  </h2>
                </div>

                <div>
                  <p className="year-focus">{studyYear.focus}</p>
                  {studyYear.format && (
                    <p className="year-format">{studyYear.format}</p>
                  )}
                </div>
              </div>

              <ul className="work-grid">
                {yearProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </ul>

              {progress && (
                <p className="year-progress">
                  {/* Filled dot = done, open dot = still to come.
                      Hidden from screen readers: the text says the same. */}
                  <span className="year-progress-dots" aria-hidden="true">
                    {Array.from({ length: progress.total }, (_, i) => (
                      <span
                        key={i}
                        className={i < progress.done ? 'is-done' : undefined}
                      />
                    ))}
                  </span>
                  Period {progress.done} of {progress.total} ·{' '}
                  {progress.note}
                </p>
              )}
            </Container>
          </section>
        );
      })}

      <ContactCTA />
    </>
  );
}