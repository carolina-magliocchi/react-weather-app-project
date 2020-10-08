import React from "react";
import "./WeatherApp.css";
import NavigationBar from "./NavigationBar";
import MainSection from "./MainSection";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <NavigationBar />
      <MainSection />
    </div>
  );
}
