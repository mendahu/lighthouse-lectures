import axios from "axios";
import { useAsyncToggle } from "../hooks/useAsyncToggle";
import Heart from "./Heart";
import "./Hit.css";

const Hit = (props) => {
  const [liked, toggleLike, error] = useAsyncToggle(
    () => axios.post(`/hits/likes/${props.id}`),
    {
      optimistic: true,
    }
  );

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
          {error && (
            <div>
              <p style={{ color: "red" }}>Error! {error}</p>
            </div>
          )}
        </div>
      </div>
      <div>
        <Heart size="50" liked={liked} onClick={toggleLike} />
      </div>
    </article>
  );
};

export default Hit;
