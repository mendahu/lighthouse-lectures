import { useState } from "react";
import "./App.css";
import { FruitCard } from "./components/FruitCard";
import { FruitStats } from "./components/FruitStats";
import { fruits } from "./config/fruits";

const defaultState = {};
for (const fruit of fruits) {
  defaultState[fruit.id] = 0;
}

function App() {
  // manual/oldfashioned way

  // const fruitComponents = [];

  // for (const fruit of fruits) {
  //   fruitComponents.push(
  //     <FruitCard
  //       key={fruit.id}
  //       image={fruit.image}
  //       singularLabel={fruit.singularLabel}
  //       pluralLabel={fruit.pluralLabel}
  //     />
  //   );
  // }

  // const [bananaCount, setBananaCount] = useState(0);
  // const [coconutCount, setCoconutCount] = useState(0);
  // const [papayaCount, setPapayaCount] = useState(0);

  const [fruitCounts, setFruitCounts] = useState(defaultState);

  // flexible adjustment function
  const adjustFruitCount = (id, count) => {
    const newFruits = { ...fruitCounts };
    newFruits[id] += count;
    setFruitCounts(newFruits);
  };

  // Could be inlined in the JSX, optionally
  const fruitComponents = fruits.map((fruit) => {
    const addFruit = () => {
      adjustFruitCount(fruit.id, 1);
    };

    const removeFruit = () => {
      adjustFruitCount(fruit.id, -1);
    };

    const adjustFruit = (count) => adjustFruitCount(fruit.id, count);

    return (
      <FruitCard
        key={fruit.id}
        image={fruit.image}
        singularLabel={fruit.singularLabel}
        pluralLabel={fruit.pluralLabel}
        count={fruitCounts[fruit.id]}
        addFruit={addFruit}
        removeFruit={removeFruit}
        adjustFruit={adjustFruit}
      />
    );
  });

  const [showStats, setShowStats] = useState(false);

  const toggleStatsVisibility = () => {
    setShowStats(!showStats);
  };

  const stats = fruits.map((fruit) => {
    return {
      label: fruit.singularLabel,
      count: fruitCounts[fruit.id],
      mass: fruitCounts[fruit.id] * fruit.mass,
    };
  });

  return (
    <>
      <header>
        <h1>¿Cuantas Frutas?</h1>
      </header>
      <main>
        <section>
          <h2>Individual Fruits</h2>
          <div className="row row-item-grow">{fruitComponents}</div>
        </section>
        <section>
          <h2>
            Stats{" "}
            <button onClick={toggleStatsVisibility}>
              {showStats ? "Hide Stats" : "Show Stats"}
            </button>
          </h2>
          {showStats && <FruitStats data={stats} />}
        </section>
      </main>
    </>
  );
}

export default App;
