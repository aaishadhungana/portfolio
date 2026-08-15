import { ArrowUpRight } from 'lucide-react'

export interface Article {
  title: string
  excerpt: string
  date: string
  url: string
}

export default function MediumCard({ title, excerpt, date, url }: Article) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-colors group-hover:text-accent" />
      </div>
      <p className="text-sm text-white/60">{excerpt}</p>
      <span className="text-xs text-white/40">{date}</span>
    </a>
  )
}