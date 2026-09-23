import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Отзывы</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Что говорят после подбора
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
              className="flex flex-col justify-between rounded-3xl border border-line-light bg-[#fffdf8] p-7 shadow-card"
            >
              <div>
                <span className="font-display text-5xl leading-none text-gold/50" aria-hidden="true">
                  “
                </span>
                <blockquote className="mt-2 text-base leading-relaxed text-ink/80">{t.text}</blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line-light pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-graphite font-display font-semibold text-gold-2">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.tag}</span>
                  <span className="block text-xs text-ink/50">Демо-отзыв для примера</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}