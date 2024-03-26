import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <main>
          <h2>
            Posts <button>Load</button>
          </h2>
        </main>
        <aside>
          <h2>
            Hits <button>Load</button>
          </h2>
        </aside>
      </div>
    </>
  );
}

export default App;
