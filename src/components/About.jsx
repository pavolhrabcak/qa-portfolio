import { useRef } from 'react'
import { personalInfo } from '../data'
import { useInView } from '../hooks/useInView'

const HIGHLIGHTS = [
  'manual', 'automated testing', 'automation frameworks',
  'Playwright', 'end-to-end testing', 'supported by modern AI tools',
]

function HighlightedText({ text }) {
  const pattern = new RegExp(`(${HIGHLIGHTS.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  const parts = text.split(pattern)
  return (
    <>
      {parts.map((part, i) =>
        HIGHLIGHTS.some(h => h.toLowerCase() === part.toLowerCase())
          ? <span key={i} style={{ color: '#10b981' }}>{part}</span>
          : <span key={i}>{part}</span>
      )}
    </>
  )
}

export default function About() {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <section id="about" className="py-20 md:py-36 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeader index="01" title="About Me" />

        <div className="grid md:grid-cols-2 gap-14 items-start mt-12">
          {/* Text side */}
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              <HighlightedText text={personalInfo.summary} />
            </p>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Languages</span>
              <div className="flex gap-2">
                {personalInfo.languages.map(lang => (
                  <span key={lang}
                    className="px-3 py-1 rounded-md text-sm font-mono text-slate-300"
                    style={{ background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(71,85,105,0.4)' }}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats side */}
          <div className="grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, i) => (
              <div key={i} className="glass card-hover p-6 text-center rounded-xl">
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({ index, title }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-emerald-400 font-mono text-sm">{index}.</span>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="flex-1 h-px" style={{ background: 'rgba(51,65,85,0.8)' }} />
    </div>
  )
}
