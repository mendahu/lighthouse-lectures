import axios from "axios";
import { useAsyncToggle } from "../hooks/useAsyncToggle";
import Favourite from "./Favourite/Favourite";
import "./Post.css";

const Post = (props) => {
  const [favourited, toggleFavourite, error] = useAsyncToggle(
    () => axios.post(`/posts/favourites/${props.id}`),
    { optimistic: false }
  );

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
      <div style={{ display: "flex" }}>
        <Favourite faved={favourited} onClick={toggleFavourite} />
        {error && <p style={{ color: "red" }}>Error! {error}</p>}
      </div>
    </article>
  );
};

export default Post;
