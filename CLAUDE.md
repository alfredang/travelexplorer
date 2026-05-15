# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack Constraint

This is a **static site built with vanilla HTML, CSS, and JavaScript only**. No frameworks (React/Vue/etc.), no bundler, no build step, no package.json, no backend, no database. Do not introduce any of these — the constraint is deliberate and any "improvement" that adds a toolchain breaks the project's premise.

## Running Locally

The site is fully static. Two ways to run it:

```bash
# Option 1: open the file directly
start index.html              # Windows
open index.html               # macOS

# Option 2: local HTTP server (needed if testing fetch/CORS behavior)
python -m http.server 8000    # then visit http://localhost:8000/
```

There are no tests, no lint config, and no build commands.

## Architecture

Four files, loaded in a specific order by `index.html`:

1. **`index.html`** — single page with anchor-linked sections (`#home`, `#guides`, `#cities`, `#tools`, `#weather`, `#safety`, `#enquiry`). The page contains empty container elements (`#featured-card`, `#city-grid`, `#modal-content`, etc.) that `app.js` populates at runtime.
2. **`data.js`** — declares a single global `const DESTINATIONS` array (12 city objects). Loaded **before** `app.js` via a plain `<script>` tag — no modules, no `import/export`. Each entry has `{id, name, country, blurb, flightTimeFromSGP, dailyBudgetSGD, bestSeason, image, guide: {overview, itinerary, food, transport, costBreakdown, safety, photoSpots}}`.
3. **`app.js`** — all interactivity. Reads the global `DESTINATIONS`, renders cards/selects, wires up the modal, three tools, weather, and enquiry form. Initialization is in a single `DOMContentLoaded` handler at the bottom; each feature has its own `setupX()` function.
4. **`styles.css`** — design tokens live in `:root` CSS variables (`--ink`, `--accent`, `--serif`, etc.). Editorial magazine aesthetic — change variables to re-skin globally.

### Data flow

`DESTINATIONS` (from `data.js`) is the single source of truth. It feeds:
- The featured-guide card (`renderFeatured` picks one by `FEATURED_ID` constant)
- The 12-card grid (`renderCities`)
- The guide modal content (`openGuide(id)`)
- The budget calculator's destination dropdown + pre-fill
- The enquiry form's destination dropdown

**To add or edit a destination, edit `data.js` only** — every consumer auto-updates.

### Persistence

All user state goes to `localStorage`. No backend. Three keys, defined at the top of `app.js`:
- `te_packing` — `{ "Category::Item": boolean }`
- `te_itinerary` — `[{id, day, time, activity, notes}]`
- `te_enquiries` — `[{fullName, email, phone, destination, travelDate, travellers, message, submittedAt}]`

Reads/writes go through `loadJSON` / `saveJSON` helpers that swallow quota errors silently.

### Weather widget

`fetchWeather(city, mountEl)` in `app.js` calls OpenWeather's `/data/2.5/weather` endpoint. The API key is a `const API_KEY = ''` near the top of that function — when blank, the UI renders a placeholder message instead of throwing. Search for `INSERT YOUR OPENWEATHER API KEY` to find the exact line.

### Images

All city images use direct Unsplash URLs (`https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1400&q=80`). The deprecated `source.unsplash.com` endpoint is intentionally avoided. When changing images, copy the photo ID from an Unsplash URL — don't switch to the source.unsplash.com redirect.
