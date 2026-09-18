import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import { ArrowRight, ArrowUpRight } from './Arrows';
import { projects } from '@/data/content';

export default function SelectedWork() {
  return (
    <section
      className="section"
      id="selected-work"
      aria-labelledby="selected-work-title"
    >
      <Container>
        <div className="work-header">
          <div>
            <p className="section-label">SELECTED WORK</p>
            <h2 id="selected-work-title" className="section-title">
              From problems
              <br />
              to working products.
            </h2>
          </div>

          <Link href="/work" className="text-link">
            View all work
            <ArrowRight />
          </Link>
        </div>

        <ul className="work-grid">
          {projects.map((project) => (
            <li className="work-card" key={project.slug}>
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={800}
                height={600}
                className="work-card-image"
                sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 33vw"
              />

              <p className="work-card-type">{project.type}</p>

              <h3 className="work-card-title">{project.title}</h3>

              <p className="work-card-summary">{project.summary}</p>

              <p className="work-card-meta">
                <span className="work-card-role">{project.role}</span>

                {project.liveUrl && (
                  <a
                    className="work-card-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site
                    <ArrowUpRight />
                    <span className="sr-only">
                      for {project.title} (opens in a new tab)
                    </span>
                  </a>
                )}

                {project.prototypeUrl && (
                  <a
                    className="work-card-link"
                    href={project.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prototype
                    <ArrowUpRight />
                    <span className="sr-only">
                      for {project.title} (opens in a new tab)
                    </span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    className="work-card-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <ArrowUpRight />
                    <span className="sr-only">
                      repository for {project.title} (opens in a new tab)
                    </span>
                  </a>
                )}
              </p>

              <Link
                href={`/work/${project.slug}`}
                className="text-link work-card-cta"
              >
                View project
                <ArrowRight />
                <span className="sr-only">: {project.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
