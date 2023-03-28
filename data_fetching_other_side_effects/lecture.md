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

## Pure Functions

- What is a pure function?
- Pure functions do not access any data/variables/information outside of its own scope
  - The only data that is operates on, comes in through the parameters

```js
const joinName = (firstName, lastName) => {
  return firstName + " " + lastName;
};
```

- Pure functions always return the same result if the same parameters are passed in

- not pure:

```js
const firstName = "Jake";

const joinName = (lastName) => {
  return firstName + " " + lastName;
};
```

- React Components - we build functional components
- React components are functions
- they can be pure or impure!!!

```jsx
const UserCard = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
  );
};
```

```jsx
const defaultAvatar = "/public/avatar.png";

const UserCard = (props) => {
  return (
    <div>
      <img src={props.image || defaultAvatar} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
  );
};
```

### Side Effects in React

- In any functional programming, you have to think carefully about side effects.
- Especially true in React
- the first _real_ foray into side effects with React is....
  - STATE!!!
  - `useState` hook
- useState is "simple" because React manages it for you!
- it lives in JavaScript land

```jsx
const UserCard = () => {
  const [user, setUser] = useState({});

  return (
    <div>
      <img src={user.image} alt={user.name} />
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
};
```

- Any time we are talking about stuff that lives outside the JavaScript Runtime Environment (JRE), that is a Side Effect

- Common Side Effects:
  - Accessing an API - web server API - Twilio, Google, or whatever
    - Network Request `fetch` / `axios` / `node http`
    - Socket connections - WebSockets / Socket.Io
  - Cookies!! Part of the great idea of Browser APIs
    - `document` / `window`
    - Modifying the DOM directly - document.getElementBuyId
  - NODE ONLY - `fs` file system

### useEffect enters the game!!!!!

- `useEffect` is another hook!! You know that because - it's start with `use` (just like `useState`)
- `useEffect` (short for `useSideEffect`) is for handling side effects and keeping React in sync with them!!
- `useEffect` takes a callback, which executes after the browser has built/painted the DOM
- You can use multiple useEffects in the same components as needed!

```jsx
import { useState, useEffect } from 'react'
import axios from 'axios'

const UserCard = (props) => {

  const [ user, setUser ] = useState({})

  // useEffect(callback, dependencyArray)

  const toUpperCase = (name) => {
    returns name.toUpperCase()
  }

  useEffect(() => {
    axios.get(`/users/${props.userId}`).then((res) => {
      setUser({...res.data, name: toUpperCase(res.data.name)})
    })
  }, [toUpperCase])

  return (
    <div>
      <img src={user.image} alt={user.name}/>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  )
}
```

### Rules for Hooks

1. Don't call hooks inside loops, conditions, or nested functions
2. hook functions always start with `use`
3. Only call them inside React components

### Dependency Array

- Second argument, array of dependencies
- useEffect fires anytime those dependencies change
- You can get stuck in infinite loops!!!! careful!

```jsx
const UserCard = (props) => {

  const [ user, setUser ] = useState({})

  // useEffect(callback, dependencyArray)

  const toUpperCase = (name) => {
    returns name.toUpperCase()
  }

  useEffect(() => {
    axios.get(`/users/${props.userId}`).then((res) => {
      setUser({...res.data, name: toUpperCase(res.data.name)})
    })
  }, [toUpperCase])

  useEffect(() => {
  document.title = `${user.firstName} ${user.lastName}`
}, [user])

  return (
    <div>
      <img src={user.image} alt={user.name}/>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  )
}


```
