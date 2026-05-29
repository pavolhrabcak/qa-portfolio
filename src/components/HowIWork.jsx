import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { SectionHeader } from './About'

const STEPS = [
  {
    number: '01',
    emoji: '📋',
    title: 'Spec Review',
    description:
      'Analyze requirements and user stories, identify testable criteria, and surface ambiguities before a single test is written.',
    tools: ['JIRA', 'Confluence', 'Azure DevOps'],
  },
  {
    number: '02',
    emoji: '✏️',
    title: 'Test Design',
    description:
      'Define test scenarios covering happy paths, edge cases, negative flows, and boundary conditions. Build the test strategy.',
    tools: ['TestLink', 'JIRA'],
  },
  {
    number: '03',
    emoji: '⚙️',
    title: 'Execution',
    description:
      'Run manual and automated suites, log defects with full reproduction steps, screenshots, and environment details.',
    tools: ['Playwright', 'Cypress', 'Postman', 'JMeter'],
  },
  {
    number: '04',
    emoji: '📊',
    title: 'Reporting',
    description:
      'Generate coverage reports, defect trend analysis, and risk assessments to keep stakeholders clearly informed.',
    tools: ['Allure Report', 'Playwright HTML Report'],
  },
  {
    number: '05',
    emoji: '✅',
    title: 'Sign-off',
    description:
      'Final quality gate — release recommendation based on exit criteria, outstanding defects, and residual risk.',
    tools: ['JIRA', 'Azure DevOps', 'Confluence'],
  },
]

function Arrow() {
  return (
    <div className="hidden lg:flex items-center justify-center shrink-0 w-8">
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
        <path
          d="M0 8 H22 M16 2 L24 8 L16 14"
          stroke="rgba(16,185,129,0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default function HowIWork() {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <section id="how-i-work" className="py-28 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeader index="02" title="How I Work" />

        <p className="text-slate-400 mt-4 mb-14 max-w-2xl text-base leading-relaxed">
          My testing process is repeatable, traceable, and built to catch issues early — before they reach production.
        </p>

        {/* Pipeline */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex flex-col lg:flex-row items-stretch flex-1 min-w-0">

              {/* Step card */}
              <div
                className="glass card-hover flex-1 rounded-xl p-5 flex flex-col gap-3"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.4s ease ${i * 100}ms, transform 0.4s ease ${i * 100}ms`,
                }}
              >
                {/* Step number + emoji */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                    style={{ color: '#0a0f1e', background: '#10b981' }}
                  >
                    {step.number}
                  </span>
                  <span className="text-xl">{step.emoji}</span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base leading-tight">{step.title}</h3>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed flex-1">{step.description}</p>

                {/* Tool tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {step.tools.map(tool => (
                    <span
                      key={tool}
                      className="text-xs font-mono px-2 py-0.5 rounded text-slate-400"
                      style={{ background: 'rgba(51,65,85,0.5)', border: '1px solid rgba(71,85,105,0.4)' }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow connector (between steps, not after last) */}
              {i < STEPS.length - 1 && (
                <>
                  <Arrow />
                  {/* Mobile vertical connector */}
                  <div className="lg:hidden flex justify-center my-1">
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-px h-4" style={{ background: 'rgba(16,185,129,0.4)' }} />
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1 L6 7 L11 1" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-600 text-xs font-mono mt-10">
          Each step feeds the next — issues caught early cost 10× less to fix
        </p>
      </div>
    </section>
  )
}
