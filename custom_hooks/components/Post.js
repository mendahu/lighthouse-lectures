import Heart from "./Heart";
import "./Post.css";

const Post = (props) => {
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
      <div>
        <Heart />
      </div>
    </article>
  );
};

export default Post;
