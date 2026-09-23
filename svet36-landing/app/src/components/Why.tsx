import { motion } from 'framer-motion'
import { BadgeCheck, Camera, Ruler, Truck } from 'lucide-react'
import { WHY_ITEMS } from '../lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

const ICONS: Record<string, typeof Ruler> = {
  ruler: Ruler,
  badge: BadgeCheck,
  camera: Camera,
  truck: Truck,
}

export default function Why() {
  return (
    <section id="why" className="bg-graphite text-light">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Надёжность</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Почему нам доверяют подбор света
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_ITEMS.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
                className="rounded-3xl border border-line bg-graphite-2 p-7 transition-colors duration-300 hover:border-gold-2/50 motion-reduce:transition-none"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/15 text-gold-2">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-light/65">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}