import "./PlanetView.css";

export const PlanetView = (props) => {
  return (
    <aside className="card">
      <div>
        <h2>{props.planet.name}</h2>
        <h3>Stats</h3>
        <ul>
          <li>Mass: {props.planet.mass} Earths</li>
          <li>Diameter: {props.planet.diameter} Earths</li>
          <li>Density: {props.planet.density} g/cm</li>
          <li>
            Gravity: {props.planet.gravity} m/s<sup>2</sup>
          </li>
          <li>Rotational Period: {props.planet.rotationPeriod} hours</li>
          <li>Length of Day: {props.planet.lengthOfDay} hours</li>
          <li>Distance from Sun: {props.planet.distanceFromSun}M km</li>
          <li>Orbital Period: {props.planet.orbitalPeriod}</li>
          <li>Mean Temperature: {props.planet.orbitalPeriod}°C</li>
        </ul>
        <h3>Moons</h3>
        <ul>
          {props.planet.moons.map((m) => {
            return <li>{m}</li>;
          })}
        </ul>
      </div>
      <div>
        <img src={props.planet.image} alt={props.planet.name} />
      </div>
    </aside>
  );
};
