/**
 * Site configuration & content.
 *
 * All copy and data for the landing page lives here so it is easy to edit without
 * touching component code. Colors live in `src/index.css` (theme tokens).
 */
import {
  BarChart3,
  Bot,
  Lock,
  Plug,
  Sparkles,
  Zap,
  type LucideIcon,
} from 'lucide-react'

/**
 * Accent color presets. Each one is defined in `src/index.css` under
 * `[data-accent="..."]`; pick one with `siteConfig.accent` below.
 */
export type AccentPreset = 'lime' | 'amber'

export const siteConfig = {
  name: 'Lumen',
  /** Brand accent color preset: 'lime' (acid lime) or 'amber' (warm amber). */
  accent: 'lime' as AccentPreset,
  tagline: 'AI',
  headline: 'Turn scattered data into decisions in seconds.',
  highlightedWord: 'decisions',
  subheadline:
    'Lumen connects to your tools, understands your business, and answers questions in plain English — so your team moves faster with confidence.',
  /**
   * Optional hero photo. Leave empty to show the built-in illustration, or set a path/URL
   * (e.g. '/hero.jpg' from the `public/` folder) to show your own image instead.
   */
  heroImage: '',
  primaryCta: { label: 'Start for free', href: '#pricing' },
  secondaryCta: { label: 'See how it works', href: '#how-it-works' },
}

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

/** Fictional "trusted by" brands, rendered as faded text wordmarks. */
export const trustedBrands = ['Northwind', 'Acmeify', 'Globex', 'Initech', 'Umbra', 'Vertex']

export type FeatureVisualKind = 'chat' | 'sparkline' | 'integrations' | 'dashboard' | 'speed' | 'security'

export interface Feature {
  title: string
  description: string
  icon: LucideIcon
  /** Which built-in mini visual the tile shows (see FeatureVisual.tsx). */
  visual: FeatureVisualKind
  /**
   * Grid span classes. The bento grid is 1 col (mobile) / 2 cols (md) / 3 cols (lg); these
   * spans are chosen so every row is exactly filled at each breakpoint (no empty holes):
   *   md: chat 2 | sparkline 1 + integrations 1 | dashboard 2 | speed 1 + security 1
   *   lg: chat 2 + sparkline 1 | integrations 1 + dashboard 2 | speed 1 + security 2
   */
  span: string
}

export const features: Feature[] = [
  {
    title: 'Ask anything, get answers',
    description:
      'Chat with your data in natural language. Lumen writes the queries, builds the charts, and explains the results.',
    icon: Bot,
    visual: 'chat',
    span: 'md:col-span-2 lg:col-span-2',
  },
  {
    title: 'Instant insights',
    description: 'Automated summaries surface what changed and why, every morning.',
    icon: Sparkles,
    visual: 'sparkline',
    span: '',
  },
  {
    title: '100+ integrations',
    description: 'Connect your warehouse, CRM, and billing tools in a few clicks.',
    icon: Plug,
    visual: 'integrations',
    span: '',
  },
  {
    title: 'Live dashboards',
    description: 'Beautiful, always-fresh dashboards generated from a single prompt.',
    icon: BarChart3,
    visual: 'dashboard',
    span: 'md:col-span-2 lg:col-span-2',
  },
  {
    title: 'Lightning fast',
    description: 'Sub-second responses, even on billions of rows.',
    icon: Zap,
    visual: 'speed',
    span: '',
  },
  {
    title: 'Enterprise-grade security',
    description: 'SOC 2 Type II, SSO, role-based access, and your data never trains our models.',
    icon: Lock,
    visual: 'security',
    span: 'lg:col-span-2',
  },
]

export const steps = [
  {
    title: 'Connect your data',
    description: 'Link your tools with secure one-click integrations. No engineering required.',
  },
  {
    title: 'Ask in plain English',
    description: 'Type a question. Lumen understands your schema and finds the answer.',
  },
  {
    title: 'Share & act',
    description: 'Turn answers into dashboards, alerts, and reports your team can act on.',
  },
]

export interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'For individuals exploring AI analytics.',
    features: ['1 workspace', '5 data sources', '100 AI queries / month', 'Community support'],
    cta: 'Get started',
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/user/month',
    description: 'For teams that need answers every day.',
    features: [
      'Unlimited workspaces',
      '50 data sources',
      'Unlimited AI queries',
      'Scheduled reports & alerts',
      'Priority support',
    ],
    cta: 'Start free trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced needs.',
    features: ['SSO & SCIM', 'Audit logs', 'Dedicated infrastructure', 'Custom contracts & SLA'],
    cta: 'Contact sales',
  },
]

export const testimonials = [
  {
    quote:
      'We replaced three BI tools with Lumen. Our team now answers in minutes what used to take a week — and nobody has to wait on an analyst anymore.',
    name: 'Sara Whitfield',
    role: 'VP of Operations, Northwind',
    metric: '10x',
    metricLabel: 'faster reporting',
  },
  {
    quote: 'The accuracy is what sold me. It understands our metrics better than some analysts do.',
    name: 'Daniel Okafor',
    role: 'Head of Data, Acmeify',
    metric: '98%',
    metricLabel: 'answer accuracy',
  },
  {
    quote: 'Setup took ten minutes. By lunch, our whole leadership team was asking Lumen questions.',
    name: 'Mei Tanaka',
    role: 'COO, Globex',
    metric: '10 min',
    metricLabel: 'to first insight',
  },
]

export const faqs = [
  {
    question: 'How does Lumen connect to my data?',
    answer:
      'Through secure, read-only integrations with warehouses, databases, and SaaS tools. Most connections take under two minutes.',
  },
  {
    question: 'Is my data used to train your models?',
    answer:
      'Never. Your data stays yours, is encrypted in transit and at rest, and is never used to train any models.',
  },
  {
    question: 'Can I try Lumen before paying?',
    answer:
      'Yes. The Starter plan is free forever, and the Pro plan includes a 14-day free trial with no credit card required.',
  },
  {
    question: 'Do you offer discounts for startups or nonprofits?',
    answer: 'We do. Reach out to our team and we will set you up with a special plan.',
  },
  {
    question: 'Can I cancel at any time?',
    answer: 'Absolutely. There are no contracts on Starter or Pro — cancel with one click.',
  },
]

export const footerLinks = [
  { heading: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog'] },
  { heading: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
  { heading: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
]
