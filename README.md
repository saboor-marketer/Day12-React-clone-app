# Prime Video — UI Clone

A front-end recreation of the **Amazon Prime Video** streaming experience, built with
**React 19**, **TypeScript**, **Vite 7**, and **Tailwind CSS 4**. It is a design/UI demo
with mock data and stock imagery — no real video playback and no affiliation with Amazon.

![stack](https://img.shields.io/badge/React-19-149eca) ![stack](https://img.shields.io/badge/Vite-7-646cff) ![stack](https://img.shields.io/badge/Tailwind-4-38bdf8) ![stack](https://img.shields.io/badge/TypeScript-5-3178c6)

## Quick Start

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # production build -> dist/
npm run preview # preview the production build locally
```

> Requires Node.js 18+ (Node 20+ recommended).

## Features

- **Prime-style header** — logo, primary nav, expanding search field, profile avatar.
  The bar is transparent over the hero and turns solid on scroll.
- **Auto-rotating hero carousel** — backdrop cross-fade every 7 seconds, IMDb rating,
  age rating, runtime, genre line, synopsis, and Play / Watchlist / Info / Mute actions.
- **Horizontal content rails** — scroll-snap poster rows with desktop hover arrows.
  Each card lifts its artwork, exposes a Prime badge, and offers a one-click `+` action.
- **Title detail modal** — large backdrop, metadata, description, Play and Watchlist
  buttons, and a mock episode list for series. Closes on `Esc`, backdrop click, or the X.
- **Watchlist** — add/remove titles from cards, the hero, or the modal; persisted in
  React state and surfaced in the **My Stuff** tab.
- **Live search** — filters titles by name and genre, with an empty-state count.
- **Tab filtering** — Movies shows films only, TV shows shows series only, Home shows all
  rails, My Stuff shows your saved titles.
- Fully responsive, dark `#0f171e` theme with the Prime accent `#00a8e1`.

## Project Structure

```
.
├── index.html               # HTML entry point (page title: Prime Video)
├── vite.config.ts           # Vite + Tailwind + single-file plugin config
├── tsconfig.json            # TypeScript config (path alias: @/* -> src/*)
├── README.md
└── src
    ├── main.tsx             # React root / bootstrap
    ├── App.tsx              # Page shell: nav, hero, rails, filters, search, footer
    ├── data.ts              # Title type, 18 mock titles, rail + hero definitions
    ├── index.css            # Tailwind import, theme base styles, scrollbar utility
    └── components
        ├── icons.tsx        # Inline SVG icon set + Prime wordmark logo
        ├── Row.tsx          # Poster card + horizontal carousel rail
        └── Modal.tsx        # Title detail overlay with episodes
```

## How It Works

All content lives in `src/data.ts`:

```ts
export type Title = {
  id: string; name: string; year: number; rating: string;
  duration: string; genres: string[]; imdb: number; desc: string;
  poster: string; backdrop: string; included: boolean; seasons?: number;
};

export const rows = [{ title: "Top picks for you", ids: ["t0", "t3", "t7"] }, ...];
export const hero = ["t0", "t11", "t3", "t7"];
```

`App.tsx` keys the rails by title id and keeps the watchlist in a `string[]` of ids.
To add content, append an entry to the `raw` array in `data.ts` and reference its id
(`t<index>`) in a rail or in `hero`.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start Vite in development mode with HMR |
| `npm run build` | Bundle the app into a self-contained `dist/index.html` |
| `npm run preview` | Serve the built `dist/` folder locally |

## Styling

Tailwind CSS 4 is wired in through the `@tailwindcss/vite` plugin, so no
`tailwind.config.js` is needed. Global theme values and the `.no-scrollbar` utility live
in `src/index.css`.

Brand tokens used throughout the app:

| Token | Value | Use |
| --- | --- | --- |
| Page background | `#0f171e` | Body, modal surface |
| Accent | `#00a8e1` | Primary CTA, active tab, Prime badge |
| Rating | `#f5c518` | IMDb chips |
| Muted text | `white/60–80` | Metadata and descriptions |

## Notes & Limitations

- Playback is not implemented — Play buttons are visual affordances only.
- Search and watchlist state reset on page reload (no backend or localStorage).
- Imagery is sourced from Pexels and used as placeholder artwork.
- Amazon, Prime Video, and related marks belong to Amazon.com, Inc. This project is an
  unofficial educational clone.

## Deployment

Run `npm run build` and deploy `dist/`. Because `vite-plugin-singlefile` inlines JS and
CSS into one HTML document, the output works on any static host (Netlify, Vercel,
GitHub Pages, S3) or can be opened directly from disk.

## License

MIT (excluding third-party trademarks and stock imagery).
