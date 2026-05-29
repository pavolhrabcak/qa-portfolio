import { useRef } from 'react'
import { caseStudy } from '../data'
import { useInView } from '../hooks/useInView'

export default function FeaturedCaseStudy() {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <section id="case-study" className="py-28 px-6">
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
            <p className="text-slate-300 leading-relaxed mb-8 max-w-3xl">{caseStudy.summary}</p>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Challenge */}
              <div>
                <h3
                  className="text-xs font-mono font-bold uppercase tracking-widest mb-3"
                  style={{ color: '#f87171' }}
                >
                  The Challenge
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{caseStudy.challenge}</p>
              </div>
              {/* Approach */}
              <div>
                <h3
                  className="text-xs font-mono font-bold uppercase tracking-widest mb-3"
                  style={{ color: '#818cf8' }}
                >
                  The Approach
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{caseStudy.approach}</p>
              </div>
            </div>

            {/* Results table */}
            <div
              className="rounded-xl overflow-hidden mb-8"
              style={{ border: '1px solid rgba(51,65,85,0.5)' }}
            >
              {/* Results header */}
              <div
                className="grid grid-cols-4 px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider"
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
                  className="grid grid-cols-4 px-5 py-3.5 items-center text-sm"
                  style={{
                    borderBottom: i < caseStudy.comparison.length - 1 ? '1px solid rgba(51,65,85,0.3)' : 'none',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-12px)',
                    transition: `opacity 0.4s ease ${i * 100 + 200}ms, transform 0.4s ease ${i * 100 + 200}ms`,
                  }}
                >
                  <span className="text-slate-300 font-medium">{row.label}</span>
                  <span className="text-slate-500 font-mono line-through decoration-slate-600">{row.before}</span>
                  <span className="text-white font-mono font-semibold">{row.after}</span>
                  <span>
                    <span
                      className="text-xs font-mono font-bold px-2.5 py-1 rounded-full"
                      style={{
                        color: row.up ? '#10b981' : '#10b981',
                        background: 'rgba(16,185,129,0.1)',
                        border: '1px solid rgba(16,185,129,0.25)',
                      }}
                    >
                      {row.delta}
                    </span>
                  </span>
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
                <p className="text-slate-300 text-sm leading-relaxed">{caseStudy.impact}</p>
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
          </div>
        </div>
      </div>
    </section>
  )
}
