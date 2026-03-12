import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { getProject } from '../../data/projects'

export default function ContextOnboarding() {
  const project = getProject('context-onboarding')
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
              <h3>Users were activating — but not understanding.</h3>
              <p>
                Context is an AI research tool built for enterprise teams. Despite
                strong initial signups, only 34% of new users reached their first
                meaningful output within 7 days. The rest churned silently.
              </p>
              <ul>
                <li>The tool had 12 configurable options on the initial setup screen</li>
                <li>No guidance on which settings mattered for which use case</li>
                <li>Users who contacted support reported feeling "lost immediately"</li>
              </ul>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-dark)', borderLeft: '2px solid var(--ink-faint)', paddingLeft: 'var(--space-4)' }}>
                Design challenge: Redesign onboarding so that users reach their
                first valuable moment in under 5 minutes.
              </p>
              <div className="cs-visual">[ current onboarding flow diagram ]</div>
            </div>
          </div>

          <div className="cs-section">
            <p className="cs-section__label">Research</p>
            <div className="cs-section__content">
              <h3>Complexity isn't the problem — timing is.</h3>
              <p>
                8 user interviews and session recordings of 40 onboarding sessions
                revealed that the problem wasn't the product's complexity — it was
                that all complexity was front-loaded.
              </p>
              <ul>
                <li>Users who completed setup successfully did so by skipping most options</li>
                <li>The first "aha moment" came only after a user saw real output</li>
                <li>Progressive disclosure had worked in analogous tools — users wanted to learn by doing</li>
              </ul>
              <div className="cs-visual">[ user journey map ]</div>
            </div>
          </div>

          <div className="cs-section">
            <p className="cs-section__label">Process</p>
            <div className="cs-section__content">
              <h3>From configuration to conversation.</h3>
              <p>
                The core design shift: move from a configuration-first flow to
                a use-case-first flow. Instead of asking users to set up the tool,
                ask them what they're trying to do — then configure intelligently.
              </p>
              <ul>
                <li>Prototyped 3 flows: wizard-style, template-first, blank canvas</li>
                <li>Template-first showed the highest task completion in unmoderated testing</li>
                <li>Reduced initial decision surface from 12 options to 3</li>
              </ul>
              <div className="cs-visual">[ flow comparison ]</div>
              <div className="cs-visual" style={{ marginTop: 'var(--space-4)' }}>[ wireframe iterations ]</div>
            </div>
          </div>

          <div className="cs-section">
            <p className="cs-section__label">Solution</p>
            <div className="cs-section__content">
              <h3>Choose your starting point. See results immediately.</h3>
              <p>
                The redesigned onboarding presents three starter templates based
                on team role. Each template pre-configures the tool and guides
                users to their first output — before asking them to configure anything.
              </p>
              <ul>
                <li>Role-based template selection (3 options)</li>
                <li>Pre-filled example workspace with real outputs</li>
                <li>Inline tooltips that explain features at the moment of use</li>
                <li>Setup options deferred to a "Customize" section after activation</li>
              </ul>
              <div className="cs-visual">[ final onboarding screens ]</div>
            </div>
          </div>

          <div className="cs-section">
            <p className="cs-section__label">Impact</p>
            <div className="cs-section__content">
              <h3>Activation rate nearly doubled.</h3>
              <table className="impact-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>7-day activation rate</td>
                    <td>+35%</td>
                  </tr>
                  <tr>
                    <td>Time to first output</td>
                    <td>−62%</td>
                  </tr>
                  <tr>
                    <td>Support tickets (onboarding)</td>
                    <td>−44%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="cs-section">
            <p className="cs-section__label">Reflection</p>
            <div className="cs-section__content">
              <h3>Less configuration, more activation.</h3>
              <p>
                The biggest shift in this project was reframing the goal: from
                "help users set up the tool" to "help users feel successful as
                fast as possible." Once we made that shift, every design decision
                became clearer. The tool didn't get simpler — we just stopped
                making people deal with its complexity before they had a reason to care.
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
