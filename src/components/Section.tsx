import type { ReactNode } from 'react'

export function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="container-max py-16">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-semibold"><span className="accent-text">//</span> {title}</h2>
        {subtitle && <p className="text-sm opacity-70 mt-2">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}


