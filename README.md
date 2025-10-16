# DotAISlash landing site

Next.js + Tailwind implementation of the DotAISlash homepage, CodeVibe design documentation, and VERSA spec placeholder. The project is configured for static export so it can be published via GitHub Pages at [`https://dotaislash.github.io`](https://dotaislash.github.io).

## Development

```bash
npm install
npm run dev
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build
```

The build command produces a static export in the `out/` directory (`next.config.ts` sets `output: "export"`). Configure GitHub Pages to serve from the root of the repository, pointing to the `main` branch.

## Key directories

- `app/page.tsx` – Homepage with hero, VERSA overview, toolchain, design, and community sections
- `app/design/*` – CodeVibe design system notes and visual assets placeholder
- `app/versa/v1` – VERSA specification landing page until the formal release is published
- `tailwind.config.ts` – Custom palette, gradients, animations, and font tokens for the CodeVibe system

Issues and enhancements are tracked in the org discussion board and individual repos across the DotAISlash ecosystem.
