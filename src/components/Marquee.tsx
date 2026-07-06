const phrases = [
  'hand-pleated every morning',
  'steam friendly since 2024',
  'soft as a nap',
  'no sad buns allowed',
  'come hungry, leave floaty',
]

export default function Marquee() {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} style={{ display: 'flex', gap: 48 }}>
      {phrases.map((p) => (
        <span className="marquee__item" key={p}>
          {p}
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
