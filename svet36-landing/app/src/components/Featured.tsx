import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Photo from './Photo'
import { PRODUCTS } from '../lib/data'
import type { Product } from '../lib/data'
import Button from './Button'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Featured() {
  const [active, setActive] = useState<Product | null>(null)

  return (
    <section id="catalog" className="bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Избранные модели</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Подвесные люстры, которые работают в интерьере
            </h2>
          </div>
          <Button href="#fit" variant="ghost" className="shrink-0">
            Помочь с выбором
          </Button>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              className="group flex flex-col rounded-3xl border border-line-light bg-[#fffdf8] p-3 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-graphite">
                <Photo
                  src={product.image}
                  alt={`${product.name} — ${product.style}`}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.05] motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none" />
                <button
                  type="button"
                  onClick={() => setActive(product)}
                  className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100"
                >
                  <span className="block w-full rounded-full border border-gold-2/60 bg-graphite/60 py-2.5 text-center text-sm font-semibold text-light backdrop-blur-sm transition-colors hover:bg-gold-2 hover:text-graphite">
                    Быстрый просмотр
                  </span>
                </button>
              </div>

              <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-gold">{product.style}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm font-semibold text-ink/80">{product.price}</p>
                <Button
                  variant="ghost"
                  size="md"
                  icon="arrow"
                  ariaLabel={`Подробнее про ${product.name}`}
                  className="mt-4 border-line-light text-ink hover:border-gold-2 hover:text-gold"
                  onClick={() => setActive(product)}
                >
                  Подробнее
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end justify-center bg-graphite/70 p-4 backdrop-blur-sm sm:items-center"
            role="dialog"
            aria-modal="true"
            aria-label={`Быстрый просмотр: ${active.name}`}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-h-[85vh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-3xl bg-cream text-ink shadow-2xl sm:grid-cols-2"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-graphite/80 text-light backdrop-blur-sm transition-colors hover:bg-gold-2 hover:text-graphite"
                aria-label="Закрыть просмотр"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[4/5] bg-graphite sm:aspect-auto sm:min-h-[420px]">
                <Photo
                  src={active.image}
                  alt={`${active.name} — ${active.style}`}
                  className="h-full w-full"
                />
              </div>

              <div className="flex flex-col justify-center gap-4 p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{active.style}</p>
                <h3 className="font-display text-3xl font-semibold">{active.name}</h3>
                <p className="text-2xl font-semibold">{active.price}</p>
                <p className="leading-relaxed text-ink/70">{active.description}</p>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <Button href="#fit" onClick={() => setActive(null)} ariaLabel="Получить подбор этой модели">
                    Подобрать такую
                  </Button>
                  <Button variant="ghost" className="border-line-light text-ink hover:border-gold-2 hover:text-gold" onClick={() => setActive(null)}>
                    Закрыть
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}