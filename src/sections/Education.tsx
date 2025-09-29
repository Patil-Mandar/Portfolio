import { Section } from '../components/Section'
import { education } from '../content'

export default function Education() {
  return (
    <Section title="Education" subtitle="Academic background">
      <div className="space-y-4">
        {education.map((e) => (
          <div key={e.school} className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center justify-between gap-4">
            <div>
              <div className="font-semibold">{e.school}</div>
              <div className="text-sm opacity-80">{e.degree}</div>
            </div>
            <div className="text-sm opacity-70 text-right">
              <div>{e.years}</div>
              <div>{e.note}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}


