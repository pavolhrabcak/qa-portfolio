import { useRef, Fragment } from 'react'
import { skills, technologies } from '../data'
import {
  SiGithub, SiGit, SiTypescript, SiDocker, SiVercel, SiLinux,
  SiJira, SiGithubcopilot, SiConfluence, SiOpenai,
} from 'react-icons/si'
import { VscAzureDevops, VscTerminal, VscVscode } from 'react-icons/vsc'
import { FaMasksTheater, FaListCheck } from 'react-icons/fa6'
function CopilotIcon({ size = 28 }) {
  return (
    <svg fill="currentColor" fillRule="evenodd" height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.245 5.364c1.322 1.36 1.877 3.216 2.11 5.817.622 0 1.2.135 1.592.654l.73.964c.21.278.323.61.323.955v2.62c0 .339-.173.669-.453.868C20.239 19.602 16.157 21.5 12 21.5c-4.6 0-9.205-2.583-11.547-4.258-.28-.2-.452-.53-.453-.868v-2.62c0-.345.113-.679.321-.956l.73-.963c.392-.517.974-.654 1.593-.654l.029-.297c.25-2.446.81-4.213 2.082-5.52 2.461-2.54 5.71-2.851 7.146-2.864h.198c1.436.013 4.685.323 7.146 2.864zm-7.244 4.328c-.284 0-.613.016-.962.05-.123.447-.305.85-.57 1.108-1.05 1.023-2.316 1.18-2.994 1.18-.638 0-1.306-.13-1.851-.464-.516.165-1.012.403-1.044.996a65.882 65.882 0 00-.063 2.884l-.002.48c-.002.563-.005 1.126-.013 1.69.002.326.204.63.51.765 2.482 1.102 4.83 1.657 6.99 1.657 2.156 0 4.504-.555 6.985-1.657a.854.854 0 00.51-.766c.03-1.682.006-3.372-.076-5.053-.031-.596-.528-.83-1.046-.996-.546.333-1.212.464-1.85.464-.677 0-1.942-.157-2.993-1.18-.266-.258-.447-.661-.57-1.108-.32-.032-.64-.049-.96-.05zm-2.525 4.013c.539 0 .976.426.976.95v1.753c0 .525-.437.95-.976.95a.964.964 0 01-.976-.95v-1.752c0-.525.437-.951.976-.951zm5 0c.539 0 .976.426.976.95v1.753c0 .525-.437.95-.976.95a.964.964 0 01-.976-.95v-1.752c0-.525.437-.951.976-.951zM7.635 5.087c-1.05.102-1.935.438-2.385.906-.975 1.037-.765 3.668-.21 4.224.405.394 1.17.657 1.995.657h.09c.649-.013 1.785-.176 2.73-1.11.435-.41.705-1.433.675-2.47-.03-.834-.27-1.52-.63-1.813-.39-.336-1.275-.482-2.265-.394zm6.465.394c-.36.292-.6.98-.63 1.813-.03 1.037.24 2.06.675 2.47.968.957 2.136 1.104 2.776 1.11h.044c.825 0 1.59-.263 1.995-.657.555-.556.765-3.187-.21-4.224-.45-.468-1.335-.804-2.385-.906-.99-.088-1.875.058-2.265.394zM12 7.615c-.24 0-.525.015-.84.044.03.16.045.336.06.526l-.001.159a2.94 2.94 0 01-.014.25c.225-.022.425-.027.612-.028h.366c.187 0 .387.006.612.028-.015-.146-.015-.277-.015-.409.015-.19.03-.365.06-.526a9.29 9.29 0 00-.84-.044z"/>
    </svg>
  )
}

function ClaudeIcon({ size = 28 }) {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" fill="#D97757" fillRule="nonzero"/>
    </svg>
  )
}

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
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width={size} height={size}>
      <g clipPath="url(#allure-a)">
        <path fill="url(#allure-b)" fillRule="evenodd" d="M22.23 4.66a3.6 3.6 0 0 1 5.1.04A16.08 16.08 0 0 1 31.97 16a3.6 3.6 0 1 1-7.2 0c0-2.4-.98-4.61-2.58-6.24a3.6 3.6 0 0 1 .03-5.1Z" clipRule="evenodd" />
        <path fill="url(#allure-c)" fillRule="evenodd" d="M12.4 3.6A3.6 3.6 0 0 1 16 0c4.4 0 8.4 1.8 11.29 4.66a3.6 3.6 0 0 1-5.06 5.13A8.87 8.87 0 0 0 16 7.2a3.6 3.6 0 0 1-3.6-3.6Z" clipRule="evenodd" />
        <path fill="url(#allure-d)" fillRule="evenodd" d="M0 16A16 16 0 0 1 16 0a3.6 3.6 0 0 1 0 7.2 8.8 8.8 0 0 0-6.21 15.04 3.6 3.6 0 0 1-5.13 5.06A16.08 16.08 0 0 1 0 16Z" clipRule="evenodd" />
        <path fill="url(#allure-e)" fillRule="evenodd" d="M4.66 22.24a3.6 3.6 0 0 1 5.1-.03 8.87 8.87 0 0 0 6.23 2.59 3.6 3.6 0 0 1 0 7.2c-4.4 0-8.4-1.8-11.3-4.66a3.6 3.6 0 0 1-.03-5.1Z" clipRule="evenodd" />
        <path fill="url(#allure-f)" fillRule="evenodd" d="M28.38 12.4a3.6 3.6 0 0 1 3.6 3.6A16 16 0 0 1 16 32a3.6 3.6 0 0 1 0-7.2 8.8 8.8 0 0 0 8.8-8.8 3.6 3.6 0 0 1 3.6-3.6Z" clipRule="evenodd" />
        <path fill="url(#allure-g)" fillRule="evenodd" d="M28.38 12.4a3.6 3.6 0 0 1 3.6 3.6v12.4a3.6 3.6 0 1 1-7.2 0V16a3.6 3.6 0 0 1 3.6-3.6Z" clipRule="evenodd" />
        <g clipPath="url(#allure-h)">
          <path fill="url(#allure-i)" fillRule="evenodd" d="M22.23 4.66a3.6 3.6 0 0 1 5.1.04A16.08 16.08 0 0 1 31.97 16a3.6 3.6 0 1 1-7.2 0c0-2.4-.98-4.61-2.58-6.24a3.6 3.6 0 0 1 .03-5.1Z" clipRule="evenodd" />
        </g>
      </g>
      <defs>
        <linearGradient id="allure-b" x1="26.4" x2="28.8" y1="9.6" y2="15.01" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7E22CE" /><stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="allure-c" x1="26.8" x2="17.8" y1="9.4" y2="3.61" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EF4444" /><stop offset="1" stopColor="#DC2626" />
        </linearGradient>
        <linearGradient id="allure-d" x1="3.6" x2="5.4" y1="14.01" y2="24.81" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22C55E" /><stop offset="1" stopColor="#15803D" />
        </linearGradient>
        <linearGradient id="allure-e" x1="4.8" x2="14.4" y1="22.21" y2="29.21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#94A3B8" /><stop offset=".96" stopColor="#64748B" /><stop offset="1" stopColor="#64748B" />
        </linearGradient>
        <linearGradient id="allure-f" x1="28.4" x2="22.19" y1="22.18" y2="28.4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D97706" /><stop offset="1" stopColor="#FBBF24" />
        </linearGradient>
        <linearGradient id="allure-g" x1="29.2" x2="30.63" y1="54.43" y2="54.28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" /><stop offset="1" stopColor="#FBBF24" />
        </linearGradient>
        <linearGradient id="allure-i" x1="26.4" x2="28.8" y1="9.6" y2="15.01" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7E22CE" /><stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <clipPath id="allure-a"><path fill="#fff" d="M0 0h32v32H0z" /></clipPath>
        <clipPath id="allure-h"><path fill="#fff" d="M24.8 12H32v8h-7.2z" /></clipPath>
      </defs>
    </svg>
  )
}

const TECH_ICONS = {
  'TypeScript':      { icon: SiTypescript,    color: '#3178C6' },
  'GitHub':          { icon: SiGithub,        color: '#ffffff' },
  'Git':             { icon: SiGit,            color: '#F05032' },
  'Azure DevOps':    { icon: VscAzureDevops,   color: '#0078D7' },
  'Docker':          { icon: SiDocker,         color: '#2496ED' },
  'Vercel':          { icon: SiVercel,         color: '#ffffff' },
  'Linux':           { icon: SiLinux,          color: '#FCC624' },
  'Terminal':        { icon: VscTerminal,      color: '#94a3b8' },
  'JIRA':            { icon: SiJira,           color: '#0052CC' },
  'VS Code':         { icon: VscVscode,        color: '#007ACC' },
  'Claude':          { icon: ClaudeIcon,       color: '#D97757' },
  'GitHub Copilot':  { icon: CopilotIcon,     color: '#a3a3a3' },
  'Confluence':      { icon: SiConfluence,     color: '#0052CC' },
  'Playwright Report': { icon: FaMasksTheater, color: '#2EAD33' },
  'Allure Report': { icon: AllureLogo,        color: '#E8394D' },
  'Codex':       { icon: CodexIcon,           color: '#7A9DFF' },
}

function TechIcon({ name, catColor, colStart }) {
  const entry = TECH_ICONS[name]
  const color = entry?.color ?? catColor
  const abbr = name.replace(/[^A-Z0-9]/gi, '').slice(0, 3).toUpperCase() || name.slice(0, 2).toUpperCase()
  return (
    <div className="tool-pill flex flex-col items-center gap-2"
      style={{ '--glow-color': `${color}40`, ...(colStart ? { gridColumnStart: colStart } : {}) }}>
      {entry?.icon
        ? <entry.icon size={36} style={{ color }} />
        : (
          <div style={{
            width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: 6, background: `${color}20`, border: `1px solid ${color}40`,
            color, fontSize: abbr.length > 2 ? 10 : 13, fontFamily: 'monospace', fontWeight: 'bold',
          }}>{abbr}</div>
        )
      }
      <span className="text-xs text-slate-400 font-mono leading-tight text-center">
        {name.includes(' ')
          ? name.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)
          : name}
      </span>
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
        <div className="glass rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-4 justify-items-center gap-x-4 gap-y-6 sm:flex sm:flex-wrap sm:items-start sm:justify-center sm:gap-x-6 sm:gap-y-8">
            {(() => {
              const allItems = technologies.flatMap(cat => cat.items)
              const lastRowCount = allItems.length % 4
              const lastRowStart = allItems.length - lastRowCount
              return allItems.map((item, idx) => (
                <TechIcon
                  key={item}
                  name={item}
                  catColor="#94a3b8"
                  colStart={lastRowCount > 0 && idx === lastRowStart ? 2 : undefined}
                />
              ))
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}


