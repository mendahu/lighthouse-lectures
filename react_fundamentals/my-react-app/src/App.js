import React, { useState } from "react";
import { Article } from "./Article";
import { Form } from "./Form";

const articles = [
  {
    id: 1,
    title: "My Article Header 5",
    body: "This is my article text",
  },
  {
    id: 2,
    title: "My Article Header 6",
    body: "This is my article text",
  },
  {
    id: 3,
    title: "My Article Header 7",
    body: "This is my article text",
  },
];

const App = () => {
  // const countArr = useState(0)
  let [count, setCount] = useState(0);

  // let count = 0;

  const clickHandler = () => {
    setCount(count + 1);
    console.log(count);
    console.log("Button clicked!");
  };

  const articleComponents = [];

  for (const article of articles) {
    articleComponents.push(
      <Article
        count={count}
        key={article.id}
        title={article.title}
        body={article.body}
      />
    );
  }

  return (
    <>
      <h1>My React App</h1>
      {articleComponents}
      <span style={{ fontSize: "2rem" }}>{count}</span>
      <br />
      <br />

      <button onClick={clickHandler}>Click me!</button>
      <Form />
    </>
  );
};

export default App;
