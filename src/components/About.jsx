import { useRef } from 'react'
import { personalInfo } from '../data'
import { useInView } from '../hooks/useInView'
import { SiCypress, SiCucumber, SiPostman, SiGithub, SiDolphin } from 'react-icons/si'
import { VscAzureDevops } from 'react-icons/vsc'
import { FaMasksTheater } from 'react-icons/fa6'

const TOOLS = [
  { icon: FaMasksTheater, name: 'Playwright',    color: '#2EAD33' },
  { icon: SiCypress,      name: 'Cypress',       color: '#69D3A7' },
  { icon: SiCucumber,     name: 'Cucumber',      color: '#23D96C' },
  { icon: SiPostman,      name: 'Postman',       color: '#FF6C37' },
  { icon: SiDolphin,      name: 'MySQL',         color: '#4479A1' },
  { icon: SiGithub,       name: 'GitHub',        color: '#ffffff' },
  { icon: VscAzureDevops, name: 'Azure',         color: '#0078D7' },
]

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
    <section id="about" className="py-20 md:py-36 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeader index="01" title="About Me" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start mt-12">
          {/* Text side */}
          <div className="overflow-hidden">
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              <HighlightedText text={personalInfo.summary} />
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Languages</span>
              <div className="flex gap-2">
                {personalInfo.languages.map(lang => (
                  <span key={lang}
                    className="px-3 py-1 rounded-md text-sm font-mono text-slate-300"
                    style={{ background: 'var(--surface-solid)', border: '1px solid var(--border-strong)' }}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats side */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="glass card-hover p-4 md:p-6 text-center rounded-xl">
                  <div className="text-3xl md:text-5xl font-extrabold gradient-text mb-2 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tools row */}
            <div className="glass rounded-xl px-4 py-4">
              <div className="flex justify-between items-center">
                {TOOLS.map(({ icon: Icon, name, color }) => (
                  <div
                    key={name}
                    className="tool-pill flex flex-col items-center gap-2 w-14"
                    style={{
                      '--glow-color': `${color}40`,
                      '--border-color': `${color}70`,
                    }}
                  >
                    <Icon size={30} style={{ color }} />
                    <span className="text-xs text-slate-400 font-mono leading-tight text-center">{name}</span>
                  </div>
                ))}
              </div>
            </div>
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
