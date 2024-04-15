import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Navbar.css";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user";

export const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <header>
      <div className="app-logo">🐈</div>
      <h1>Pet Profile</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Profile</Link>
          </li>
        </ul>
      </nav>
      <div className="login-bar">
        {user && <span>Logged in as: {user.name}</span>}
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button>Login</button>
        )}
      </div>
    </header>
  );
};
