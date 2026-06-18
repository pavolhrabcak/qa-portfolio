import { personalInfo } from '../data'

export default function Footer() {
  return (
    <footer className="py-8 px-6" style={{ borderTop: '1px solid rgba(51,65,85,0.5)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-500 text-sm font-mono">
          © {new Date().getFullYear()} <span className="text-emerald-400">{personalInfo.name}</span> · QA Engineer
        </p>
        <p className="text-slate-600 text-sm">
          Built with React + Vite · {personalInfo.location}
        </p>
      </div>
    </footer>
  )
}


