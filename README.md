# jenjirahuaisai.com

Personal portfolio site for **Jenjira Huaisai** — Information Technology student at NHL Stenden University of Applied Sciences, focused on UI and front-end development.

**Status:** In development. The current live site runs on a separate codebase; this repository is the Next.js rebuild.

---

## About the project

I design in Figma and build the result myself.

This portfolio follows a strict black-and-white visual system, where hierarchy is created through typography, spacing, scale, and weight rather than accent colours.

It also serves as my case-study platform. Client, academic, and personal projects can have a structured write-up covering the problem, my approach, design decisions, development, results, reflection, and what I would do differently.

## Tech stack

- **Framework:** Next.js — App Router
- **Language:** TypeScript
- **Styling:** CSS with centralised design tokens
- **Content:** MDX for case studies and TypeScript modules for project metadata
- **Forms:** Next.js API route → validation → Resend
- **Hosting:** Vercel

## Key decisions

**Centralised design tokens.**  
Colours, spacing, typography, layout values, and dark-mode values are defined in `styles/tokens.css` as a single source of truth. This also makes it easier to maintain the same visual language across the public portfolio and the separate academic system.

**Content separated from code.**  
Projects are stored independently under `content/projects/`. The dynamic `work/[slug]` route provides the reusable page structure, so adding a project does not require creating another hard-coded project page.

**Structured project metadata.**  
A shared TypeScript `Project` type keeps project metadata consistent as the portfolio grows. Project images include alternative text and optional captions for accessibility and storytelling.

**Localised routing.**  
The site is designed around `/en`, `/nl`, and `/th` routes for English, Dutch, and Thai audiences. UI strings live in `messages/`, while long-form case studies use per-locale MDX files.

When a translated case study is not available, the English version is used as a fallback rather than returning an unavailable page.

**Accessibility as a constraint, not an add-on.**  
The interface is being developed with semantic HTML, visible focus states, keyboard navigation, meaningful alternative text, appropriate contrast, accessible forms, and support for `prefers-reduced-motion`.

**Reusable rather than duplicated.**  
Shared layout, section, and UI components keep spacing, behaviour, and visual hierarchy consistent throughout the site.

## Structure

```text
src/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx
│   │   ├── work/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   │
│   └── api/
│       └── contact/route.ts
│
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── content/
│   └── projects/
│       └── [project]/
│           ├── project.ts
│           ├── case-study.en.mdx
│           ├── case-study.nl.mdx
│           └── case-study.th.mdx
│
├── messages/
│   ├── en.json
│   ├── nl.json
│   └── th.json
│
├── lib/
│   ├── projects.ts
│   ├── i18n.ts
│   └── validation.ts
│
├── types/
│   └── project.ts
│
└── styles/
    ├── tokens.css
    └── globals.css
```

## Project content

Each project keeps short, structured metadata in `project.ts`, including:

- Title and slug
- Year and project type
- Client, where applicable
- Roles
- Technologies
- Featured order
- Live and GitHub links
- Cover and gallery images
- Accessible image descriptions

Long-form case studies are kept in MDX and can cover:

```text
Context / Problem
        ↓
Approach
        ↓
Research
        ↓
Design Decisions
        ↓
Build / Development
        ↓
Result
        ↓
Reflection
        ↓
What I Would Do Differently
```

## Running locally

Install dependencies:

```bash
npm install
```

Create the local environment file:

```bash
cp .env.example .env.local
```

Add the required environment variables when the related features are implemented.

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Development approach

The portfolio is being built incrementally rather than creating the entire architecture at once.

```text
Foundation
→ Homepage
→ Responsive interface
→ Work
→ Project case studies
→ Internationalisation
→ Dark mode
→ Contact
→ Deployment
```

This keeps each part understandable, testable, and maintainable as the project grows.

## Related

**Academic Portfolio** — a separate system for organising and presenting academic work and learning evidence.

The public portfolio and academic system are intentionally separated while sharing the same overall visual language.

## Contact

**Web Portfolio:** https://www.jenjirahuaisai.com

**LinkedIn:** https://www.linkedin.com/in/jenjira-huaisai-326745404/