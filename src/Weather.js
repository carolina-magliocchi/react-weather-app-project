import React from "react";
import "./Weather.css";
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
