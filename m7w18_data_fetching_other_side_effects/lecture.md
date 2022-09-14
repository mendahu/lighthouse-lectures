# W07D04 - Data Fetching & Other Side Effects

### To Do

- [ ] Rules for Hooks
- [ ] Pure Functions and Side Effects
- [ ] `useEffect`
- [ ] Dependencies
- [ ] Cleanup

### Rules for Hooks

1. Hooks have to be used at the root level of your React component

- No ifs, no loops, no nested functions

2. Only call them in a REACT component!! Don't put hooks in helper functions, or other imported places.
3. All hooks start with `use`

### Pure Functions

- doesn't mutate a array/object outside of itself?
- function with single purpose?

- Has no side effects - it only interacts with data/variables that are declared inside of the function.
  - declare `const` inside
  - function parameters
- A pure function always returns the same result, no matter how many times you run it, as long as the parameters you give it are the same

```js
const joinName = (firstName, lastName) => {
  return firstName + lastName;
};
```

```js
const firstName = "Jake";

const joinName = (lastName) => {
  return firstName + lastName;
};
```

```jsx
const defaultAvatar = "/public/avatar.jpg";

const UserCard = (props) => {
  const [user, setUser] = useState({});

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

### Side Effects

- Interacting with any Browser or Node APIs.
  - `document.title`
  - Modifying the DOM directly (`document.getElementByID()`)
- Websockets/socket connection
- Retrieving data from an external source (`axios`, `jQuery`, `fetch` API)

### `useEffect`

- `useEffect` is a Hook to deal with side effects to our components
- the "effect" _fires_/_executes_ after the Browser renders the component
- Multiple effect hooks can be used inside a component to group operations together, or do separate effects

```jsx
const defaultAvatar = "/public/avatar.jpg";

const UserCard = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`/user/${props.id}`).then((res) => {
      setUser(res.data);
    });
  });
  // arg1 - callback
  // arg2 - dependency array / (optional)

  return (
    <div>
      <img src={user.avatar} />
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <p>{user.bio}</p>
    </div>
  );
};
```

### Dependency Array

- Track all the variables which, if changed, trigger the effect again
- EMPTY ARRAY -> React reads this as Fire Once on initial REnder Only
- NO 2nd ARG - Call the effect on every render WARNING: Infinite Loop is POSSIBLE HERE!!!!111

### Cleanup

- Sometimes side effects need to be cleaned up (eg. socket connection might need to be terminated or Timeout needs to be cleared)

```jsx
const [counter, setCounter] = useState(0);

useEffect(() => {
  const myInterval = setInterval(() => {
    setCounter((counter) => counter + 1);
  }, 1000);

  const cleanup = () => {
    clearInterval(myInterval);
  };

  return cleanup;
}, []);
```

BACK AT 9:05 EDT
