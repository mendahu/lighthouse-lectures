import "./Button.css";

export default function Button(props) {
  const text = props.loading ? props.loadingText : props.children;
  const buttonType = props.type ?? "button";

  return (
    <button type={buttonType} className="button">
      {text}
    </button>
  );
}
