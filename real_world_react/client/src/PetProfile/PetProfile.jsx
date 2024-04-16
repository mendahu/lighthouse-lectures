import "../Main/Main.css";
import { useParams } from "react-router-dom";
import { usePets } from "../contexts/petsContext";

export const PetProfile = () => {
  const { petId } = useParams();
  const pets = usePets();

  const pet = pets.find((pet) => pet.id === parseInt(petId));

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
