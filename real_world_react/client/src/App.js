import { Main } from "./Main/Main";
import { Navbar } from "./Navbar/Navbar";
import "./App.css";
import { PetProfile } from "./PetProfile/PetProfile";
import { SignIn } from "./SignIn/SignIn";

function App() {
  return (
    <>
      <Navbar />
      {/* <Main /> */}
      <PetProfile />
      {/* <SignIn /> */}
    </>
  );
}

export default App;
