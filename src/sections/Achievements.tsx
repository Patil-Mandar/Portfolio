import { Section } from '../components/Section'
import { achievements } from '../content'

export default function Achievements() {
  return (
    <Section title="Achievements">
      <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4 min-w-max pr-2 animate-[scrollX_35s_linear_infinite]">
          {achievements.map((a, i) => (
            <div key={i} className="w-72 shrink-0 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white/5 dark:bg-white/5">
              <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${a.image || "https://source.unsplash.com/random/800x600?award"})` }} />
              <div className="p-3 text-sm">{a.title}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}


