import { useState } from "react";
import axios from "axios";

export const useFetchData = (path) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setError(null);
    setLoading(true);
    axios
      .get(path)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.status);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    data,
    loading,
    error,
    fetchData,
  };
};
