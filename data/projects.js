// ─────────────────────────────────────────────────────────────────
// PROJECTS DATA
// To add a new project: copy one object, change the fields, done.
// The slug must match the folder name in /pages/projects/
// ─────────────────────────────────────────────────────────────────

export const projects = [
  {
    slug: 'ai-meeting-insights',
    title: 'AI Meeting Insights',
    description: 'Turn long meeting recordings into clear decisions and action items using AI.',
    tags: ['AI', 'B2B', 'Workflow'],
    role: 'Product Design · AI Interaction',
    timeline: '8 weeks',
    team: 'PM + 2 Engineers',
    tools: 'Figma, FigJam',
    impact: '↓ 40% review time',
    heroColor: '#EEE9E0',
    nextProject: 'signal-brand-system',
  },
  {
    slug: 'signal-brand-system',
    title: 'Signal Brand System',
    description: 'A unified visual identity for an AI analytics platform — from logo to product UI.',
    tags: ['Brand', 'AI', 'Design System'],
    role: 'Brand Design · Design Systems',
    timeline: '12 weeks',
    team: 'Solo + Founder',
    tools: 'Figma, Illustrator',
    impact: '+60% brand consistency',
    heroColor: '#E8EDF5',
    nextProject: 'context-onboarding',
  },
  {
    slug: 'context-onboarding',
    title: 'Context Onboarding',
    description: 'Redesigning the onboarding flow for a complex AI research tool used by enterprise teams.',
    tags: ['UX', 'Enterprise', 'AI'],
    role: 'Product Design · Research',
    timeline: '6 weeks',
    team: 'PM + 3 Engineers',
    tools: 'Figma, Maze',
    impact: '+35% activation rate',
    heroColor: '#EDF5E8',
    nextProject: 'ai-meeting-insights',
  },
]

export function getProject(slug) {
  return projects.find(p => p.slug === slug) || null
}
