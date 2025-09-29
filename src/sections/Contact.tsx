import { Section } from '../components/Section'
import { profile } from '../content'

export default function Contact() {
  return (
    <Section title="Contact">
      <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/5 dark:bg-white/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">Let’s build something great.</div>
          <div className="text-sm opacity-80 mt-1">Based in {profile.location}. Open to opportunities.</div>
        </div>
        <div className="flex items-center gap-3">
          <a className="btn-primary" href={`mailto:${profile.email}`}>Email Me</a>
          <a className="rounded-lg px-4 py-2 border border-slate-400 dark:border-white/20 hover:bg-white/10" href={profile.resumeUrl} target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </Section>
  )
}


