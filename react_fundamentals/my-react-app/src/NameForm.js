import { useState } from "react";

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <h1>{firstName + " " + lastName}</h1>
      <label>Name</label>
      <input
        value={firstName}
        onChange={(event) => {
          console.log(event.target.value);
          setFirstName(event.target.value);
        }}
      />
      <input
        value={lastName}
        onChange={(event) => {
          console.log(event.target.value);
          setLastName(event.target.value);
        }}
      />
      <p>Chars remaining: {140 - firstName.length - lastName.length - 1}</p>
    </div>
  );
};

export default NameForm;
