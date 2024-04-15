import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "../Main/Main.css";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { PetsContext } from "../contexts/pets";

const getPetById = (pets, id) => {
  return pets.find((pet) => pet.id === parseInt(id));
};

export const PetProfile = () => {
  const { petId } = useParams();
  const pets = useContext(PetsContext);
  const pet = getPetById(pets, petId);

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
