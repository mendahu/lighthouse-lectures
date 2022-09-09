import React, { useState } from "react";

function Menu(props) {
  const [size, setSize] = useState(props.size);

  return (
    <div>
      <h2>Menu</h2>
      <h3>Crust Type</h3>
      <button onClick={() => props.setCrust("standard")}>Standard Crust</button>
      <button onClick={() => props.setCrust("stuffed")}>Stuffed Crust</button>
      <button onClick={() => props.setCrust("thin")}>Thin Crust</button>
      <h3>Toppings</h3>
      <button onClick={() => props.addTopping("Pepperoni")}>
        Add Pepperoni
      </button>
      <button onClick={() => props.addTopping("Mushrooms")}>
        Add Mushrooms
      </button>
      <button onClick={() => props.addTopping("Banana Peppers")}>
        Add Banana Pepper
      </button>
      <p>Size:</p>
      <input value={size} onChange={(e) => setSize(e.target.value)} />
      <button
        onClick={() => {
          props.setSize(size);
        }}
      >
        Adjust Size
      </button>
    </div>
  );
}

export default Menu;
