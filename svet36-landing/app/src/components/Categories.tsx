import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CATEGORIES } from '../lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Categories() {
  return (
    <section id="categories" className="bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Коллекции</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Свет под характер комнаты
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            От компактных подвесов над барной стойкой до крупных люстр для просторных гостиных — подберём
            под стиль и параметры вашего пространства.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <motion.a
              key={cat.id}
              href="#catalog"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              className="group relative block overflow-hidden rounded-3xl shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="aspect-[3/4] overflow-hidden bg-graphite">
                <img
                  src={cat.image}
                  alt={`Подвесные светильники ${cat.title}`}
                  loading="lazy"
                  width={600}
                  height={800}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] motion-reduce:transition-none"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/20 to-transparent" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition-all duration-300 group-hover:ring-gold-2/70 motion-reduce:transition-none" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl font-semibold text-light">{cat.title}</h3>
                <p className="mt-1.5 text-sm text-light/70">{cat.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-2">
                  Смотреть коллекцию
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}