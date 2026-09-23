import { motion } from 'framer-motion'
import type { PointerEvent, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type Props = {
  children: ReactNode
  href?: string
  variant?: 'gold' | 'ghost'
  size?: 'md' | 'lg'
  icon?: 'arrow' | 'none'
  type?: 'button' | 'submit'
  className?: string
  ariaLabel?: string
  disabled?: boolean
  onClick?: () => void
}

export default function Button({
  children,
  href,
  variant = 'gold',
  size = 'md',
  icon = 'arrow',
  type = 'button',
  className = '',
  ariaLabel,
  disabled,
  onClick,
}: Props) {
  const baseCls =
    'glow-btn group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-[box-shadow,background-color,transform,color] duration-300 motion-reduce:transition-none' +
    ' active:scale-[0.97] motion-reduce:active:scale-100'

  const variantCls =
    variant === 'gold'
      ? 'bg-gradient-to-r from-gold to-gold-2 text-graphite shadow-warm hover:shadow-warm-lg hover:brightness-110'
      : 'border border-light/30 bg-white/5 text-light backdrop-blur-sm hover:border-gold-2/70 hover:text-gold-2'

  const sizeCls = size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm md:text-[15px]'

  const ripple = (e: PointerEvent<HTMLButtonElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const ink = document.createElement('span')
    const size = Math.max(rect.width, rect.height) * 0.6
    ink.className = 'ripple-ink'
    ink.style.width = ink.style.height = `${size}px`
    ink.style.left = `${e.clientX - rect.left - size / 2}px`
    ink.style.top = `${e.clientY - rect.top - size / 2}px`
    el.appendChild(ink)
    ink.addEventListener('animationend', () => ink.remove())
    onClick?.()
  }

  const cls = `${baseCls} ${variantCls} ${sizeCls} ${className}`

  const content = (
    <>
      <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/40 to-transparent btn-shine" aria-hidden="true" />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {icon === 'arrow' && (
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
          />
        )}
      </span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    )
  }

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.97 }}
      className={cls}
      aria-label={ariaLabel}
      disabled={disabled}
      onPointerDown={ripple}
    >
      {content}
    </motion.button>
  )
}