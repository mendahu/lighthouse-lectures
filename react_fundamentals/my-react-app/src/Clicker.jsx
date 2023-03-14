import { useState } from "react";

const Clicker = () => {
  const [count, setCount] = useState(0);
  // // tuple element 1 and element 2
  // const count = arr[0];
  // const setCount = arr[1];

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={clickHandler}>Increase count</button>
    </div>
  );
};

export default Clicker;
