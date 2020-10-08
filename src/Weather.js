import React from "react";
import "./Weather.css";
import NavigationBar from "./NavigationBar";
import MainSection from "./MainSection";

export default function Weather() {
  return (
    <div className="Weather">
      <NavigationBar />
      <MainSection />
    </div>
  );
}
