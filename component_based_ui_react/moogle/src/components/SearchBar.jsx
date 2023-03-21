import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        value={props.value}
        onChange={props.handleChange}
      />
      <button onClick={props.onClick} className="searchbar-button">
        {props.label}
      </button>
    </div>
  );
};

export default SearchBar;
