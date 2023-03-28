# W07D04 - Data Fetching & Other Side Effects

### To Do

- [ ] Pure Functions and Side Effects
- [ ] Side Effects in React
- [ ] `useEffect`
- [ ] Cleanup
- [ ] Dependencies
- [ ] _useEffect_ Flow
- [ ] Rules for Hooks
- [ ] Demo

### Pure Functions

- Review Pure Functions
- No side effects, same result each time if the same parameters are passed to it.
- Do some normal functions

```js
const joinName = (firstName, lastName) => {
  return firstName + lastName;
};
const firstName = "Jake";

const joinName = (lastName) => {
  return firstName + lastName;
};
```

- Do a React component.

```jsx
const UserCard = (props) => {
  return (
    <div>
      <img src={props.avatar} />
      <h1>{props.name}</h1>
      <h2>{props.email}</h1>
      <p>{props.bio}</p>
    </div>
  )
}

// vs

const defaultAvatar = "/public/avatar.jpg";

const UserCard = (props) => {
  return (
    <div>
      <img src={defaultAvatar} />
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <p>{props.bio}</p>
    </div>
  );
};
```

### Side Effects in React

- In any functional programming, you have to think carefully about side effects or function impurities.
- Anything happening outside of the function can affect it still and that can produce undesired behaviour
- This is especially true in React, because we have an extra layer of functionality that depends on the function process - props go in, components come out
- Our first foray into these side effects was useState
- `useState` makes a component impure
- React handles the side effects of hooks automatically for you - it's part of the magic
- When the state is updated, React re-renders the component automatically. It knows what is affected by the change.

```jsx
const UserCard = () => {
  const [user, setUser] = useState({})
  return (
    <div>
      <img src={user.avatar} />
      <h1>{user.name}</h1>
      <h2>{user.email}</h1>
      <p>{user.bio}</p>
    </div>
  )
}
```

### Side Effects

- Any operation that modifies the state of the computer or interacts with something outside of your program is said to have a **side effect**
- If you think of the JavaScript runtime (V8), it can manage basic thing like state. It's still an impure function, but it remains in the scope of the runtime and is just more javascript.
- But what happens if we need to do something that leaves the runtime? These are side effects.
- Common _side effects_:

  - Interacting with Browser or Node APIs (like Setting timers or intervals)
  - Modifying the DOM directly (instead of relying on React)
  - Establishing socket connections (eg. `ws` or `Socket.io`)
  - Retrieving data from an API (eg. `axios`, `jQuery`, or the `fetch` API)

- But what about other side effects????

### `useEffect`

- `useEffect` is a Hook we can use to deal with side effects in our components
- The _effect_ hook fires after the browser has _painted_ the DOM
- Multiple _effect_ hooks can be used inside of a single component to group similar operations together

```jsx
const UserCard = (props) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get(`/users/${props.id}`)
      .then((res) => {
        setUser(res.data)
      })
  })

  return (
    <div>
      <img src={user.avatar} />
      <h1>{user.name}</h1>
      <h2>{user.email}</h1>
      <p>{user.bio}</p>
    </div>
  )
}
```

### Dependencies

- The second argument to `useEffect` is a dependency array that lets you specify when you want the hook to run
- The hook will run again anytime the value of a dependency changes
- **NOTE:** It is possible to get stuck in an infinite loop if the _effect_ hook updates a value in the dependency array

```jsx
// will run every time the value of user.firstName changes
useEffect(() => {
  document.title = `${user.firstName}'s Home Page`;
}, [user.firstName]);

// infinite loop because it runs every time count gets updated
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

### Cleanup

- Sometimes side effects need to be cleaned up (eg. socket connections terminated)
- To perform cleanup, return a function from your `useEffect`

```jsx
const [timer, setTimer] = useState(0);

useEffect(() => {
  // set up an interval to increment a timer
  const myInterval = setInterval(() => {
    setTimer((timer) => timer + 1);
  }, 1000);

  // declare a cleanup function
  const cleanup = () => {
    clearInterval(myInterval);
  };

  return cleanup;
}, []);
```

### Rules For Hooks

1. Don't call Hooks inside loops, conditions, or nested functions. **Always use Hooks at the top level of your React functions.**
2. Only call Hooks from React functions.
3. All hooks start with the prefix `use`.

### DEMO Book Lover

`npx create-react-app book-lover`

- Remove React App crap
- Make a Book Card Component

```jsx
import React from "react";

const BookCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.image} alt="Book Cover" />
      <p>{props.description}</p>
    </div>
  );
};

export default BookCard;
```

- make a `useState`

```jsx
function App() {
  const [books, setBooks] = useState([
    {
      title: "Test Book",
      description: "This book is lovely",
      image: "",
    },
  ]);

  return (
    <div>
      <h1>Welcome to Book Lover!</h1>
      {books.map((book, i) => (
        <BookCard
          key={i}
          title={book.title}
          description={book.description}
          image={book.image}
        />
      ))}
    </div>
  );
}
```

- Make a Request
- `npm install axios`
- import axios
- make request `https://www.googleapis.com/books/v1/volumes?q=term`

```js
axios
  .get("https://www.googleapis.com/books/v1/volumes?q=dinosaur")
  .then((res) => setBooks(res.data.items));
```

- add Use Effect

```js
useEffect(() => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=dinosaur")
    .then((res) => setBooks(res.data.items));
}, []);
```

- Clean up data, show API response, talk about storing minimum state

```js
const bookState = res.data.items.map((item) => {
  return {
    title: item.volumeInfo.title,
    description: item.volumeInfo.description,
    image: item.volumeInfo.imageLinks.smallThumbnail,
  };
});
```

- Add search term for live search

```js
  const [searchTerm, setSearchTerm] = useState("");


      <h2>Search:</h2>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
```

- Add Clock

```js
const [time, setTime] = useState(new Date());
```

```js
useEffect(() => {
  setInterval(() => {
    setTime(new Date());
  }, 1000);
}, []);
```

```js
useEffect(() => {
  document.title = `Time: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}, [time]);
```

### What not to do

- Don't use useEffect to synchornize state. Don't store duplicate state!

NO

```jsx
const [amountOfBooks, setAmountOfBooks] = useState(undefined);

useEffect(() => {
  setAmountOfBooks(books.length);
}, [books]);
```

This isn't a side effect, it's part of JS and it's state at that
You can just use regular functions to get derivative state

```js
const amountOfBooks = books.length;
```
