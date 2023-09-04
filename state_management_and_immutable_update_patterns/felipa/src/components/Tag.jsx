// Styles
import "./Tag.css";

export default function Tag(props) {
  return (
    <div className="tag">
      {props.children}
      <button className="close-x" onClick={props.onClose}></button>
    </div>
  );
}
