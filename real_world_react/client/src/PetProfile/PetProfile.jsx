import axios from "axios";
import { useEffect, useState } from "react";
import "../Main/Main.css";
import Cookies from "js-cookie";

export const PetProfile = () => {
  const [pets, setPets] = useState([]);

  const user_id = Cookies.get("user_id");

  useEffect(() => {
    if (!user_id) {
      return;
    }
    axios.get(`/api/users/${user_id}/pets`).then((res) => {
      setPets(res.data.data);
    });
  }, [user_id]);

  const pet = pets[0];

  return (
    <main className="main">
      <section></section>
      {pets.length > 0 && (
        <aside>
          <div>
            <img className="pet-picture" src={pet.image} alt={pet.name} />
          </div>
          <div>
            <h2>{pet.name}</h2>
            <p>
              {pet.yob} - {pet.yod ?? "Present"}
            </p>
            <p>{pet.breed}</p>
          </div>
        </aside>
      )}
    </main>
  );
};
