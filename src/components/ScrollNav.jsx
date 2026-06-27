import { useState, useEffect } from 'react'

const NAV = [
  { href: '#hero',       label: 'Intro' },
  { href: '#about',      label: 'About' },
  { href: '#how-i-work', label: 'Process' },
  { href: '#skills',     label: 'Skills' },
  { href: '#case-study', label: 'Case Study' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#contact',    label: 'Contact' },
]

export default function ScrollNav() {
  const [active, setActive] = useState('')
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const onScroll = () => {
      const ids = NAV.map(n => n.href.slice(1))
      let found = ''
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          found = id
          break
        }
      }
      setActive(found)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed right-6 z-40 hidden xl:flex flex-col items-end gap-1"
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    >
      {NAV.map(({ href, label }) => {
        const id = href.slice(1)
        const isActive = active === id
        const isHovered = hovered === id
        return (
          <a
            key={href}
            href={href}
            aria-label={label}
            className="flex items-center gap-3 py-1.5"
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* label */}
            <span
              className="text-xs font-medium whitespace-nowrap transition-colors duration-200"
              style={{
                color: isActive ? '#34d399' : isHovered ? '#e2e8f0' : '#64748b',
              }}
            >
              {label}
            </span>

            {/* dot */}
            <span
              className="flex-shrink-0 rounded-full transition-all duration-200"
              style={{
                width:  isActive || isHovered ? '10px' : '6px',
                height: isActive || isHovered ? '10px' : '6px',
                background: isActive ? '#34d399' : isHovered ? '#64748b' : '#1e293b',
                border: isActive ? 'none' : '1px solid #334155',
                boxShadow: isActive ? '0 0 8px rgba(52,211,153,0.4)' : 'none',
              }}
            />
          </a>
        )
      })}
    </nav>
  )
}
