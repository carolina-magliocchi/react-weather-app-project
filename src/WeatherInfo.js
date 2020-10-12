import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
      <div className="weatherInfo">
          <h1>
          {props.data.city}, {props.data.country}
        </h1>
        <FormattedDate date={props.data.date} />
        <div className="row selected-city">
          <div className="col-6">
            <div className="clearfix">
              <img
                className="weather-icon float-left"
                src={props.data.icon}
                alt={props.data.description}
              />
              <div className="float-left weather-temperature">
                <span className="temperature">{props.data.temperature}</span>
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
                  {props.data.description}
                </span>
              </li>
              <li>
                Humidity:{" "}
                <span className="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span className="wind">{props.data.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
        </div>
  );
}