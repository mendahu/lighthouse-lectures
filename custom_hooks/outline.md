# Custom Hooks Learning Objectives

- Abstracting logic away from presentation
- Using a hook inside a hook
- Reusing hooks in multiple components

## Blog Site

- Main Articles Data fetch plus loading/error
- Quick Hits Data fetch plus loading/error
- Likes/Favourites

## What is a Custom hook?

- Custom hooks are what they sound like - they operate the same as hooks like `useState` or `useReducer` except they are written by you and provide a custom functionality
- Custom Hooks are a way for us to abstract and separate logic in our components that depend on other hooks to function. They're like helper functions but for hooks!
- Custom hooks are functions which call other hooks. Otherwise it _is_ just a helper function.

## Rules for Customer Hooks

- must always start with a `use` in the name
- Must be called at the root level of a component unconditionally
- Should call other hooks inside it
- May take in arguments
- May return values

## Demo

- `npx create-react-app space-content`
- Copy over components, including app.js, from repo
- Copy over jake.jpg
- Showcase components

## Data Fetching

- set up proxy (https://localhost:8080)

- build this inside of `App.js`

```jsx
const [posts, setPosts] = useState([]);

useEffect(() => {
  axios.get("/posts").then((res) => {
    setPosts(res.data);
  });
}, []);
```

- add loading and error functionality

```jsx
const [posts, setPosts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  setIsLoading(true);
  axios
    .get("/posts?error=true")
    .then((res) => {
      setPosts(res.data);
      setIsLoading(false);
    })
    .catch((err) => {
      setError(err.response.data.error);
      setIsLoading(false);
    });
}, []);

{
  isLoading && <Loading />;
}
{
  error && <p>{error}</p>;
}
```

- Make hook
- talk about abstracting, reusing, restricting access

```js
const useFetch = (url, initialValue) => {
  const [state, setState] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setState(initialValue);
    setIsLoading(true);
    setError(null);
    axios
      .get(url)
      .then((res) => {
        setState(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.error);
        setIsLoading(false);
      });
  }, [url]);

  return [state, isLoading, error];
};
```

- repeat for hits

## Likes

```jsx
const [liked, setLiked] = useState(false);

const toggleLike = () => {
  setLiked(!liked);
};
```

```jsx
const useToggle = () => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState(!state);
  };

  return [state, toggleState];
};
```

- add to hits as well
