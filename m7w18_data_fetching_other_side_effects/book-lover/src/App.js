import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([
    {
      title: "Awesome Book",
      image: "",
      description: "This book rules my face off",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then((res) => {
          const reducedBooks = res.data.items.map((item) => {
            return {
              title: item.volumeInfo.title,
              image: item.volumeInfo.imageLinks.smallThumbnail,
              description: item.volumeInfo.description,
            };
          });
          setBooks(reducedBooks);
        });
    }
  }, [searchTerm]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const cleanup = () => {
      clearInterval(myInterval);
    };

    return cleanup;
  }, []);

  useEffect(() => {
    document.title = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  }, [time]);

  return (
    <div>
      <h1>Book Lover!</h1>
      <h2>FIND YOUR BOOKS!!</h2>

      <p>
        Time: {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </p>

      <h3>Search</h3>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      {books.map((book) => (
        <BookCard
          title={book.title}
          image={book.image}
          description={book.description}
        />
      ))}
    </div>
  );
}

export default App;
