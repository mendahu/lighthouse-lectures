import { useState } from "react";

export const useToggle = () => {
  const [toggled, setToggled] = useState(false);

  const toggle = () => {
    setToggled((prev) => !prev);
  };

  return [toggled, toggle];
};
