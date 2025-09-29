import { Section } from '../components/Section'
import { skills } from '../content'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState} from 'react'

function Bubble({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = (event.clientX - centerX) / (rect.width / 2)
    const distanceY = (event.clientY - centerY) / (rect.height / 2)
    
    mouseX.set(distanceX)
    mouseY.set(distanceY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div 
      className="relative aspect-square w-full max-w-sm md:max-w-md mx-auto rounded-full border border-slate-200 dark:border-white/10 bg-white/5 dark:bg-white/5 overflow-hidden cursor-pointer"
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent" />
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  )
}

function FloatingPill({ label, delay, isHovered }: { label: string; delay: number; isHovered: boolean }) {
  const [isPillHovered, setIsPillHovered] = useState(false)
  const [positions] = useState(() => {
    const x = Math.random() * 70 + 10
    const y = Math.random() * 70 + 10
    const dx = (Math.random() * 40 - 20) || 10
    const dy = (Math.random() * 40 - 20) || -12
    return { x, y, dx, dy }
  })
  
  const { x, y, dx, dy } = positions
  
  return (
    <motion.span
      className="absolute px-2 py-1 rounded-md bg-white/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs backdrop-blur-sm cursor-pointer select-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        left: [`${x}%`, `${x + dx}%`, `${x}%`], 
        top: [`${y}%`, `${y + dy}%`, `${y}%`], 
        opacity: 1,
        scale: isPillHovered ? 1.1 : 1
      }}
      transition={{ 
        duration: isHovered ? 2 + Math.random() * 2 : 6 + Math.random() * 4, 
        delay, 
        repeat: Infinity, 
        ease: 'easeInOut',
        repeatType: 'loop'
      }}
      onMouseEnter={() => setIsPillHovered(true)}
      onMouseLeave={() => setIsPillHovered(false)}
      whileHover={{ 
        scale: 1.15,
        zIndex: 50,
        boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.span>
  )
}

export default function Skills() {
  const [isBubbleHovered, setIsBubbleHovered] = useState(false)
  const all = [
    ...skills.programming.slice(0, 6),
    ...skills.frameworks.slice(0, 6),
    ...skills.databases.slice(0, 4),
    ...skills.tools.slice(0, 6),
  ]

  return (
    <Section title="Skills" subtitle="Interactive bubble with floating pills">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="mt-4 p-3 rounded-lg bg-white/5 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <p className="text-xs font-medium mb-1">Core Strengths:</p>
            <p className="text-xs opacity-80">OOPs, Data Structures & Algorithms, Web Development, C++, Python React, Node.js, MongoDB & SQL</p>
          </div>
        </div>
        <div onMouseEnter={() => setIsBubbleHovered(true)} onMouseLeave={() => setIsBubbleHovered(false)}>
          <Bubble>
            {all.map((label, i) => (
              <FloatingPill key={label} label={label} delay={i * 0.12} isHovered={isBubbleHovered} />
            ))}
          </Bubble>
        </div>
      </div>
    </Section>
  )
}


