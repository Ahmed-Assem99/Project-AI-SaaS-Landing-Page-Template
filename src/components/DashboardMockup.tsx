/**
 * DashboardMockup — an animated fake product screenshot inside a browser frame (Hero).
 *
 * The demo loops through: 1) the "Ask Lumen" input types a question letter by letter,
 * 2) the bar chart animates up, 3) an AI answer card fades in below it, 4) everything
 * resets smoothly and repeats. With reduced motion enabled it shows the finished state.
 * A soft glow beneath the frame lifts it off the page.
 */
import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const QUESTION = 'Why did revenue spike last Thursday?'
const barHeights = [40, 65, 50, 80, 60, 92, 75, 55, 85, 70, 95, 80]
const stats = [
  { label: 'Revenue', value: '$48.2k', change: '+12.4%' },
  { label: 'Active users', value: '8,391', change: '+4.1%' },
  { label: 'Conversion', value: '3.9%', change: '+0.8%' },
]

type Phase = 'typing' | 'chart' | 'answer' | 'reset'

/** Drives the looping demo timeline and returns how much to show. */
function useDemoLoop(reducedMotion: boolean) {
  const [typedLength, setTypedLength] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing')

  useEffect(() => {
    if (reducedMotion) return
    const timeouts: number[] = []
    const intervals: number[] = []
    const later = (fn: () => void, ms: number) => timeouts.push(window.setTimeout(fn, ms))

    // One full pass of the demo; schedules the next pass at the end.
    const runCycle = () => {
      setTypedLength(0)
      setPhase('typing')
      let count = 0
      const typer = window.setInterval(() => {
        count += 1
        setTypedLength(count)
        if (count >= QUESTION.length) {
          window.clearInterval(typer)
          later(() => setPhase('chart'), 500) // chart grows
          later(() => setPhase('answer'), 2000) // answer card fades in
          later(() => setPhase('reset'), 6500) // fade everything out
          later(runCycle, 7300) // start over
        }
      }, 55)
      intervals.push(typer)
    }

    later(runCycle, 400)
    return () => {
      timeouts.forEach(window.clearTimeout)
      intervals.forEach(window.clearInterval)
    }
  }, [reducedMotion])

  if (reducedMotion) return { typedLength: QUESTION.length, phase: 'answer' as Phase }
  return { typedLength, phase }
}

export default function DashboardMockup() {
  const reducedMotion = usePrefersReducedMotion()
  const { typedLength, phase } = useDemoLoop(reducedMotion)
  const chartVisible = phase === 'chart' || phase === 'answer'
  const answerVisible = phase === 'answer'

  return (
    <div className="relative mx-auto mt-14 w-full max-w-5xl">
      {/* Soft glow beneath the frame */}
      <div className="glow absolute inset-x-[10%] -bottom-10 h-40" aria-hidden />

      {/* Browser frame */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-strong shadow-2xl">
        {/* Title bar with traffic-light dots and a fake address bar */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-yellow-400/80" />
          <span className="size-3 rounded-full bg-green-400/80" />
          <div className="mx-auto hidden h-6 w-1/2 rounded-full bg-surface px-3 text-center text-xs leading-6 text-muted sm:block">
            app.lumen.ai/dashboard
          </div>
        </div>

        <div className="flex">
          {/* Sidebar (hidden on small screens) */}
          <aside className="hidden w-44 shrink-0 space-y-2 border-r border-border p-4 md:block">
            {['Overview', 'Ask Lumen', 'Reports', 'Alerts', 'Settings'].map((item) => (
              <div
                key={item}
                className={`rounded-lg px-3 py-2 text-xs ${item === 'Ask Lumen' ? 'bg-accent/15 text-foreground' : 'text-muted'}`}
              >
                {item}
              </div>
            ))}
          </aside>

          {/* Main content */}
          <div className="flex-1 space-y-4 p-4 sm:p-6">
            {/* "Ask Lumen" input: the question types out letter by letter */}
            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm">
              <span className="text-accent-text">✦</span>
              <span className="min-h-5 text-foreground">
                {QUESTION.slice(0, typedLength)}
                <span className="animate-blink ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-accent" />
              </span>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border bg-surface p-3 sm:p-4">
                  <p className="text-[10px] text-muted sm:text-xs">{stat.label}</p>
                  <p className="mt-1 text-sm font-medium sm:text-xl">{stat.value}</p>
                  <p className="text-[10px] text-accent-text sm:text-xs">{stat.change}</p>
                </div>
              ))}
            </div>

            {/* Bar chart: bars grow from the baseline, staggered left to right */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <p className="text-xs text-muted">Revenue over time</p>
              <div className="mt-4 flex h-28 items-end gap-1.5 sm:h-36 sm:gap-2">
                {barHeights.map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-md bg-accent transition-[height,opacity] duration-700 ease-out"
                    style={{
                      height: chartVisible ? `${height}%` : '3%',
                      opacity: chartVisible ? 0.9 : 0.2,
                      transitionDelay: chartVisible ? `${index * 60}ms` : '0ms',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* AI answer card: space is always reserved so nothing jumps when it fades in */}
            <div
              className={`rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm transition-all duration-700 ${
                answerVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
            >
              <p className="text-xs uppercase tracking-widest text-accent-text">Lumen</p>
              <p className="mt-1.5 leading-relaxed">
                Revenue jumped <strong className="font-medium">+38%</strong> on Thursday, driven by the
                spring email campaign and a 2.1× lift in EMEA checkout conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
