import Heart from "./Heart";
import "./Hit.css";
import usePersistentToggle from "./usePersistentToggle";

const Hit = (props) => {
  const [isLiked, toggleLike] = usePersistentToggle(`hit${props.id}`, false);

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
      <div onClick={toggleLike}>
        <Heart liked={isLiked} size="20" />
      </div>
    </article>
  );
};

export default Hit;
