# Clifton Public School — Official Website

A premium, single-page website for **Clifton Public School, Karachi**, built with Vite + React, Tailwind CSS, Framer Motion, and Lucide Icons. Optimized for Vercel.

## Quick Start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Adding Your Logo

Drop your logo image into [public/](public/) as a single file:

| File | Used in |
| --- | --- |
| `public/logo.png` | Navbar, Footer, About section identity card, **favicon** |
| `public/principal.jpg` *(optional)* | Principal section portrait |

The site uses one logo file everywhere — in the About section it is framed inside a premium dark→silver gradient backdrop so it stands out as the brand centerpiece. If the file is missing, an elegant **CPS monogram fallback** is rendered automatically.

## Adding More Event Photos

1. Drop the image into `public/gallery/`.
2. Name it descriptively using underscores — `Annual_Sports_Day.jpg`, `Science_Exhibition.jpg`, etc.
3. Register it in [src/data/site.js](src/data/site.js) by appending to `galleryFiles`:

```js
{ file: 'Annual_Sports_Day.jpg', category: 'Sports' },
```

The site auto-converts the filename into a readable title (`Annual Sports Day`) for cards, captions, and the gallery.

## Project Structure

```
src/
  components/        UI sections + floating UX components
  data/site.js       Centralized school info, navigation, notices, testimonials
  hooks/             Reusable React hooks
  App.jsx            Page composition
  index.css          Tailwind layer + custom utility classes
public/
  gallery/           Event photos
  logo.png           (you provide) — transparent
  logo-bg.png        (you provide) — with background
```

## Deploy to Vercel

```bash
vercel
```

A [vercel.json](vercel.json) is included with framework detection and long-cache headers for `/gallery/*` and `/assets/*`.

## Tech

- **Vite** — instant dev server & lean production bundle
- **React 18** — strict mode, semantic markup
- **Tailwind CSS 3** — custom brand tokens (`ink`, `soft`, `silver`, `mid`)
- **Framer Motion** — section reveals, hero carousel, lightbox, sticky CTAs
- **Lucide React** — consistent icon set

## Brand

- Deep Black `#000000` · Soft White `#F5F5F5` · Light Silver `#D9D9D9` · Medium Gray `#9E9E9E`
- Font: **Poppins** (display + body), with editorial italic accents in **Cormorant Garamond**.
