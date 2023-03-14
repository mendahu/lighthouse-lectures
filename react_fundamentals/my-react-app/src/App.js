import "./App.css";
import React from "react";
import Article from "./components/Article";
import Clicker from "./Clicker";
import NameForm from "./NameForm";

const articleData = [
  {
    title: "Title 1",
    text: "Text 1",
  },
  {
    title: "Title 2",
    text: "Text 2",
  },
  {
    title: "Title 3",
    text: "Text 3",
  },
  {
    title: "Title 4",
    text: "Text 4",
  },
];

function App() {
  const articles = [];

  for (const article of articleData) {
    articles.push(
      <Article key={article.text} text={article.text} title={article.title} />
    );
  }

  // const clickHandler = () => {
  //   console.log("cclicked");
  // };

  return (
    <>
      <div>
        <h1>My React App</h1>
        <p>My paragraph of text...</p>
      </div>
      <div>
        <Article text={"My article text"} title={"My article title"} />
        <Article text={"Whoa this is cool"} title={"What a rad concept"} />
        {articles}
        {/* <button
          onClick={() => {
            console.log("cclicked");
          }}
        >
          Click me!
        </button> */}
        <Clicker />
        <NameForm />
      </div>
    </>
  );
}

export default App;
