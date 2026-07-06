import { useReveal } from '../hooks/useReveal'

const hours = [
  { days: 'Wednesday – Friday', time: '11 am — sold out' },
  { days: 'Saturday – Sunday', time: '10 am — sold out' },
  { days: 'Monday – Tuesday', time: 'resting the dough' },
]

export default function Visit() {
  const headRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section className="section" id="visit">
      <div className="container">
        <div className="reveal" ref={headRef}>
          <span className="section__label">visit</span>
          <h2 className="section__title">
            Come by, <em>stay a while.</em>
          </h2>
        </div>

        <div className="visit__grid reveal" ref={gridRef}>
          <div className="visit-card visit-card--butter">
            <h3>Hours</h3>
            <dl>
              {hours.map((h) => (
                <div className="visit-row" key={h.days}>
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="visit-note">
              &ldquo;Sold out&rdquo; is usually around 3 pm. Early clouds get
              the buns.
            </p>
          </div>

          <div className="visit-card visit-card--pink">
            <h3>Where</h3>
            <address>
              214 Puff Lane
              <br />
              Old Mill District
              <br />
              Portland, OR 97202
            </address>
            <p className="visit-note">
              Look for the blue awning and the smell of fresh dough. Seating is
              first come, first steamed. Big groups: send us a note below.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
