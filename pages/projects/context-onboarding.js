// [UPDATED] Thin wrapper
import CaseStudy from '../../components/CaseStudy'
import content from '../../content.json'

export default function ContextOnboarding() {
  const project = content.projects.find(p => p.id === 'context-onboarding')
  return <CaseStudy project={project} />
}
