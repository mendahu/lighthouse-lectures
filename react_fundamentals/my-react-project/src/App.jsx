import Article from "./components/Article";
import Clicker from "./components/Clicker";

const articles = [
  {
    header: "My React Article",
    text: "My article text goes here!",
  },
  {
    header: "My Other React Article",
    text: "My other article text goes here!",
  },
  {
    header: "My Third React Article",
    text: "My third article text goes here!",
  },
];

function App() {
  // const articleComponents = [];

  // for (const article of articles) {
  //   articleComponents.push(
  //     <Article header={article.header} text={article.text} />
  //   );
  // }

  // unique key value to help react keep track of elements across renders
  const articleComponents = articles.map((article, index) => {
    return <Article key={index} header={article.header} text={article.text} />;
  });

  return (
    <div>
      {/* Passing in props at render */}
      {articleComponents}
      <Clicker />
    </div>
  );
}

export default App;
