import "./Button.css";

export default function Button(props) {
  const text = props.loading ? props.loadingText : props.children;
  return <button className="button">{text}</button>;
}
