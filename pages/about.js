import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About — Mattia</title>
        <meta name="description" content="AI product designer focused on brand, experience, and the intersection of visual clarity and interaction complexity." />
      </Head>

      <Nav />

      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <div className="container">
          <section style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)', maxWidth: '680px' }}>

            <p className="hero__label" style={{ marginBottom: 'var(--space-5)' }}>About</p>

            <h1 className="hero__name" style={{ marginBottom: 'var(--space-7)' }}>
              Mattia<br /><em>Designs.</em>
            </h1>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 300, lineHeight: 1.8, color: 'var(--ink-mid)', marginBottom: 'var(--space-5)' }}>
              I'm a product designer focused on AI systems, brand identity,
              and enterprise experience. My work sits at the intersection of
              visual clarity and interaction complexity — making powerful tools
              feel approachable.
            </p>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 300, lineHeight: 1.8, color: 'var(--ink-mid)', marginBottom: 'var(--space-5)' }}>
              I believe the best AI products don't hide their intelligence —
              they make it legible. My job is to design the layer between
              what a model can do and what a person can actually understand
              and act on.
            </p>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 300, lineHeight: 1.8, color: 'var(--ink-mid)', marginBottom: 'var(--space-9)' }}>
              Previously: [your previous experience here]. Currently open to
              full-time roles in AI product design.
            </p>

            <div style={{ borderTop: '1px solid var(--ink-faint)', paddingTop: 'var(--space-7)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-light)', marginBottom: 'var(--space-3)' }}>Focus</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: 'var(--ink-dark)', lineHeight: 1.7 }}>
                  AI product design<br />
                  Brand identity<br />
                  Design systems<br />
                  Enterprise UX
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-light)', marginBottom: 'var(--space-3)' }}>Tools</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300, color: 'var(--ink-dark)', lineHeight: 1.7 }}>
                  Figma<br />
                  FigJam<br />
                  Framer<br />
                  Illustrator
                </p>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-8)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <a href="mailto:hello@mattiadesigns.com" className="btn btn--primary">Get in Touch</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">Download Resume</a>
            </div>

          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
