# Outline

### Create a new app

```sh
npx create-react-app pizza-place
```

### Remove boilerplate and create `components` directory

- Structure of a Component
- Function that returns JSX, which compiles as HTML
- Show how you can render javascript inside JSX with title var

```js
function App() {
  const title = "Jake's Pizza Place";
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}
```

### Add a `Header` component in same file

```js
const Header = () => {
  return <h1>Jake's Pizza Place</h1>;
};
```

- Render it inside of App
- Remind basic tree structure

### Put the `title` variable into App and pass as prop

```js
import "./App.css";

function Header(props) {
  return <h1>{props.title}</h1>;
}

function App() {
  const title = "Jake's Pizza Place";

  return (
    <main>
      <Header title={title} />
    </main>
  );
}

export default App;
```

- Remind: What is a prop
- Two parts - declare it in the render, access it in props
- Scoping inside functions
- Talk about destructuring and why it is good or not
- Focus on vocabulary

### Refactor to separate file

- Why refactor, why separate files, reusability, component, organization

### Create a Cart component

```js
import React from "react";

function Cart(props) {
  return (
    <div>
      <p>You have {props.quantity} items in your cart</p>
    </div>
  );
}

export default Cart;
```

### Add state in App to track cart quantity

```js
const [cartQuantity, setCartQuantity] = useState(0);
```

- Using State
- State lives outside the function
- React Special Magic
- Triggers re-renders

### Make Menu Components

```js
import React from "react";

function Menu(props) {
  return (
    <div>
      <h2>Cheese Pizza</h2>
      <button onClick={props.addItem}>Add to Cart</button>
    </div>
  );
}

export default Menu;
```

### Render Menu component with adder function as prop

```js
const addItem = () => {
  setCartQuantity(cartQuantity + 1);
};
```

- State is lifted, value going to one component, added going to another

### Make Three Pack

- Call setCartQuantity 3 times

```js
const addItem = () => {
  setCartQuantity(cartQuantity + 1);
  setCartQuantity(cartQuantity + 1);
  setCartQuantity(cartQuantity + 1);
};
```

### Refactor to use the callback update method

```js
const addItem = () => {
  setCartQuantity((oldQuantity) => oldQuantity + 1);
  setCartQuantity((oldQuantity) => oldQuantity + 1);
  setCartQuantity((oldQuantity) => oldQuantity + 1);
};
```

### Immutable Update Patterns

- What is Immutability
- Never mutate data directly
- Instead, overwrite it with all new data (clone it and change it)

### Why Immutability?

- Immutable data structures are simpler to construct, test, and use
- Immutable data is side-effect free (avoids weird bugs in our app)
- Makes it possible to compare the current data to the previous version to see what has changed

### Create `immutable.js`

```js
// objects/arrays are references
const user = {
  name: "Alice",
  age: 30,
};
const otherUser = user; // otherObj has the same reference as myObj
otherUser.name = "Bob";
console.log(user); // { name: 'Bob' } oops!!
```

```js
// copy the object using the spread operator
const user = {
  name: "Alice",
  age: 30,
};
const otherUser = { ...user };
otherUser.name = "Bob";
console.log(user);
```

```js
// update the `name` key at the same time
const otherUser = { ...user, name: "Bob" };
console.log(otherUser);
```

### Spread operator only makes a shallow copy

```js
// user is still being updated
const user = {
  name: "Alice",
  age: 30,
  likes: ["pizza"],
};
const otherUser = { ...user, name: "Bob" };
otherUser.likes.push("bananas");
console.log(user);
```

```js
// spread child arrays/objects as well
const otherUser = {
  ...user,
  name: "Bob",
  likes: [...user.likes],
};
otherUser.likes.push("bananas");
```

```js
// insert 'bananas' at the same time
const otherUser = {
  ...user,
  name: "Bob",
  likes: [...user.likes, "bananas"],
};
```

### Adjust Pizza App

- Pizza store is now a build your own
- State will now be complex object

```js
const [pizza, setPizza] = useState({
  toppings: [],
});

return;
<main>
  <Header title={title} year={year} />
  <Cart pizza={pizza} />
  <Menu addTopping={addTopping} />
</main>;
```

- Cart should show toppings

```js
function Cart(props) {
  return (
    <div>
      <h2>Your current pizza:</h2>
      <p>Current toppings:</p>
      <ul>
        {props.pizza.toppings.map((topping, i) => (
          <li key={i}>{topping}</li>
        ))}
      </ul>
    </div>
  );
}
```

- Menu should add toppings

```js
function Menu(props) {
  return (
    <div>
      <h2>Toppings!</h2>
      <button onClick={() => props.addTopping("cheese")}>Add Cheese</button>
      <button onClick={() => props.addTopping("pepperoni")}>
        Add Pepperoni
      </button>
      <button onClick={() => props.addTopping("mushrooms")}>
        Add Mushrooms
      </button>
    </div>
  );
}
```

- Create new `addTopping` function to add toppings. Show simple method and callback.

### Add more complex state

```js
const [pizza, setPizza] = React.useState({
  toppings: ["cheese"],
  crust: "thin",
});

  const setCrust = (crust) => {
    setPizza((oldPizza) => {
      return { ...oldPizza, crust };
    });
  };

    <h2>Select your Crust</h2>
  <button onClick={() => props.setCrust("thin")}>Thin Crust</button>
  <button onClick={() => props.setCrust("stuffed")}>Stuffed Crust</button>
  <button onClick={() => props.setCrust("normal")}>Normal Crust</button>
```
