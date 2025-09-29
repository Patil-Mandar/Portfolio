import { useMemo } from 'react'
import Particles from 'react-tsparticles'
import type { ISourceOptions } from 'tsparticles-engine'

export default function ParticlesBg() {
  const options = useMemo<ISourceOptions>(
    () => ({
      background: { color: { value: 'transparent' } },
      fullScreen: { enable: true, zIndex: -1 },
      particles: {
        number: { value: 40, density: { enable: true, area: 800 } },
        color: { value: '#22d3ee' },
        links: { enable: true, color: '#0ea5e9', distance: 120, opacity: 0.4, width: 1 },
        move: { enable: true, speed: 0.6 },
        opacity: { value: 0.3 },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  )
  return <Particles id="tsparticles" options={options} />
}


