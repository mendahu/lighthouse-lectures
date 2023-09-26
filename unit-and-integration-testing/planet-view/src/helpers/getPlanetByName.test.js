import { getPlanetByName } from "./getPlanetByName";

describe("getPlanetByName", () => {
  test("returns the correct planet by its name", () => {
    const planets = [
      {
        name: "Earth",
        image: "earth.jpg",
      },
      {
        name: "Mars",
        image: "mars.jpg",
      },
    ];

    const planet = getPlanetByName("Earth", planets);

    expect(planet.image).toEqual("earth.jpg");
  });

  test("returns undefined if planet not found", () => {
    const planets = [
      {
        name: "Earth",
        image: "earth.jpg",
      },
      {
        name: "Mars",
        image: "mars.jpg",
      },
    ];

    const planet = getPlanetByName("Tattooine", planets);

    expect(planet).toEqual(undefined);
  });
});
