import React from "react";

function Cart(props) {
  return (
    <div>
      <h2>Cart</h2>
      <p>Current Pizza:</p>
      <p>Crust Type: {props.pizza.crust}</p>
      <p>Size: {props.pizza.size}</p>
      <p>Toppings:</p>
      <ul>
        {props.pizza.toppings.map((topping, i) => {
          return <li key={i}>{topping}</li>;
        })}
      </ul>
    </div>
  );
}

export default Cart;
