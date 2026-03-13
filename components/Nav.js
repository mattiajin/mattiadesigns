// [UPDATED] Bilingual nav with hamburger menu and language toggle
import { useState } from 'react'
import Link from 'next/link'
import { useLang, t } from '../context/LangContext'

const navLabels = {
  work:    { en: 'Work',    zh: '作品' },
  about:   { en: 'About',   zh: '关于' },
  resume:  { en: 'Resume',  zh: '简历' },
  contact: { en: 'Contact', zh: '联系' },
}

export default function Nav() {
  const { lang, setLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* [UPDATED] Skip to main content — accessibility */}
      <a href="#main-content" className="skip-link">
        {lang === 'zh' ? '跳转到主要内容' : 'Skip to main content'}
      </a>

      <nav className="nav" aria-label="Main navigation">
        <div className="nav__inner">
          <Link href="/" className="nav__logo" onClick={closeMenu}>
            mattia<span>.</span>designs
          </Link>

          {/* Desktop links */}
          <ul className="nav__links" role="list">
            <li><Link href="/#work">{t(navLabels.work, lang)}</Link></li>
            <li><Link href="/about">{t(navLabels.about, lang)}</Link></li>
            <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">{t(navLabels.resume, lang)}</a></li>
            <li><a href="#footer">{t(navLabels.contact, lang)}</a></li>
          </ul>

          {/* [UPDATED] Language toggle — desktop */}
          <div className="lang-toggle" aria-label="Language selector">
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
            <span className="lang-divider" aria-hidden="true">/</span>
            <button className={`lang-btn${lang === 'zh' ? ' active' : ''}`} onClick={() => setLang('zh')} aria-pressed={lang === 'zh'}>中</button>
          </div>

          {/* [UPDATED] Hamburger — mobile */}
          <button
            className={`nav__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* [UPDATED] Mobile dropdown menu */}
      <div className={`nav__mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <div className="nav__mobile-lang">
          <button className={lang === 'en' ? 'active' : ''} onClick={() => { setLang('en'); closeMenu(); }}>EN — English</button>
          <button className={lang === 'zh' ? 'active' : ''} onClick={() => { setLang('zh'); closeMenu(); }}>中 — 中文</button>
        </div>
        <Link href="/#work" onClick={closeMenu}>{t(navLabels.work, lang)}</Link>
        <Link href="/about" onClick={closeMenu}>{t(navLabels.about, lang)}</Link>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>{t(navLabels.resume, lang)}</a>
        <Link href="/#footer" onClick={closeMenu}>{t(navLabels.contact, lang)}</Link>
      </div>
    </>
  )
}
