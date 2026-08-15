import { LucideIcon } from 'lucide-react'

export interface Skill {
  name: string
  icon: LucideIcon
}

export default function SkillCard({ name, icon: Icon }: Skill) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-white/10">
      <Icon className="h-7 w-7 text-accent" />
      <span className="text-sm font-medium text-white">{name}</span>
    </div>
  )
}