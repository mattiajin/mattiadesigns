// [UPDATED] Now a thin wrapper — all logic lives in CaseStudy component
import CaseStudy from '../../components/CaseStudy'
import content from '../../content.json'

export default function AIMeetingInsights() {
  const project = content.projects.find(p => p.id === 'ai-meeting-insights')
  return <CaseStudy project={project} />
}
