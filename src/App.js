import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <WeatherApp />
        <p4>
          <a
            href="https://github.com/carolina-magliocchi/weather-app"
            alt="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          , by Carolina Magliocchi
        </p4>
      </div>
    </div>
  );
}
