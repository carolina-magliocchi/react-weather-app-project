import React from "react";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <div className="NavigationBar">
      <nav className="navbar navbar-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Enter a city"
            aria-label="Enter a city"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}
