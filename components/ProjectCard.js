// [UPDATED] Reads from content.json, bilingual, styled placeholder, display-only tags
import Link from 'next/link'
import { useLang, t } from '../context/LangContext'

const labels = {
  viewCase: { en: 'View case study', zh: '查看案例' },
  imgComing: { en: 'Image coming soon', zh: '图片即将上线' },
}

export default function ProjectCard({ project }) {
  const { lang } = useLang()

  return (
    <Link href={`/projects/${project.id}`} className="project-card" aria-label={`${t(project.title, lang)} — ${t(project.summary, lang)}`}>
      <div className="project-card__image" style={{ backgroundColor: project.heroColor || '#EEE9E0' }}>
        {project.heroImage ? (
          <img src={project.heroImage} alt={t(project.title, lang)} loading="lazy" />
        ) : (
          // [UPDATED] Styled placeholder with camera icon
          <div className="project-card__image-placeholder">
            <svg className="placeholder-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            <span className="placeholder-text">{t(labels.imgComing, lang)}</span>
          </div>
        )}
      </div>
      <div className="project-card__body">
        {/* [UPDATED] Tags — display only, no hover/click */}
        <div className="project-card__tags" aria-label="Project categories">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <h3 className="project-card__title">{t(project.title, lang)}</h3>
        <p className="project-card__desc">{t(project.summary, lang)}</p>
        <div className="project-card__meta">
          <span className="project-card__impact">{t(project.metric, lang)}</span>
          <span className="project-card__link">{t(labels.viewCase, lang)} →</span>
        </div>
      </div>
    </Link>
  )
}
