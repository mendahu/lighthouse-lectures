import React from "react";
import { PlanetListItem } from "./PlanetListItem";
import "./PlanetList.css";

export const PlanetList = (props) => {
  return (
    <section>
      {props.planets.map((p) => {
        return (
          <PlanetListItem
            key={p.name}
            {...p}
            selected={props.selectedPlanet?.name === p.name}
            handleClick={() => props.handleClick(p.name)}
          />
        );
      })}
    </section>
  );
};

// optional chaining
// props && props.selectedPlanet && props.selectedPlanet.name
