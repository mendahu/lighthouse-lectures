import "./App.css";
import React from "react";
import FrogCard from "./FrogCard";
import axios from "axios";

// function fetchFrog(component) {
//   axios
//     .get("/frogs/random")
//     .then((res) => {
//       const frog = res.data;
//       component.setState(frog);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      interval: null,
    };
  }

  fetchFrog() {
    axios
      .get("/frogs/random")
      .then((res) => {
        const frog = res.data;
        this.setState({ ...this.state, ...frog });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  cycleFrogs() {
    const interval = setInterval(() => {
      this.fetchFrog();
    }, 1000);
    this.setState({ ...this.state, interval });
  }

  hideFrog() {
    this.setState({ ...this.state, show: false });
  }

  clearFetchFrogInterval() {
    clearInterval(this.state.interval);
    this.setState({ ...this.state, interval: null });
  }

  componentDidMount() {
    console.log("App has mounted");
    this.fetchFrog();
    // is similar to the useEffect with []
  }

  componentDidUpdate() {
    console.log("App has updated.");
    document.title = this.state.name;
  }

  componentWillUnmount() {
    console.log("App has unmounted.");
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to FROGSERVE</h1>
        <button onClick={() => this.fetchFrog()}>Change Frog</button>
        <button onClick={() => this.cycleFrogs()}>Cycle Frogs</button>
        <button onClick={() => this.hideFrog()}>Hide Frog</button>
        {this.state.show && (
          <FrogCard
            name={this.state.name}
            image={this.state.image}
            onHide={() => this.clearFetchFrogInterval()}
          />
        )}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
