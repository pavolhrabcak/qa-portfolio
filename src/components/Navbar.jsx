import { useState, useEffect } from 'react'

const NAV = [
  { href: '#about',        label: 'About' },
  { href: '#how-i-work',   label: 'Process' },
  { href: '#skills',       label: 'Skills & Stack' },
  { href: '#case-study',   label: 'Case Study' },
  { href: '#experience',   label: 'Experience' },
  { href: '#projects',     label: 'Projects' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const ids = NAV.map(n => n.href.slice(1))
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id)
          history.replaceState(null, '', `#${id}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--nav-border)',
        padding: '12px 0',
      } : { padding: '20px 0' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-lg font-semibold">
          <span className="text-emerald-400">PH</span>
          <span className="text-slate-400">.</span>
          <span className="text-slate-500 text-sm ml-1">QA</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === href.slice(1)
                    ? 'text-emerald-400'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-slate-400 text-sm font-medium rounded-lg hover:text-slate-100 transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 border border-emerald-500/50 text-emerald-400 text-sm font-medium rounded-lg hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'var(--menu-bg)', borderTop: '1px solid var(--nav-border)' }}>
          <ul className="flex flex-col py-4 px-6 gap-4">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-emerald-400 transition-colors block py-1"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="text-emerald-400 font-medium">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}


