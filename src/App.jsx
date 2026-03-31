const services = [
  {
    number: '01 / GRAPHIC DESIGN',
    title: 'Brand identity & visual design',
    description:
      'From logos and brand systems to social media graphics and marketing collateral, we create visuals that communicate your value with confidence.',
    wide: true,
  },
  {
    number: '02 / USER SUPPORT',
    title: 'Responsive technical support',
    description:
      'Fast, human support for your users. Onboarding help, bug triage, troubleshooting, and technical assistance when things go sideways.',
  },
  {
    number: '03 / DATA ANALYTICS',
    title: 'Dashboards & data insights',
    description:
      'Turn raw data into clear dashboards and practical insight. Understand what is working, what is not, and what to do next.',
  },
]

const pills = ['Graphic Design', 'User Support', 'Data Analytics', 'Cape Town, South Africa']

function App() {
  return (
    <div className="site-shell">
      <header className="nav">
        <a href="#home" className="logo" aria-label="Linfy Tech home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M7 9 L16 23 L25 9" stroke="#1fd17e" strokeWidth="2" strokeLinecap="round" />
            <circle cx="16" cy="16" r="1.5" fill="#1fd17e" />
          </svg>
          <span>Linfy Tech</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#why">Why us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-end">
          <a href="#contact" className="btn btn-primary">Get started</a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-noise" />
          <div className="wrap hero-inner">
            <div className="hero-eyebrow">Cape Town, South Africa</div>
            <h1>
              Design.<br />
              Support.<br />
              <em>Analytics.</em>
            </h1>
            <p className="hero-sub">
              Linfy Tech Solutions turns ideas into impact with beautiful design, hands-on user support,
              and data analytics that helps your business make smarter decisions.
            </p>

            <div className="hero-ctas">
              <a href="#services" className="btn btn-primary">Explore services</a>
              <a href="https://linfytech.xyz" target="_blank" rel="noreferrer" className="btn btn-secondary">
                Visit linfytech.xyz
              </a>
            </div>

            <div className="hero-pills">
              {pills.map((pill) => (
                <span className="pill" key={pill}>{pill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="marquee-wrap" aria-label="Service categories">
          <div className="marquee-track">
            {Array.from({ length: 2 }).flatMap((_, idx) =>
              ['Graphic Design', 'User Support', 'Data Analytics', 'Brand Systems', 'Insights & Dashboards'].map((item) => (
                <span className="marquee-item" key={`${idx}-${item}`}>{item}</span>
              )),
            )}
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <div className="eyebrow">Core Services</div>
            <h2 className="section-heading">
              Three ways we help your business <em>grow</em>
            </h2>
            <p className="section-copy">
              We focus on practical creative work, reliable support, and data-driven thinking so your business feels polished, supported, and better informed.
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
                Built for teams that want clarity, speed, and tasteful execution.
              </h2>
            </div>
            <div className="why-copy">
              <p>
                You do not need random freelancers stitched together. You need work that looks sharp,
                support that feels human, and data that actually helps you decide what to do next.
              </p>
              <p>
                That is where Linfy Tech fits: modern creative execution, grounded technical support,
                and analytics that turn information into action.
              </p>
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
                Reach out to linfordlee14@gmail.com or view the portfolio to see recent work.
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
    </div>
  )
}

export default App
