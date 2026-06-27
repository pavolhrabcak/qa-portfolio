import { useRef } from 'react'
import { skills, technologies } from '../data'
import {
  SiGithub, SiGithubactions, SiJenkins, SiDocker, SiVercel, SiLinux,
  SiJira, SiGithubcopilot, SiConfluence,
} from 'react-icons/si'
import { VscAzureDevops, VscTerminal, VscVscode } from 'react-icons/vsc'
import { FaMasksTheater, FaRobot } from 'react-icons/fa6'

const TECH_ICONS = {
  'GitHub':          { icon: SiGithub,        color: '#ffffff' },
  'GitHub Actions':  { icon: SiGithubactions,  color: '#2088FF' },
  'Azure DevOps':    { icon: VscAzureDevops,   color: '#0078D7' },
  'Jenkins':         { icon: SiJenkins,        color: '#D24939' },
  'Docker':          { icon: SiDocker,         color: '#2496ED' },
  'Vercel':          { icon: SiVercel,         color: '#ffffff' },
  'Linux':           { icon: SiLinux,          color: '#FCC624' },
  'Terminal':        { icon: VscTerminal,      color: '#94a3b8' },
  'JIRA':            { icon: SiJira,           color: '#0052CC' },
  'VS Code':         { icon: VscVscode,        color: '#007ACC' },
  'Claude':          { icon: FaRobot,          color: '#CC9B75' },
  'GitHub Copilot':  { icon: SiGithubcopilot, color: '#a3a3a3' },
  'Confluence':      { icon: SiConfluence,     color: '#0052CC' },
  'Playwright HTML Report': { icon: FaMasksTheater, color: '#2EAD33' },
}

function TechIcon({ name, catColor }) {
  const entry = TECH_ICONS[name]
  const color = entry?.color ?? catColor
  const abbr = name.replace(/[^A-Z0-9]/gi, '').slice(0, 3).toUpperCase() || name.slice(0, 2).toUpperCase()
  return (
    <div className="tool-pill flex flex-col items-center gap-2"
      style={{ '--glow-color': `${color}40` }}>
      {entry?.icon
        ? <entry.icon size={28} style={{ color }} />
        : (
          <div style={{
            width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: 6, background: `${color}20`, border: `1px solid ${color}40`,
            color, fontSize: abbr.length > 2 ? 9 : 11, fontFamily: 'monospace', fontWeight: 'bold',
          }}>{abbr}</div>
        )
      }
      <span className="text-xs text-slate-400 font-mono leading-tight text-center">{name}</span>
    </div>
  )
}
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'

function SkillCard({ group, count, visible }) {
  return (
    <div
      className="glass card-hover rounded-xl overflow-hidden"
      style={{ border: `1px solid ${group.accent.border}` }}
    >
      <div
        className="px-5 py-4 flex items-center justify-between border-b"
        style={{ borderColor: group.accent.border, background: group.accent.glow }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="text-lg shrink-0">{group.emoji}</span>
          <div className="min-w-0">
            <span className="text-slate-300 font-semibold text-sm">{group.category}</span>
            <span className="text-slate-500 text-xs font-mono ml-2 hidden sm:inline">suite</span>
          </div>
        </div>
        <span
          className="text-xs font-mono px-2.5 py-1 rounded"
          style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}
        >
          {count}/{count} passed
        </span>
      </div>
      <div className="px-5 py-2">
        {group.items.map((item, i) => (
          <TestCase key={item.name} name={item.name} index={i} visible={visible} />
        ))}
      </div>
      <div
        className="px-5 py-3 border-t flex items-center gap-4 font-mono text-xs"
        style={{ borderColor: 'rgba(51,65,85,0.4)' }}
      >
        <span style={{ color: '#10b981' }}>● {count} passed</span>
        <span className="text-slate-600">○ 0 failed</span>
        <span className="ml-auto text-slate-600">run just now</span>
      </div>
    </div>
  )
}

function TestCase({ name, index, visible }) {
  return (
    <div
      className="flex items-center gap-2.5 py-2.5 border-b border-slate-700/20 last:border-0 min-w-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-10px)',
        transition: `opacity 0.35s ease ${index * 55}ms, transform 0.35s ease ${index * 55}ms`,
      }}
    >
      <span className="text-sm shrink-0 font-mono" style={{ color: '#10b981' }}>✓</span>
      <span className="text-slate-300 text-sm">{name}</span>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <section id="skills" className="py-14 md:py-24 px-6 section-glow-soft" style={{ background: 'var(--bg-alt)' }}>
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`} style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader index="03" title="Skills & Stack" />

        {/* ── Test suites ── */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Col 1 & 2: Manual Testing + Test Automation */}
          {skills.slice(0, 2).map((group) => {
            const count = group.items.length
            return (
              <SkillCard key={group.category} group={group} count={count} visible={visible} />
            )
          })}

          {/* Col 3: API & Performance + Methodologies stacked */}
          <div className="flex flex-col gap-6">
            {skills.slice(2).map((group) => {
              const count = group.items.length
              return (
                <SkillCard key={group.category} group={group} count={count} visible={visible} />
              )
            })}
          </div>
        </div>

        <div className="mb-16" />

        {/* ── Divider ── */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px" style={{ background: 'rgba(51,65,85,0.6)' }} />
          <span className="text-sm font-mono text-slate-400 uppercase tracking-widest px-3">Technologies & Tools</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(51,65,85,0.6)' }} />
        </div>

        {/* ── Tech icon grid ── */}
        <div className="glass rounded-xl p-6 md:p-8 space-y-8">
          {technologies.map((cat, ci) => (
            <div key={cat.category}>
              {ci > 0 && <div className="border-t mb-8" style={{ borderColor: 'rgba(51,65,85,0.4)' }} />}
              <div className="text-xs font-mono font-semibold uppercase tracking-widest mb-5"
                style={{ color: cat.border }}
                {cat.category}
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {cat.items.map(item => (
                  <TechIcon key={item} name={item} catColor="#94a3b8" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


