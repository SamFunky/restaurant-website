import { useReveal } from '../hooks/useReveal'

const items = [
  {
    cls: 'gallery__item--a',
    src: '/images/interior.png',
    alt: 'Bright bao shop interior with lantern lighting and pastel stools',
    caption: 'the shop, mid-morning',
  },
  {
    cls: 'gallery__item--b',
    src: '/images/yuzu-soda.png',
    alt: 'Iced yuzu soda with a pastel straw on a periwinkle background',
    caption: 'yuzu cloud soda',
  },
  {
    cls: 'gallery__item--c',
    src: '/images/hero-bao.png',
    alt: 'A single fluffy bao with steam rising',
    caption: 'the classic',
  },
  {
    cls: 'gallery__item--d',
    src: '/images/bao-trio.png',
    alt: 'Three pastel colored bao buns in a row',
    caption: 'the cloud trio',
  },
]

export default function Gallery() {
  const headRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section className="section gallery" id="space">
      <div className="container">
        <div className="reveal" ref={headRef}>
          <span className="section__label">the space</span>
          <h2 className="section__title">
            Sunlight, lanterns, and <em>a lot of steam.</em>
          </h2>
        </div>

        <div className="gallery__grid reveal" ref={gridRef}>
          {items.map((item) => (
            <figure className={`gallery__item ${item.cls}`} key={item.caption}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption className="gallery__caption">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
