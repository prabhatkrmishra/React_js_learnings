# React Learning Template

A minimal Next.js setup for learning React. Nothing to untangle before you start.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page reloads as you save.

## Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the dev server                         |
| `npm run build` | Production build                             |
| `npm start`     | Serve the production build                   |
| `npm run lint`  | Run ESLint                                   |

## Project layout

```
app/
  layout.tsx    Root layout: <html>, <body>, fonts, page metadata
  page.tsx      Home page — start editing here
  globals.css   Tailwind import, color variables, font setup
public/         Static files served at the root path
```

Routing follows the filesystem: `app/about/page.tsx` serves `/about`.

## Suggested learning path

1. **JSX and components** — add a component in `app/components/`, render it from `page.tsx`.
2. **Props** — pass data down instead of hardcoding it in a component.
3. **`useState`** — add a counter or a text input bound to state.
4. **Lists and `.map()`** — render an array of objects, with a stable `key`.
5. **`useEffect`** — fetch data, or sync state to `localStorage`.
6. **Forms** — controlled inputs, `onChange`, and `onSubmit`.
7. **Lifting state up** — share state between sibling components.
8. **Custom hooks** — extract reusable stateful logic.
9. **Context** — avoid prop drilling through deep trees.
10. **Server Components vs `"use client"`** — understand what runs where.

Add routes as you go so each topic has somewhere to live.

## Notes

- TypeScript is on. You can rename `.tsx` to `.jsx` and drop the types if you
  would rather learn without them.
- Tailwind is set up through `@import "tailwindcss"` in `globals.css`. Swap it
  for plain CSS in that file if you would rather not learn it yet.
- `AGENTS.md` and `CLAUDE.md` are tooling notes for AI assistants; `next dev`
  regenerates the block inside `AGENTS.md`.
