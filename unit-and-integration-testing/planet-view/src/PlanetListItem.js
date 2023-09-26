import "./PlanetListItem.css";
import React from "react";

export const PlanetListItem = (props) => {
  const classes = ["card"];

  if (props.selected) {
    classes.push("card-selected");
  }

  return (
    <article className={classes.join(" ")} onClick={props.handleClick}>
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <h2>{props.name}</h2>
      </div>
    </article>
  );
};
