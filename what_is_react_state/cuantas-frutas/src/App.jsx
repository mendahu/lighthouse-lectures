import "./App.css";
import { FruitCard } from "./components/FruitCard";
import { FruitStats } from "./components/Stats";

function App() {
  return (
    <>
      <header>
        <h1>¿Cuantas Frutas?</h1>
      </header>
      <main>
        <section>
          <h2>Stats</h2>
          <FruitStats />
        </section>
        <section>
          <h2>Individual Fruits</h2>
          <div class="row">
            <FruitCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
