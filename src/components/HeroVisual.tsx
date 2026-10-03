/**
 * HeroVisual — the large picture on the right of the Hero, illustrating the headline
 * literally: "scattered data → decisions".
 *
 * Messy, slightly tilted data fragments (a CSV, a Stripe payout, a Slack message, CRM
 * leads, web traffic) send flowing lines into a glowing lens (Lumen = light), which
 * focuses them into a single clear "decision" card. If `siteConfig.heroImage` is set, a
 * photo is shown inside the lens area's frame instead.
 * All colors come from the theme CSS variables, so it follows the accent preset and theme.
 */
import type { ReactNode } from 'react'
import { siteConfig } from '../config/site'

/** Lens center, in percent of the square canvas. Connector lines converge here. */
const LENS = { x: 50, y: 52 }

/** A small, slightly tilted data fragment. `anchor` is where its connector line starts. */
interface Fragment {
  id: string
  className: string
  rotate: string
  delay: string
  anchor: { x: number; y: number }
  content: ReactNode
}

const fragments: Fragment[] = [
  {
    id: 'csv',
    className: 'left-0 top-[3%] w-[40%]',
    rotate: '-4deg',
    delay: '0s',
    anchor: { x: 30, y: 18 },
    content: (
      <>
        <p className="text-[10px] text-muted sm:text-xs">orders_q3.csv</p>
        {/* A tiny spreadsheet grid */}
        <div className="mt-1.5 grid grid-cols-3 gap-px overflow-hidden rounded-md bg-border text-[9px] tabular-nums sm:text-[10px]">
          {['#4821', 'DE', '$212', '#4822', 'UK', '$89', '#4823', 'FR', '$340'].map((cell, i) => (
            <span key={i} className="bg-surface-strong px-1 py-0.5 text-muted">
              {cell}
            </span>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'stripe',
    className: 'right-[2%] top-0 w-[34%]',
    rotate: '5deg',
    delay: '0.8s',
    anchor: { x: 76, y: 10 },
    content: (
      <>
        <p className="text-[10px] text-muted sm:text-xs">Stripe · payout</p>
        <p className="font-serif text-xl leading-tight sm:text-2xl">$12,480</p>
      </>
    ),
  },
  {
    id: 'slack',
    className: 'left-[1%] top-[38%] w-[36%]',
    rotate: '3deg',
    delay: '1.6s',
    anchor: { x: 30, y: 45 },
    content: (
      <>
        <p className="text-[10px] text-muted sm:text-xs">#sales</p>
        <p className="mt-0.5 text-[11px] leading-snug sm:text-xs">“EMEA is on fire this week 🔥”</p>
      </>
    ),
  },
  {
    id: 'crm',
    className: 'right-0 top-[28%] w-[30%]',
    rotate: '-6deg',
    delay: '0.4s',
    anchor: { x: 75, y: 33 },
    content: (
      <>
        <p className="text-[10px] text-muted sm:text-xs">HubSpot</p>
        <p className="text-sm font-medium sm:text-base">342 leads</p>
      </>
    ),
  },
  {
    id: 'traffic',
    className: 'left-[4%] top-[64%] w-[30%]',
    rotate: '-3deg',
    delay: '1.2s',
    anchor: { x: 28, y: 68 },
    content: (
      <>
        <p className="text-[10px] text-muted sm:text-xs">Sessions</p>
        <p className="text-sm font-medium sm:text-base">18.2k ↑</p>
      </>
    ),
  },
]

/** SVG layer with the flowing connector lines (fragments → lens → decision). */
function Connectors() {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
      {fragments.map((fragment) => (
        <path
          key={fragment.id}
          // A gentle curve from the fragment into the lens.
          d={`M${fragment.anchor.x} ${fragment.anchor.y} Q${(fragment.anchor.x + LENS.x) / 2} ${LENS.y} ${LENS.x} ${LENS.y}`}
          fill="none"
          strokeWidth="1.5"
          strokeDasharray="2 4"
          vectorEffect="non-scaling-stroke"
          className="animate-flow"
          style={{ stroke: 'var(--muted)', opacity: 0.6 }}
        />
      ))}
      {/* The focused beam from the lens to the decision card */}
      <path
        d={`M${LENS.x} ${LENS.y} L68 76`}
        fill="none"
        strokeWidth="3"
        strokeDasharray="4 4"
        vectorEffect="non-scaling-stroke"
        className="animate-flow"
        style={{ stroke: 'var(--accent)' }}
      />
    </svg>
  )
}

/** The glowing lens: concentric rings around a bright core with the brand mark. */
function Lens() {
  return (
    <div
      className="absolute aspect-square w-[24%] -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${LENS.x}%`, top: `${LENS.y}%` }}
    >
      <div className="glow absolute -inset-1/2" aria-hidden />
      {/* Rotating aperture ring */}
      <div className="animate-spin-slow absolute -inset-[18%] rounded-full border border-dashed border-accent/60" />
      <div className="absolute inset-0 rounded-full border border-accent/40 bg-background/70 backdrop-blur" />
      <div className="absolute inset-[18%] grid place-items-center rounded-full bg-accent font-serif text-2xl text-on-accent shadow-[0_0_40px_var(--accent)] sm:text-3xl">
        L
      </div>
    </div>
  )
}

/** The output: one clear, actionable decision. */
function DecisionCard() {
  return (
    <div className="animate-float absolute bottom-0 right-0 w-[62%] rounded-2xl border border-accent/50 bg-surface-strong p-4 shadow-2xl shadow-accent/20 [animation-delay:0.6s] sm:p-5">
      <p className="text-[10px] uppercase tracking-widest text-accent-text sm:text-xs">✦ Decision</p>
      <p className="mt-1.5 font-serif text-xl leading-tight sm:text-2xl">Move 20% of ad budget to EMEA</p>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-[11px] text-muted sm:text-xs">94% confidence · 5 sources</span>
        <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-medium text-on-accent sm:text-xs">Apply</span>
      </div>
    </div>
  )
}

export default function HeroVisual() {
  // Optional: a real photo instead of the illustration.
  if (siteConfig.heroImage) {
    return (
      <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
        <div className="glow absolute inset-[10%]" aria-hidden />
        <img
          src={siteConfig.heroImage}
          alt=""
          className="relative h-full w-full rounded-[2rem] border border-border object-cover shadow-2xl"
        />
        <DecisionCard />
      </div>
    )
  }

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none" aria-hidden>
      <Connectors />

      {/* Scattered data fragments */}
      {fragments.map((fragment) => (
        <div key={fragment.id} className={`absolute ${fragment.className}`} style={{ rotate: fragment.rotate }}>
          <div
            className="animate-float rounded-xl border border-border bg-surface-strong/90 p-2.5 shadow-lg backdrop-blur sm:p-3"
            style={{ animationDelay: fragment.delay }}
          >
            {fragment.content}
          </div>
        </div>
      ))}

      <Lens />
      <DecisionCard />
    </div>
  )
}
