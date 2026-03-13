// [UPDATED] Reusable styled image placeholder for case study sections
import { useLang, t } from '../context/LangContext'

const label = { en: 'Image coming soon', zh: '图片即将上线' }

export default function ImagePlaceholder({ bgColor, className = 'cs-visual', aspectRatio }) {
  const { lang } = useLang()
  return (
    <div className={className} style={aspectRatio ? { aspectRatio, backgroundColor: bgColor || 'var(--color-surface)' } : { backgroundColor: bgColor || 'var(--color-surface)' }} role="img" aria-label={t(label, lang)}>
      <svg className="placeholder-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
      <span className="placeholder-text">{t(label, lang)}</span>
    </div>
  )
}
