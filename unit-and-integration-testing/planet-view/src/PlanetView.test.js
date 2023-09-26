import { PlanetView } from "./PlanetView";
import { render } from "@testing-library/react";
import React from "react";

describe("PlanetView", () => {
  it("should show planet data correctly", () => {
    const planet = {
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
    };

    // mount the component with the right props
    const { getByAltText, queryByText } = render(
      <PlanetView planet={planet} />
    );

    // assert that the DOM renders as expected
    expect(getByAltText("Earth"));
    expect(queryByText("Moon")).not.toBe(null);
  });

  it("should show undefined state for no planet", () => {
    const planet = undefined;

    // mount the component with the right props
    const { queryByAltText, queryByText } = render(
      <PlanetView planet={planet} />
    );

    // assert that the DOM renders as expected
    expect(queryByAltText("Earth")).toBe(null);
    expect(queryByText("Moon")).toBe(null);
    expect(queryByText("Click any planet to learn more!")).not.toBe(null);
  });
});
