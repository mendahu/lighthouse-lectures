import "./Navbar.css";

export default function Navbar(props) {
  return (
    <header>
      <h1>Frog Friends</h1>
      <div>
        {props.loggedIn && <p>Logged in as {props.username}</p>}
        {props.loggedIn ? <button>Logout</button> : <button>Login</button>}
      </div>
    </header>
  );
}
