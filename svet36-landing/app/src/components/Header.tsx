import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { NAV_LINKS, SITE } from '../lib/data'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 motion-reduce:transition-none ${
        scrolled ? 'bg-graphite/85 backdrop-blur-md shadow-[0_10px_40px_-20px_rgba(23,23,23,0.9)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="shrink-0" aria-label="СВЕТ 36 — на главную">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-light/80 transition-colors hover:text-gold-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-light transition-colors hover:text-gold-2"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-light/20" aria-hidden="true">
              <Phone className="h-4 w-4" />
            </span>
            {SITE.phone}
          </a>
          <Button href="#fit" ariaLabel="Получить бесплатный подбор света">
            Получить подбор
          </Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-light/20 text-light lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden bg-graphite/95 backdrop-blur-md lg:hidden"
            aria-label="Мобильная навигация"
          >
            <div className="flex flex-col gap-1 px-4 pb-6 pt-2 sm:px-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-light/85 transition-colors hover:bg-white/5 hover:text-gold-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 px-4 text-base font-semibold text-light"
                >
                  <Phone className="h-4 w-4 text-gold-2" aria-hidden="true" />
                  {SITE.phone}
                </a>
                <div className="px-4" onClick={() => setOpen(false)}>
                  <Button href="#fit" className="w-full justify-center">
                    Получить подбор
                  </Button>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}