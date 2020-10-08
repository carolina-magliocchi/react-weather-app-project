import React from "react";
import "./MainSection.css";
import sun from "./sun.svg";
import { Container, Row, Col } from "react-bootstrap";

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

      <Container>
        <Row className="selected-city">
          <Col>
            <img
              className="weather-icon"
              src={weatherData.icon}
              alt={weatherData.description}
            />
          </Col>
          <Col>
            <div className="weather-temperature">
              <span className="temperature">{weatherData.temperature}</span>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </Col>
          <Col>
            <ul>
              <li>
                <span className="description">{weatherData.description}</span>
              </li>
              <li>
                Humidity:{" "}
                <span className="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span className="wind">{weatherData.wind}</span>km/h
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
