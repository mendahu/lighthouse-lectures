import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResultList from "./components/SearchResultList";
import cows from "./data/cows.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => setSearchTerm(event.target.value);

  const handleSearch = () => {
    if (searchTerm === "") {
      return setSearchResults([]);
    }

    const filteredResults = cows.filter((cow) => {
      return (
        cow.name.includes(searchTerm) ||
        cow.description.includes(searchTerm) ||
        cow.tags.includes(searchTerm)
      );
    });

    setSearchResults(filteredResults);
  };

  return (
    <main>
      <div className="logo-container">
        <img src="logo.png" alt="Moogle Logo" />
      </div>
      <SearchBar
        value={searchTerm}
        handleChange={handleChange}
        label="Search"
        onClick={handleSearch}
      />
      <SearchResultList results={searchResults} />
    </main>
  );
}

export default App;
