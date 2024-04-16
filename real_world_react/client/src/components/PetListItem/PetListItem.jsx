import { Link } from "react-router-dom";
import "./PetListItem.css";

export const PetListItem = (props) => {
  const children = (
    <li className="pet-list-item">
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <p>{props.name}</p>
      </div>
    </li>
  );

  return <Link to={`/pets/${props.id}`}>{children}</Link>;
};
