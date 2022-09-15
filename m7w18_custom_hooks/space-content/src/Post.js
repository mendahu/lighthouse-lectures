import Heart from "./Heart";
import "./Post.css";
import usePersistentToggle from "./usePersistentToggle";

const Post = (props) => {
  const [isLiked, toggleLike] = usePersistentToggle(`post${props.id}`, false);

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
      <div onClick={toggleLike}>
        <Heart liked={isLiked} />
      </div>
    </article>
  );
};

export default Post;
