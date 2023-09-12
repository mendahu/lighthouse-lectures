import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (path, initialValue) => {
  // posts
  const [state, setState] = useState(initialValue);

  // loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(path)
      .then((res) => {
        setState(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError("Failed to get Data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [state, loading, error];

  // alternate

  // return {
  //   data: state,
  //   loading,
  //   error
  // }
};
