import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { NAV_LINKS, SITE } from '../lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contacts" className="border-t border-line bg-[#121212] text-light">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-light/60">
              Интернет-магазин освещения в Воронеже. Подвесные люстры и дизайнерские светильники для дома и
              бизнеса с бесплатным подбором по фото.
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Навигация</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-light/70 transition-colors hover:text-gold-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Контакты</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-light/70">
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-3 transition-colors hover:text-gold-2">
                  <Phone className="h-4 w-4 shrink-0 text-gold-2" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 transition-colors hover:text-gold-2">
                  <Mail className="h-4 w-4 shrink-0 text-gold-2" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-gold-2" aria-hidden="true" />
                {SITE.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Подбор света</h3>
            <p className="mt-5 text-sm leading-relaxed text-light/60">
              Пришлите фото комнаты — предложим модели под размеры, стиль и бюджет.
            </p>
            <Button href="#fit" className="mt-5">
              Получить подбор
            </Button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-xs text-light/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name} · Воронеж. Сайт-демонстрация: товары и контакты заглушки.</p>
          <div className="flex gap-6">
            <a href="#faq" className="transition-colors hover:text-gold-2">
              Политика конфиденциальности
            </a>
            <a href="#faq" className="transition-colors hover:text-gold-2">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}