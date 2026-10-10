import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from './Arrows';
import type { Project } from '@/data/content';

/*
 * One project card, used by Selected Work (homepage) and the Work page,
 * so both always look the same and a fix here fixes both.
 */

/* External links share the same markup, so they come from one list */
function getLinks(project: Project) {
  return [
    { label: 'Live site', href: project.liveUrl, srText: `for ${project.title}` },
    { label: 'Prototype', href: project.prototypeUrl, srText: `for ${project.title}` },
    { label: 'GitHub', href: project.githubUrl, srText: `repository for ${project.title}` },
  ].filter((link) => link.href);
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="work-card">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={800}
        height={600}
        className="work-card-image"
        sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 33vw"
      />

      <p className="work-card-type">{project.type}</p>
      <p className="work-card-date">{project.date}</p>

      <h3 className="work-card-title">{project.title}</h3>

      {project.badge && <p className="work-card-badge">{project.badge}</p>}

      <p className="work-card-summary">{project.summary}</p>

      <p className="work-card-meta">
        <span className="work-card-role">{project.role}</span>

        {getLinks(project).map((link) => (
          <a
            key={link.label}
            className="work-card-link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
            <ArrowUpRight />
            <span className="sr-only">
              {' '}
              {link.srText} (opens in a new tab)
            </span>
          </a>
        ))}
      </p>

      {/* Only link to a case study that really exists — no 404s */}
      {project.hasCaseStudy && (
        <Link href={`/work/${project.slug}`} className="text-link work-card-cta">
          Case study
          <ArrowRight />
          <span className="sr-only">: {project.title}</span>
        </Link>
      )}
    </li>
  );
}