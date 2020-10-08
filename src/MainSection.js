import React from "react";
import "./MainSection.css";
import sun from "./sun.svg";

export default function MainSection() {
  let weatherData = {
    city: "Paris",
    country: "FR",
    weekDay: "Monday",
    date: "14/09",
    time: "12:00",
    icon: sun,
    temperature: 25,
    description: "Clear sky",
    humidity: 80,
    wind: 5,
  };
  return (
    <div className="MainSection">
      <h1>
        {weatherData.city}, {weatherData.country}
      </h1>
      <p1>
        {weatherData.weekDay}, {weatherData.date}
      </p1>
      <br />
      <p2>{weatherData.time}</p2>
      <div className="row selected-city">
        <div className="col-6">
          <div className="clearfix">
            <img
              className="weather-icon float-left"
              src={weatherData.icon}
              alt={weatherData.description}
            />
            <div className="float-left weather-temperature">
              <span className="temperature">{weatherData.temperature}</span>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <span className="description">{weatherData.description}</span>
            </li>
            <li>
              Humidity: <span className="humidity">{weatherData.humidity}</span>
              %
            </li>
            <li>
              Wind: <span className="wind">{weatherData.wind}</span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
