import { useContext, useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import { PetListItem } from "../components/PetListItem/PetListItem";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { PetsContext } from "../contexts/pets";
import { UserContext } from "../contexts/user";

export const Main = () => {
  const pets = useContext(PetsContext);
  const { user } = useContext(UserContext);

  return (
    <>
      <main className="main">
        <section>
          <h1>Profile</h1>
          <p>
            {user ? (
              "Welcome to the Pet Profile App!"
            ) : (
              <Link to="/signin">Please login to continue!</Link>
            )}
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
