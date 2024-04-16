import { Navbar } from "./Navbar/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";
import { PetsProvider } from "./contexts/petsContext";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <PetsProvider>
        <Outlet />
      </PetsProvider>
    </UserProvider>
  );
}

export default App;
