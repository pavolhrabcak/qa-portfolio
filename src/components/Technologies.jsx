import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'
import {
  SiGithub, SiGithubactions, SiJenkins, SiDocker, SiVercel, SiLinux,
  SiJira, SiGithubcopilot, SiConfluence,
} from 'react-icons/si'
import { VscAzureDevops, VscTerminal } from 'react-icons/vsc'
import { VscVscode } from 'react-icons/vsc'
import { FaMasksTheater, FaRobot } from 'react-icons/fa6'

const CATEGORIES = [
  {
    label: 'CI/CD & DevOps',
    color: '#fb923c',
    tools: [
      { name: 'GitHub',          icon: SiGithub,         color: '#ffffff' },
      { name: 'GitHub Actions',  icon: SiGithubactions,  color: '#2088FF' },
      { name: 'Azure DevOps',    icon: VscAzureDevops,   color: '#0078D7' },
      { name: 'Jenkins',         icon: SiJenkins,        color: '#D24939' },
      { name: 'Docker',          icon: SiDocker,         color: '#2496ED' },
      { name: 'Vercel',          icon: SiVercel,         color: '#ffffff' },
      { name: 'Linux',           icon: SiLinux,          color: '#FCC624' },
      { name: 'Terminal',        icon: VscTerminal,      color: '#94a3b8' },
    ],
  },
  {
    label: 'Bug Tracking & TMS',
    color: '#f87171',
    tools: [
      { name: 'JIRA',        icon: SiJira,         color: '#0052CC' },
      { name: 'Azure DevOps', icon: VscAzureDevops, color: '#0078D7' },
      { name: 'TestLink',    icon: null,           color: '#94a3b8', abbr: 'TL' },
    ],
  },
  {
    label: 'IDE & AI Tools',
    color: '#a78bfa',
    tools: [
      { name: 'VS Code',        icon: VscVscode,          color: '#007ACC' },
      { name: 'Claude',         icon: FaRobot,            color: '#CC9B75' },
      { name: 'GitHub Copilot', icon: SiGithubcopilot,    color: '#a3a3a3' },
      { name: 'Codex',          icon: null,               color: '#94a3b8', abbr: 'CX' },
      { name: 'MCP Server',     icon: null,               color: '#94a3b8', abbr: 'MCP' },
    ],
  },
  {
    label: 'Reporting & Documentation',
    color: '#60a5fa',
    tools: [
      { name: 'Allure',      icon: null,           color: '#94a3b8', abbr: 'AR' },
      { name: 'PW Report',   icon: FaMasksTheater, color: '#2EAD33' },
      { name: 'Confluence',  icon: SiConfluence,   color: '#0052CC' },
    ],
  },
]

function TextIcon({ abbr, color }) {
  return (
    <div style={{
      width: 30, height: 30,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: 6,
      background: `${color}20`,
      border: `1px solid ${color}40`,
      color,
      fontSize: abbr.length > 2 ? 9 : 11,
      fontFamily: 'monospace',
      fontWeight: 'bold',
      flexShrink: 0,
    }}>
      {abbr}
    </div>
  )
}

export default function Technologies() {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <section id="technologies" className="py-14 md:py-24 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeader index="04" title="Technologies & Tools" />

        <div className="glass rounded-xl p-6 md:p-8 mt-12 space-y-8">
          {CATEGORIES.map((cat, ci) => (
            <div key={cat.label}>
              {ci > 0 && <div className="border-t mb-8" style={{ borderColor: 'rgba(51,65,85,0.4)' }} />}
              <div className="text-xs font-mono font-semibold uppercase tracking-widest mb-5"
                style={{ color: cat.color }}>
                {cat.label}
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {cat.tools.map(({ name, icon: Icon, color, abbr }) => (
                  <div
                    key={name}
                    className="tool-pill flex flex-col items-center gap-2"
                    style={{ '--glow-color': `${color}40`, '--border-color': `${color}70` }}
                  >
                    {Icon
                      ? <Icon size={30} style={{ color }} />
                      : <TextIcon abbr={abbr} color={color} />
                    }
                    <span className="text-xs text-slate-400 font-mono leading-tight text-center">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
