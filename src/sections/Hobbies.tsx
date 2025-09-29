import { Section } from '../components/Section'
import { hobbies } from '../content'

export default function Hobbies() {
  return (
    <Section title="Personal & Hobbies" subtitle="Mind, body, and exploration">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 h-[300px] flex items-center justify-center text-sm opacity-80">
          Interactive India Map – {hobbies.mapHint}
        </div>
        <div className="space-y-3">
          {hobbies.list.map(h => (
            <div key={h} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:translate-y-[-2px] transition">
              {h}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}


