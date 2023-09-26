import { PlanetList } from "./PlanetList";
import { PlanetView } from "./PlanetView";
import React, { useState } from "react";
import { getPlanetByName } from "./helpers/getPlanetByName";

export const Main = (props) => {
  const [selectedPlanetName, setSelectedPlanetName] = useState(undefined);

  const selectedPlanet = getPlanetByName(selectedPlanetName, props.planets);

  const selectPlanet = (name) => {
    setSelectedPlanetName(name);
  };

  return (
    <main>
      <div>
        <PlanetList
          handleClick={selectPlanet}
          planets={props.planets}
          selectedPlanet={selectedPlanet}
        />
      </div>
      <div>
        <PlanetView planet={selectedPlanet} />
      </div>
    </main>
  );
};
