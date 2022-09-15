import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, initialValue) => {
  const [state, setState] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setState(initialValue);
    setError(null);
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setState(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.error);
        console.error(err);
      });
  }, [url]);

  return [state, isLoading, error];
};

export default useFetch;
