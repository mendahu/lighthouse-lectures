import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const PetsContext = createContext([]);

export const useFetchPets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("/api/pets").then((res) => {
      setPets(res.data.data);
    });
  }, []);

  return {
    pets,
  };
};

export const usePets = () => {
  return useContext(PetsContext);
};

export const PetsProvider = (props) => {
  const { pets } = useFetchPets();

  return (
    <PetsContext.Provider value={pets}>{props.children}</PetsContext.Provider>
  );
};
