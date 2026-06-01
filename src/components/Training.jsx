import { useRef } from 'react'
import { training } from '../data'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'

const typeStyle = {
  Certification: { bg: 'rgba(234,179,8,0.08)', border: 'rgba(234,179,8,0.3)', color: '#fde047' },
  Course:        { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.3)', color: '#93c5fd' },
}

export default function Training() {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <section id="training" className="py-20 md:py-36 px-6">
      <div ref={ref} className={`max-w-4xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeader index="06" title="Trainings & Certifications" />

        <div className="mt-10">
          {/* Header row */}
          <div
            className="grid grid-cols-12 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-widest mb-1"
            style={{ color: '#64748b' }}
          >
            <span className="col-span-1">Year</span>
            <span className="col-span-5">Title</span>
            <span className="col-span-4">Provider</span>
            <span className="col-span-2 text-right">Type</span>
          </div>

          <div className="space-y-1">
            {training.map((item, i) => {
              const style = typeStyle[item.type] || typeStyle.Course
              return (
                <div
                  key={i}
                  className="grid grid-cols-12 items-center px-4 py-3 rounded-lg text-sm transition-colors duration-150 hover:bg-slate-800/30"
                  style={{
                    borderBottom: i < training.length - 1 ? '1px solid rgba(51,65,85,0.25)' : 'none',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(8px)',
                    transition: `opacity 0.3s ease ${i * 40}ms, transform 0.3s ease ${i * 40}ms`,
                  }}
                >
                  <span className="col-span-1 font-mono text-emerald-400 font-semibold">{item.year}</span>
                  <span className="col-span-5 text-white font-medium pr-4">{item.title}</span>
                  <span className="col-span-4 text-slate-400">{item.provider}</span>
                  <div className="col-span-2 flex justify-end">
                    <span
                      className="text-xs px-2 py-0.5 rounded font-mono"
                      style={{ background: style.bg, border: `1px solid ${style.border}`, color: style.color }}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
