/**
 * HowItWorks — three numbered steps explaining the product flow.
 * Stacked on mobile, side by side from `md` up.
 */
import { steps } from '../config/site'
import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-14 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="How it works" title="From question to answer in three steps" />
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="card-interactive rounded-3xl border border-border bg-surface p-6 sm:p-8">
                {/* Large serif step number */}
                <span className="font-serif text-6xl leading-none text-accent-text">0{index + 1}</span>
                <h3 className="mt-6 text-3xl">{step.title}</h3>
                <p className="mt-3 text-base text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  )
}
