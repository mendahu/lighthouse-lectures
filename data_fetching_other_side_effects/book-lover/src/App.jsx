import { useEffect, useState } from "react";
import "./App.css";
import BookCard from "./BookCard";
import axios from "axios";

// This is a pure function, so it can be declared outside of a component
// it's definition does not depend on anything created inside the component
const fetchBooks = (searchTerm) => {
  if (searchTerm === "") {
    return Promise.resolve([]);
  }

  return axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
    .then((res) => {
      const bookState = res.data.items.map((item) => {
        return {
          title: item.volumeInfo.title,
          image: item.volumeInfo.imageLinks?.thumbnail || "",
          description: item.volumeInfo.description,
        };
      });

      return bookState;
    })
    .catch((err) => {
      console.error(err);
    });
};

// This helper function is also pure, and follows the same logic as above
const formatTime = (date) => {
  return `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
};

function App() {
  const [books, setBooks] = useState([
    {
      title: "My Book",
      image: "",
      description: "This book is super rad!!!",
    },
  ]);

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [time, setTime] = useState(new Date());

  // Initial loading state useEffect
  // We want "dinosaur" to be the initial data we use to display books
  // Empty dependency array - only run on first render and not after
  // We use useEffect here because making an AJAX call depends on the browser
  // This fetch calls happens outside of "JavaScript Land", so it is a Side Effect
  useEffect(() => {
    setLoading(true);
    fetchBooks("dinosaur").then((books) => {
      setLoading(false);
      setBooks(books);
    });
  }, []);

  // Event handler for form input
  // calls the same function as the initial useffect above
  // takes the form input for data instead though
  // No useEffect necessary here - it is a response to a user input
  // Since Browser Events are already outside of the React framework,
  // we don't need to register it as a Side Effect - it can just call useState as normal
  // to trigger a re-render
  const handleChange = (event) => {
    setLoading(true);
    setSearchTerm(event.target.value);
    fetchBooks(event.target.value).then((books) => {
      setLoading(false);
      setBooks(books);
    });
  };

  // This useffect creates an interval to update the timer
  // setInterval is a browser API, and so just like fetch, it
  // needs to be registered as a Side Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // since intervals persist in the browser event after the JavaScript is done,
    // we can use the useEffect Cleanup function to clear it out as needed
    // By returning a function here, we tell React 'if this component goes away, call
    // this function to clean up the mess we made'
    return () => {
      clearInterval(timer);
    };
  }, []);

  // A separate use effect to update the browser tab title when the timer changes
  // Note `time` in the dependency array - so this fires every second too!
  // Strictly speaking, this shouldn't be in its own useEffect - we could call
  // document.title in the useEffect above right under the setTime call
  // But I wanted to show you have the dependencies work!
  useEffect(() => {
    document.title = formatTime(time);
  }, [time]);

  return (
    <div>
      <p>{formatTime(time)}</p>
      <h1> Book Lover!</h1>
      <h2>Search</h2>
      <input value={searchTerm} onChange={handleChange}></input>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <>
          <h2>Results</h2>
          {books.map((book, i) => {
            return (
              <BookCard
                title={book.title}
                description={book.description}
                image={book.image}
                key={i}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;

// Introduce data fetching

// Come back at 5 minutes past the hour, or like 11:22 in newfoundland
