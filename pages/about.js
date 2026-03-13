// [UPDATED] About page — bilingual, reads from content.json, social from content
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import { useLang, t } from '../context/LangContext'
import content from '../content.json'

const ui = {
  about:      { en: 'About',             zh: '关于' },
  focus:      { en: 'Focus',             zh: '专注领域' },
  tools:      { en: 'Tools',             zh: '工具' },
  connect:    { en: 'Connect',           zh: '联系方式' },
  getInTouch: { en: 'Get in Touch',      zh: '联系我' },
  downloadCV: { en: 'Download Resume',   zh: '下载简历' },
}

export default function About() {
  const { lang } = useLang()
  const person = content.person
  const socials = content.social.filter(s => s.enabled)

  // [UPDATED] Email obfuscated — assembled in JS
  const handleEmail = () => { window.location.href = `mailto:${person.email}` }

  // Render bio paragraphs (split by \n\n)
  const bioParagraphs = t(person.aboutBio, lang).split('\n\n')

  return (
    <>
      <Head>
        <title>{t(ui.about, lang)} — Mattia Jin</title>
        <meta name="description" content="AI product designer focused on AI systems, brand identity, and enterprise experience." />
        <link rel="canonical" href="https://mattiadesigns.vercel.app/about/" />
        <meta property="og:title" content="About — Mattia Jin" />
        <meta property="og:url" content="https://mattiadesigns.vercel.app/about/" />
        <meta property="og:type" content="website" />
      </Head>

      <Nav />

      <main id="main-content" style={{ paddingTop: 'var(--nav-height)' }}>
        <div className="container">
          <section style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)', maxWidth: '680px' }} aria-label="About Mattia Jin">

            <p className="hero__label" style={{ marginBottom: 'var(--space-5)' }}>{t(ui.about, lang)}</p>
            <h1 className="hero__name" style={{ marginBottom: 'var(--space-7)' }}>
              Mattia Jin<br /><em>Designs.</em>
            </h1>

            {/* [UPDATED] Bio paragraphs from content.json */}
            {bioParagraphs.map((para, i) => (
              <p key={i} style={{ fontFamily:'var(--font-sans)', fontSize:'18px', fontWeight:300, lineHeight:1.8, color:'var(--color-ink-mid)', marginBottom:'var(--space-5)' }}>
                {para}
              </p>
            ))}

            {/* Meta grid */}
            <div style={{ marginTop:'var(--space-8)', borderTop:'1px solid var(--color-ink-faint)', paddingTop:'var(--space-7)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-6)' }}>
              <div>
                <p style={{ fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--color-ink-light)', marginBottom:'var(--space-3)' }}>{t(ui.focus, lang)}</p>
                <p style={{ fontFamily:'var(--font-sans)', fontSize:'14px', fontWeight:300, color:'var(--color-ink-dark)', lineHeight:1.8 }}>
                  {/* [UPDATED] Focus from content.json */}
                  {content.focus.map(f => t(f, lang)).join('\n').split('\n').map((item, i, arr) => (
                    <span key={i}>{item}{i < arr.length - 1 ? <br /> : null}</span>
                  ))}
                </p>
              </div>
              <div>
                <p style={{ fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--color-ink-light)', marginBottom:'var(--space-3)' }}>{t(ui.tools, lang)}</p>
                <p style={{ fontFamily:'var(--font-sans)', fontSize:'14px', fontWeight:300, color:'var(--color-ink-dark)', lineHeight:1.8 }}>
                  {content.tools.map((tool, i, arr) => (
                    <span key={i}>{tool}{i < arr.length - 1 ? <br /> : null}</span>
                  ))}
                </p>
              </div>
            </div>

            {/* [UPDATED] Social links from content.json */}
            {socials.length > 0 && (
              <div style={{ marginTop:'var(--space-6)' }}>
                <p style={{ fontFamily:'var(--font-mono)', fontSize:'10px', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--color-ink-light)', marginBottom:'var(--space-3)' }}>{t(ui.connect, lang)}</p>
                <div style={{ display:'flex', gap:'var(--space-4)', flexWrap:'wrap' }}>
                  {socials.map(s => (
                    <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily:'var(--font-sans)', fontSize:'14px', color:'var(--color-ink-mid)', transition:'color 0.15s ease' }}
                      onMouseOver={e=>e.target.style.color='var(--color-ink-black)'}
                      onMouseOut={e=>e.target.style.color='var(--color-ink-mid)'}>
                      {s.platform}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div style={{ marginTop:'var(--space-8)', display:'flex', gap:'var(--space-4)', flexWrap:'wrap' }}>
              {/* [UPDATED] Email via JS — not raw in HTML */}
              <button onClick={handleEmail} className="btn btn--primary">{t(ui.getInTouch, lang)}</button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">{t(ui.downloadCV, lang)}</a>
            </div>

          </section>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
