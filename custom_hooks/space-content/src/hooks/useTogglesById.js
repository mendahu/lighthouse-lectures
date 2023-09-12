import { useState } from "react";

export const useTogglesById = () => {
  const [state, setState] = useState({});

  const toggleById = (id) => {
    const newState = { ...state };
    newState[id] = !newState[id];
    setState(newState);
  };

  return [state, toggleById];
};
