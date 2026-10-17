# Mohamed Elesawy — Video Editor Portfolio

Vite + React + TypeScript + Tailwind. Single page (`/`) plus `/project/:slug` detail pages.

## Run

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # production build in /dist
```

## Where to put your own stuff

| What | Where |
| --- | --- |
| Name, tagline, about text, software, social links | `src/data/site.ts` |
| Projects (title, category, video, thumbnail, 9:16 or 16:9) | `src/data/projects.ts` |
| Thumbnails | put files in `public/work/`, then `thumbnail: "/work/my-reel.jpg"` |
| Local videos | put files in `public/videos/`, then `videoUrl: "/videos/my-reel.mp4"` |
| YouTube / Vimeo | `videoUrl` must be an **embed** url, e.g. `https://www.youtube.com/embed/VIDEO_ID` |
| Profile photo | replace `src/assets/editor-portrait.webp` (a transparent-background PNG/WebP looks best in the red D-shape on the intro) |
| Colors | CSS variables at the top of `src/index.css` (`--warm` is the red D-shape) |
| Fonts | `index.html` (Google Fonts) and `tailwind.config.ts` |

Project orientation: `"vertical"` for Reels/TikTok (9:16), `"landscape"` for 16:9.
The grid positions repeat every 4 projects; adding more projects just continues the pattern.

## Things to double-check

- All 4 projects currently share one placeholder YouTube link and use stock images from Unsplash/Pexels.
  Replace them with your own before publishing.
- Project text (clients, roles, "challenge/solution") is kept exactly as it was in your original code. Make sure it is accurate.
