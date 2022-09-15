import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
