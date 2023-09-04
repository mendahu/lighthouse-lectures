// Styles
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <header>
      <h1>Frog Friends</h1>
      <div>
        {props.loggedIn && <p>Logged in as {props.username}</p>}
        {props.loggedIn ? (
          <button onClick={props.onLogout}>Logout</button>
        ) : (
          <button onClick={props.onLogin}>Login</button>
        )}
      </div>
    </header>
  );
}
