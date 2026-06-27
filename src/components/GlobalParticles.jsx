import { useCallback } from 'react'
import Particles, { ParticlesProvider, useParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const options = {
  fpsLimit: 30,
  interactivity: {
    events: {
      onHover: { enable: false },
    },
  },
  particles: {
    number: { value: 35, density: { enable: true } },
    color: { value: '#10b981' },
    links: {
      enable: true,
      distance: 130,
      color: '#10b981',
      opacity: 0.07,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      outModes: { default: 'bounce' },
    },
    opacity: { value: 0.2 },
    shape: { type: 'circle' },
    size: { value: { min: 1.5, max: 3 } },
  },
  detectRetina: false,
}

function ParticlesCanvas() {
  const { loaded } = useParticlesProvider()
  if (!loaded) return null
  return (
    <Particles
      id="global-particles"
      options={options}
      style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}
    />
  )
}

export default function GlobalParticles() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <ParticlesProvider init={init}>
      <ParticlesCanvas />
    </ParticlesProvider>
  )
}
