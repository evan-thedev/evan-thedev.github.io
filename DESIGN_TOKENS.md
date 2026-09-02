# Design System — Evan Parrott Portfolio
## Fable 5.1 / 80s-modern-notebook thesis

A junior developer's working notebook: cream paper with faint ruled lines, sections that feel like turning pages, project cards taped in like index cards or polaroids. Modern hierarchy and spacing, 80s attitude in the micro details (date stamps, tab labels, one hot accent color).

---

## Palette

**Surface**
- `--paper`: `#faf7f2` — warm cream, notebook pages
- `--paper-dark`: `#f5f1e8` — slightly aged for depth
- `--white`: `#ffffff` — project cards (index cards on the page)

**Lines & structure**
- `--rule`: `#e8dfd0` — faint notebook ruling
- `--edge`: `#d4c9b8` — page edge, borders
- `--shadow`: `rgba(0, 0, 0, 0.08)` — grounded, subtle

**Type**
- `--ink`: `#1a1714` — body text, dark warm black
- `--ink-mid`: `#4a423a` — secondary text
- `--ink-light`: `#877d71` — tertiary, labels

**Accent**
- `--accent`: `#e91e63` — hot magenta, used sparingly (CTAs, active states, one hero word)

---

## Typography

**Display serif** — Instrument Serif (fallback: Georgia, serif)
- Hero name: 400 weight, clamp(2.75rem, 7vw, 5.5rem)
- Section headings: 400 weight, clamp(1.75rem, 3.5vw, 2.5rem)

**Body sans** — system-ui stack (pragmatic, readable)
- Body: 1.0625rem / 1.7
- Small: 0.9375rem / 1.65

**Mono micro-caps** — SF Mono / Consolas / monospace
- Labels, eyebrows, date stamps: 0.75rem, uppercase, tracking +0.06em

**Hierarchy**
- One italic or accent word in hero for personality
- Sentence-case copy throughout (no hype, no all-caps except mono labels)

---

## Grid & Spacing

**Container**
- Max-width: 80rem
- Gutter: clamp(1.25rem, 5vw, 3rem)

**Vertical rhythm**
- Section padding: clamp(5rem, 12vh, 10rem)
- Section offsets: slight stagger (8px, 16px) to simulate stacked pages
- Card gaps: clamp(1.5rem, 3vw, 2rem)

**Project grid**
- 2-col responsive: `repeat(auto-fit, minmax(min(100%, 20rem), 1fr))`
- Cards as index cards: white background, hairline border, subtle shadow

---

## Motion

- Transitions: `cubic-bezier(0.4, 0, 0.2, 1)` 200ms
- Hover: translateY(-2px) + shadow lift
- No gratuitous animation, no auto-play

---

## Accessibility

- Skip link (keyboard nav)
- Semantic HTML (h1-h6, nav, main, section, article)
- Focus-visible: 2px solid accent, 4px offset
- Min touch target: 44px
- Color contrast: 4.5:1 body, 3:1 large text
- Reduced motion media query respected

---

## Components

**Page sections**
- Background: stacked paper sheets with slight offset and ruling
- Bound edge or punched holes on left (decorative detail)

**Project cards**
- White card on paper background (index card effect)
- Hairline border + grounded shadow
- Badges: pill shape, mono micro-caps
- CTAs: pill buttons, primary = accent, secondary = outline

**Hero**
- Display serif name
- One accent word in tagline (italic or color)
- Date stamp in corner (mono)

**Nav**
- Sticky header, hairline bottom border
- Mobile: hamburger → full-screen overlay with ruled paper background
