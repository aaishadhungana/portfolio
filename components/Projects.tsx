import ProjectCard, { Project } from './ProjectCard'


const PROJECTS: Project[] = [
  {
    title: 'TopologyX',
    description:
      'AI-powered Cisco network topology generator and simulator for cybersecurity and network analysis projects.',
    tags: ['Python', 'AI', 'Networking'],
    githubUrl: 'https://github.com/aaishadhungana/topologyx',
    
  },
  {
    title: 'AI-Threat Detection Platform',
    description:
      'Advanced Threat Intelligence Data Analysis Platform with AI-powered anomaly detection, real-time threat monitoring, and interactive Streamlit dashboard.',
    tags: ['Python', 'Data Science', 'Security'],
    githubUrl: 'https://github.com/aaishadhungana/ai-threat-intelligence-platform',
  },
  {
    title: 'Production Grade Authentication',
    description:
      'Production-grade authentication REST API with JWT, refresh tokens, RBAC, OAuth2 [google and github], and email flows.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/aaishadhungana/production-grade-authentication',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-10 text-3xl font-bold text-white">
        My <span className="text-primary">Projects</span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}