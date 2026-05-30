import { personalInfo, experience, skills, training, projects } from '../data'

const CONTACT = [
  { label: 'Email',    value: personalInfo.email },
  { label: 'LinkedIn', value: personalInfo.linkedin },
  { label: 'Location', value: personalInfo.location },
]

function Section({ title, children }) {
  return (
    <section className="mb-4">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700">{title}</h2>
        <div className="flex-1 h-px bg-emerald-200" />
      </div>
      {children}
    </section>
  )
}

export default function CVPage() {
  const certifications = training.filter(t => t.type === 'Certification')
  const courses = training.filter(t => t.type === 'Course')

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 print:py-0 print:px-0 print:bg-white">

      {/* Print / Back controls — hidden on print */}
      <div className="max-w-4xl mx-auto mb-6 flex gap-3 print:hidden">
        <button
          onClick={() => window.print()}
          className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Print / Save as PDF
        </button>
        <a
          href="/"
          className="px-5 py-2 border border-gray-300 hover:border-gray-400 text-gray-600 text-sm font-semibold rounded-lg transition-colors"
        >
          ← Back to Portfolio
        </a>
      </div>

      {/* CV Document */}
      <div
        className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none print:max-w-none"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        <div className="p-8 print:p-6">

          {/* Header */}
          <div className="mb-5 pb-4 border-b-2 border-emerald-600">
            <h1 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>
              {personalInfo.name}
            </h1>
            <p className="text-base text-emerald-700 font-semibold mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600" style={{ fontFamily: 'system-ui, sans-serif' }}>
              {CONTACT.map(c => (
                <span key={c.label}>
                  <span className="font-semibold text-gray-700">{c.label}:</span>{' '}
                  <span>{c.value}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Summary */}
          <Section title="Profile">
            <p className="text-sm text-gray-700 leading-relaxed">{personalInfo.summary}</p>
            <div className="flex flex-wrap gap-x-4 mt-2 text-sm text-gray-600">
              <span><strong>Languages:</strong> {personalInfo.languages.join(' · ')}</span>
            </div>
          </Section>

          {/* Experience */}
          <Section title="Experience">
            <div className="space-y-3">
              {experience.map((exp, i) => (
                <div key={i} className={i < experience.length - 1 ? 'pb-3 border-b border-gray-100' : ''} style={{ breakInside: 'avoid' }}>
                  <div className="flex items-start justify-between gap-4 mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    <div>
                      <span className="font-bold text-gray-900 text-sm">{exp.role}</span>
                      <span className="text-emerald-700 text-sm font-medium"> · {exp.company}</span>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">{exp.description}</p>
                  <ul className="space-y-0.5 mb-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-xs text-gray-700 flex gap-2">
                        <span className="text-emerald-600 shrink-0">▸</span>{h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1">
                    {exp.tech.map(t => (
                      <span key={t} className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded border border-gray-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Skills */}
          <Section title="Skills">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {skills.map(group => (
                <div key={group.category}>
                  <p className="text-xs font-bold text-gray-700 mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>{group.category}</p>
                  <p className="text-xs text-gray-600">{group.items.map(i => i.name).join(' · ')}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Certifications */}
          <Section title="Certifications">
            <div className="space-y-1">
              {certifications.map(c => (
                <div key={c.title} className="flex items-baseline justify-between text-sm">
                  <span className="text-gray-800 font-medium">{c.title}</span>
                  <span className="text-gray-500 text-xs ml-4 whitespace-nowrap">{c.provider} · {c.year}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Training */}
          <Section title="Training & Courses">
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              {courses.map(c => (
                <div key={c.title} className="flex items-baseline gap-2 text-sm">
                  <span className="text-gray-700 truncate">{c.title}</span>
                  <span className="text-gray-400 whitespace-nowrap shrink-0 text-xs">{c.year}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Personal Projects */}
          <Section title="Personal Projects">
            <div className="grid grid-cols-2 gap-x-8" style={{ breakInside: 'avoid' }}>
              {projects.map(p => (
                <div key={p.title}>
                  <div className="mb-0.5" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    <span className="font-bold text-sm text-gray-900">{p.title}</span>
                    <span className="text-emerald-700 text-xs font-medium ml-1">— {p.subtitle}</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-1">{p.url}</div>
                  <ul className="space-y-0.5 mb-1.5">
                    {p.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="text-xs text-gray-700 flex gap-2">
                        <span className="text-emerald-600 shrink-0">▸</span>{f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1">
                    {p.tech.map(t => (
                      <span key={t} className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded border border-gray-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page { margin: 1cm; size: A4; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
    </div>
  )
}
