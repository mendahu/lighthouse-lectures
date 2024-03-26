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

## Rules for Custom Hooks

- must always start with a `use` in the name
- Must be called at the root level of a component unconditionally
- Should call other hooks inside it
- May take in arguments
- May return values

## Demo

- Walk through App.js of Space Content, load in browser, describe requirements

### Requirements

1. Fetch data on button click for both Posts and Hits
2. Show loading states
3. Show Error States
4. Allow Liking of Hits and Favouriting of Posts
5. Use Optimistic Updates for Liking and Favouriting

## Data Fetching

- set up proxy (https://localhost:8080) and explain why its necessary
- talk about two terminal windows and this kind of architecture

- build this inside of `App.js`

```jsx
const [posts, setPosts] = useState([]);

const fetchPosts = () => {
  axios.get("/posts").then((res) => {
    setPosts(res.data);
  });
};

<button onClick={() => fetchPosts()} />;
```

- Map over posts

```jsx
{
  posts.map((p) => <Post />);
}
```

- let's level up our MVP a bit here and use REact to make something more complex and interesting
- add loading and error functionality

```jsx
const [posts, setPosts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const fetchPosts = () => {
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
};

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

  const fetchPosts = () => {
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
  };

  return [state, isLoading, error, fetchPosts];
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

## Bonus - optimistic updating likes with server call

- let's persist the likes and build in an optimistic update

1. Add server call to toggle
   urls are `/posts/favourites/:id` and `/hits/likes/:id`

```jsx
const useToggle = (url) => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    axios.post(url).then(() => {
      setState(!state);
    });
  };

  return [state, toggleState];
};
```

- this is slow, so let's do an optimistic update.
- we're going to change the state immediately, we'll make the assumption it works
- then we'll make the api call
- if it fails (and only if), we'll set the state back to what it was before
- test with `?error=true` on url

```jsx
const useToggle = (url) => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState((prev) => !prev);
    axios.post(url).catch(() => {
      setState((prev) => !prev);
    });
  };

  return [state, toggleState];
};
```

- Refactor - could we have a useToggle with an optimistic param to do either one?

```jsx
const useToggle = (url, options) => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    const request = axios.post(url);

    if (options.optimistic) {
      setState((prev) => !prev);
      request.catch(() => {
        setState((prev) => !prev);
      });
    } else {
      request.then(() => {
        setState((prev) => !prev);
      });
    }
  };

  return [state, toggleState];
};
```
