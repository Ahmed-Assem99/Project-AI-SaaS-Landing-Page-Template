# Lumen — AI SaaS Landing Page Template

A modern, conversion-focused landing page for AI and SaaS products, built with **React 19,
TypeScript, Tailwind CSS v4 and Vite**. Dark-first with a light mode, one bold accent color,
editorial serif typography and tasteful motion. It's ready to deploy on Vercel in about a minute.

---

## What's included

- **10 sections**: Navbar, Hero, Trusted-by logos, Features (bento grid), How it works,
  Pricing, Testimonials, FAQ, Call-to-action and Footer
- **Animated hero**: an illustration showing scattered data turning into a decision, plus a
  product mockup that types a question, grows a chart and reveals an AI answer, on a loop
- **Bento grid with built-in visuals**: chat, animated sparkline, integration cloud, live
  dashboard, speed gauge and security shield
- **Dark and light mode** with a toggle that remembers the visitor's choice and follows their
  system setting on a first visit
- **2 accent presets** (acid lime and warm amber), switched with one line of config
- **Scroll-reveal and hover motion** that turns off for visitors who prefer reduced motion
- **Mobile-first and fully responsive**, with accessible markup (semantic HTML, ARIA on the
  menu and accordion, visible focus states)
- **Clean, commented code**: one file per section, and all text in a single config file

## Quick start

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

The site opens automatically at http://localhost:5173.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check and build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the code with ESLint |
| `npm run lint:fix` | Lint and auto-fix what can be fixed |

## Project structure

```
src/
├── config/site.ts        ← all text, links, pricing, FAQs… (edit this first)
├── index.css             ← colors, fonts and animations (theme tokens)
├── pages/LandingPage.tsx ← puts the sections together in order
├── components/           ← one file per section, plus small shared pieces
│   ├── Navbar.tsx  Hero.tsx  HeroVisual.tsx  DashboardMockup.tsx
│   ├── LogoStrip.tsx  Features.tsx  FeatureCard.tsx  FeatureVisual.tsx
│   ├── HowItWorks.tsx  Pricing.tsx  PricingCard.tsx  Testimonials.tsx
│   ├── FAQ.tsx  CallToAction.tsx  Footer.tsx
│   └── Button.tsx  Container.tsx  SectionHeading.tsx  Logo.tsx  Reveal.tsx …
└── hooks/                ← theme toggle and reduced-motion helpers
```

## Customizing

### 1. Text and content

Almost everything you'll want to change is in **`src/config/site.ts`**: the brand name,
headline, the highlighted (italic) headline word, buttons, nav links, features, steps,
pricing tiers, testimonials, FAQs and footer links. Edit the values there; you don't need to
touch any component.

Also update the page title and description in **`index.html`**.

### 2. Accent color

Pick a preset in `src/config/site.ts`:

```ts
accent: 'lime',   // or 'amber'
```

To create your own color, open `src/index.css`, copy the `[data-accent="amber"]` block, give
it a new name and change two values:

- `--accent` is used for fills, buttons and glows
- `--accent-text` is used when the accent is text or an icon. In light mode, use a darker shade
  so it stays readable on white.

Then add the new name to the `AccentPreset` type in `site.ts`.

### 3. Background, text and border colors

The full palette for each theme is defined once at the top of `src/index.css` (`:root` for
dark and `:root[data-theme="light"]` for light). Every component reads from these variables.

### 4. Fonts

Headlines use **Instrument Serif** and body text uses **Inter**, both loaded from Google
Fonts in `index.html`. To change them, swap the Google Fonts link and update `--font-serif`
and `--font-sans` in `src/index.css`.

### 5. Hero picture

By default the hero shows a built-in illustration. To use your own image instead, put it in
the `public/` folder and set:

```ts
heroImage: '/hero.jpg',
```

A square image of at least 1200 × 1200 px looks best.

### 6. Logos

The "Trusted by" logos are simple placeholder SVGs in `src/components/LogoStrip.tsx`. Replace
them with your customers' logos. SVGs that use `fill="currentColor"` adapt to both themes
automatically.

### 7. Adding, removing or reordering sections

Open `src/pages/LandingPage.tsx` and add, delete or move the section components. Each section
is self-contained.

### 8. Social links

Update the URLs in `src/components/SocialIcons.tsx`.

## Deploying to Vercel

**Option A, with GitHub (recommended):**

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Click **Deploy**. Vercel reads the included `vercel.json`, so no settings are needed.

**Option B, from the command line:**

```bash
npx vercel
```

The included `vercel.json` sets the build command and output folder. It also rewrites all
routes to `index.html`, so client-side routes keep working if you add a router later.

Because it's a static site, the build in `dist/` also works on Netlify, Cloudflare Pages,
GitHub Pages or any static host.

## Before you launch

- [ ] Replace the placeholder brand, copy, logos, testimonials and metrics with your own
- [ ] Point the buttons and footer links (currently `#`) to real pages
- [ ] Update the title and meta description in `index.html`
- [ ] Replace `public/favicon.svg` with your own icon

## Tech stack

React 19 · TypeScript · Tailwind CSS v4 · Vite · ESLint · lucide-react icons

## License

Single-buyer license: use it in unlimited personal and client projects, but don't resell or
redistribute the template itself. See [LICENSE.md](LICENSE.md) for the full terms.
