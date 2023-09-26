export const getPlanetByName = (name, planets) => {
  // implement me
  // return a single planet

  return planets.find((p) => p.name === name);
};
