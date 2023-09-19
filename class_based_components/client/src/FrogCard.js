import React from "react";

class FrogCard extends React.Component {
  // why no constructor?

  // 1. If you don't add a constructor, super() gets called implicitly
  // 2. Constructors are used to set up state, or to access props

  componentDidMount() {
    console.log("FrogCard has mounted");

    // is similar to the useEffect with []
  }

  componentDidUpdate() {
    console.log("FrogCard has updated.");

    //
  }

  componentWillUnmount() {
    console.log("FrogCard has unmounted.");
    this.props.onHide();
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img src={this.props.image} width={"300px"} alt={this.props.name} />
      </div>
    );
  }
}

export default FrogCard;
