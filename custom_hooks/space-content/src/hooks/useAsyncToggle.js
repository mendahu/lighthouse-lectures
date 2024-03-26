import { useToggle } from "./useToggle";
import { useState } from "react";

export const useAsyncToggle = (callback, options) => {
  const [toggled, toggle] = useToggle();
  const [error, setError] = useState(null);

  const asyncToggle = () => {
    // clear states
    setError(null);

    // request

    let request = callback();
    // axios.post(`${path}/${id}`);

    if (options.optimistic) {
      toggle();
      request = request.catch((err) => {
        toggle();
        throw err;
      });
    } else {
      request = request.then(() => {
        toggle();
      });
    }

    request.catch((err) => {
      setError(err.response.status);
    });
  };

  return [toggled, asyncToggle, error];
};
