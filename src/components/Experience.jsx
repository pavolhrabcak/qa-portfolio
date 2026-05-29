import { useRef } from 'react'
import { experience } from '../data'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'

export default function Experience() {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <section id="experience" className="py-28 px-6" style={{ background: 'rgba(15,23,42,0.4)' }}>
      <div ref={ref} className={`max-w-4xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeader index="04" title="Experience" />

        <div className="relative mt-12">
          {/* Vertical line */}
          <div
            className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: 'rgba(51,65,85,0.8)', transform: 'translateX(-50%)' }}
          />

          <div className="space-y-14">
            {experience.map((exp, i) => (
              <div key={i} className="relative flex gap-8">
                {/* Timeline dot */}
                <div
                  className="absolute left-3 md:left-1/2 top-7 w-3 h-3 rounded-full bg-emerald-500 ring-4 z-10"
                  style={{ transform: 'translate(-50%, -50%)', ringColor: '#0a0f1e' }}
                />

                {/* Card — alternate sides on md+ */}
                <div className={`ml-10 md:ml-0 w-full md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
                }`}>
                  <div className="glass card-hover p-6 rounded-xl">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <h3 className="text-white font-bold text-lg leading-tight">{exp.role}</h3>
                        <p className="text-emerald-400 font-medium text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap"
                        style={{ background: 'rgba(51,65,85,0.6)', color: '#94a3b8' }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mt-3 mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 text-sm text-slate-300">
                          <span className="text-emerald-400 mt-0.5 shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map(t => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded font-mono text-slate-400"
                          style={{ background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(71,85,105,0.5)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
