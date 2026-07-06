# Little Cloud — Bao House

An artsy, light, playful single-page website for a fictional bao restaurant.
Built with React + TypeScript + Vite. All food and interior photography was
generated with Higgsfield and lives in `public/images`.

## Running it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## What's inside

- `src/components/` — one component per section (Nav, Hero, Marquee, Story, Menu, Gallery, Visit, Contact, Footer)
- `src/data/menu.ts` — menu items, edit prices/dishes here
- `src/hooks/useReveal.ts` — small IntersectionObserver hook for scroll-in animations
- `src/index.css` — all styling; design tokens (colors, fonts, radii) are CSS variables at the top

## Notes

- The contact form opens the visitor's email app via `mailto:` — no backend
  needed. Change the address in `src/components/Contact.tsx`
  (`RESTAURANT_EMAIL`) and in `src/components/Footer.tsx`.
- Fonts: Fraunces (display) and Instrument Sans (body), loaded from Google Fonts in `index.html`.
