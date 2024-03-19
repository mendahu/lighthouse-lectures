import "./App.css";
import { FruitCard } from "./components/FruitCard";
import { FruitStats } from "./components/FruitStats";

function App() {
  return (
    <>
      <header>
        <h1>¿Cuantas Frutas?</h1>
      </header>
      <main>
        <section>
          <h2>Individual Fruits</h2>
          <div className="row">
            <FruitCard />
          </div>
        </section>
        <section>
          <h2>
            Stats <button>Show Stats</button>
          </h2>
          <FruitStats />
        </section>
      </main>
    </>
  );
}

export default App;
