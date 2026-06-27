import { useRef } from 'react'
import { skills, technologies } from '../data'
import {
  SiGithub, SiGithubactions, SiJenkins, SiDocker, SiVercel, SiLinux,
  SiJira, SiGithubcopilot, SiConfluence, SiOpenai,
} from 'react-icons/si'
import { VscAzureDevops, VscTerminal, VscVscode } from 'react-icons/vsc'
import { FaMasksTheater, FaRobot, FaListCheck, FaWandMagicSparkles, FaServer } from 'react-icons/fa6'
function CodexIcon({ size = 28 }) {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.503 0H4.496A4.496 4.496 0 000 4.496v15.007A4.496 4.496 0 004.496 24h15.007A4.496 4.496 0 0024 19.503V4.496A4.496 4.496 0 0019.503 0z" fill="#fff"/>
      <path d="M9.064 3.344a4.578 4.578 0 012.285-.312c1 .115 1.891.54 2.673 1.275.01.01.024.017.037.021a.09.09 0 00.043 0 4.55 4.55 0 013.046.275l.047.022.116.057a4.581 4.581 0 012.188 2.399c.209.51.313 1.041.315 1.595a4.24 4.24 0 01-.134 1.223.123.123 0 00.03.115c.594.607.988 1.33 1.183 2.17.289 1.425-.007 2.71-.887 3.854l-.136.166a4.548 4.548 0 01-2.201 1.388.123.123 0 00-.081.076c-.191.551-.383 1.023-.74 1.494-.9 1.187-2.222 1.846-3.711 1.838-1.187-.006-2.239-.44-3.157-1.302a.107.107 0 00-.105-.024c-.388.125-.78.143-1.204.138a4.441 4.441 0 01-1.945-.466 4.544 4.544 0 01-1.61-1.335c-.152-.202-.303-.392-.414-.617a5.81 5.81 0 01-.37-.961 4.582 4.582 0 01-.014-2.298.124.124 0 00.006-.056.085.085 0 00-.027-.048 4.467 4.467 0 01-1.034-1.651 3.896 3.896 0 01-.251-1.192 5.189 5.189 0 01.141-1.6c.337-1.112.982-1.985 1.933-2.618.212-.141.413-.251.601-.33.215-.089.43-.164.646-.227a.098.098 0 00.065-.066 4.51 4.51 0 01.829-1.615 4.535 4.535 0 011.837-1.388zm3.482 10.565a.637.637 0 000 1.272h3.636a.637.637 0 100-1.272h-3.636zM8.462 9.23a.637.637 0 00-1.106.631l1.272 2.224-1.266 2.136a.636.636 0 101.095.649l1.454-2.455a.636.636 0 00.005-.64L8.462 9.23z" fill="url(#codex-grad)"/>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="codex-grad" x1="12" x2="12" y1="3" y2="21">
          <stop stopColor="#B1A7FF"/>
          <stop offset=".5" stopColor="#7A9DFF"/>
          <stop offset="1" stopColor="#3941FF"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function AllureLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 6 L94 88 H72 L50 44 L28 88 H6 Z" fill="#E8394D" />
      <path d="M50 44 L28 88 H72 Z" fill="rgba(0,0,0,0.25)" />
    </svg>
  )
}

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
  'TestLink':    { icon: FaListCheck,         color: '#94a3b8' },
  'Allure Report': { icon: AllureLogo,        color: '#E8394D' },
  'Codex':       { icon: CodexIcon,           color: '#7A9DFF' },
  'MCP Server':  { icon: FaServer,            color: '#94a3b8' },
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
                style={{ color: cat.border }}>
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


