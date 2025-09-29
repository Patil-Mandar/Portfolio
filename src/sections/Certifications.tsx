import { Section } from '../components/Section'
import { certifications } from '../content'

export default function Certifications() {
  return (
    <Section title="Certifications">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((c) => (
          <a key={c.name} href={c.url} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 dark:border-white/10 bg-white/5 dark:bg-white/5 hover:opacity-95 transition p-4">
            <div className="font-medium text-sm">{c.name}</div>
            <div className="text-xs opacity-70 mt-1">{c.by}</div>
          </a>
        ))}
      </div>
    </Section>
  )
}


