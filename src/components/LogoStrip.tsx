/**
 * LogoStrip — "Trusted by" row of simple SVG wordmark logos (a geometric glyph + name),
 * faded by default and brightening on hover. They use `currentColor`, so they adapt to
 * both themes. Replace them with real customer logos when you have them.
 */
import Container from './Container'
import Reveal from './Reveal'

/** Each logo: a tiny glyph (SVG children) and a wordmark font weight. */
const logos = [
  {
    name: 'Northwind',
    glyph: <path d="M4 22 L14 4 L24 22 Z" fill="currentColor" />,
    weight: 600,
  },
  {
    name: 'Acmeify',
    glyph: <circle cx="14" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="4" />,
    weight: 500,
  },
  {
    name: 'Globex',
    glyph: (
      <path d="M14 3 L24 9 V19 L14 25 L4 19 V9 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    ),
    weight: 600,
  },
  {
    name: 'Initech',
    glyph: (
      <g fill="currentColor">
        <rect x="3" y="14" width="5" height="10" rx="1" />
        <rect x="11" y="8" width="5" height="16" rx="1" />
        <rect x="19" y="3" width="5" height="21" rx="1" />
      </g>
    ),
    weight: 500,
  },
  {
    name: 'Umbra',
    glyph: <path d="M14 3 A11 11 0 1 0 25 14 A8 8 0 0 1 14 3Z" fill="currentColor" />,
    weight: 600,
  },
  {
    name: 'Vertex',
    glyph: <path d="M5 5 L14 24 L23 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />,
    weight: 500,
  },
]

export default function LogoStrip() {
  return (
    <section className="py-10" aria-label="Trusted by">
      <Container>
        <Reveal>
          <p className="text-center text-sm uppercase tracking-widest text-muted">Trusted by fast-moving teams at</p>
          <ul className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo) => (
              <li key={logo.name} className="text-foreground opacity-40 transition hover:opacity-90">
                <svg viewBox="0 0 140 28" className="h-7 w-auto" role="img" aria-label={logo.name}>
                  {logo.glyph}
                  <text x="34" y="20" fontSize="17" fill="currentColor" fontFamily="Inter, sans-serif" style={{ fontWeight: logo.weight }}>
                    {logo.name}
                  </text>
                </svg>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
