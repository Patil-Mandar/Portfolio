import { useEffect, useState } from 'react'
import { Link as ScrollLink, Element } from 'react-scroll'
import { motion } from 'framer-motion'
import './index.css'
import Hero3D from './components/Hero3D'
import ParticlesBg from './components/ParticlesBg'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Certifications from './sections/Certifications'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Hobbies from './sections/Hobbies'
import OpenToWork from './components/OpenToWork'
import AIBadge from './components/AIBadge'
import Testimonials from './sections/Testimonials'

const sections = [
  { id: 'intro', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'hobbies', label: 'Personal' },
  { id: 'testimonials', label: 'Recommendations' },
]

function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(() => typeof window !== 'undefined' && document.documentElement.classList.contains('dark'))

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 dark:supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
      <nav className="container-max flex items-center justify-between h-14">
        <a href="#intro" className="font-semibold">Mandar Vijay Patil</a>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <ScrollLink key={s.id} to={s.id} smooth spy offset={-56} className="cursor-pointer hover:opacity-80">
              {s.label}
            </ScrollLink>
          ))}
          <a href="mailto:mvp23402@gmail.com" className="btn-primary">Contact</a>
          <button aria-label="Toggle theme" onClick={() => setIsDark((v) => !v)} className="rounded-lg px-3 py-2 border border-slate-300 dark:border-white/20 hover:bg-white/10">
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>
        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <a href="mailto:mvp23402@gmail.com" className="rounded-lg px-3 py-2 border border-white/20 hover:bg-white/10 text-xs">Contact</a>
          <button aria-label="Toggle theme" onClick={() => setIsDark((v) => !v)} className="rounded-lg px-3 py-2 border border-white/20 hover:bg-white/10 text-xs">
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>
    </div>
  )
}


function Hero() {
  const taglines = [
    'Learner',
    'Engineer @Monotype',
    'Former Intern @Microsoft',
    "I love Biryani",
    "SIH'22 Winner",
    "MERN Stack Developer",
    "350+ Problems Solved on LeetCode",
    "Create this website using AI",
    "Everything happens for a greater reason :)",
    "Finalist of India-Luxembourg Internaltional Hackathon"
  ]
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % taglines.length), 2200)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="container-max pt-28 pb-24 grid md:grid-cols-2 items-center gap-10">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="uppercase tracking-wide text-xs opacity-70">Software Engineer & Learner</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mt-3">Mandar Vijay Patil</h1>
        <p className="mt-4 text-lg opacity-90">From Mumbai. B.Tech CSE @ VIT Pune. Full-stack experience in C++, PHP (Laravel), MongoDB, React & Vue. Currently at Monotype building performant systems and delightful UIs.</p>
        <div className="mt-6 flex items-center gap-3">
          <a href="mailto:mvp23402@gmail.com" className="btn-primary">Say Hello</a>
          <a href="https://drive.google.com/file/d/1t85VX-nNMLtdA3GYF22iDX6SNx60pRGX/view?usp=sharing" target="_blank" rel="noreferrer" className="rounded-lg px-4 py-2 border border-slate-300 dark:border-white/20 hover:bg-white/10">View Resume</a>
        </div>
        <div className="mt-6 text-sm opacity-80">{taglines[idx]}</div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="hidden md:block aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-200/10 to-white/0 dark:from-white/10 dark:to-white/0">
        <Hero3D />
      </motion.div>
    </div>
  )
}


export default function App() {
  return (
    <div>
      <ParticlesBg />
      <OpenToWork />
      <AIBadge />
      <Navbar />
      <main>
        <Element name="intro" id="intro"><Hero /></Element>
        <Element name="experience" id="experience"><Experience /></Element>
        <Element name="projects" id="projects"><Projects /></Element>
        <Element name="skills" id="skills"><Skills /></Element>
        <Element name="achievements" id="achievements"><Achievements /></Element>
        <Element name="certifications" id="certifications"><Certifications /></Element>
        <Element name="education" id="education"><Education /></Element>
        <Element name="hobbies" id="hobbies"><Hobbies /></Element>
        <Element name="testimonials" id="testimonials"><Testimonials /></Element>
        <Element name="contact" id="contact"><Contact /></Element>
      </main>
      <footer className="container-max py-10 text-sm opacity-70">© {new Date().getFullYear()} Mandar Vijay Patil</footer>
    </div>
  )
}
