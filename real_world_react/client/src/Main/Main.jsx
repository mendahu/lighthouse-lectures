import { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import { PetListItem } from "../components/PetListItem/PetListItem";
import Cookies from "js-cookie";

export const Main = () => {
  const [user, setUser] = useState(null);
  const [pets, setPets] = useState([]);

  const user_id = Cookies.get("user_id");

  useEffect(() => {
    if (!user_id) {
      return;
    }

    axios.get(`/api/users/${user_id}`).then((res) => {
      setUser(res.data.data);
    });
  }, [user_id]);

  const userId = user && user.id;

  useEffect(() => {
    if (!userId) {
      return;
    }

    axios.get("/api/users/1/pets").then((res) => {
      setPets(res.data.data);
    });
  }, [userId]);

  return (
    <>
      <main className="main">
        <section>
          <h1>Profile</h1>
          <p>
            {user
              ? "Welcome to the Pet Profile App!"
              : "Please login to continue!"}
          </p>
          {user && (
            <>
              <h2>Your Pets</h2>
              <ul>
                {pets.map((pet) => {
                  return <PetListItem key={pet.id} {...pet} />;
                })}
              </ul>
            </>
          )}
        </section>
        {user && (
          <aside>
            <div>
              <img
                className="profile-picture"
                src={user.profile_image}
                alt={user.name}
              />
            </div>
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>
                {user.city}, {user.state}, {user.country}
              </p>
            </div>
          </aside>
        )}
      </main>
    </>
  );
};
