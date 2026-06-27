import { useRef } from 'react'
import { personalInfo } from '../data'
import { useInView } from '../hooks/useInView'
import { SiCypress, SiCucumber, SiPostman, SiGithub, SiDolphin } from 'react-icons/si'
import { FaMasksTheater } from 'react-icons/fa6'

function ClaudeIcon({ size = 28 }) {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" fill="#D97757" fillRule="nonzero"/>
    </svg>
  )
}

const TOOLS = [
  { icon: FaMasksTheater, name: 'Playwright',    color: '#2EAD33' },
  { icon: SiCypress,      name: 'Cypress',       color: '#69D3A7' },
  { icon: SiCucumber,     name: 'Cucumber',      color: '#23D96C' },
  { icon: SiPostman,      name: 'Postman',       color: '#FF6C37' },
  { icon: SiDolphin,      name: 'MySQL',         color: '#4479A1' },
  { icon: SiGithub,       name: 'GitHub',        color: '#ffffff' },
  { icon: ClaudeIcon,     name: 'Claude',        color: '#D97757' },
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
    <section id="about" className="py-14 md:py-24 px-6 section-glow-soft" style={{ background: 'var(--bg-alt)' }}>
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`} style={{ position: 'relative', zIndex: 1 }}>
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
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-y-3">
                {TOOLS.map(({ icon: Icon, name, color }) => (
                  <div
                    key={name}
                    className="tool-pill flex flex-col items-center gap-2"
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
      <h2 className="text-3xl font-bold text-slate-300">{title}</h2>
      <div className="flex-1 h-px" style={{ background: 'rgba(51,65,85,0.8)' }} />
    </div>
  )
}


