# Custom Hooks Learning Objectives

- Abstracting logic away from presentation
- Using a hook inside a hook
- Reusing hooks in multiple components
-

## Blog Site

- Main Articles
- Quick Hits
- Visited Count

## Hooks

- useLocalStorage (to store visit count)
  - has useState
- useFetch (to get data)
  - Has useEffect, states, axios call
- useLike (to toggle likes, reused in both main articles and quick hits)
  - Restricts functionality
- useLikePost
  - uses useLike, has data persistence
- useLikeHit
  - uses useLike, has data persistence

## Demo

- `npx create-react-app space-content`
- Copy over components, including app.js, from repo
- Copy over jake.jpg
- Showcase components

## Visitor Count

- Implement in Header using Local Storage

```js
localStorage.setItem("visitCount", 1);
localStorage.getItem("visitCount");
```

```js
const [count, setCount] = useState(localStorage.getItem("visitCount") || 0);

useEffect(() => {
  localStorage.setItem("visitCount", count);
}, [count]);

useEffect(() => {
  setCount(Number(count) + 1);
}, []);
```

- all accomplished without custom hooks
- but we could abstract some of this away for reusability purposes and cleanliness
- what we've actually done here is create a simple synchronizer between state and localstorage. That sounds super useful in other places.
- let's refactor

```js
const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(localStorage.getItem(key) || initialValue);

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};
```

## Data Fetching

- set up proxy (https://localhost:8080)

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

## UsePersistentToggle

```jsx
const usePersistentToggle = (key, initialValue) => {
  const [state, setState] = useLocalStorage(key, initialValue);

  const toggleState = () => {
    setState(state === "true" ? "false" : "true");
  };

  return [Boolean(state === "true"), toggleState];
};
```

can do hooks inside hooks!

- do for hits too
