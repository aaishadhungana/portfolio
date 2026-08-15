import MediumCard, { Article } from './MediumCard'


const ARTICLES: Article[] = [
  {
    title: 'Cyberattacks expose deep cracks in Nepal’s digital security',
    excerpt:
      'Explains the recent cyber incidents and their impact on Nepal’s digital infrastructure.',
    date: 'Jul 24, 2025',
    url: 'https://medium.com/@aaishadhu',
  },
  {
    title: 'Tarkari Taught Me',
    excerpt:
      'A reflection on how home made me understand the value of sacrifice',
    date: 'Oct 14, 2025',
    url: 'https://medium.com/@aaishadhu',
  },
  {
    title: 'Incremental Goals',
    excerpt:
      'Short read on the importance of setting small, achievable goals to reach larger aspirations.',
    date: 'Jan 2, 2026',
    url: 'https://medium.com/@aaishadhu',
  },
]

export default function Medium() {
  return (
    <section id="medium" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-10 text-3xl font-bold text-white">
        My <span className="text-primary">Writing</span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((article) => (
          <MediumCard key={article.title} {...article} />
        ))}
      </div>
    </section>
  )
}