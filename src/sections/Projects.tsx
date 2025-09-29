import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { projects } from '../content'

export default function Projects() {
  return (
    <Section title="Projects" subtitle="Selected work and experiments">
      <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4 min-w-max pr-2 animate-[scrollX_30s_linear_infinite]">
          {projects.map((p, idx) => (
            <motion.a key={p.title} href={p.links[0]?.url || '#'} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="w-80 shrink-0 group rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white/5 dark:bg-white/5 hover:opacity-95 transition">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <div className="font-semibold">{p.title}</div>
                <p className="mt-1 text-sm opacity-80">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs opacity-80">
                  {p.tech.map(t => (<span key={t} className="px-2 py-1 rounded-md bg-white/5 dark:bg-white/5 border border-slate-200 dark:border-white/10">{t}</span>))}
                </div>
              </div>
            </motion.a>
          ))}
          {projects.map((p, idx) => (
            <motion.a key={p.title + '-dup'} href={p.links[0]?.url || '#'} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="w-80 shrink-0 group rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white/5 dark:bg-white/5 hover:opacity-95 transition">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <div className="font-semibold">{p.title}</div>
                <p className="mt-1 text-sm opacity-80">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs opacity-80">
                  {p.tech.map(t => (<span key={t} className="px-2 py-1 rounded-md bg-white/5 dark:bg-white/5 border border-slate-200 dark:border-white/10">{t}</span>))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  )
}


