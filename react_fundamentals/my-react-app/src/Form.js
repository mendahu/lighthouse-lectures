import { useState } from "react";

export const Form = (props) => {
  const [name, setName] = useState("");

  const changeHandler = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input name="name" value={name} onChange={changeHandler} />
    </form>
  );
};
