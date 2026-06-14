# Design Direction

## Selected Direction

No named premium design skill from the candidate list is installed in this environment, so the project uses the installed frontend and coding guidance with an original warm editorial direction. The goal is personal and polished without relying on heavy UI libraries.

## Why This Direction

The app is a small gift, not a marketing page. A restrained editorial layout keeps the focus on the message, feels intentional, and remains simple to maintain for DevOps practice.

## Color Palette

- Cream background: `#fff8f1`
- Soft rose wash: `#f6d6df`
- Primary rose: `#a83f62`
- Deep rose text/button: `#7e2747`
- Ink text: `#372126`
- Muted text: `#745760`

## Typography

The heading and message use Georgia for a warmer, letter-like feeling. Interface text uses the system sans stack for clarity and performance.

## Layout Principles

- Mobile-first single-column layout.
- One clear message card.
- No nested cards.
- Constrained width for comfortable reading.
- Soft panel, subtle border, and enough spacing to feel calm.

## Interaction Details

- The main button has hover, active, and focus-visible states.
- Motion is CSS-only and subtle.
- `prefers-reduced-motion` is respected.
- The current message updates through an `aria-live` message card.

## Accessibility Notes

- Semantic `main`, `section`, `header`, `article`, `blockquote`, and `footer`.
- Spanish document language.
- Keyboard-friendly native button.
- Visible focus ring.
- Color choices are designed for readable contrast.
