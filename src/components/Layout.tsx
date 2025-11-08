import { useState } from 'react'
import type { FC } from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import { content } from '../config/content'
import { data } from '../config/data'

const Layout: FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  const toggleMenu = () => setMenuOpen((v) => !v)


  return (
    <div className="page-root">
      <a className="skip-link" href="#main">Skip to content</a>

  <header className="site-header" role="banner">
        <div className="container header-inner">
          <div className="brand">
            <a href="#hero" className="brand-link">
              <strong>{data.name}</strong>
              <span className="muted">{content.site.brandSuffix}</span>
            </a>
          </div>

          <button
            className="nav-toggle"
            aria-controls="site-navigation"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <nav id="site-navigation" className={`nav ${menuOpen ? 'open' : ''}`} role="navigation" aria-label="Primary">
            <ul>
              {content.nav.map((n) => (
                <li key={n.id}><a href={`#${n.id}`} onClick={() => setMenuOpen(false)}>{n.label}</a></li>
              ))}
            </ul>
            <div className="nav-actions">
              <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? '🌙' : '☀️'}
              </button>
              {/* sheen always on - removed user toggle per preference */}
            </div>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
