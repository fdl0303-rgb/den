import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  eager?: boolean
}

export default function Photo({ src, alt, className = '', imgClassName = '', eager = false }: Props) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`relative overflow-hidden bg-graphite ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(circle at 30% 18%, rgba(199,149,67,0.30) 0%, rgba(199,149,67,0.12) 42%, transparent 70%), linear-gradient(160deg, #2b2113 0%, #1a1714 55%, #171717 100%)',
      }}
    >
      <svg
        viewBox="0 0 200 240"
        className="absolute inset-0 h-full w-full text-gold-2/60"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path d="M100 18 V58" strokeWidth="2" />
        <path d="M58 112 A42 42 0 0 0 142 112 L142 170 A42 42 0 0 1 58 170 Z" strokeWidth="2" opacity="0.8" />
        <path d="M100 58 V112" strokeWidth="1.5" opacity="0.7" />
        <circle cx="100" cy="112" r="5" fill="currentColor" opacity="0.9" />
        <path d="M76 190 H124" strokeWidth="2.5" opacity="0.8" />
        <path d="M84 204 H116" strokeWidth="2" opacity="0.6" />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 60%, rgba(215,166,74,0.16) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  )
}