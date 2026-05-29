import { useRef } from 'react'
import { technologies } from '../data'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'

export default function Technologies() {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <section id="technologies" className="py-28 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeader index="04" title="Tech Stack" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {technologies.map((cat) => (
            <div key={cat.category} className="glass card-hover p-6 rounded-xl">
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#94a3b8' }}
              >
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span
                    key={item}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-transform duration-150 hover:-translate-y-0.5 cursor-default ${cat.color}`}
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
