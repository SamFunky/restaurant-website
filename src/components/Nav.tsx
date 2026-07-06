export default function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <a className="nav__brand" href="#top">
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <ellipse cx="32" cy="38" rx="20" ry="15" fill="#fff" stroke="#2b2118" strokeWidth="2.5" />
          <path d="M24 30 q3 -6 8 -7 q5 1 8 7" fill="none" stroke="#2b2118" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="26" cy="40" r="1.8" fill="#2b2118" />
          <circle cx="38" cy="40" r="1.8" fill="#2b2118" />
          <path d="M29 44 q3 2.5 6 0" fill="none" stroke="#2b2118" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 16 q2 -4 0 -8 M32 14 q2 -4 0 -8 M44 16 q2 -4 0 -8" fill="none" stroke="#e8a5b4" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        Little Cloud
      </a>
      <div className="nav__links">
        <a className="nav__link" href="#story">Our story</a>
        <a className="nav__link" href="#menu">Menu</a>
        <a className="nav__link" href="#space">The space</a>
        <a className="nav__link" href="#visit">Visit</a>
      </div>
      <a className="nav__cta" href="#hello">Say hello</a>
    </nav>
  )
}
