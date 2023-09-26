import "./App.css";
import { Main } from "./Main";
import { Loading } from "./Loading";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    //   setPlanets(defaultPlanets);
    // }, 100);
    axios.get("/api/planets").then((res) => {
      setLoading(false);
      setPlanets(res.data);
    });
  }, []);

  return (
    <>
      <header className="card">
        <h1>PlanetView</h1>
      </header>

      {loading ? <Loading /> : <Main planets={planets} />}
    </>
  );
}

export default App;
