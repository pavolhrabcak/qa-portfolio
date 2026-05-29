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

  const byYear = training.reduce((acc, item) => {
    acc[item.year] = acc[item.year] || []
    acc[item.year].push(item)
    return acc
  }, {})

  const years = Object.keys(byYear).sort((a, b) => b - a)

  return (
    <section id="training" className="py-28 px-6">
      <div ref={ref} className={`max-w-3xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeader index="05" title="Training & Certifications" />

        <div className="relative mt-12 pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-3 top-0 bottom-0 w-px"
            style={{ background: 'rgba(51,65,85,0.8)' }}
          />

          <div className="space-y-10">
            {years.map(year => (
              <div key={year} className="relative">
                {/* Year dot */}
                <div
                  className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-emerald-500 ring-4 z-10"
                  style={{ ringColor: '#0a0f1e', transform: 'translateX(9px)' }}
                />

                <div
                  className="text-xl font-bold font-mono mb-4"
                  style={{ color: '#6ee7b7' }}
                >
                  {year}
                </div>

                <div className="space-y-3">
                  {byYear[year].map((item, i) => {
                    const style = typeStyle[item.type] || typeStyle.Course
                    return (
                      <div key={i} className="glass card-hover p-5 rounded-xl">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <h3 className="text-white font-semibold leading-snug">{item.title}</h3>
                          <span
                            className="text-xs px-2.5 py-0.5 rounded-md font-mono shrink-0"
                            style={{ background: style.bg, border: `1px solid ${style.border}`, color: style.color }}
                          >
                            {item.type}
                          </span>
                        </div>
                        <p className="text-emerald-400 text-sm font-medium mb-1">{item.provider}</p>
                        <p className="text-slate-400 text-sm">{item.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
