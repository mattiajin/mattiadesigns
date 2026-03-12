import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mattia — AI Product Designer</title>
        <meta name="description" content="AI product designer focused on brand and experience. Turning complex capabilities into interfaces people understand and trust." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        {/* ── Hero ── */}
        <section className="hero">
          <div className="container">
            <p className="hero__label fade-up fade-up-1">AI Product Designer</p>
            <h1 className="hero__name fade-up fade-up-2">
              Mattia<br /><em>designs.</em>
            </h1>
            <p className="hero__statement fade-up fade-up-3">
              I craft brands and experiences for AI products —
              turning complex capabilities into interfaces people
              understand and trust.
            </p>
            <div className="hero__actions fade-up fade-up-4">
              <a href="#work" className="btn btn--primary">View Work</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">Download Resume</a>
            </div>
          </div>
        </section>

        {/* ── Selected Work ── */}
        <section className="work" id="work">
          <div className="container">
            <p className="section-label">Selected Work</p>
            <div className="project-grid">
              {projects.map(project => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ── About Preview ── */}
        <section className="about-preview">
          <div className="container" style={{ display: 'contents' }}>
            <div style={{ padding: '0 var(--space-6)' }}>
              <h2 className="about-preview__title">
                Designing for<br /><em>the AI era.</em>
              </h2>
            </div>
            <div style={{ padding: '0 var(--space-6)' }}>
              <p className="about-preview__text">
                I'm a product designer focused on AI systems, brand identity,
                and enterprise experience. My work sits at the intersection
                of visual clarity and interaction complexity — making powerful
                tools feel approachable.
              </p>
              <a href="/about" className="btn btn--secondary">Read More →</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
