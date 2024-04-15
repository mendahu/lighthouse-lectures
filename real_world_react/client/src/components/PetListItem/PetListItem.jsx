import { Link } from "react-router-dom";
import "./PetListItem.css";

export const PetListItem = (props) => {
  return (
    <Link to={"/pets/" + props.id}>
      <li className="pet-list-item">
        <div>
          <img src={props.image} alt={props.name} />
        </div>
        <div>
          <p>{props.name}</p>
        </div>
      </li>
    </Link>
  );
};
