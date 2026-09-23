import { useMemo } from 'react'
import { motion } from 'framer-motion'

type Orb = {
  left: string
  top: string
  size: number
  duration: number
  delay: number
  drift: number[]
}

const ORBS: Orb[] = [
  { left: '8%', top: '22%', size: 380, duration: 22, delay: 0, drift: [60, -40, 30] },
  { left: '34%', top: '58%', size: 300, duration: 26, delay: 2, drift: [-50, 40, -20] },
  { left: '58%', top: '12%', size: 260, duration: 19, delay: 1, drift: [40, 50, -35] },
  { left: '76%', top: '48%', size: 340, duration: 24, delay: 3, drift: [-30, -55, 25] },
]

const DUST_COUNT = 14

export default function Orbs() {
  const dust = useMemo(
    () =>
      Array.from({ length: DUST_COUNT }, (_, i) => ({
        left: `${6 + ((i * 37) % 88)}%`,
        top: `${14 + ((i * 53) % 60)}%`,
        size: 2 + (i % 3),
        duration: 7 + (i % 6),
        delay: i * 0.7,
      })),
    [],
  )

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            background: 'radial-gradient(circle, rgba(215,166,74,0.28) 0%, rgba(199,149,67,0.12) 45%, transparent 70%)',
          }}
          animate={{ x: orb.drift, y: orb.drift.map((v) => -v * 0.6) }}
          transition={{ duration: orb.duration, delay: orb.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 hidden lg:block motion-reduce:hidden">
        {dust.map((d, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold-2/40 dust-particle"
            style={{ left: d.left, top: d.top, width: d.size, height: d.size }}
            animate={{ y: [0, -26, 0], opacity: [0.15, 0.65, 0.15] }}
            transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </div>
  )
}