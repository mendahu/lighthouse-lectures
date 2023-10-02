import { useEffect, useState } from "react";
import axios from "axios";
import "./Navbar.css";
import Cookies from "js-cookie";

export const Navbar = () => {
  const [user, setUser] = useState(null);

  const user_id = Cookies.get("user_id");

  useEffect(() => {
    if (!user_id) {
      return;
    }

    axios.get(`/api/users/${user_id}`).then((res) => {
      setUser(res.data.data);
    });
  }, [user_id]);

  const handleLogout = () => {
    axios.post("/api/logout").then((res) => {
      setUser(null);
    });
  };

  return (
    <header>
      <div className="app-logo">🐈</div>
      <h1>Pet Profile</h1>
      <nav>
        <ul>
          <li>Profile</li>
        </ul>
      </nav>
      <div className="login-bar">
        {user && <span>Logged in as: {user.name}</span>}
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button>Login</button>
        )}
      </div>
    </header>
  );
};
