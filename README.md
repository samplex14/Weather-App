# Weather App

A real-time weather application built with vanilla JavaScript that fetches live weather data and 5-day forecasts using the OpenWeatherMap API, featuring automatic geolocation detection and a glassmorphism-styled UI.

---

## 📋 Resume Project Description

**Real-Time Weather Application** | HTML5 · CSS3 · JavaScript (ES6+) · OpenWeatherMap API

- Developed a fully client-side weather application using **vanilla JavaScript (ES6+)**, **HTML5**, and **CSS3** — no frameworks or build tools required.
- Integrated the **OpenWeatherMap REST API** (v2.5) to fetch live current weather and 5-day forecast data, handling both city-name-based searches and coordinate-based lookups via separate API endpoints.
- Implemented **browser Geolocation API** (`navigator.geolocation.getCurrentPosition`) to automatically detect the user's coordinates on page load and display local weather without any manual input.
- Built two parallel async data pipelines using the **Fetch API** with `async/await`: one for current conditions (`/weather`) and one for the 5-day forecast (`/forecast`), with HTTP status validation and structured `try/catch` error handling that gracefully falls back to a "Not Found" UI state.
- Applied **ES6 destructuring** to cleanly extract nested API response fields (`name`, `main.temp`, `main.humidity`, `weather[0].id`, `wind.speed`, `dt_txt`) and displayed them with real-time DOM manipulation via `textContent` and `src` updates.
- Designed a **weather-icon mapping function** that maps OpenWeatherMap numeric condition IDs (200–804) to custom SVG icons across six weather categories (thunderstorm, drizzle, rain, snow, clear, clouds) using ordered threshold comparisons.
- Engineered a **forecast filter** that processes the API's 3-hour interval list to isolate one entry per day (noon, `12:00:00`) while excluding the current day's date, producing up to a **5-day outlook** rendered through `insertAdjacentHTML` template literals.
- Created a **responsive glassmorphism UI** using CSS3 `backdrop-filter: blur()`, `linear-gradient` backgrounds, and `border-radius` on a fixed 390 × 590 px mobile-first container, styled with the Poppins font family and Google's Material Symbols Outlined icon set.
- Implemented a **unified section-visibility manager** (`showDisplaySection`) that hides all UI panels and reveals only the active one — weather info, initial search prompt, or error state — keeping display logic centralized and free of scattered `display` overrides.
- Added **dual search triggers** (button click and `Enter` keydown listener) with `trim()` validation to prevent empty queries, and auto-cleared the input field with `blur()` after each search for a polished UX.
- Styled the **horizontally scrollable forecast strip** with custom `webkit-scrollbar` CSS (height, track color, thumb color, border-radius) and individual forecast cards with a hover transition for interactive feedback.

---

## ✨ Features

| Feature | Implementation |
|---|---|
| City weather search | Text input + click / Enter key event listeners |
| Auto geolocation | `navigator.geolocation.getCurrentPosition()` on page load |
| Current conditions | Temperature (°C), humidity (%), wind speed (m/s), condition label |
| Weather icons | SVG icons mapped from OpenWeatherMap condition ID ranges |
| 5-day forecast | Noon-sampled, today-excluded, horizontally scrollable cards |
| Error handling | HTTP status checks + `try/catch` → Not Found section |
| Glassmorphism UI | CSS `backdrop-filter`, `linear-gradient`, `border-radius` |

---

## 🛠️ Tech Stack

- **Languages:** HTML5, CSS3, JavaScript (ES6+)
- **APIs:** OpenWeatherMap API v2.5 (`/weather`, `/forecast`)
- **Browser APIs:** Fetch API, Geolocation API, DOM API
- **Fonts & Icons:** Google Fonts (Poppins), Google Material Symbols Outlined
- **Styling Technique:** Glassmorphism (backdrop blur + gradient overlay)

---

## 🚀 Getting Started

1. Clone the repository.
2. Open `index.html` directly in any modern browser — no build step or server required.
3. Allow location access when prompted, or type a city name and press **Enter** or click the search button.

> **Note:** The project uses a public OpenWeatherMap API key stored in `script.js`. For any publicly deployed version, move the key server-side (e.g., a proxy endpoint) to prevent unauthorized usage and quota exhaustion.

---

## 📁 Project Structure

```
Weather-App/
├── index.html          # App shell, semantic HTML5 structure
├── script.js           # All application logic (API calls, DOM updates)
├── style.css           # Glassmorphism styling, layout, animations
└── assets/
    ├── bg.jpg              # Full-screen background image
    ├── weather/            # SVG weather-condition icons
    │   ├── clear.svg
    │   ├── clouds.svg
    │   ├── drizzle.svg
    │   ├── rain.svg
    │   ├── snow.svg
    │   ├── thunderstorm.svg
    │   └── atmosphere.svg
    └── message/            # UI state images
        ├── search-city.png
        └── not-found.png
```
