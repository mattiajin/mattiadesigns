// [UPDATED] Shared case study layout — all project pages use this
import Head from 'next/head'
import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'
import BackToTop from './BackToTop'
import ImagePlaceholder from './ImagePlaceholder'
import { useLang, t } from '../context/LangContext'
import content from '../content.json'

const ui = {
  allWork:     { en: 'All Work',    zh: '全部作品' },
  work:        { en: 'Work',        zh: '作品' },
  problem:     { en: 'Problem',     zh: '问题' },
  research:    { en: 'Research',    zh: '研究' },
  process:     { en: 'Process',     zh: '过程' },
  solution:    { en: 'Solution',    zh: '解决方案' },
  impact:      { en: 'Impact',      zh: '影响' },
  reflection:  { en: 'Reflection',  zh: '反思' },
  role:        { en: 'Role',        zh: '角色' },
  timeline:    { en: 'Timeline',    zh: '时间线' },
  team:        { en: 'Team',        zh: '团队' },
  tools:       { en: 'Tools',       zh: '工具' },
  metric:      { en: 'Metric',      zh: '指标' },
  result:      { en: 'Result',      zh: '结果' },
  baseline:    { en: 'Baseline',    zh: '基准' },
  nextProject: { en: 'Next Project', zh: '下一个项目' },
  backHome:    { en: '← Back to Home', zh: '← 返回首页' },
  contactMe:   { en: 'Contact Me →', zh: '联系我 →' },
  imgComing:   { en: 'Image coming soon', zh: '图片即将上线' },
}

export default function CaseStudy({ project }) {
  const { lang } = useLang()
  const s = project.sections
  const allProjects = content.projects.filter(p => p.enabled)
  const currentIndex = allProjects.findIndex(p => p.id === project.id)
  const nextProject = project.nextProject ? allProjects.find(p => p.id === project.nextProject) : null
  const isLast = !nextProject || currentIndex === allProjects.length - 1

  const projectTitle = t(project.title, lang)

  return (
    <>
      <Head>
        <title>{projectTitle} — Mattia Jin</title>
        <meta name="description" content={t(project.summary, lang)} />
        <link rel="canonical" href={`https://mattiadesigns.vercel.app/projects/${project.id}/`} />
        <meta property="og:title" content={`${projectTitle} — Mattia Jin`} />
        <meta property="og:description" content={t(project.summary, lang)} />
        <meta property="og:url" content={`https://mattiadesigns.vercel.app/projects/${project.id}/`} />
        <meta property="og:type" content="website" />
      </Head>

      <Nav />

      <main id="main-content" className="case-study">
        <div className="container">

          {/* ── Intro ── */}
          <article className="case-study-intro">
            {/* [UPDATED] Breadcrumb */}
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep" aria-hidden="true">/</span>
              <Link href="/#work">{t(ui.work, lang)}</Link>
              <span className="breadcrumb__sep" aria-hidden="true">/</span>
              <span className="breadcrumb__current">{projectTitle}</span>
            </nav>

            <Link href="/#work" className="back-link">← {t(ui.allWork, lang)}</Link>

            <h1 className="case-study-intro__title">{projectTitle}</h1>
            <p className="case-study-intro__desc">{t(project.summary, lang)}</p>

            {/* Hero image / placeholder */}
            {project.heroImage ? (
              <div className="case-study-hero" style={{ padding: 0 }}>
                <img src={project.heroImage} alt={projectTitle} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              </div>
            ) : (
              <ImagePlaceholder className="case-study-hero" bgColor={project.heroColor} />
            )}

            {/* Meta */}
            <div className="case-study-meta">
              <div className="meta-item"><p className="meta-item__label">{t(ui.role, lang)}</p><p className="meta-item__value">{t(project.role, lang)}</p></div>
              <div className="meta-item"><p className="meta-item__label">{t(ui.timeline, lang)}</p><p className="meta-item__value">{t(project.timeline, lang)}</p></div>
              <div className="meta-item"><p className="meta-item__label">{t(ui.team, lang)}</p><p className="meta-item__value">{t(project.team, lang)}</p></div>
              <div className="meta-item"><p className="meta-item__label">{t(ui.tools, lang)}</p><p className="meta-item__value">{project.tools.join(', ')}</p></div>
            </div>
          </article>

          {/* ── Problem ── */}
          {s.problem && (
            <section className="cs-section" aria-label={t(ui.problem, lang)}>
              <p className="cs-section__label">{t(ui.problem, lang)}</p>
              <div className="cs-section__content">
                <h3>{t(s.problem.heading, lang)}</h3>
                <p>{t(s.problem.body, lang)}</p>
                {s.problem.findings && (
                  <ul>{(s.problem.findings[lang] || s.problem.findings.en).map((f, i) => <li key={i}>{f}</li>)}</ul>
                )}
                {s.problem.challenge && t(s.problem.challenge, lang) && (
                  <p className="cs-challenge">{t(s.problem.challenge, lang)}</p>
                )}
                {s.problem.image
                  ? <img src={s.problem.image} alt={`${projectTitle} — problem`} className="cs-visual" loading="lazy" style={{objectFit:'cover'}} />
                  : <ImagePlaceholder />
                }
              </div>
            </section>
          )}

          {/* ── Research ── */}
          {s.research && (
            <section className="cs-section" aria-label={t(ui.research, lang)}>
              <p className="cs-section__label">{t(ui.research, lang)}</p>
              <div className="cs-section__content">
                <h3>{t(s.research.heading, lang)}</h3>
                <p>{t(s.research.body, lang)}</p>
                {s.research.findings && (
                  <ul>{(s.research.findings[lang] || s.research.findings.en).map((f, i) => <li key={i}>{f}</li>)}</ul>
                )}
                {s.research.image
                  ? <img src={s.research.image} alt={`${projectTitle} — research`} className="cs-visual" loading="lazy" style={{objectFit:'cover'}} />
                  : <ImagePlaceholder />
                }
              </div>
            </section>
          )}

          {/* ── Process ── */}
          {s.process && (
            <section className="cs-section" aria-label={t(ui.process, lang)}>
              <p className="cs-section__label">{t(ui.process, lang)}</p>
              <div className="cs-section__content">
                <h3>{t(s.process.heading, lang)}</h3>
                <p>{t(s.process.body, lang)}</p>
                {s.process.concepts && (
                  <ul>
                    {s.process.concepts.map((c, i) => (
                      <li key={i}>
                        <strong style={{color:'var(--color-ink-dark)',fontWeight:500}}>{t(c.name, lang)}</strong>
                        {t(c.problem, lang) ? ` — ${t(c.problem, lang)}` : ''}
                      </li>
                    ))}
                  </ul>
                )}
                {s.process.image
                  ? <img src={s.process.image} alt={`${projectTitle} — process`} className="cs-visual" loading="lazy" style={{objectFit:'cover'}} />
                  : <ImagePlaceholder />
                }
              </div>
            </section>
          )}

          {/* ── Solution ── */}
          {s.solution && (
            <section className="cs-section" aria-label={t(ui.solution, lang)}>
              <p className="cs-section__label">{t(ui.solution, lang)}</p>
              <div className="cs-section__content">
                <h3>{t(s.solution.heading, lang)}</h3>
                <p>{t(s.solution.body, lang)}</p>
                {s.solution.features && (
                  <ul>{(s.solution.features[lang] || s.solution.features.en).map((f, i) => <li key={i}>{f}</li>)}</ul>
                )}
                {s.solution.image
                  ? <img src={s.solution.image} alt={`${projectTitle} — solution`} className="cs-visual" loading="lazy" style={{objectFit:'cover'}} />
                  : <ImagePlaceholder />
                }
              </div>
            </section>
          )}

          {/* ── Impact ── */}
          {s.impact && (
            <section className="cs-section" aria-label={t(ui.impact, lang)}>
              <p className="cs-section__label">{t(ui.impact, lang)}</p>
              <div className="cs-section__content">
                <h3>{t(s.impact.heading, lang)}</h3>
                {t(s.impact.body, lang) && <p>{t(s.impact.body, lang)}</p>}
                {/* [UPDATED] Responsive impact table — mobile becomes cards */}
                <table className="impact-table" role="table">
                  <thead>
                    <tr>
                      <th scope="col">{t(ui.metric, lang)}</th>
                      <th scope="col">{t(ui.result, lang)}</th>
                      {/* [UPDATED] Baseline column only if any baseline exists */}
                      {s.impact.metrics.some(m => m.baseline) && <th scope="col">{t(ui.baseline, lang)}</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {s.impact.metrics.map((m, i) => (
                      <tr key={i}>
                        <td>{t(m.label, lang)}</td>
                        <td className="metric-value">{m.value}</td>
                        {s.impact.metrics.some(mx => mx.baseline) && <td>{m.baseline || '—'}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* ── Reflection ── */}
          {s.reflection && (
            <section className="cs-section" aria-label={t(ui.reflection, lang)}>
              <p className="cs-section__label">{t(ui.reflection, lang)}</p>
              <div className="cs-section__content">
                <h3>{t(s.reflection.heading, lang)}</h3>
                <p>{t(s.reflection.body, lang)}</p>
              </div>
            </section>
          )}

          {/* ── Next project / End CTA ── */}
          {/* [UPDATED] Last project shows Contact CTA instead of looping */}
          {isLast ? (
            <div className="next-project" style={{textDecoration:'none'}}>
              <div>
                <p className="next-project__label">{lang === 'zh' ? '感谢浏览' : "That's all for now"}</p>
                <p className="next-project__title">{lang === 'zh' ? '有兴趣合作？' : 'Interested in working together?'}</p>
              </div>
              <Link href="/about" className="btn btn--primary" style={{flexShrink:0}}>{t(ui.contactMe, lang)}</Link>
            </div>
          ) : (
            <Link href={`/projects/${nextProject.id}`} className="next-project">
              <div>
                <p className="next-project__label">{t(ui.nextProject, lang)}</p>
                {/* [UPDATED] X / N counter */}
                <span className="next-project__counter">{currentIndex + 2} / {allProjects.length}</span>
                <p className="next-project__title">{t(nextProject.title, lang)}</p>
              </div>
              <span className="next-project__arrow" aria-hidden="true">→</span>
            </Link>
          )}

        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
