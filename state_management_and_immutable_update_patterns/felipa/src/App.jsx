import { useState } from "react";
import "./App.css";
import Profile from "./Profile";
import Navbar from "./Navbar";

function App() {
  const [user, setUser] = useState({
    logo: "frog_profile.jpg",
    tags: ["green", "happy", "hungry"],
    loggedIn: true,
    name: "Felipa",
    description:
      "Felipa is a friendly tree frog who enjoys spending her days sleeping and her nights chasing mosquitos for a delicious meal.",
  });

  return (
    <div>
      <Navbar loggedIn={user.loggedIn} />
      <main>
        {user.loggedIn ? (
          <Profile
            logo={user.logo}
            alt={`Profile picture for ${user.name}`}
            name={user.name}
            description={user.description}
            tags={user.tags}
          />
        ) : (
          <>
            <h2>Please login to see your profile!</h2>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
