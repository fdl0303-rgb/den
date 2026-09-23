import { motion } from 'framer-motion'
import { STEPS } from '../lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Steps() {
  return (
    <section id="steps" className="bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Как это работает</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Четыре шага до правильного света
          </h2>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-line-light lg:left-0 lg:top-10 lg:h-px lg:w-full" aria-hidden="true" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: EASE }}
            className="absolute left-6 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-gold-2 to-gold lg:left-0 lg:top-10 lg:h-px lg:w-full lg:origin-left lg:bg-gradient-to-r lg:from-gold-2 lg:to-gold"
            style={{ backgroundSize: '100% 100%' }}
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.12 }}
                className="relative pl-16 lg:pl-0"
              >
                <span
                  className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-cream font-display text-base font-semibold text-gold lg:relative lg:mb-6"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="absolute left-[45px] top-5 h-px w-6 bg-gold/40 lg:hidden" aria-hidden="true" />
                <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}