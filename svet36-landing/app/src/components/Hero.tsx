import { motion } from 'framer-motion'
import { Upload } from 'lucide-react'
import { useState } from 'react'
import Button from './Button'
import Orbs from './Orbs'
import { HERO_IMAGE, TRUST_ITEMS } from '../lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        {photoFailed ? (
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_75%_10%,rgba(215,166,74,0.28),transparent_55%),radial-gradient(100%_80%_at_15%_90%,rgba(215,166,74,0.14),transparent_60%)] bg-warm-dark" />
        ) : (
          <img
            src={HERO_IMAGE}
            alt="Современный интерьер с подвесной люстрой над обеденным столом"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
            onError={() => setPhotoFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/70 to-graphite/10" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-graphite via-graphite/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-graphite/80 to-transparent" />
      </div>

      <Orbs />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-2/40 bg-graphite/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-2 backdrop-blur-sm"
        >
          Магазин освещения в Воронеже
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
          className="max-w-2xl font-display text-balance text-4xl font-semibold leading-[1.05] text-light sm:text-5xl lg:text-6xl"
        >
          Свет, который создаёт{' '}
          <span className="bg-gradient-to-r from-gold-2 to-gold bg-clip-text text-transparent">настроение</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-light/75"
        >
          Подвесные люстры и светильники для интерьеров, в которые хочется возвращаться.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.28 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#catalog" size="lg" className="sm:min-w-[220px] justify-center">
            Выбрать люстру
          </Button>
          <Button href="#fit" variant="ghost" size="lg" icon="none" className="sm:min-w-[280px] justify-center">
            <Upload className="h-5 w-5" aria-hidden="true" />
            Бесплатный подбор по фото комнаты
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
          className="mt-12 flex flex-col gap-3 text-sm text-light/70 sm:flex-row sm:flex-wrap sm:gap-x-0"
        >
          {TRUST_ITEMS.map((item, i) => (
            <li key={item} className="flex items-center">
              {i > 0 && (
                <span className="mx-5 hidden h-4 w-px bg-light/20 sm:inline-block" aria-hidden="true" />
              )}
              <span className="relative pl-4">
                <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gold-2" aria-hidden="true" />
                {item}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}