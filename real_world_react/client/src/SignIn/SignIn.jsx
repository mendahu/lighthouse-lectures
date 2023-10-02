import axios from "axios";
import "./SignIn.css";

export const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    if (!email || !password) {
      return;
    }

    axios
      .post("/api/login", {
        email: form.get("email"),
        password: form.get("password"),
      })
      .then((res) => {
        console.log(res);
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
