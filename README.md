# Portfolio Site

Daniel Beck's portfolio built with Next.js, React, and styled-components.

## Local Development

```bash
pnpm install
pnpm dev
```

The development server runs at `http://localhost:3000`.

## Vercel Deployment

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as `Next.js`.
4. Use Vercel's default commands:
   - Install command: `pnpm install`
   - Build command: `pnpm build`
   - Output directory: leave blank

The project includes a `pnpm-lock.yaml`, so Vercel will install with pnpm and run `next build`.
