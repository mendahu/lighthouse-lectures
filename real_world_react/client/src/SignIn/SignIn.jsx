import axios from "axios";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext, useUser } from "../contexts/user";

export const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get("email");
    const password = form.get("password");

    if (!email || !password) {
      return;
    }

    login(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <main className="form">
      <h1>Sign in!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
