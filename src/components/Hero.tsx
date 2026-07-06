export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__blob hero__blob--pink" aria-hidden="true" />
      <div className="hero__blob hero__blob--sage" aria-hidden="true" />

      <div className="container hero__inner">
        <div>
          <span className="hero__kicker">☁ a bao house</span>
          <h1 className="hero__title">
            Very <em>soft</em> buns,
            <br />
            <span className="squiggle">steamed daily</span>
            <br />
            until <em>pillowy.</em>
          </h1>
          <p className="hero__sub">
            Little Cloud is a small, sunny bao shop. We fold, pleat, and steam
            everything by hand each morning — then we sell out and go home. No
            apps, no delivery robots. Just buns.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#menu">
              See the menu
            </a>
            <a className="btn btn--ghost" href="#visit">
              Find us
            </a>
          </div>
        </div>

        <figure className="hero__figure">
          <img
            className="hero__img"
            src="/images/hero-bao.png"
            alt="A fluffy white steamed bao on a butter yellow background"
            fetchPriority="high"
          />
          <svg className="hero__badge" viewBox="0 0 130 130" aria-hidden="true">
            <defs>
              <path
                id="badge-circle"
                d="M 65,65 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
              />
            </defs>
            <circle cx="65" cy="65" r="63" fill="#f7dc94" stroke="#2b2118" strokeWidth="1.5" />
            <circle cx="65" cy="65" r="34" fill="#fffdf7" stroke="#2b2118" strokeWidth="1.5" />
            <text fontSize="13.5" fontWeight="700" letterSpacing="2.5" fill="#2b2118">
              <textPath href="#badge-circle">
                FRESH FROM THE STEAM · EST. 2024 ·
              </textPath>
            </text>
            <text x="65" y="72" textAnchor="middle" fontSize="22" aria-hidden="true">
              ☁
            </text>
          </svg>
        </figure>
      </div>

      <span className="hero__scroll" aria-hidden="true">
        scroll ↓
      </span>
    </header>
  )
}
