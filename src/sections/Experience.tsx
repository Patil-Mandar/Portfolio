import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { experiences } from '../content'

export default function Experience() {
  return (
    <Section title="Experience" subtitle="Timeline of roles and impact">
      <div className="relative">
        <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px translate-x-[-1px] bg-slate-200 dark:bg-white/20" />
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div key={exp.company + idx} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="pl-12 sm:pl-16 relative">
              <div className="w-2 h-2 rounded-full bg-[rgb(var(--color-accent))] absolute left-5 sm:left-6 top-6 -translate-x-1/2" />
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/5 dark:bg-white/[0.03] backdrop-blur p-5 hover:translate-y-[-2px] transition">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-lg font-semibold">{exp.role} · {exp.company}</div>
                  <div className="text-xs opacity-70">{exp.start}{exp.end ? ` – ${exp.end}` : ' – Present'} · {exp.location}</div>
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                  {exp.points.map((p, i) => (<li key={i}>{p}</li>))}
                </ul>
                {exp.highlight && (
                  <div className="mt-3 text-sm p-3 rounded-lg bg-white/5 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                    <span className="font-medium">Challenge:</span> {exp.highlight}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}


