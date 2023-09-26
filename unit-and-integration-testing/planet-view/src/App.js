import "./App.css";
import { Main } from "./Main";
import React from "react";

const planets = [
  {
    name: "Earth",
    image: "http://localhost:8080/earth.jpg",
    mass: 1.0,
    diameter: 1.0,
    density: 5.52,
    gravity: 9.8,
    rotationPeriod: 23.9,
    lengthOfDay: 24.0,
    distanceFromSun: 149.6,
    orbitalPeriod: 365.2,
    orbitalVelocity: 29.8,
    meanTemperature: 15,
    moons: ["Moon"],
  },
  {
    name: "Mars",
    image: "http://localhost:8080/mars.png",
    mass: 0.107,
    diameter: 0.532,
    density: 3.93,
    gravity: 3.7,
    rotationPeriod: 24.6,
    lengthOfDay: 24.7,
    distanceFromSun: 227.9,
    orbitalPeriod: 687.0,
    orbitalVelocity: 24.1,
    meanTemperature: -65,
    moons: ["Phobos", "Deimos"],
  },
];

function App() {
  return (
    <>
      <header className="card">
        <h1>PlanetView</h1>
      </header>

      <Main planets={planets} />
    </>
  );
}

export default App;
