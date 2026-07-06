const word = 'little cloud'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__word" aria-label="little cloud">
          {word.split('').map((ch, i) =>
            ch === ' ' ? (
              <span key={i}>&nbsp;</span>
            ) : (
              <span key={i} aria-hidden="true">
                {ch}
              </span>
            ),
          )}
        </p>
        <div className="footer__meta">
          <span>© {new Date().getFullYear()} Little Cloud Bao House</span>
          <a href="mailto:hello@littlecloudbao.com">hello@littlecloudbao.com</a>
          <span>214 Puff Lane, Portland OR</span>
          <span>made with flour + steam</span>
        </div>
      </div>
    </footer>
  )
}
