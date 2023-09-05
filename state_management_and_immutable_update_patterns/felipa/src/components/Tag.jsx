// Styles
import "./Tag.css";

export default function Tag(props) {
  const handleClose = (event) => {
    event.preventDefault();
    props.onClose();
  };

  return (
    <div className="tag">
      {props.children}
      <button className="close-x" onClick={handleClose}></button>
    </div>
  );
}
