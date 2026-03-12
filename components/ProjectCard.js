import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-card__image">
        <div
          className="project-card__image-placeholder"
          style={{ backgroundColor: project.heroColor || '#EEE9E0' }}
        >
          [ hero image ]
        </div>
      </div>
      <div className="project-card__body">
        <div className="project-card__tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__meta">
          <span className="project-card__impact">{project.impact}</span>
          <span className="project-card__link">
            View case study <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
