import { useState, useEffect } from 'react'
import { personalInfo } from '../data'

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const METRICS = [
  { line1: 'Enterprise',  line2: 'Applications', color: '#818cf8', delay: 200 },
  { line1: 'RBAC',        line2: 'Validation',   color: '#10b981', delay: 350 },
  { line1: 'Release',     line2: 'Confidence',    color: '#a78bfa', delay: 500 },
  { line1: 'E2E',         line2: 'Automation',    color: '#fbbf24', delay: 650 },
]

function MetricCell({ line1, line2, color, delay }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div
      className="px-5 py-5 transition-opacity duration-500 flex flex-col justify-center"
      style={{ opacity: visible ? 1 : 0, background: 'var(--metric-cell)' }}
    >
      <div className="text-sm md:text-lg font-bold font-mono leading-tight" style={{ color }}>
        {line1}
      </div>
      <div className="text-sm md:text-lg font-bold font-mono leading-tight text-slate-300">
        {line2}
      </div>
    </div>
  )
}

function MetricsWidget() {
  return (
    <div
      className="w-full max-w-md rounded-2xl overflow-hidden"
      style={{
        background: 'var(--widget-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid var(--widget-border)',
        boxShadow: '0 0 60px rgba(16,185,129,0.08), 0 0 100px rgba(99,102,241,0.06)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3.5"
        style={{ borderBottom: '1px solid var(--widget-divider)' }}
      >
        <div className="flex items-center gap-2">
          <span className="text-slate-300 font-mono text-sm font-semibold">QA Dashboard</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-emerald-400">LIVE</span>
        </div>
      </div>

      {/* Metrics 2×2 grid */}
      <div className="grid grid-cols-2" style={{ gap: '1px', background: 'var(--metric-grid)' }}>
        {METRICS.map(m => (
          <MetricCell key={m.line1} {...m} />
        ))}
      </div>

      {/* Tech stack row */}
      <div
        className="px-5 py-3.5"
        style={{ borderTop: '1px solid var(--widget-divider)' }}
      >
        <div className="text-xs font-mono text-slate-500 tracking-wide">
          Playwright · TypeScript · Azure DevOps
        </div>
      </div>

      {/* Activity sparkline (decorative) */}
      <div
        className="px-5 py-3"
        style={{ borderTop: '1px solid var(--border-subtle)' }}
      >
        <div className="flex items-end gap-1 h-8">
          {[3,5,4,7,6,8,5,9,7,10,8,12,10,11,12].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h * 7}%`,
                background: i === 14
                  ? 'rgba(16,185,129,0.8)'
                  : `rgba(129,140,248,${0.15 + i * 0.02})`,
                transition: `height 0.6s ease ${i * 40}ms`,
              }}
            />
          ))}
        </div>
        <div className="text-slate-600 text-xs font-mono mt-1.5">Test runs · last 15 days</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb absolute top-1/4 left-1/4 rounded-full"
        style={{ width: 'min(500px, 80vw)', height: 'min(500px, 80vw)', background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)' }} />
      <div className="orb orb-2 absolute bottom-1/3 right-1/4 rounded-full"
        style={{ width: 'min(400px, 70vw)', height: 'min(400px, 70vw)', background: 'radial-gradient(circle, rgba(129,140,248,0.10) 0%, transparent 70%)' }} />
      <div className="orb orb-3 absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ width: 'min(300px, 60vw)', height: 'min(300px, 60vw)', background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text content */}
          <div className="text-center lg:text-left overflow-hidden">
            {personalInfo.available && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 text-sm font-mono"
                style={{ borderColor: 'rgba(16,185,129,0.35)', background: 'rgba(16,185,129,0.06)', color: '#6ee7b7', maxWidth: '100%' }}>
                {/* Mobile: 2 lines */}
                <span className="sm:hidden text-center">
                  <span className="inline-flex items-center gap-2"><span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shrink-0" />Available</span><br />Freelance & Full-time
                </span>
                {/* Desktop: 1 line */}
                <span className="hidden sm:inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shrink-0" />Available · Freelance & Full-time
                </span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              <span className="text-slate-100">Hi, I'm </span>
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="text-xl md:text-2xl font-semibold text-slate-300 mb-4 font-mono">
              <span className="text-emerald-400 mr-2">{'>'}</span>
              {personalInfo.title}
            </div>

            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {personalInfo.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="#experience"
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-1"
                style={{ boxShadow: '0 4px 24px rgba(16,185,129,0.25)', color: 'white' }}>
                View My Work
              </a>
              <a href="#contact"
                className="px-8 py-3 border text-emerald-400 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-emerald-500/10 hover:-translate-y-1"
                style={{ borderColor: 'rgba(16,185,129,0.45)' }}>
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start">
              {[
                { href: `https://${personalInfo.linkedin}`, icon: <LinkedInIcon />, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`,     icon: <EmailIcon />,    label: 'Email'    },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-emerald-400 transition-colors duration-200 group">
                  {icon}
                  <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — metrics widget */}
          <div className="flex justify-center lg:justify-end">
            <MetricsWidget />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-slate-600 text-xs font-mono">scroll</span>
        <div className="w-px h-12 animate-pulse"
          style={{ background: 'linear-gradient(to bottom, rgba(16,185,129,0.5), transparent)' }} />
      </div>
    </section>
  )
}


