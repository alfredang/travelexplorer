# Travel Explorer

> We went, so you know where to go.

A curated travel guide site featuring 12 destinations with real prices, realistic itineraries, airport tips, safety notes, weather insights, and local recommendations.

## Stack

Pure static site — vanilla **HTML, CSS, and JavaScript**. No frameworks, no bundler, no build step, no backend.

## Features

- **12 destination guides** with itineraries, food picks, transport tips, cost breakdowns, safety notes, and photo spots
- **Featured guide** card on the homepage
- **Guide modal** with full destination content
- **Budget calculator** — estimate trip cost by destination, days, and travel style
- **Packing checklist** — persisted to `localStorage`
- **Itinerary planner** — add day-by-day activities, persisted to `localStorage`
- **Live weather widget** powered by OpenWeather API
- **Safety notes** per destination
- **Enquiry form** with submissions stored locally

## Running Locally

The site is fully static. Two ways to run it:

```bash
# Option 1: open the file directly
start index.html              # Windows
open index.html               # macOS

# Option 2: local HTTP server (needed if testing fetch/CORS behavior)
python -m http.server 8000    # then visit http://localhost:8000/
```

## Project Structure

```
.
├── index.html    # Single page with anchor-linked sections
├── data.js       # DESTINATIONS array — single source of truth
├── app.js        # All interactivity (modal, tools, weather, form)
├── styles.css    # Design tokens in :root CSS variables
└── CLAUDE.md     # Contributor notes
```

## Editing Destinations

`DESTINATIONS` in [data.js](data.js) is the single source of truth. Every consumer (featured card, city grid, modal, dropdowns) auto-updates when you edit it.

## Weather API

The weather widget calls OpenWeather's `/data/2.5/weather` endpoint. Set your API key inside [app.js](app.js) — search for `INSERT YOUR OPENWEATHER API KEY`. When blank, the UI renders a placeholder instead of throwing.

## Persistence

All user state is saved to `localStorage` under three keys:

- `te_packing` — packing checklist state
- `te_itinerary` — planner entries
- `te_enquiries` — submitted enquiry forms

No backend, no database.
