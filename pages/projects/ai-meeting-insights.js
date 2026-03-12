import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { getProject } from '../../data/projects'

export default function AIMeetingInsights() {
  const project = getProject('ai-meeting-insights')
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

          {/* ── Back ── */}
          <div className="case-study-intro">
            <Link href="/#work" className="back-link">← All Work</Link>

            <h1 className="case-study-intro__title">{project.title}</h1>
            <p className="case-study-intro__desc">{project.description}</p>

            {/* Hero image placeholder */}
            <div className="case-study-hero" style={{ backgroundColor: project.heroColor }}>
              [ hero image — replace with your actual screenshot ]
            </div>

            {/* Meta */}
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

          {/* ── Problem ── */}
          <div className="cs-section">
            <p className="cs-section__label">Problem</p>
            <div className="cs-section__content">
              <h3>Recordings are a graveyard of lost decisions.</h3>
              <p>
                Teams record nearly every meeting — but rarely revisit them.
                Important decisions and action items get buried inside hour-long
                recordings, forcing members to scrub through video or rely on
                incomplete notes.
              </p>
              <p>Users typically:</p>
              <ul>
                <li>Open a recording and scrub through the timeline manually</li>
                <li>Try to locate specific decisions or action items</li>
                <li>Give up and rely on fragmented memory or notes</li>
              </ul>
              <p style={{ marginTop: 'var(--space-4)', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-dark)', borderLeft: '2px solid var(--ink-faint)', paddingLeft: 'var(--space-4)' }}>
                Design challenge: How might we help teams quickly understand
                meeting outcomes without rewatching entire recordings?
              </p>
              <div className="cs-visual">[ workflow diagram / problem illustration ]</div>
            </div>
          </div>

          {/* ── Research ── */}
          <div className="cs-section">
            <p className="cs-section__label">Research</p>
            <div className="cs-section__content">
              <h3>Users skim — they don't watch.</h3>
              <p>
                Research included 9 user interviews, a survey with 42 participants,
                and direct observation of recorded meeting workflows across three teams.
              </p>
              <p>Key findings:</p>
              <ul>
                <li>Most participants jump through the timeline searching for key moments — not watching linearly</li>
                <li>Users primarily want to know what was decided and what tasks were assigned</li>
                <li>Manual meeting notes vary widely between team members</li>
              </ul>
              <div className="cs-visual">[ affinity map / research synthesis ]</div>
            </div>
          </div>

          {/* ── Design Process ── */}
          <div className="cs-section">
            <p className="cs-section__label">Process</p>
            <div className="cs-section__content">
              <h3>Three concepts, one clear winner.</h3>
              <p>I explored three interface directions before converging.</p>
              <ul>
                <li><strong style={{ color: 'var(--ink-dark)', fontWeight: 500 }}>Automatic summary page</strong> — AI produces a full summary. Problem: hard to verify accuracy.</li>
                <li><strong style={{ color: 'var(--ink-dark)', fontWeight: 500 }}>Timeline insights</strong> — Insights appear along the recording timeline. Problem: interface complexity.</li>
                <li><strong style={{ color: 'var(--ink-dark)', fontWeight: 500 }}>Structured insights panel</strong> — Insights grouped into summary, decisions, action items. Users can click to jump to the relevant moment.</li>
              </ul>
              <p>The structured panel provided the clearest hierarchy and was selected for development.</p>
              <div className="cs-visual">[ concept sketches / wireframes ]</div>
              <div className="cs-visual" style={{ marginTop: 'var(--space-4)' }}>[ interaction flows ]</div>
            </div>
          </div>

          {/* ── Solution ── */}
          <div className="cs-section">
            <p className="cs-section__label">Solution</p>
            <div className="cs-section__content">
              <h3>AI-assisted review — with human control.</h3>
              <p>
                The final product combines AI analysis with human review.
                Every generated insight links back to the original moment in
                the recording, enabling quick verification.
              </p>
              <ul>
                <li>AI-generated meeting summary — adjustable length</li>
                <li>Decision tracker — linked to timestamps</li>
                <li>Action item manager — with user tagging</li>
              </ul>
              <div className="cs-visual">[ final UI screens ]</div>
              <div className="cs-visual" style={{ marginTop: 'var(--space-4)' }}>[ interaction walkthrough ]</div>
            </div>
          </div>

          {/* ── Impact ── */}
          <div className="cs-section">
            <p className="cs-section__label">Impact</p>
            <div className="cs-section__content">
              <h3>Measurable improvements across all metrics.</h3>
              <p>Prototype testing was conducted with 12 participants across two rounds.</p>
              <table className="impact-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Meeting review time</td>
                    <td>−40%</td>
                  </tr>
                  <tr>
                    <td>Decision identification</td>
                    <td>+35%</td>
                  </tr>
                  <tr>
                    <td>User satisfaction</td>
                    <td>4.5 / 5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Reflection ── */}
          <div className="cs-section">
            <p className="cs-section__label">Reflection</p>
            <div className="cs-section__content">
              <h3>Trust is earned through transparency.</h3>
              <p>
                The most important insight from this project: users didn't resist AI —
                they resisted opacity. Once they could see where each insight came from,
                trust followed quickly. The ability to jump from an AI-generated
                decision back to the exact recording moment was the single most
                impactful feature we shipped.
              </p>
              <p>
                If I were to continue, I'd explore persistent memory across
                multiple meetings — giving teams a longitudinal view of decisions
                over time.
              </p>
            </div>
          </div>

          {/* ── Next Project ── */}
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
