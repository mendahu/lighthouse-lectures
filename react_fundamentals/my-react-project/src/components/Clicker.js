import { useState } from "react";

function Clicker() {
  console.log("I am rendered");

  // const stateArray = useState();
  // const state = stateArray[0] // value of the state, or like the getter
  // const setState = stateArray[1] // function to change the state
  const [count, setCount] = useState(0);

  // form controlled input
  // using react state to "take control" of form value
  const [name, setName] = useState("");

  // will not work
  // let count = 0;
  const clickHandler = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log("I am clicked");
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={clickHandler}>Increase the count!</button>
      <form method="POST" action="/api/count">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default Clicker;
