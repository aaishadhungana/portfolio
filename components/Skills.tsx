import {
  Code2,
  Coffee,
  BarChart3,
  BrainCircuit,
  ShieldCheck,
  GitBranch,
  Database,
  Terminal,
} from 'lucide-react'
import SkillCard, { Skill } from './SkillCard'

// Add a new skill here anytime — no other changes needed.
const SKILLS: Skill[] = [
  { name: 'Python', icon: Code2 },
  { name: 'Java', icon: Coffee },
  { name: 'Data Science', icon: BarChart3 },
  { name: 'AI', icon: BrainCircuit },
  { name: 'Cybersecurity', icon: ShieldCheck },
  { name: 'Git', icon: GitBranch },
  { name: 'SQL', icon: Database },
  { name: 'Linux', icon: Terminal },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-10 text-3xl font-bold text-white">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  )
}