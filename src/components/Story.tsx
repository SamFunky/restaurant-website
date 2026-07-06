import { useReveal } from '../hooks/useReveal'

export default function Story() {
  const textRef = useReveal<HTMLDivElement>()
  const figRef = useReveal<HTMLDivElement>()

  return (
    <section className="section story" id="story">
      <div className="container story__grid">
        <div className="reveal" ref={textRef}>
          <span className="section__label">our story</span>
          <h2 className="section__title">
            Started in a tiny kitchen, <em>with one steamer.</em>
          </h2>
          <div className="story__body">
            <p>
              Little Cloud began as a Sunday ritual: two friends, a bag of
              flour, and a bamboo steamer balanced on a stockpot. The buns were
              lumpy. The kitchen was foggy. <strong>Everyone kept coming back.</strong>
            </p>
            <p>
              A few hundred Sundays later, we have a real shop, a real steam
              schedule, and buns that are decidedly less lumpy. The recipe is
              still the same one scribbled on the back of a takeout receipt.
            </p>
          </div>
          <div className="story__stats">
            <div className="story__stat">
              <b>18</b>
              <span>pleats per bao, always</span>
            </div>
            <div className="story__stat">
              <b>4 am</b>
              <span>when the dough wakes up</span>
            </div>
            <div className="story__stat">
              <b>0</b>
              <span>freezers on the premises</span>
            </div>
          </div>
        </div>

        <div className="story__figure reveal reveal-delay-1" ref={figRef}>
          <img
            className="story__img"
            src="/images/steamer.png"
            alt="A bamboo steamer of pleated soup dumplings on a sage green background"
            loading="lazy"
          />
          <span className="story__sticker">the original steamer lives on</span>
        </div>
      </div>
    </section>
  )
}
