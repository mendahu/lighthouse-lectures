import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PetsContext = createContext([]);

export const useFetchPets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("/api/pets").then((res) => {
      setPets(res.data.data);
    });
  }, []);

  return pets;
};
