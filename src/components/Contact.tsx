import { useState } from 'react'
import type { FormEvent } from 'react'
import { useReveal } from '../hooks/useReveal'

const RESTAURANT_EMAIL = 'hello@littlecloudbao.com'

export default function Contact() {
  const leftRef = useReveal<HTMLDivElement>()
  const formRef = useReveal<HTMLFormElement>()
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const message = String(data.get('message') ?? '')

    const subject = encodeURIComponent(`Hello from ${name || 'a hungry human'}`)
    const body = encodeURIComponent(message)
    window.location.href = `mailto:${RESTAURANT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="section contact" id="hello">
      <div className="container contact__grid">
        <div className="reveal" ref={leftRef}>
          <span className="section__label">say hello</span>
          <h2 className="section__title">
            Write us a <em>little letter.</em>
          </h2>
          <p className="contact__blurb">
            Questions, compliments, bao emergencies, ideas for a filling we
            haven&apos;t tried — we read everything and reply between steams.
          </p>
          <div className="contact__stamps" aria-hidden="true">
            <span className="contact__stamp">birthday baos?</span>
            <span className="contact__stamp">big group?</span>
            <span className="contact__stamp">just saying hi?</span>
          </div>
        </div>

        <form className="contact-form reveal reveal-delay-1" ref={formRef} onSubmit={handleSubmit}>
          <label>
            Your name
            <input type="text" name="name" placeholder="Cloud enthusiast" required />
          </label>
          <label>
            Your email
            <input type="email" name="email" placeholder="you@somewhere.com" required />
          </label>
          <label>
            Your note
            <textarea
              name="message"
              rows={5}
              placeholder="Dear Little Cloud…"
              required
            />
          </label>
          <button className="btn btn--primary" type="submit">
            Send it floating our way
          </button>
          {sent && (
            <p className="contact-form__sent" role="status">
              Your email app should be opening — thanks for writing to us! ☁
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
