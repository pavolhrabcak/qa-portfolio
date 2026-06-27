import { useRef, useState, useEffect } from 'react'
import { caseStudy } from '../data'
import { useInView } from '../hooks/useInView'

const TABS = [
  { id: 'challenge',     label: 'challenge.md',      short: 'challenge',   color: '#f87171' },
  { id: 'approach',      label: 'approach.md',       short: 'approach',    color: '#818cf8' },
  { id: 'results',       label: 'results.md',        short: 'results',     color: '#10b981' },
  { id: 'impact',        label: 'impact.md',         short: 'impact',      color: '#22d3ee' },
  { id: 'architecture',  label: 'architecture.md',   short: 'arch',        color: '#fbbf24' },
]

const ARCH_LAYERS = [
  { label: 'Playwright E2E',  sub: '450+ Automated Tests', color: '#10b981', bg: 'rgba(16,185,129,0.08)',   border: 'rgba(16,185,129,0.3)',   items: [] },
  { label: 'Test Layers',     color: '#818cf8',             bg: 'rgba(129,140,248,0.08)',  border: 'rgba(129,140,248,0.3)',  items: ['RBAC Testing', 'E2E Workflows', 'API Validation', 'Accessibility Checks', 'UI & Navigation Testing'] },
  { label: 'Page Objects',    color: '#a78bfa',             bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.3)', items: ['Text Translate', 'Document Translate', 'Translation History', 'Billing', 'Usage Dashboard', 'User Administration', 'Feedback Evaluation'] },
  { label: 'Shared Core',     color: '#fbbf24',             bg: 'rgba(251,191,36,0.08)',  border: 'rgba(251,191,36,0.3)',  items: ['Fixtures', 'Role Management', 'API Mocking', 'Test Data Builders', 'Download Utilities', 'Date Helpers'] },
  { label: 'Azure DevOps CI/CD', sub: 'Automated Regression Runs with notifications', color: '#f87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.3)', items: [] },
]

function FileIcon({ color }) {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <path d="M1 1h7l3 3v9H1V1z" fill={`${color}20`} stroke={color} strokeWidth="1" strokeLinejoin="round" />
      <path d="M8 1v3h3" stroke={color} strokeWidth="1" strokeLinejoin="round" />
    </svg>
  )
}

function TabContent({ id, visible }) {
  if (id === 'challenge') return (
    <div className="space-y-6">
      <p className="text-slate-300 leading-relaxed">{caseStudy.summary}</p>
      {caseStudy.sectionsOwned && (
        <div>
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 mb-2">
            Sections Owned
          </div>
          <div className="flex flex-wrap gap-2">
            {caseStudy.sectionsOwned.map(s => (
              <span key={s} className="text-xs font-mono px-2.5 py-1 rounded text-slate-300"
                style={{ background: 'var(--surface-solid)', border: '1px solid var(--border-strong)' }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
      <div>
        <div className="text-xs font-mono font-bold uppercase tracking-widest mb-3" style={{ color: '#f87171' }}>
          The Challenge
        </div>
        <p className="text-slate-400 text-base leading-relaxed">{caseStudy.challenge}</p>
      </div>
    </div>
  )

  if (id === 'approach') return (
    <div>
      <div className="text-xs font-mono font-bold uppercase tracking-widest mb-4" style={{ color: '#818cf8' }}>
        The Approach
      </div>
      <ul className="space-y-2">
        {caseStudy.approach.map((item, i) => (
          <li key={i} className="flex gap-2 text-slate-400 text-base leading-relaxed">
            <span className="text-indigo-400 shrink-0 mt-0.5">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  if (id === 'results') return (
    <div className="space-y-6">
      <p className="text-slate-400 text-base leading-relaxed">
        Key quality metrics before and after introducing the automated test suite.
      </p>
      <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border-medium)' }}>
        <div className="hidden sm:grid grid-cols-4 px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider"
          style={{ background: 'var(--surface-solid)', borderBottom: '1px solid var(--border-medium)', color: '#64748b' }}>
          <span>Metric</span><span>Before</span><span>After</span><span>Delta</span>
        </div>
        {caseStudy.comparison.map((row, i) => (
          <div key={row.label} className="px-5 py-3.5 text-sm"
            style={{
              borderBottom: i < caseStudy.comparison.length - 1 ? '1px solid var(--border-subtle)' : 'none',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-12px)',
              transition: `opacity 0.4s ease ${i * 100 + 200}ms, transform 0.4s ease ${i * 100 + 200}ms`,
            }}>
            <div className="hidden sm:grid grid-cols-4 items-center">
              <span className="text-slate-300 font-medium">{row.label}</span>
              <span className="text-slate-500 font-mono line-through decoration-slate-600">{row.before}</span>
              <span className="text-white font-mono font-semibold">{row.after}</span>
              <span>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full"
                  style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}>
                  {row.delta}
                </span>
              </span>
            </div>
            <div className="sm:hidden flex items-start justify-between gap-3">
              <div>
                <div className="text-slate-300 font-medium mb-1">{row.label}</div>
                <div className="text-white font-mono font-semibold">{row.after}</div>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg text-right"
                style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', maxWidth: '45%' }}>
                {row.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )

  if (id === 'impact') return (
    <div className="space-y-6">
      <div className="rounded-xl px-6 py-5"
        style={{ background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.2)' }}>
        <div className="flex items-center gap-2 mb-3">
          <span style={{ color: '#22d3ee' }} className="text-sm">★</span>
          <div className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: '#22d3ee' }}>Business Impact</div>
        </div>
        <p className="text-slate-300 text-base leading-relaxed">{caseStudy.impact}</p>
      </div>
    </div>
  )

  if (id === 'architecture') return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-0">
        {ARCH_LAYERS.map((layer, i) => (
          <div key={layer.label} className="w-full flex flex-col items-center">
            <div className="w-full max-w-lg rounded-xl px-5 py-3"
              style={{ background: layer.bg, border: `1px solid ${layer.border}` }}>
              <div className="text-base font-bold font-mono text-center" style={{ color: layer.color }}>{layer.label}</div>
              {layer.sub && <div className="text-sm text-slate-400 text-center mt-0.5">{layer.sub}</div>}
              {layer.items.length > 0 && (
                <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                  {layer.items.map(item => (
                    <span key={item} className="text-sm font-mono text-slate-300 px-2 py-0.5 rounded"
                      style={{ background: 'var(--surface-solid)', border: '1px solid var(--border-strong)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {i < ARCH_LAYERS.length - 1 && (
              <div className="flex flex-col items-center py-1">
                <div className="w-px h-4" style={{ background: 'rgba(100,116,139,0.5)' }} />
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="rgba(100,116,139,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div>
        <div className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 mb-3">
          Technologies Used
        </div>
        <div className="flex flex-wrap gap-2">
          {caseStudy.tech.map(t => (
            <span key={t} className="text-xs font-mono px-2.5 py-1 rounded text-slate-300"
              style={{ background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(71,85,105,0.4)' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )

  return null
}

export default function FeaturedCaseStudy() {
  const ref = useRef(null)
  const visible = useInView(ref)
  const [activeTab, setActiveTab] = useState('challenge')
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0
  }, [activeTab])

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const onWheel = (e) => {
      const isScrollable = el.scrollHeight > el.clientHeight
      if (!isScrollable) return
      e.preventDefault()
      el.scrollTop += e.deltaY
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <section id="case-study" className="py-14 md:py-24 px-6"
      style={{ background: 'rgba(251,191,36,0.03)', borderTop: '1px solid rgba(251,191,36,0.08)', borderBottom: '1px solid rgba(251,191,36,0.08)' }}>
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`}>

        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-widest"
            style={{ color: '#fbbf24', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.25)' }}>
            ★ Featured Case Study
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(51,65,85,0.8)' }} />
        </div>

        {/* VSCode card */}
        <div className="rounded-2xl overflow-hidden"
          style={{ background: 'var(--surface-dark)', border: '1px solid rgba(251,191,36,0.15)', backdropFilter: 'blur(12px)' }}>

          {/* Title bar */}
          <div className="px-6 py-4" style={{ borderBottom: '1px solid var(--border-medium)', background: 'rgba(251,191,36,0.03)' }}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-300 mb-1.5">{caseStudy.title}</h2>
                <div className="flex flex-wrap gap-3">
                  {[caseStudy.company, caseStudy.period, caseStudy.role].map(tag => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded text-slate-400"
                      style={{ background: 'var(--surface-solid)', border: '1px solid var(--border-strong)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1.5 rounded-lg"
                style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}>
                ✓ Delivered
              </span>
            </div>
          </div>

          {/* VSCode body — fixed height on desktop, auto on mobile */}
          <div className="flex flex-col sm:flex-row sm:h-[540px]">

            {/* Sidebar — desktop only */}
            <div className="hidden sm:flex flex-col w-48 shrink-0"
              style={{ background: 'rgba(8,12,24,0.6)', borderRight: '1px solid var(--border-medium)' }}>
              <div className="px-4 py-3 text-xs font-mono uppercase tracking-widest"
                style={{ color: '#334155', borderBottom: '1px solid var(--border-subtle)' }}>
                Explorer
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-600 px-4 pt-3 pb-1">
                Case Study
              </div>
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-4 py-1.5 text-left w-full transition-colors duration-150"
                  style={{
                    background: activeTab === tab.id ? 'rgba(16,185,129,0.1)' : 'transparent',
                    color: activeTab === tab.id ? '#e2e8f0' : '#64748b',
                    borderLeft: activeTab === tab.id ? '2px solid #10b981' : '2px solid transparent',
                  }}
                >
                  <FileIcon color={tab.color} />
                  <span className="text-sm font-sans truncate">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Editor area */}
            <div className="flex-1 min-w-0 flex flex-col sm:min-h-0">

              {/* Tab bar — wraps on mobile so all tabs are always visible */}
              <div className="flex flex-wrap sm:flex-nowrap sm:overflow-x-auto" style={{ borderBottom: '1px solid var(--border-medium)', background: 'rgba(8,12,24,0.4)', scrollbarWidth: 'none' }}>
                {TABS.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="flex items-center gap-1 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-sans whitespace-nowrap shrink-0 transition-colors duration-150"
                    style={{
                      background: activeTab === tab.id ? 'var(--surface-dark)' : 'transparent',
                      color: activeTab === tab.id ? '#e2e8f0' : '#475569',
                      borderBottom: activeTab === tab.id ? '1px solid #10b981' : '1px solid transparent',
                      borderRight: '1px solid var(--border-subtle)',
                    }}
                  >
                    <span style={{ display: 'block', width: '8px', height: '8px', background: tab.color, borderRadius: '1px', flexShrink: 0, position: 'relative', top: '2px' }} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content — scrollable on desktop, natural height on mobile */}
              <div ref={contentRef} className="p-4 sm:p-6 md:p-8 sm:flex-1 sm:min-h-0 sm:overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
                <TabContent id={activeTab} visible={visible} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
