import { FileDown, Sparkles, Trophy, Award } from 'lucide-react'

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.4-3.87-1.4-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </svg>
  )
}

export default function Branding() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-10 text-3xl font-bold text-white">
        Beyond The <span className="text-primary">Code</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-white">Resume</h3>
            <p className="mb-6 text-sm text-white/60">
              Download my latest resume to see my experience and background in detail.
            </p>
          </div>

          <a
            href="/resume.pdf"
            download
            className="flex w-fit items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            <FileDown size={16} />
            Download Resume
          </a>
        </div>

        {/* Currently learning */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold text-white">Currently Learning</h3>
          </div>
          <ul className="space-y-2 text-sm text-white/60">
            <li>• Backend development with Supabase</li>
            <li>• Building production-ready deployment pipelines</li>
            <li>• Deepening data science and AI fundamentals</li>
          </ul>
        </div>

        {/* Hackathon achievements */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-3 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold text-white">Hackathon Achievements</h3>
          </div>
          <p className="text-sm text-white/60">
            No hackathon achievements yet.
          </p>
        </div>

        {/* Certifications */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-3 flex items-center gap-2">
            <Award className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold text-white">Certifications</h3>
          </div>
          <p className="text-sm text-white/60">
            Bits and Bytes Of Computer Networking --Google.
          </p>
        </div>
      </div>

      {/* GitHub contribution placeholder */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="mb-4 flex items-center gap-2">
          <GithubIcon className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold text-white">GitHub Activity</h3>
        </div>
        <p className="text-sm text-white/60">
          GitHub contribution graph.
        </p>
      </div>
    </section>
  )
}