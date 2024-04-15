import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const useFetchUser = () => {
  const [user, setUser] = useState(null);

  const user_id = Cookies.get("user_id");

  useEffect(() => {
    if (!user_id) {
      return;
    }

    axios.get(`/api/users/${user_id}`).then((res) => {
      setUser(res.data.data);
    });
  }, [user_id]);

  const logout = () => {
    axios.post("/api/logout").then((res) => {
      setUser(null);
    });
  };

  const login = (email, password) => {
    return axios
      .post("/api/login", {
        email,
        password,
      })
      .then((res) => {
        setUser(res.data.data);
      });
  };

  return { user, logout, login };
};
