import React, { useState } from "react";
import "./WeatherContent.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function WeatherContent(props) {
  const [city, setCity] = useState (props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  
function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit (event) {
    event.preventDefault ();
    search ();
  }

  function handleCityChange(event) {
    setCity (event.target.value);
  }

function search () {
    let apiKey = "951dd6b05bd0b3d85b13d8ab4de1c854";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

if (weatherData.ready) {
    return (
    <div className="WeatherContent">
      <nav className="navbar navbar-light">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Enter a city"
            aria-label="Enter a city"
            onChange={handleCityChange}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </nav>
      <WeatherInfo data={weatherData}/>
      <WeatherForecast city={weatherData.city} />
    </div>
  );
    } else {
        search ()
        return <Loader type="ThreeDots" color="#1e56a0" height={80} width={80} />;
    }
}