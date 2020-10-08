import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <Weather />
          <p4>
            <a
              href="https://github.com/carolina-magliocchi/react-weather-app-project"
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
    </div>
  );
}
