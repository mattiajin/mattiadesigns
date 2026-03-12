import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { getProject } from '../../data/projects'

export default function SignalBrandSystem() {
  const project = getProject('signal-brand-system')
  const next = getProject(project.nextProject)

  return (
    <>
      <Head>
        <title>{project.title} — Mattia</title>
        <meta name="description" content={project.description} />
      </Head>

      <Nav />

      <main className="case-study">
        <div className="container">

          <div className="case-study-intro">
            <Link href="/#work" className="back-link">← All Work</Link>
            <h1 className="case-study-intro__title">{project.title}</h1>
            <p className="case-study-intro__desc">{project.description}</p>
            <div className="case-study-hero" style={{ backgroundColor: project.heroColor }}>
              [ hero image — replace with your actual screenshot ]
            </div>
            <div className="case-study-meta">
              <div className="meta-item">
                <p className="meta-item__label">Role</p>
                <p className="meta-item__value">{project.role}</p>
              </div>
              <div className="meta-item">
                <p className="meta-item__label">Timeline</p>
                <p className="meta-item__value">{project.timeline}</p>
              </div>
              <div className="meta-item">
                <p className="meta-item__label">Team</p>
                <p className="meta-item__value">{project.team}</p>
              </div>
              <div className="meta-item">
                <p className="meta-item__label">Tools</p>
                <p className="meta-item__value">{project.tools}</p>
              </div>
            </div>
          </div>

          <div className="cs-section">
            <p className="cs-section__label">Problem</p>
            <div className="cs-section__content">
              <h3>A powerful product with no coherent identity.</h3>
              <p>
                Signal launched as an AI analytics platform with strong technical
                capabilities but an inconsistent visual identity — mixing styles
                across the marketing site, product UI, and sales materials.
              </p>
              <p>
                This fragmentation made the product appear less mature than it was,
                hurting conversion at the enterprise level where trust is essential.
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-dark)', borderLeft: '2px solid var(--ink-faint)', paddingLeft: 'var(--space-4)' }}>
                Design challenge: Create a unified visual system that could scale
                from a logo to a full product UI without losing coherence.
              </p>
              <div className="cs-visual">[ before/after brand examples ]</div>
            </div>
          </div>

          <div className="cs-section">
            <p className="cs-section__label">Research</p>
            <div className="cs-section__content">
              <h3>Enterprise buyers judge books by their covers.</h3>
              <p>
                Competitive analysis of 14 AI analytics products and interviews
                with 6 enterprise buyers revealed clear patterns in how trust
                is established through visual language.
              </p>
              <ul>
                <li>Enterprise buyers assess credibility within the first 8 seconds on a landing page</li>
                <li>Inconsistent UI components signal engineering immaturity</li>
                <li>Color restraint and typographic clarity are proxies for product reliability</li>
              </ul>
              <div className="cs-visual">[ competitive landscape / brand audit ]</div>
            </div>
          </div>

          <div className="cs-section">
            <p className="cs-section__label">Process</p>
            <div className="cs-section__content">
              <h3>From principles to system.</h3>
              <p>
                The design process moved through three phases: brand strategy,
                visual identity, and component library — each phase informing the next.
              </p>
              <ul>
                <li>Defined four brand principles: Precise, Transparent, Grounded, Intelligent</li>
                <li>Explored 3 visual directions before selecting the final system</li>
                <li>Built a Figma component library of 80+ components</li>
              </ul>
              <div className="cs-visual">[ logo explorations ]</div>
              <div className="cs-visual" style={{ marginTop: 'var(--space-4)' }}>[ color + type system ]</div>
            </div>
          </div>

          <div className="cs-section">
            <p className="cs-section__label">Solution</p>
            <div className="cs-section__content">
              <h3>A system that thinks like the product it represents.</h3>
              <p>
                The final brand system is built on a grid-based geometry that references
                data visualization — precise, structured, and immediately legible.
              </p>
              <ul>
                <li>Wordmark built on a custom geometric grid</li>
                <li>Two-tone color system: deep navy + warm amber</li>
                <li>Typography pair: IBM Plex Serif (display) + IBM Plex Sans (UI)</li>
                <li>Design tokens applied across product, web, and print</li>
              </ul>
              <div className="cs-visual">[ final brand applications ]</div>
              <div className="cs-visual" style={{ marginTop: 'var(--space-4)' }}>[ product UI with new system ]</div>
            </div>
          </div>

          <div className="cs-section">
            <p className="cs-section__label">Impact</p>
            <div className="cs-section__content">
              <h3>Consistency that converted.</h3>
              <table className="impact-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brand consistency score</td>
                    <td>+60%</td>
                  </tr>
                  <tr>
                    <td>Enterprise demo requests</td>
                    <td>+28%</td>
                  </tr>
                  <tr>
                    <td>Component adoption</td>
                    <td>100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="cs-section">
            <p className="cs-section__label">Reflection</p>
            <div className="cs-section__content">
              <h3>Brand is product.</h3>
              <p>
                The most valuable outcome wasn't the logo or the color system —
                it was the shared language the team gained. When everyone refers to
                the same tokens, the same principles, and the same component names,
                design decisions become faster and more consistent without my direct
                involvement. That's the real measure of a successful system.
              </p>
            </div>
          </div>

          {next && (
            <Link href={`/projects/${next.slug}`} className="next-project">
              <div>
                <p className="next-project__label">Next Project</p>
                <p className="next-project__title">{next.title}</p>
              </div>
              <span className="next-project__arrow">→</span>
            </Link>
          )}

        </div>
      </main>

      <Footer />
    </>
  )
}
