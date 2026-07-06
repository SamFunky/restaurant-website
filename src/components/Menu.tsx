import { useReveal } from '../hooks/useReveal'
import { highlights, lines } from '../data/menu'

export default function Menu() {
  const headRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()

  return (
    <section className="section" id="menu">
      <div className="container">
        <div className="menu__head reveal" ref={headRef}>
          <div>
            <span className="section__label">the menu</span>
            <h2 className="section__title">
              Small menu, <em>big steam.</em>
            </h2>
          </div>
          <p className="menu__note">
            Everything is made that morning. When the day&apos;s buns are gone,
            they&apos;re gone — we&apos;ll see you tomorrow.
          </p>
        </div>

        <div className="menu__grid reveal" ref={gridRef}>
          {highlights.map((item) => (
            <article className="menu-card" key={item.name}>
              <span className="menu-card__tag">{item.tag}</span>
              <div className="menu-card__img-wrap">
                <img src={item.img} alt={item.alt} loading="lazy" />
              </div>
              <div className="menu-card__body">
                <div className="menu-card__row">
                  <h3 className="menu-card__name">{item.name}</h3>
                  <span className="menu-card__price">{item.price}</span>
                </div>
                <p className="menu-card__desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="menu__list reveal" ref={listRef}>
          {lines.map((line) => (
            <div className="menu-line" key={line.name}>
              <span className="menu-line__name">{line.name}</span>
              <span className="menu-line__dots" aria-hidden="true" />
              <span className="menu-line__price">{line.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
