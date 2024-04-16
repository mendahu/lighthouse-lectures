import "./Main.css";
import { PetListItem } from "../components/PetListItem/PetListItem";
import { Link } from "react-router-dom";
import { usePets } from "../contexts/petsContext";
import { useUser } from "../contexts/userContext";

export const Main = () => {
  const pets = usePets();
  const { user } = useUser();

  return (
    <>
      <main className="main">
        <section>
          <h1>Profile</h1>
          <p>
            {user
              ? "Welcome to the Pet Profile App!"
              : "Please login to continue!"}
            {!user && <Link to="/signin">Login</Link>}
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
