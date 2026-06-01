import { useRef } from 'react'
import { projects } from '../data'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'

const ExternalIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

function ProjectCard({ project, index, visible }) {
  const isLive = project.status === 'Live'

  return (
    <div
      className="glass card-hover rounded-2xl overflow-hidden flex flex-col"
      style={{
        border: '1px solid rgba(71,85,105,0.4)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.4s ease ${index * 150}ms, transform 0.4s ease ${index * 150}ms`,
      }}
    >
      {/* Card header */}
      <div
        className="px-6 py-5"
        style={{ borderBottom: '1px solid rgba(51,65,85,0.5)', background: 'rgba(129,140,248,0.03)' }}
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
            <p className="text-slate-500 text-sm font-mono mt-0.5">{project.subtitle}</p>
          </div>
          <span
            className="text-xs font-mono px-2.5 py-1 rounded-full shrink-0"
            style={isLive
              ? { color: '#10b981', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }
              : { color: '#f59e0b', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)' }
            }
          >
            {isLive ? '● Live' : '⬡ Invite Only'}
          </span>
        </div>

        {/* Role chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.roles.map(r => (
            <span
              key={r}
              className="text-xs font-mono px-2 py-0.5 rounded text-indigo-300"
              style={{ background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.25)' }}
            >
              {r}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-5 flex flex-col flex-1">
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        <ul className="space-y-1.5 mb-5 flex-1">
          {project.features.map((f, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-300">
              <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 rounded text-slate-400"
              style={{ background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(71,85,105,0.5)' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Visit button */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-150"
        >
          Visit project <ExternalIcon />
        </a>
      </div>
    </div>
  )
}

export default function PersonalProjects() {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <section id="projects" className="py-36 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeader index="05" title="Personal Projects" />
        <p className="text-slate-500 text-sm font-mono mt-3 mb-12">
          Side projects — built independently outside of professional work.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
