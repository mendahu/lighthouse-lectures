import { Main } from "./Main/Main";
import { Navbar } from "./Navbar/Navbar";
import "./App.css";
import { PetProfile } from "./PetProfile/PetProfile";
import { SignIn } from "./SignIn/SignIn";
import { Outlet } from "react-router-dom";
import { PetsContext, useFetchPets } from "./contexts/pets";
import { useState } from "react";
import { UserContext, useFetchUser } from "./contexts/user";

function App() {
  // const pets = useFetchPets();

  return (
    <UserContext.Provider value={useFetchUser()}>
      <Navbar />
      <PetsContext.Provider value={useFetchPets()}>
        <Outlet />
      </PetsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
