import Favourite from "./Favourite";
import "./Post.css";
import { useToggle } from "./hooks/useToggle";

const Post = (props) => {
  const [faved, toggleFav] = useToggle();

  return (
    <article className="post">
      <div>
        <div>
          <img
            class="avatar"
            src={props.avatar}
            alt={`Avatar of ${props.name}`}
          />
        </div>
        <div>
          <h3>{props.title}</h3>
          <span class="date">Posted {new Date(props.date).toTimeString()}</span>
        </div>
      </div>
      <div>
        <p>{props.content}</p>
      </div>
      <div onClick={toggleFav}>
        <Favourite faved={faved} />
      </div>
    </article>
  );
};

export default Post;
