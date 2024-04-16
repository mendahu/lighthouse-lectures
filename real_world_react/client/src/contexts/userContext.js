import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const UserContext = createContext(null);

const useFetchUser = () => {
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
    return axios.post("/api/login", {
      email,
      password,
    });
  };

  return {
    user,
    logout,
    login,
  };
};

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = (props) => {
  const user = useFetchUser();

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
