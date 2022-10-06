import React from "react";

class FrogCard extends React.Component {
  componentDidMount() {
    console.log("FrogCard Did Mount");
  }

  componentDidUpdate() {
    console.log("Frog Card Did Update");
  }

  componentWillUnmount() {
    console.log("Frog Card Will Unmount");
    this.props.endInterval();
  }

  render() {
    // const { img, name } = this.props;
    console.log("Frog Card Render");
    return (
      <article>
        <h2>{this.props.name}</h2>
        <img src={this.props.img} width="300px" alt={this.props.name} />
      </article>
    );
  }
}

export default FrogCard;
