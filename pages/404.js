// [UPDATED] Custom 404 page — matches site style, bilingual
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useLang } from '../context/LangContext'

const ui = {
  title:   { en: '404 — Page not found', zh: '404 — 页面未找到' },
  heading: { en: 'Page not found.', zh: '页面不存在。' },
  sub:     { en: "The page you're looking for doesn't exist or has been moved.", zh: '您访问的页面不存在或已被移动。' },
  back:    { en: '← Back to Home', zh: '← 返回首页' },
  work:    { en: 'View Work →', zh: '查看作品 →' },
}

export default function NotFound() {
  const { lang } = useLang()
  const t = (obj) => obj[lang] || obj.en

  return (
    <>
      <Head>
        <title>{t(ui.title)} — Mattia Jin</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Nav />
      <main id="main-content" style={{ paddingTop: 'var(--nav-height)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '480px', paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent-warm)', marginBottom: 'var(--space-5)' }}>404</p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px,5vw,56px)', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--color-ink-black)', marginBottom: 'var(--space-5)' }}>
              {t(ui.heading)}
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: 'var(--color-ink-mid)', marginBottom: 'var(--space-7)' }}>
              {t(ui.sub)}
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href="/" className="btn btn--primary">{t(ui.back)}</Link>
              <Link href="/#work" className="btn btn--secondary">{t(ui.work)}</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
