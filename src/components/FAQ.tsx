/**
 * FAQ — accordion of common questions. Only one item is open at a time.
 * Uses a button + aria-expanded for accessibility; the answer expands with a smooth
 * grid-rows height transition.
 */
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { faqs } from '../config/site'
import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function FAQ() {
  // Index of the open item, or null when all are collapsed.
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 py-14 sm:py-20">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-10 space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={item.question} className="card-interactive rounded-2xl border border-border bg-surface">
                  <h3 className="font-sans text-base tracking-normal">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-medium sm:px-6"
                    >
                      {item.question}
                      <ChevronDown className={`size-5 shrink-0 text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </h3>
                  {/* grid-rows 0fr -> 1fr animates height without measuring content */}
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-base text-muted sm:px-6 sm:text-lg">{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
