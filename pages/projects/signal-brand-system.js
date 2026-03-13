// [UPDATED] Thin wrapper
import CaseStudy from '../../components/CaseStudy'
import content from '../../content.json'

export default function SignalBrandSystem() {
  const project = content.projects.find(p => p.id === 'signal-brand-system')
  return <CaseStudy project={project} />
}
