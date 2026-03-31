import { useMemo, useState } from 'react'

const services = [
  {
    number: '01 / GRAPHIC DESIGN',
    title: 'Brand identity & visual systems',
    description:
      'Logos, brand systems, campaign visuals, social media graphics, and polished marketing assets that make your business feel credible and consistent.',
    wide: true,
  },
  {
    number: '02 / USER SUPPORT',
    title: 'Responsive user & technical support',
    description:
      'Onboarding help, issue triage, troubleshooting, and practical support that keeps users confident instead of frustrated.',
  },
  {
    number: '03 / DATA ANALYTICS',
    title: 'Dashboards, reporting & insight',
    description:
      'Transform raw information into dashboards, clear reporting, and decision-ready insight that helps you act with confidence.',
  },
]

const stats = [
  { value: '3', label: 'core service pillars' },
  { value: '24/7', label: 'support mindset' },
  { value: '100%', label: 'modern responsive delivery' },
]

const proof = [
  {
    title: 'Clean design language',
    body: 'Modern visual execution that feels premium without becoming noisy or overdesigned.',
  },
  {
    title: 'Human-first support',
    body: 'Support experiences built to reduce confusion, speed up resolution, and create trust.',
  },
  {
    title: 'Useful analytics',
    body: 'Dashboards and reporting focused on decisions, not just data dumps and vanity charts.',
  },
]

const testimonials = [
  {
    quote:
      'Linfy brings clarity. The design looked better, the support got tighter, and the data finally started making sense.',
    name: 'Client-ready delivery',
    role: 'Positioned for agencies, founders, and growing teams',
  },
  {
    quote:
      'The difference is taste plus execution — not just making something work, but making it feel trustworthy and sharp.',
    name: 'Brand-first execution',
    role: 'Built for serious small businesses',
  },
]

const marqueeItems = ['Graphic Design', 'User Support', 'Data Analytics', 'Dashboards', 'Brand Systems']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const repeatedMarquee = useMemo(
    () => Array.from({ length: 2 }).flatMap((_, idx) => marqueeItems.map((item) => ({ id: `${idx}-${item}`, item }))),
    [],
  )

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="nav">
        <a href="#home" className="logo" aria-label="Linfy Tech home" onClick={closeMenu}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
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
            <a href="#why" onClick={closeMenu}>Why us</a>
            <a href="#proof" onClick={closeMenu}>Proof</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <div className="nav-end">
            <a href="#contact" className="btn btn-primary" onClick={closeMenu}>Get started</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-noise" />
          <div className="hero-gradient hero-gradient-left" />
          <div className="hero-gradient hero-gradient-right" />

          <div className="wrap hero-inner">
            <div className="hero-eyebrow">Cape Town, South Africa</div>
            <h1>
              Design that looks sharp.<br />
              Support that feels human.<br />
              <em>Analytics that guide action.</em>
            </h1>
            <p className="hero-sub">
              Linfy Tech Solutions helps ambitious businesses look better, support users better,
              and make smarter decisions with practical design, responsive support, and data insight.
            </p>

            <div className="hero-ctas">
              <a href="#services" className="btn btn-primary">Explore services</a>
              <a href="https://linford.linfytech.xyz" target="_blank" rel="noreferrer" className="btn btn-secondary">
                View portfolio
              </a>
            </div>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="marquee-wrap" aria-label="Service categories">
          <div className="marquee-track">
            {repeatedMarquee.map(({ id, item }) => (
              <span className="marquee-item" key={id}>{item}</span>
            ))}
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <div className="eyebrow">Core Services</div>
            <h2 className="section-heading">
              Three focused ways we help businesses <em>grow</em>
            </h2>
            <p className="section-copy">
              We combine tasteful design, dependable support, and analytics that actually help you decide what to do next.
            </p>

            <div className="services-grid">
              {services.map((service) => (
                <article className={`service-card${service.wide ? ' wide' : ''}`} key={service.number}>
                  <div className="service-inner">
                    <div className="service-number">{service.number}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="why-section">
          <div className="wrap split-grid">
            <div>
              <div className="eyebrow">Why Linfy</div>
              <h2 className="section-heading">
                Better than stitched-together execution from random disconnected vendors.
              </h2>
            </div>
            <div className="why-copy">
              <p>
                You need work that feels coherent: the design should align with the support experience,
                and the support experience should feed better analytics and smarter decisions.
              </p>
              <p>
                That is the point of this offer. One clean direction. Better presentation. Better communication.
                Better signal from the data your business already creates.
              </p>
            </div>
          </div>
        </section>

        <section id="proof" className="proof-section">
          <div className="wrap">
            <div className="eyebrow">Value</div>
            <h2 className="section-heading">
              What makes the experience feel more <em>premium</em>
            </h2>

            <div className="proof-grid">
              {proof.map((item) => (
                <article className="proof-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="wrap">
            <div className="eyebrow">Positioning</div>
            <h2 className="section-heading">
              Built to feel credible to founders, teams, and modern client-facing brands.
            </h2>

            <div className="testimonials-grid">
              {testimonials.map((item) => (
                <article className="testimonial-card" key={item.name}>
                  <p className="quote">“{item.quote}”</p>
                  <div className="testimonial-meta">
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="wrap contact-card">
            <div>
              <div className="eyebrow">Contact</div>
              <h2 className="section-heading">
                Let&apos;s build <em>something great</em>
              </h2>
              <p className="section-copy compact">
                Reach out to linfordlee14@gmail.com, explore the portfolio, or start a conversation about design, support, or analytics.
              </p>
            </div>
            <div className="contact-actions">
              <a href="mailto:linfordlee14@gmail.com" className="btn btn-secondary">Email Linford</a>
              <a href="https://linford.linfytech.xyz" target="_blank" rel="noreferrer" className="btn btn-primary">
                View Portfolio
              </a>
            </div>
          </div>
        </section>
      </main>

      <a href="mailto:linfordlee14@gmail.com" className="floating-cta">
        Start a project
      </a>
    </div>
  )
}

export default App
