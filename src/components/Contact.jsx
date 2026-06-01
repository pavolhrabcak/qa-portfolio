import { useRef, useState } from 'react'
import { personalInfo } from '../data'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'

const PRIORITIES = [
  { id: 'p1', label: 'P1 · Critical', sub: 'Urgent, ASAP',          color: '#f87171' },
  { id: 'p2', label: 'P2 · High',     sub: 'This week',             color: '#fb923c' },
  { id: 'p3', label: 'P3 · Medium',   sub: 'Flexible timeline',     color: '#fbbf24' },
  { id: 'p4', label: 'P4 · Low',      sub: 'Just saying hi',        color: '#94a3b8' },
]

const ENVIRONMENTS = [
  'LinkedIn', 'GitHub', 'Referral / Word of mouth', 'Google Search', 'Job Board', 'Other',
]

const RESPONSE_TIMES = [
  'Within 24 hours', '1 – 2 business days', 'This week', 'No rush',
]

const fieldStyle = {
  width: '100%',
  background: 'rgba(10,15,30,0.7)',
  border: '1px solid rgba(51,65,85,0.7)',
  borderRadius: '8px',
  color: '#f1f5f9',
  padding: '10px 14px',
  fontSize: '14px',
  fontFamily: 'Inter, system-ui, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s',
}

function Field({ label, required, hint, children }) {
  return (
    <div>
      <label className="block mb-2">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">{label}</span>
        {required && <span className="text-red-400 ml-1">*</span>}
        {hint && <span className="text-slate-600 text-xs ml-2 normal-case tracking-normal font-sans">{hint}</span>}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const visible = useInView(ref)

  const [form, setForm] = useState({
    summary: '', reporter: '', environment: '', priority: 'p3', steps: '', response: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const p = PRIORITIES.find(p => p.id === form.priority)
    setError(false)

    try {
      const res = await fetch('https://formspree.io/f/xqejopey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          summary: form.summary,
          reporter: form.reporter,
          environment: form.environment,
          priority: p?.label,
          message: form.steps,
          response_time: form.response,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
  }

  const focusStyle = { borderColor: 'rgba(16,185,129,0.6)' }

  return (
    <section id="contact" className="py-36 px-6" style={{ background: 'rgba(15,23,42,0.4)' }}>
      <div ref={ref} className={`max-w-4xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeader index="07" title="Get In Touch" />

        {/* Bug report frame */}
        <div
          className="mt-10 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(51,65,85,0.7)', background: 'rgba(10,15,30,0.5)' }}
        >
          {/* Form header bar */}
          <div
            className="px-6 py-4 flex flex-wrap items-center justify-between gap-3"
            style={{ borderBottom: '1px solid rgba(51,65,85,0.5)', background: 'rgba(30,41,59,0.4)' }}
          >
            <div className="flex items-center gap-3">
              <span className="text-slate-500 text-xs font-mono">PROJECT:</span>
              <span className="text-emerald-400 text-xs font-mono font-semibold">pavol-hrabcak</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-500 text-xs font-mono">ISSUE TYPE:</span>
              <span className="text-slate-300 text-xs font-mono">💼 Professional Inquiry</span>
            </div>
          </div>

          {submitted ? (
            /* Success state */
            <div className="px-6 py-16 text-center">
              <div className="text-5xl mb-4">✓</div>
              <div className="text-xl font-mono font-bold mb-2" style={{ color: '#10b981' }}>
                Bug Report Submitted
              </div>
              <p className="text-slate-400 text-sm">Message received — I'll get back to you soon.</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ summary: '', reporter: '', environment: '', priority: 'p3', steps: '', response: '' }) }}
                className="mt-6 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors underline"
              >
                Submit another report
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">

              {/* Summary */}
              <Field label="Summary" required>
                <input
                  type="text"
                  value={form.summary}
                  onChange={set('summary')}
                  placeholder="Brief description of your project or request"
                  style={fieldStyle}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => Object.assign(e.target.style, { borderColor: 'rgba(51,65,85,0.7)' })}
                  required
                />
              </Field>

              {/* Reporter + Environment in a row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Reporter" required hint="your name / company">
                  <input
                    type="text"
                    value={form.reporter}
                    onChange={set('reporter')}
                    placeholder="Jane Smith · Acme Corp"
                    style={fieldStyle}
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => Object.assign(e.target.style, { borderColor: 'rgba(51,65,85,0.7)' })}
                    required
                  />
                </Field>
                <Field label="Environment" hint="how did you find me?">
                  <select
                    value={form.environment}
                    onChange={set('environment')}
                    style={{ ...fieldStyle, cursor: 'pointer' }}
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => Object.assign(e.target.style, { borderColor: 'rgba(51,65,85,0.7)' })}
                  >
                    <option value="">Select…</option>
                    {ENVIRONMENTS.map(e => <option key={e} value={e}>{e}</option>)}
                  </select>
                </Field>
              </div>

              {/* Priority */}
              <Field label="Priority" required>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {PRIORITIES.map(p => (
                    <label
                      key={p.id}
                      className="flex flex-col gap-1 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-150"
                      style={{
                        border: form.priority === p.id
                          ? `1px solid ${p.color}50`
                          : '1px solid rgba(51,65,85,0.5)',
                        background: form.priority === p.id
                          ? `${p.color}10`
                          : 'rgba(15,23,42,0.5)',
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="priority"
                          value={p.id}
                          checked={form.priority === p.id}
                          onChange={set('priority')}
                          className="sr-only"
                        />
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ background: form.priority === p.id ? p.color : 'rgba(51,65,85,0.8)' }}
                        />
                        <span
                          className="text-xs font-mono font-semibold"
                          style={{ color: form.priority === p.id ? p.color : '#64748b' }}
                        >
                          {p.label}
                        </span>
                      </div>
                      <span className="text-xs text-slate-600 pl-4">{p.sub}</span>
                    </label>
                  ))}
                </div>
              </Field>

              {/* Steps to reproduce */}
              <Field label="Steps to Reproduce" required hint="tell me about your project">
                <textarea
                  value={form.steps}
                  onChange={set('steps')}
                  placeholder={`1. Describe your project or need\n2. What role or deliverable you're looking for\n3. Rough timeline / scope`}
                  rows={5}
                  style={{ ...fieldStyle, resize: 'vertical', lineHeight: '1.6' }}
                  onFocus={e => Object.assign(e.target.style, { ...focusStyle, resize: 'vertical' })}
                  onBlur={e => Object.assign(e.target.style, { borderColor: 'rgba(51,65,85,0.7)', resize: 'vertical' })}
                  required
                />
              </Field>

              {/* Expected behavior */}
              <Field label="Expected Behavior" hint="desired response time">
                <select
                  value={form.response}
                  onChange={set('response')}
                  style={{ ...fieldStyle, cursor: 'pointer' }}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => Object.assign(e.target.style, { borderColor: 'rgba(51,65,85,0.7)' })}
                >
                  <option value="">Select expected response time…</option>
                  {RESPONSE_TIMES.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </Field>

              {error && (
                <p className="text-red-400 text-xs font-mono">Something went wrong — please try again or reach out directly via email.</p>
              )}

              {/* Submit */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-600 font-mono">
                  * required fields
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #059669, #10b981)',
                    boxShadow: '0 4px 20px rgba(16,185,129,0.25)',
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Submit Bug Report
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Direct links below */}
        <p className="text-center text-slate-600 text-xs font-mono mt-6">
          or reach out directly —{' '}
          <a href={`mailto:${personalInfo.email}`} className="text-emerald-400 hover:underline">{personalInfo.email}</a>
          {' · '}
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">LinkedIn</a>
        </p>
      </div>
    </section>
  )
}
