# jenjirahuaisai.com

Personal portfolio of **Jenjira Huaisai** — Information Technology student at NHL Stenden University of Applied Sciences, focusing on UI and front-end development.

**Live site:** [jenjirahuaisai.com](https://jenjirahuaisai.com)

![Portfolio home page on desktop and mobile](docs/screenshot.png)

## Built with

- [Next.js 16](https://nextjs.org) (App Router) and React 19
- TypeScript
- Plain CSS with design tokens (CSS custom properties) — no UI framework
- Poppins, loaded with `next/font`
- Deployed on Netlify

## What I focused on

### A small design system in plain CSS

All colours, type sizes, spacing and motion live as tokens in `app/globals.css`, so a design change is made in one place. Headings, section spacing and figures scale smoothly between screen sizes with `clamp()` instead of jumping at breakpoints. The stylesheet is organised into numbered sections with a table of contents at the top.

### Content separated from components

Every project, testimonial, capability and figure lives in `data/content.ts`. Components only render that data, so adding a project means adding one object — not editing JSX.

### Responsive layout designed per screen size

- **Mobile (≤ 640px):** full-screen overlay menu, stacked full-width buttons, and the key figures shown as editorial rows.
- **Tablet (641–1024px):** figures in a 2 × 2 grid.
- **Desktop (> 1024px):** figures in one row, with client logos aligned to the same columns.

### Accessibility

- Skip link to the main content
- Semantic sections labelled with `aria-labelledby`
- Menu button with `aria-expanded` and `aria-controls`; **Escape** closes the menu and returns focus to the button; the page behind the open menu does not scroll
- One consistent `:focus-visible` style for keyboard users
- Screen-reader text for context that is only visual, such as "(opens in a new tab)" and "(PDF)"
- Decorative icons hidden from screen readers
- Touch targets of at least 44px
- Hover effects only on devices with a mouse or trackpad, so they don't get "stuck" after a tap
- Animations switched off for users who prefer reduced motion

## Project structure

```
app/
  layout.tsx       Font, metadata, skip link, header and footer
  page.tsx         Order of the sections on the home page
  globals.css      Design tokens and all styles
components/        One component per section (Hero, ProofBar, SelectedWork, …)
data/
  content.ts       All page content: projects, testimonials, capabilities, figures
public/            Images, logos, icons and CV
```

## Running locally

Requires [Node.js](https://nodejs.org) 20 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run lint    # check the code with ESLint
```

## Updating content

Edit `data/content.ts`. For example, to update a figure on the home page:

```ts
export const stats = [
  { number: '2', caption: 'Independent client projects' },
  // …
];
```

## Contact

- Email: [info@jenjirahuaisai.com](mailto:info@jenjirahuaisai.com)
- LinkedIn: [jenjira-huaisai](https://www.linkedin.com/in/jenjira-huaisai)