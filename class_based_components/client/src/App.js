import "./App.css";
import React from "react";
import FrogCard from "./FrogCard";
import axios from "axios";

class App extends React.Component {
  constructor() {
    console.log("App Constructor");
    super();
    this.state = {
      name: "Stateful Frog",
      image: "",
      show: true,
      interval: null,
    };
    this.fetchFrog = this.fetchFrog.bind(this);
    this.cycleFrogs = this.cycleFrogs.bind(this);
  }

  // RETURN AT 2:20 EDT!!!!!!!
  cycleFrogs = () => {
    const interval = setInterval(() => {
      this.fetchFrog();
    }, 1000);
    this.setState({ ...this.state, interval });
  };

  fetchFrog() {
    axios
      .get("/frogs/random")
      .then((res) => {
        this.setState({ ...this.state, ...res.data, show: true });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    console.log("App Component Did Mount");
    this.fetchFrog();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App Component Did Update");
    document.title = this.state.name;
  }

  // useEffect??????? []

  hideFrog = () => {
    this.setState({ ...this.state, show: false });
  };

  clearFrogCycleInterval = () => {
    clearInterval(this.state.interval);
    this.setState({ ...this.state, interval: null });
  };

  render() {
    console.log("App Render");
    return (
      <div className="App">
        <h1>Welcome to FrogServe</h1>
        <hr />
        <button onClick={() => this.fetchFrog()}>Get a New Frog</button>
        <button onClick={() => this.cycleFrogs()}>Cycle the Frogs!!</button>
        <button onClick={() => this.hideFrog()}>Hide the Frog!!</button>
        {this.state.show && (
          <FrogCard
            name={this.state.name}
            img={this.state.image}
            endInterval={this.clearFrogCycleInterval}
          />
        )}
      </div>
    );
  }
}

// useEffect(() => {
//   const cleanup = () => {
//     //clear intervals
//   }

//   return cleanup

// }, [value])

// function App() {
//   const [frog, setFrog] = useState({
//     name: "Stateful Frog",
//     img: "",
//   })

//   return (
//     <div className="App">
//       <h1>Welcome to FrogServe</h1>
//       <hr />
//       <FrogCard name={frog.name} img={frog.img} />
//     </div>
//   );
// }

export default App;
