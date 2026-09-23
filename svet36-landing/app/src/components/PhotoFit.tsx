import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, CheckCircle2, Upload } from 'lucide-react'
import Button from './Button'

const EASE = [0.22, 1, 0.36, 1] as const

const PHOTO_URL =
  'https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=1200&q=80'

export default function PhotoFit() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(false)
  const [fileName, setFileName] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || phone.trim().length < 6) {
      setError('Укажите имя и корректный телефон')
      return
    }
    if (!consent) {
      setError('Подтвердите согласие на обработку данных')
      return
    }
    setError('')
    setDone(true)
  }

  const reset = () => {
    setDone(false)
    setName('')
    setPhone('')
    setConsent(false)
    setFileName('')
    if (fileRef.current) fileRef.current.value = ''
  }

  return (
    <section id="fit" className="bg-graphite text-light">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative overflow-hidden rounded-3xl"
          >
            <img
              src={PHOTO_URL}
              alt="Интерьер с тёплым подвесным светом"
              loading="lazy"
              width={1200}
              height={800}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 text-balance font-display text-2xl font-semibold text-light">
              Один снимок — и люстра не «спорит» с вашим интерьером
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Подбор по фото</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Не знаете, какая люстра подойдёт?
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-light/70">
              Пришлите фото комнаты — подскажем подходящий размер, высоту подвеса и стиль. Обрабатываем заявки
              в течение рабочего дня.
            </p>

            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="mt-8 rounded-3xl border border-gold-2/40 bg-graphite-2 p-7"
                  role="status"
                >
                  <CheckCircle2 className="h-10 w-10 text-gold-2" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-2xl font-semibold">Заявка отправлена</h3>
                  <p className="mt-2 text-sm leading-relaxed text-light/70">
                    Свяжемся в ближайшее время и подберём варианты по вашему пространству. Это демо-страница —
                    данные никуда не отправляются.
                  </p>
                  <Button variant="ghost" className="mt-5" onClick={reset}>
                    Отправить ещё одну
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  onSubmit={submit}
                  className="mt-8"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fit-name" className="mb-1.5 block text-sm font-medium text-light/70">
                        Ваше имя
                      </label>
                      <input
                        id="fit-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Как к вам обращаться"
                        autoComplete="name"
                        className="w-full rounded-xl border border-line bg-graphite-2 px-4 py-3 text-sm text-light outline-none transition-colors placeholder:text-light/30 focus:border-gold-2"
                      />
                    </div>
                    <div>
                      <label htmlFor="fit-phone" className="mb-1.5 block text-sm font-medium text-light/70">
                        Телефон
                      </label>
                      <input
                        id="fit-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+7 (___) ___-__-__"
                        autoComplete="tel"
                        className="w-full rounded-xl border border-line bg-graphite-2 px-4 py-3 text-sm text-light outline-none transition-colors placeholder:text-light/30 focus:border-gold-2"
                      />
                    </div>
                  </div>

                  <input
                    ref={fileRef}
                    id="fit-photo"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
                  />
                  <label
                    htmlFor="fit-photo"
                    className="mt-4 flex cursor-pointer items-center gap-4 rounded-2xl border border-dashed border-line bg-graphite-2/60 p-4 transition-colors hover:border-gold-2/60"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold-2">
                      <Upload className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 text-sm">
                      <span className="block font-medium">
                        {fileName ? 'Фото выбрано' : 'Прикрепить фото комнаты'}
                      </span>
                      <span className="block truncate text-light/50">
                        {fileName || 'JPG, PNG или HEIC · необязательно'}
                      </span>
                    </span>
                    {fileName && <Check className="ml-auto h-5 w-5 shrink-0 text-gold-2" aria-hidden="true" />}
                  </label>

                  <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-light/60">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-gold-2"
                    />
                    <span>Согласен на обработку персональных данных для обратной связи</span>
                  </label>

                  {error && (
                    <p className="mt-3 text-sm font-medium text-[#f87171]" role="alert">
                      {error}
                    </p>
                  )}

                  <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
                    Получить подбор
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}