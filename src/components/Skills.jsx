import { useRef } from 'react'
import { skills, technologies } from '../data'
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
            <span className="text-white font-semibold text-sm">{group.category}</span>
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
    <section id="skills" className="py-20 md:py-36 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`}>
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

        {/* ── Tech tag grid ── */}
        <div className="grid md:grid-cols-2 gap-5">
          {technologies.map((cat) => (
            <div key={cat.category} className="glass card-hover p-5 rounded-xl">
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#64748b' }}
              >
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span
                    key={item}
                    className={`px-2.5 py-1 rounded-md text-sm font-mono transition-transform duration-150 hover:-translate-y-0.5 cursor-default ${cat.color}`}
                    style={{ background: cat.bg, border: `1px solid ${cat.border}` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
