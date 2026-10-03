/**
 * main — entry point. Applies the accent preset from the site config, then mounts <App />
 * into #root and loads the global styles/theme tokens.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { siteConfig } from './config/site'

// Set before the first render so the page never shows the wrong accent color.
document.documentElement.dataset.accent = siteConfig.accent

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
