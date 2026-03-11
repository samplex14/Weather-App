# 🌤️ Weather App

A responsive, real-time weather application that delivers current conditions and a 5-day forecast for any city worldwide, with automatic location detection via the browser Geolocation API.

---

## ✨ Features

- **Real-time weather data** — current temperature, condition, humidity, and wind speed
- **5-day forecast** — daily outlook rendered as scrollable forecast cards
- **Geolocation support** — one-click detection of the user's current location
- **City search** — search by city name with keyboard (Enter) or button
- **Loading indicator** — animated spinner while fetching data
- **Error handling** — friendly "City Not Found" state for invalid queries
- **Glassmorphism UI** — frosted-glass card design with smooth hover animations and transitions

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure and accessibility attributes |
| **CSS3** | Glassmorphism design, CSS animations (`@keyframes`), flexbox layout, custom scrollbar |
| **Vanilla JavaScript (ES6+)** | Async/await API calls, DOM manipulation, Geolocation API |
| **OpenWeatherMap API** | Live weather and 5-day forecast data |
| **Google Fonts — Poppins** | Clean, modern sans-serif typography |
| **Material Symbols** | Scalable icon system for UI controls |

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/samplex14/Weather-App.git
   cd Weather-App
   ```

2. **Open the app**  
   Simply open `index.html` in any modern browser — no build step required.

3. *(Optional)* **Replace the API key**  
   In `script.js`, update the `apiKey` constant with your own key from [openweathermap.org](https://openweathermap.org/api):
   ```js
   const apiKey = 'YOUR_API_KEY_HERE';
   ```

---

## 📁 Project Structure

```
Weather-App/
├── index.html          # App markup and layout
├── style.css           # All styles, animations, and responsive design
├── script.js           # Weather API integration and UI logic
└── assets/
    ├── bg.jpg          # Background image
    ├── weather/        # SVG weather condition icons
    │   ├── clear.svg
    │   ├── clouds.svg
    │   ├── drizzle.svg
    │   ├── rain.svg
    │   ├── snow.svg
    │   ├── thunderstorm.svg
    │   └── atmosphere.svg
    └── message/        # State illustration images
        ├── search-city.png
        └── not-found.png
```

---

## 🔌 API Reference

The app uses two [OpenWeatherMap](https://openweathermap.org/) endpoints:

| Endpoint | Usage |
|---|---|
| `GET /data/2.5/weather` | Current weather by city name or coordinates |
| `GET /data/2.5/forecast` | 5-day / 3-hour forecast by city name or coordinates |

---

## 🎨 UI Highlights

- **Glassmorphism card** with `backdrop-filter: blur` and a subtle gradient border
- **Fade-in animation** for weather info and message sections
- **Hover micro-interactions** on forecast cards (lift + highlight) and icon buttons (scale)
- **Animated loading spinner** shown during API requests
- **Custom scrollbar** styled to match the card's translucent theme
