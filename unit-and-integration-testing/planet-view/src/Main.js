import { PlanetList } from "./PlanetList";
import { PlanetView } from "./PlanetView";
import React from "react";

export const Main = (props) => {
  return (
    <main>
      <div>
        <PlanetList planets={props.planets} />
      </div>
      <div>
        <PlanetView />
      </div>
    </main>
  );
};
