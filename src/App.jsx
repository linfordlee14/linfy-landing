import { useState } from 'react'

const services = [
  {
    number: '01',
    title: 'Graphic design',
    description:
      'Brand identity, social creatives, marketing assets, and polished visuals that make your business look established and trustworthy.',
  },
  {
    number: '02',
    title: 'User support',
    description:
      'Responsive support, onboarding help, issue triage, and practical technical assistance that improves customer experience.',
  },
  {
    number: '03',
    title: 'Data analytics',
    description:
      'Dashboards, reporting, and insight that help you understand performance, spot opportunities, and make better decisions.',
  },
]

const highlights = [
  'Clean, premium visual execution',
  'Human support that builds trust',
  'Useful analytics, not vanity reporting',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="nav">
        <a href="#home" className="logo" aria-label="Linfy Tech home" onClick={closeMenu}>
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M7 9 L16 23 L25 9" stroke="#1fd17e" strokeWidth="2" strokeLinecap="round" />
            <circle cx="16" cy="16" r="1.5" fill="#1fd17e" />
          </svg>
          <span>Linfy Tech</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-panel${menuOpen ? ' open' : ''}`}>
          <nav className="nav-links" aria-label="Primary">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <div className="nav-end">
            <a href="#contact" className="btn btn-primary" onClick={closeMenu}>Start a project</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-noise" />

          <div className="wrap hero-inner">
            <div className="hero-kicker">Cape Town, South Africa</div>
            <h1>
              Premium digital support for brands that want to look sharper, serve better, and grow with clarity.
            </h1>
            <p className="hero-copy">
              Linfy Tech Solutions delivers graphic design, user support, and data analytics for businesses that value clean execution, strong communication, and decision-ready insight.
            </p>

            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">Explore services</a>
              <a href="https://linford.linfytech.xyz" target="_blank" rel="noreferrer" className="btn btn-secondary">
                Founder profile
              </a>
            </div>
          </div>
        </section>

        <section className="summary-band">
          <div className="wrap summary-grid">
            {highlights.map((item) => (
              <div className="summary-card" key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section id="services" className="section-block">
          <div className="wrap">
            <div className="section-label">Services</div>
            <div className="section-head">
              <h2>Three focused services, delivered with a cleaner standard.</h2>
              <p>
                We help businesses improve presentation, customer experience, and decision-making with work that feels professional from the first touchpoint to the final report.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-block section-divider">
          <div className="wrap about-grid">
            <div>
              <div className="section-label">Why Linfy</div>
              <h2>Clear thinking, polished delivery, and practical outcomes.</h2>
            </div>
            <div className="about-copy">
              <p>
                Good work should not feel chaotic. The design should be intentional, the support should be reassuring, and the analytics should make the next decision easier.
              </p>
              <p>
                Linfy Tech Solutions is built around that principle: fewer moving parts, better execution, and a more premium experience for both your business and your customers.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-block">
          <div className="wrap contact-card">
            <div>
              <div className="section-label">Contact</div>
              <h2>Let’s build something cleaner, smarter, and more credible.</h2>
              <p>
                Reach out to linfordlee14@gmail.com or view the founder profile at linford.linfytech.xyz.
              </p>
            </div>

            <div className="contact-actions">
              <a href="mailto:linfordlee14@gmail.com" className="btn btn-secondary">Email Linford</a>
              <a href="https://linford.linfytech.xyz" target="_blank" rel="noreferrer" className="btn btn-primary">
                Founder profile
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
