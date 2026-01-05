# POWER Prayer Line (Vite + React + Tailwind)

Modernized UI (glass + gradients + light/dark toggle) while keeping the original Wix wording/menu structure.

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to Netlify
- Push this repo to GitHub
- In Netlify: New site from Git → choose repo → build command `npm run build` → publish directory `dist`
- SPA routing is handled via `netlify.toml`
- The contact form is Netlify Forms-ready (no backend required)

## Update content
- Home: `src/pages/Home.jsx`
- Topics: `src/pages/Topics2026.jsx`
- Staff: `src/pages/Staff.jsx`
- Donation link: `src/components/SiteShell.jsx`
