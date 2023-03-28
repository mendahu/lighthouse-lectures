import { useEffect, useState } from "react";
import "./App.css";
import BookCard from "./BookCard";
import axios from "axios";

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

  useEffect(() => {
    setLoading(true);
    fetchBooks("dinosaur").then((books) => {
      setLoading(false);
      setBooks(books);
    });
  }, []);

  const handleChange = (event) => {
    setLoading(true);
    setSearchTerm(event.target.value);
    fetchBooks(event.target.value).then((books) => {
      setLoading(false);
      setBooks(books);
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
