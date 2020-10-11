import React, { useState } from "react";
import "./MainSection.css";
import axios from "axios";

export default function MainSection() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      weekDay: "Monday",
      date: "14/09",
      time: "12:00",
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
    });
  }
  if (weatherData.ready) {
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
                <span className="description text-capitalize">
                  {weatherData.description}
                </span>
              </li>
              <li>
                Humidity:{" "}
                <span className="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span className="wind">{weatherData.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Paris";
    let apiKey = "951dd6b05bd0b3d85b13d8ab4de1c854";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
