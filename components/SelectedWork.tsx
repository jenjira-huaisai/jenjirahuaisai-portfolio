import Link from 'next/link';
import Container from './Container';
import ProjectCard from './ProjectCard';
import { ArrowRight } from './Arrows';
import { projects } from '@/data/content';

// The homepage shows only the projects marked featured
const featured = projects.filter((project) => project.featured);

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
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </Container>
    </section>
  );
}