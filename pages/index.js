// [UPDATED] Homepage — bilingual, tag filter, reads from content.json
import { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { useLang, t } from '../context/LangContext'
import content from '../content.json'

const ui = {
  selectedWork: { en: 'Selected Work', zh: '精选作品' },
  all:          { en: 'All',           zh: '全部' },
  designingFor: { en: 'Designing for', zh: '设计为了' },
  theAIEra:     { en: 'the AI era.',   zh: 'AI 时代。' },
  aboutText:    { en: "I'm a product designer focused on AI systems, brand identity, and enterprise experience. My work sits at the intersection of visual clarity and interaction complexity — making powerful tools feel approachable.", zh: '我是一名专注于 AI 系统、品牌识别和企业体验的产品设计师。我的工作处于视觉清晰度与交互复杂性的交叉点——让强大的工具变得平易近人。' },
  readMore:     { en: 'Read More →',   zh: '了解更多 →' },
  viewWork:     { en: 'View Work',     zh: '查看作品' },
  downloadCV:   { en: 'Download Resume', zh: '下载简历' },
}

export default function Home() {
  const { lang } = useLang()
  const [activeTag, setActiveTag] = useState('All')

  // [UPDATED] Only enabled projects
  const projects = content.projects.filter(p => p.enabled)

  // Collect all unique tags
  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))]

  // [UPDATED] Tag filter
  const filtered = activeTag === 'All' ? projects : projects.filter(p => p.tags.includes(activeTag))

  const person = content.person

  return (
    <>
      <Head>
        <title>Mattia Jin — {t(person.title, lang)}</title>
        <meta name="description" content="AI product designer specializing in brand identity and enterprise UX." />
        <link rel="canonical" href="https://mattiadesigns.vercel.app/" />
        <meta property="og:title" content={`Mattia Jin — ${t(person.title, lang)}`} />
        <meta property="og:description" content="AI product designer specializing in brand identity and enterprise UX." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://mattiadesigns.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Mattia Jin — ${t(person.title, lang)}`} />
        <meta name="twitter:description" content="AI product designer specializing in brand identity and enterprise UX." />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <Nav />

      <main id="main-content">
        {/* ── Hero ── */}
        <section className="hero" aria-label="Introduction">
          <div className="container">
            <p className="hero__label fade-up fade-up-1">{t(person.title, lang)}</p>
            <h1 className="hero__name fade-up fade-up-2">
              {/* [UPDATED] Full name Mattia Jin */}
              Mattia Jin<br /><em>designs.</em>
            </h1>
            <p className="hero__statement fade-up fade-up-3">{t(person.heroTagline, lang)}</p>
            <div className="hero__actions fade-up fade-up-4">
              <a href="#work" className="btn btn--primary">{t(ui.viewWork, lang)}</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">{t(ui.downloadCV, lang)}</a>
            </div>
          </div>
        </section>

        {/* ── Selected Work ── */}
        <section className="work" id="work" aria-label={t(ui.selectedWork, lang)}>
          <div className="container">
            <p className="section-label">{t(ui.selectedWork, lang)}</p>

            {/* [UPDATED] Tag filter */}
            <div className="tag-filter" role="group" aria-label="Filter projects by tag">
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`tag-filter__btn${activeTag === tag ? ' active' : ''}`}
                  onClick={() => setActiveTag(tag)}
                  aria-pressed={activeTag === tag}
                >
                  {tag === 'All' ? t(ui.all, lang) : tag}
                </button>
              ))}
            </div>

            <div className="project-grid">
              {filtered.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ── About Preview ── */}
        <section className="about-preview" aria-label="About">
          <div style={{ padding: '0 var(--space-6)' }}>
            <h2 className="about-preview__title">
              {t(ui.designingFor, lang)}<br /><em>{t(ui.theAIEra, lang)}</em>
            </h2>
          </div>
          <div style={{ padding: '0 var(--space-6)' }}>
            <p className="about-preview__text">{t(ui.aboutText, lang)}</p>
            <a href="/about" className="btn btn--secondary">{t(ui.readMore, lang)}</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
