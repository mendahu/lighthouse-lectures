import SearchResult from "./SearchResult";
import "./SearchResultList.css";

const SearchResultList = (props) => {
  const showTitle = props.results.length > 0;

  const results = props.results.map((result, i) => {
    return (
      <SearchResult
        key={i}
        name={result.name}
        image={result.image}
        description={result.description}
        tags={result.tags}
      />
    );
  });

  return (
    <section className="results">
      {showTitle && <h1>Results</h1>}
      {results}
    </section>
  );
};

export default SearchResultList;

// props.result = [results, results]

// {
//   "name": "Ayrshire",
//   "image": "https://cdn.agronomag.com/wp-content/uploads/2022/08/Ayrshire-cow.jpg",
//   "tags": ["chonker", "dairy", "hungry"],
//   "description": "The Ayrshire is by far one of the largest cattle breeds out there, making it a great choice for those that want to get the best of both worlds in terms of amazing milk quality and delicious meat at the end of its partnership with you. You can get a lot of milk from it, but what's really cool about this breed is the fact that it can grow as large as 900 to 1,300 pounds in total. Just keep in mind that the larger size is also attributed to the huge quantities of food that you’ll have to feed it. So, if you can handle the food price you won’t have any problems raising your very own Ayrshire cow today."
// },
