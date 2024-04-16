import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/userContext";

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

    login(form.get("email"), form.get("password"))
      .then((res) => {
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
