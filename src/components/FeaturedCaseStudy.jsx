import { useRef } from 'react'
import { caseStudy } from '../data'
import { useInView } from '../hooks/useInView'

export default function FeaturedCaseStudy() {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <section id="case-study" className="py-36 px-6" style={{ background: 'rgba(251,191,36,0.03)', borderTop: '1px solid rgba(251,191,36,0.08)', borderBottom: '1px solid rgba(251,191,36,0.08)' }}>
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${visible ? 'visible' : ''}`}>

        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span
            className="text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-widest"
            style={{ color: '#fbbf24', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.25)' }}
          >
            ★ Featured Case Study
          </span>
          <div className="flex-1 h-px" style={{ background: 'rgba(51,65,85,0.8)' }} />
        </div>

        {/* Card */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(15,23,42,0.6)',
            border: '1px solid rgba(251,191,36,0.15)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Card header */}
          <div
            className="px-8 py-6"
            style={{ borderBottom: '1px solid rgba(51,65,85,0.5)', background: 'rgba(251,191,36,0.03)' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h2>
                <div className="flex flex-wrap gap-3">
                  {[caseStudy.company, caseStudy.period, caseStudy.role].map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded text-slate-400"
                      style={{ background: 'rgba(51,65,85,0.5)', border: '1px solid rgba(71,85,105,0.4)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className="text-xs font-mono px-3 py-1.5 rounded-lg"
                style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}
              >
                ✓ Delivered
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-8">
            <p className="text-slate-300 leading-relaxed mb-4">{caseStudy.summary}</p>

            {caseStudy.sectionsOwned && (
              <div className="mb-8">
                <div className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 mb-2">
                  Sections Owned
                </div>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.sectionsOwned.map(s => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2.5 py-1 rounded text-slate-300"
                      style={{ background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(71,85,105,0.4)' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-8 mb-8">
              {/* Challenge */}
              <div>
                <h3
                  className="text-xs font-mono font-bold uppercase tracking-widest mb-3"
                  style={{ color: '#f87171' }}
                >
                  The Challenge
                </h3>
                <p className="text-slate-400 text-base leading-relaxed">{caseStudy.challenge}</p>
              </div>
              {/* Approach */}
              <div>
                <h3
                  className="text-xs font-mono font-bold uppercase tracking-widest mb-3"
                  style={{ color: '#818cf8' }}
                >
                  The Approach
                </h3>
                <ul className="space-y-1.5">
                  {caseStudy.approach.map((item, i) => (
                    <li key={i} className="flex gap-2 text-slate-400 text-base leading-relaxed">
                      <span className="text-indigo-400 shrink-0 mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results table */}
            <div
              className="rounded-xl overflow-hidden mb-8"
              style={{ border: '1px solid rgba(51,65,85,0.5)' }}
            >
              {/* Results header — hidden on mobile */}
              <div
                className="hidden sm:grid grid-cols-4 px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider"
                style={{ background: 'rgba(30,41,59,0.8)', borderBottom: '1px solid rgba(51,65,85,0.5)', color: '#64748b' }}
              >
                <span>Metric</span>
                <span>Before</span>
                <span>After</span>
                <span>Delta</span>
              </div>

              {caseStudy.comparison.map((row, i) => (
                <div
                  key={row.label}
                  className="px-5 py-3.5 text-sm"
                  style={{
                    borderBottom: i < caseStudy.comparison.length - 1 ? '1px solid rgba(51,65,85,0.3)' : 'none',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-12px)',
                    transition: `opacity 0.4s ease ${i * 100 + 200}ms, transform 0.4s ease ${i * 100 + 200}ms`,
                  }}
                >
                  {/* Desktop: 4-column row */}
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
                  {/* Mobile: stacked layout */}
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

            {/* Impact statement */}
            <div
              className="rounded-xl px-6 py-4 mb-8 flex gap-3 items-start"
              style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}
            >
              <span className="text-emerald-400 text-lg shrink-0 mt-0.5">★</span>
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-1">Business Impact</div>
                <p className="text-slate-300 text-base leading-relaxed">{caseStudy.impact}</p>
              </div>
            </div>

            {/* Tech used */}
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 mb-3">
                Technologies Used
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tech.map(t => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded text-slate-300"
                    style={{ background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(71,85,105,0.4)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Framework Architecture */}
            <div className="mt-8">
              <div className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 mb-6">
                Framework Architecture
              </div>

              {/* Flow diagram */}
              <div className="flex flex-col items-center gap-0 mb-8">
                {[
                  {
                    label: 'Playwright E2E',
                    sub: '450+ Automated Tests',
                    color: '#10b981',
                    bg: 'rgba(16,185,129,0.08)',
                    border: 'rgba(16,185,129,0.3)',
                    items: [],
                  },
                  {
                    label: 'Test Layers',
                    color: '#818cf8',
                    bg: 'rgba(129,140,248,0.08)',
                    border: 'rgba(129,140,248,0.3)',
                    items: ['RBAC Testing', 'E2E Workflows', 'API Validation', 'Accessibility Checks', 'UI & Navigation Testing'],
                  },
                  {
                    label: 'Page Objects',
                    color: '#a78bfa',
                    bg: 'rgba(167,139,250,0.08)',
                    border: 'rgba(167,139,250,0.3)',
                    items: ['Text Translate', 'Document Translate', 'Translation History', 'Billing', 'Usage Dashboard', 'User Administration', 'Feedback Evaluation'],
                  },
                  {
                    label: 'Shared Core',
                    color: '#fbbf24',
                    bg: 'rgba(251,191,36,0.08)',
                    border: 'rgba(251,191,36,0.3)',
                    items: ['Fixtures', 'Role Management', 'API Mocking', 'Test Data Builders', 'Download Utilities', 'Date Helpers'],
                  },
                  {
                    label: 'Azure DevOps CI/CD',
                    sub: 'Automated Regression Runs with notifications',
                    color: '#f87171',
                    bg: 'rgba(248,113,113,0.08)',
                    border: 'rgba(248,113,113,0.3)',
                    items: [],
                  },
                ].map((layer, i) => (
                  <div key={layer.label} className="w-full flex flex-col items-center">
                    <div
                      className="w-full max-w-lg rounded-xl px-5 py-3"
                      style={{ background: layer.bg, border: `1px solid ${layer.border}` }}
                    >
                      <div className="text-sm font-bold font-mono text-center" style={{ color: layer.color }}>{layer.label}</div>
                      {layer.sub && <div className="text-xs text-slate-400 text-center mt-0.5">{layer.sub}</div>}
                      {layer.items.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                          {layer.items.map(item => (
                            <span key={item} className="text-xs font-mono text-slate-300 px-2 py-0.5 rounded"
                              style={{ background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(71,85,105,0.3)' }}>
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {i < 4 && (
                      <div className="flex flex-col items-center py-1">
                        <div className="w-px h-4" style={{ background: 'rgba(100,116,139,0.5)' }} />
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                          <path d="M1 1L5 5L9 1" stroke="rgba(100,116,139,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 mb-3 mt-2">
                Framework Highlights
              </div>
              <ul className="space-y-2">
                {[
                  'Designed a layered Playwright + TypeScript framework using Page Objects, fixtures, and shared utilities to support long-term maintainability.',
                  'Implemented role-based test coverage for multiple user roles and unauthorized access scenarios.',
                  'Combined UI validation, API mocking, accessibility testing, and end-to-end workflows within a single automation solution.',
                  'Built reusable test infrastructure that enabled consistent coverage across translation, reporting, administration, billing, and feedback modules.',
                  'Applied risk-based automation principles, focusing on high-value scenarios while keeping unstable third-party-dependent flows under targeted manual regression.',
                ].map((h, i) => (
                  <li key={i} className="flex gap-2 text-base text-slate-300">
                    <span className="text-emerald-400 mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
