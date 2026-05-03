# AI IDE — Landing Page

Marketing site for the AI IDE project. Built with Next.js 16, Tailwind CSS v4, and the Geist font family.

This project sits alongside:

- `ai-ide-frontend/` — the IDE itself (Next.js + Monaco + Supabase)
- `ai-ide-backend/` — the FastAPI multi-agent backend (LangChain + Ollama + pgvector)

## Prerequisites

- Node.js 20+
- npm

## Setup

```bash
npm install
```

## Run

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Lint

```bash
npm run lint
```

## Structure

```
src/app/
  layout.tsx     # Root layout, metadata, fonts
  globals.css    # Theme tokens, grid background, animations
  page.tsx       # Single-file landing page (nav, hero, IDE preview, features, agents, CTA, footer)
```

The landing page uses the same GitHub-dark palette as the IDE (`#08090c` background, `#58a6ff` accent, `#a371f7` purple) so the visual identity stays consistent across the marketing site and the product.

## Customizing

- **CTAs**: the `Launch IDE` and `Launch the IDE` links in `page.tsx` use placeholder `#` hrefs. Point them at the deployed `ai-ide-frontend` URL.
- **Colors**: tokens live at the top of `globals.css` under `:root` and are exposed to Tailwind via `@theme inline`.
- **Sections**: each section in `page.tsx` is a small, named component — edit, reorder, or remove individually.
