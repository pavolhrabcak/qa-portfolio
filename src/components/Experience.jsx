import { useRef, useState } from 'react'
import { experience } from '../data'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'

function FeaturedCard({ exp, visible }) {
  return (
    <div
      className="rounded-2xl overflow-hidden mb-8"
      style={{
        background: 'var(--surface-dark)',
        border: '1px solid rgba(16,185,129,0.2)',
        backdropFilter: 'blur(12px)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      {/* Header bar */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(16,185,129,0.15)', background: 'rgba(16,185,129,0.04)' }}
      >
        <span
          className="text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-widest"
          style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}
        >
          ★ Current Role
        </span>
        <span
          className="text-xs font-mono px-3 py-1 rounded-full"
          style={{ background: 'var(--surface-solid)', color: '#94a3b8' }}
        >
          {exp.period}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-white font-bold text-xl leading-tight mb-1">{exp.role}</h3>
        <p className="text-emerald-400 font-medium text-sm mb-4">{exp.company}</p>

        <p className="text-slate-400 text-base leading-relaxed mb-5">{exp.description}</p>

        <ul className="space-y-2 mb-5">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-base text-slate-300">
              <span className="text-emerald-400 mt-0.5 shrink-0">▸</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map(t => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded font-mono text-slate-300"
              style={{ background: 'var(--surface-solid)', border: '1px solid var(--border-strong)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function CompactCard({ exp, index, visible }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        border: '1px solid var(--border-medium)',
        background: 'var(--surface-dark)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.4s ease ${index * 100}ms, transform 0.4s ease ${index * 100}ms`,
      }}
    >
      {/* Row */}
      <button
        className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-800/30 transition-colors duration-150"
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0">
          <span className="text-white font-semibold text-sm leading-tight">{exp.role}</span>
          <span className="text-slate-500 text-xs font-mono hidden sm:block">·</span>
          <span className="text-emerald-400 text-xs font-medium">{exp.company}</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-mono text-slate-500 hidden sm:block">{exp.period}</span>
          <span
            className="text-slate-400 text-xs font-mono transition-transform duration-200"
            style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)', display: 'inline-block' }}
          >
            ▸
          </span>
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div
          className="px-6 pb-5"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <p className="text-slate-400 text-base leading-relaxed mt-4 mb-4">{exp.description}</p>
          <ul className="space-y-1.5 mb-4">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-base text-slate-300">
                <span className="text-emerald-400 mt-0.5 shrink-0">▸</span>
                {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map(t => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded font-mono text-slate-400"
                style={{ background: 'var(--surface-solid)', border: '1px solid var(--border-strong)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const visible = useInView(ref)
  const [featured, ...rest] = experience

  return (
    <section id="experience" className="py-20 md:py-36 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeader index="04" title="Experience" />

        <div className="mt-12">
          <FeaturedCard exp={featured} visible={visible} />

          <div className="space-y-3">
            {rest.map((exp, i) => (
              <CompactCard key={i} exp={exp} index={i} visible={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

