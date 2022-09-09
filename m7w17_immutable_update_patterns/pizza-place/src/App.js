import "./App.css";
import Header from "./Header.js";
import Cart from "./Cart.js";
import Menu from "./Menu.js";
import { useState } from "react";

function App() {
  const title = "Jake's Pizza Place";

  const [pizza, setPizza] = useState({
    crust: "standard",
    toppings: ["cheese"],
    size: 14,
  });

  const setCrust = (type) => {
    setPizza((oldPizza) => {
      return { ...oldPizza, crust: type };
    });
  };

  const addTopping = (topping) => {
    setPizza((oldPizza) => {
      return { ...oldPizza, toppings: [...oldPizza.toppings, topping] };
    });
  };

  const setSize = (size) => {
    setPizza((oldPizza) => {
      return { ...oldPizza, size };
    });
  };

  return (
    <div>
      <Header title={title} />
      <Cart pizza={pizza} />
      <Menu
        size={pizza.size}
        setCrust={setCrust}
        addTopping={addTopping}
        setSize={setSize}
      />
    </div>
  );
}

export default App;
