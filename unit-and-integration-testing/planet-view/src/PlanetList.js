import { PlanetListItem } from "./PlanetListItem";
import "./PlanetList.css";

export const PlanetList = (props) => {
  return (
    <section>
      {props.planets.map((p) => {
        return <PlanetListItem key={p.name} {...p} selected={true} />;
      })}
    </section>
  );
};
