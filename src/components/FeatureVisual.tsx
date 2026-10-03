/**
 * FeatureVisual — the small built-in illustration shown at the top of each bento tile.
 * One internal component per visual (mini chat, sparkline, integration cloud, live
 * dashboard, speed gauge, lock + shield), selected by the `kind` from the site config.
 * All are pure CSS/SVG so they stay crisp, light, and respect reduced motion.
 */
import { useEffect, useState } from 'react'
import type { FeatureVisualKind } from '../config/site'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

/** Shared rounded frame that gives every visual the same footprint. */
function VisualFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-border bg-background/60 p-4">
      {children}
    </div>
  )
}

/** Mini chat conversation: a question, then an answer with an animated typing indicator. */
function ChatVisual() {
  return (
    <VisualFrame>
      <div className="flex w-full flex-col gap-2.5 text-xs sm:text-sm">
        <div className="animate-rise ml-auto max-w-[80%] rounded-2xl rounded-br-sm border border-border bg-surface-strong px-3 py-2">
          Which region grew fastest this quarter?
        </div>
        <div className="animate-rise mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-accent px-3 py-2 text-on-accent [animation-delay:0.5s]">
          EMEA — up 31% QoQ, led by the UK and Germany.
        </div>
        <div className="flex gap-1 pl-2">
          {[0, 0.2, 0.4].map((delay) => (
            <span key={delay} className="animate-dot size-1.5 rounded-full bg-muted" style={{ animationDelay: `${delay}s` }} />
          ))}
        </div>
      </div>
    </VisualFrame>
  )
}

/** Sparkline whose line draws itself on a loop. `pathLength=1` makes the dash math simple. */
function SparklineVisual() {
  return (
    <VisualFrame>
      <svg viewBox="0 0 200 80" className="h-full w-full" fill="none" aria-hidden>
        <path d="M0 70 L30 55 L60 62 L90 35 L120 42 L150 18 L200 8 L200 80 L0 80Z" fill="var(--accent)" opacity="0.1" />
        <path
          d="M0 70 L30 55 L60 62 L90 35 L120 42 L150 18 L200 8"
          pathLength={1}
          strokeDasharray={1}
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw"
        />
        <circle cx="200" cy="8" r="3.5" fill="var(--accent)" />
      </svg>
    </VisualFrame>
  )
}

/**
 * Simple 24×24 line icons for the integration badges. Deliberately generic (not brand
 * logos) so the template is safe to sell and easy to re-label.
 */
const integrationIcons = {
  // Chat bubble (team chat)
  chat: <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />,
  // Credit card (payments)
  payments: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M7 15h3" />
    </>
  ),
  // Document (docs/wiki)
  docs: (
    <>
      <path d="M7 3h7l4 4v14H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </>
  ),
  // Database cylinder (SQL database)
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </>
  ),
  // Connected nodes (CRM)
  crm: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="20" r="2" />
      <path d="M6.6 7.2 9.7 10M17.4 7.2 14.3 10M12 15v3" />
    </>
  ),
  // Snowflake (data warehouse)
  warehouse: <path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 2 3-2M9 20l3-2 3 2" />,
}

/** Ring of floating integration icons around a central hub, each bobbing out of sync. */
function IntegrationsVisual() {
  const badges = [
    { label: 'Team chat', icon: integrationIcons.chat, position: 'left-[10%] top-[16%]', delay: '0s' },
    { label: 'Payments', icon: integrationIcons.payments, position: 'left-1/2 top-[6%] -translate-x-1/2', delay: '0.6s' },
    { label: 'Docs', icon: integrationIcons.docs, position: 'right-[10%] top-[16%]', delay: '1.2s' },
    { label: 'Database', icon: integrationIcons.database, position: 'left-[10%] bottom-[16%]', delay: '1.8s' },
    { label: 'CRM', icon: integrationIcons.crm, position: 'left-1/2 bottom-[6%] -translate-x-1/2', delay: '0.3s' },
    { label: 'Data warehouse', icon: integrationIcons.warehouse, position: 'right-[10%] bottom-[16%]', delay: '0.9s' },
  ]
  return (
    <VisualFrame>
      {badges.map((badge) => (
        <span
          key={badge.label}
          title={badge.label}
          className={`animate-float absolute grid size-10 place-items-center rounded-xl border border-border bg-surface-strong text-foreground ${badge.position}`}
          style={{ animationDelay: badge.delay }}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            {badge.icon}
          </svg>
        </span>
      ))}
      {/* Center hub */}
      <span className="relative grid size-11 place-items-center rounded-full bg-accent text-sm font-medium text-on-accent">L</span>
    </VisualFrame>
  )
}

/** Live-updating dashboard: bars and a counter that change every second or so. */
function DashboardVisual() {
  const reducedMotion = usePrefersReducedMotion()
  const [bars, setBars] = useState([40, 62, 48, 75, 58, 82, 66, 90])
  const [visitors, setVisitors] = useState(1284)

  useEffect(() => {
    if (reducedMotion) return
    const id = window.setInterval(() => {
      setBars((current) => current.map(() => 25 + Math.round(Math.random() * 70)))
      setVisitors((current) => current + Math.round(Math.random() * 9))
    }, 1300)
    return () => window.clearInterval(id)
  }, [reducedMotion])

  return (
    <VisualFrame>
      <div className="flex h-full w-full items-end gap-4">
        <div className="shrink-0 self-start">
          <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted">
            <span className="animate-blink size-1.5 rounded-full bg-accent" /> Live
          </p>
          <p className="mt-1 font-serif text-3xl tabular-nums">{visitors.toLocaleString()}</p>
          <p className="text-xs text-muted">visitors now</p>
        </div>
        <div className="flex h-full flex-1 items-end gap-1.5">
          {bars.map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t bg-accent/80 transition-[height] duration-700 ease-in-out"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </VisualFrame>
  )
}

/** Speed gauge: a half-circle dial whose needle swings back and forth, label centered below. */
function SpeedVisual() {
  return (
    <VisualFrame>
      <div className="flex flex-col items-center gap-1">
        <svg viewBox="0 0 120 72" className="h-20 w-auto" aria-hidden>
          <path d="M15 62 A45 45 0 0 1 105 62" fill="none" stroke="var(--border)" strokeWidth="8" strokeLinecap="round" />
          <path d="M15 62 A45 45 0 0 1 82 23" fill="none" stroke="var(--accent)" strokeWidth="8" strokeLinecap="round" />
          <g className="animate-needle" style={{ transformOrigin: '60px 62px' }}>
            <line x1="60" y1="62" x2="60" y2="26" stroke="var(--foreground)" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <circle cx="60" cy="62" r="5" fill="var(--foreground)" />
        </svg>
        <span className="font-serif text-2xl leading-none">&lt;200ms</span>
      </div>
    </VisualFrame>
  )
}

/** Lock inside a shield, over a dotted pattern with pulsing rings. */
function SecurityVisual() {
  return (
    <VisualFrame>
      {/* Dotted shield pattern in the background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(var(--border) 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
        aria-hidden
      />
      {/* Pulsing rings */}
      {[0, 1.5].map((delay) => (
        <span
          key={delay}
          className="animate-ring absolute size-24 rounded-full border border-accent"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
      <svg viewBox="0 0 64 72" className="relative h-28" fill="none" aria-hidden>
        {/* Shield */}
        <path
          d="M32 4 L56 13 V34 C56 50 45 62 32 68 C19 62 8 50 8 34 V13 Z"
          fill="var(--surface-strong)"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Lock */}
        <rect x="21" y="33" width="22" height="17" rx="3.5" fill="var(--accent)" />
        <path d="M25 33 V28 a7 7 0 0 1 14 0 V33" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </VisualFrame>
  )
}

export default function FeatureVisual({ kind }: { kind: FeatureVisualKind }) {
  switch (kind) {
    case 'chat':
      return <ChatVisual />
    case 'sparkline':
      return <SparklineVisual />
    case 'integrations':
      return <IntegrationsVisual />
    case 'dashboard':
      return <DashboardVisual />
    case 'speed':
      return <SpeedVisual />
    case 'security':
      return <SecurityVisual />
  }
}
