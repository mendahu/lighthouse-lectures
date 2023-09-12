import Heart from "./Heart";
import "./Hit.css";
// import { useToggle } from "./hooks/useToggle";

const Hit = (props) => {
  // const [liked, toggleLiked] = useToggle();

  return (
    <article className="hit">
      <div>
        <div>
          <img src={props.avatar} alt={`Avatar of ${props.name}`} />
        </div>
        <div>
          <div>
            <p>{props.content}</p>
          </div>
          <div className="date">
            <span>Posted {new Date(props.date).toTimeString()}</span>
          </div>
        </div>
      </div>
      <div onClick={props.toggleLike}>
        <Heart size="20" liked={props.liked} />
      </div>
    </article>
  );
};

export default Hit;
