import React from "react";
import { Main } from "./Main";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

describe("Main", () => {
  test("Planet toggles correctly", () => {
    // mock some data
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

    // mount the component
    const { queryByText, getAllByRole } = render(<Main planets={planets} />);

    const listItems = getAllByRole("article");

    // assert initial values
    expect(listItems).toHaveLength(2);
    expect(listItems[0]).not.toHaveClass("card-selected");
    expect(listItems[1]).not.toHaveClass("card-selected");
    expect(queryByText("Moon")).toBe(null);
    expect(queryByText("Phobos")).toBe(null);

    // somehow click a specific item
    fireEvent.click(listItems[0]);

    // assert that the right values are displayed
    expect(listItems[0]).toHaveClass("card-selected");
    expect(queryByText("Moon")).not.toBe(null);
  });
});
