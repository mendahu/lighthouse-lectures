import { useState } from "react";
import "./App.css";
import Profile from "./Profile";
import Navbar from "./Navbar";
import Loading from "./components/Loading";

const defaultState = {
  loggedIn: true,
  loading: false,
  logo: "frog_profile.jpg",
  tags: [
    {
      id: 1,
      label: "green",
    },
    {
      id: 2,
      label: "hungry",
    },
    {
      id: 3,
      label: "happy",
    },
  ],
  name: "Felipa",
  description:
    "Felipa is a friendly tree frog who enjoys spending her days sleeping and her nights chasing mosquitos for a delicious meal.",
};

function App() {
  const [user, setUser] = useState(defaultState);

  return (
    <div>
      <Navbar loggedIn={user.loggedIn} />
      <main>
        {user.loading ? (
          <Loading />
        ) : (
          <>
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
          </>
        )}
      </main>
    </div>
  );
}

export default App;
