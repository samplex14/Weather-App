# Weather App

A real-time weather application built with vanilla JavaScript that fetches live weather data and 5-day forecasts using the OpenWeatherMap API, featuring automatic geolocation detection and a glassmorphism-styled UI.

---

## 📋 Resume Project Description

**Weather App: Real-Time Weather Dashboard** — *HTML5, CSS3, JavaScript (ES6+), OpenWeatherMap API* &emsp;&emsp;&emsp;&emsp;&emsp; Mar. 2026  
***Personal Frontend Project*** — *[live](https://samplex14.github.io/Weather-App)*

- Designed and built a **real-time weather application** integrating the **OpenWeatherMap REST API** (v2.5) for live current conditions and **5-day forecasts**, with coordinate-based lookup via the **browser Geolocation API** that auto-detects the user's location on page load; implemented dual search triggers (button click and **Enter** keydown) with input validation and graceful **not-found error handling**.
- Engineered **async/await** data pipelines using the **Fetch API** with HTTP status validation, **ES6 destructuring** of nested JSON payloads, and a **weather-icon mapping function** that classifies OpenWeatherMap condition IDs (200–804) across six SVG icon categories alongside a **noon-sampled forecast filter** that excludes the current day to render a clean daily outlook.
- Crafted a **glassmorphism UI** using CSS3 `backdrop-filter`, `linear-gradient`, and custom `webkit-scrollbar` styling on a mobile-first **390 × 590 px** container, with a centralized **section-visibility manager** toggling three distinct display states and a horizontally scrollable **forecast strip** with hover transitions.

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
