import { useState } from 'react'
import { LOGO_PATH, LOGO_ALT } from '../lib/data'

export default function Logo({ dark = true }: { dark?: boolean }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className={`inline-flex items-center gap-2 font-display text-xl font-bold tracking-wide ${
          dark ? 'text-light' : 'text-ink'
        }`}
        aria-label="СВЕТ 36"
      >
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-graphite">
          <span className="inline-block h-3 w-3 rotate-45 bg-gold-2" aria-hidden="true" />
        </span>
        СВЕТ&nbsp;36
      </span>
    )
  }

  return (
    <img
      src={LOGO_PATH}
      alt={LOGO_ALT}
      width={716}
      height={207}
      className="h-10 w-auto rounded-lg bg-white px-3 py-1.5 shadow-sm ring-1 ring-black/5"
      onError={() => setFailed(true)}
    />
  )
}