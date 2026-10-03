/**
 * SectionHeading — the small eyebrow label, large serif title and optional description
 * that introduces each major section. Keeps typography consistent across the page.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-accent-text">{eyebrow}</p>
      <h2 className="mt-3 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted sm:text-xl">{description}</p>}
    </div>
  )
}
