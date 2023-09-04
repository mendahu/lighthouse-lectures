# State Management and Immutable Update Patterns

## Refresh on State Management

- State is data which represents the current state of the program as it exists in memory at any given time
- Programs all have dynamic data - state is what the current values of those dynamic pieces are. A static site would not have state.
- Managing state is a big part of creating applications, and it's a big part of React because of that. The entire render logic of React is conneted to state and changes to state.

## UI State vs DB Cache

- In a front-end application, you can sometimes think of state into two distinct categories.
- UI State are values which represent what parts of the dynamic UI are showing. Is a button disabled or not, is a modal open or not? What is the current date showed at the top of the page? What are the current values in a form?
  - UI State is often pretty simple and straightforward, and often lives at the component level (is co-located with the component it affects)
  - UI State can be and is often different for each user using the app at one time. If I type something into a form on my device, you don't see that value on yours.
- DB Cache is another more complex type of state. These values are often local copies of data which is saved and persisted on a central database. It is a cache which allows the front-end to display data without having to read it from the db every time.
  - Because DB Caching usually represents rows in a db, it's often more complex in structure. Think objects, arrays of objects vs primitives (this isn't a rule though)
  - There is additional complexity to keeping the cache up to date with the actual DB when values change. For example, if a user submits a form and those data go into the db, we also need to modify the local state to reflect those changes. They must be kept in sync.
  - DB Cache can live at the component level, but it often ends up being hoisted higher to page or application level, just by nature of its own characteristics. For example, a cache state representing the logged in user's information might be something you need on various pages across the app.
- We're going to talk about managing complex state using a simulated DB cache and UI state together

## Complex State Management Solutions

- As an aside, you should know that this is such a complex and common problem that there exists tooling solutions you can add on to React.
- A common library used is called Redux.
  - https://redux.js.org
  - Redux takes a strategy of centralizing all of your state and creating a whole bunch of special functionality around accessing it and changing it.
  - Another one is called Xstate, which is focused around state machines which are like complex UI patterns.
- What we're going to learn today is how to do it by hand so you can understand some of the core principles behind the process

## Complex State Example - Felipa the Frog Revisited

- Let's explore our demo app today
- Felipa the Frog makes a comeback! And the site has gotten an update.
- We're going to help build out a profile page that the user can edit! Let's let Felipa make some changes to her profile.

### Our Requirements

- One-click login/logout. Only show profile while logged in.
- Update Name
- Update Description
- Add Tags
- Remove Tags
- BONUS - Loading State for App
- BONUS - Loading State for Buttons

### Walkthrough

- Show App.jsx with default state
- Walk through default state properties and see what they mean
- Note how it is User State specifically
- Show how data is proliferated via props to two components downstream
- Show how loading state and loggedIn state conditionally renders
- Show Navbar.jsx and how logged in state conditionally renders
- Show Profile.jsx and how Button and Tag are components themselves

## Logging in and Logging out

- This is maybe the easiest to change from a state perspective
- We just need to change the loggedIn flag

```js
// to show immutability problem
const login = () => {
  user.loggedIn = true;
};

const logout = () => {
  user.loggedIn = false;
};

// Pass functions to onLogin and onLogout in Navbar

// add setUser(user) afterwards and show that it still doesn't work
```

- We can see that neither directly mutating state, nor using the state setter works here. Why?
- It all comes down to immutability and its relationship with React

## Immutability

- Recall way back to our first technical lecture, week 2, Objects in JS
- We talked about how Objects in Javascript are passed by reference.
- React is just Javascript, so all the same rules apply here.
  - When we alter a property on an object, its original reference doesn't change.
  - Similarly, when we tell react to replace the existing state with a reference to the state object, its reference is the same.
- React depends on references _changing_ in order to trigger rerenders. It's too complex and error-prone for it to try and check that all properties are the same. They leave that to the developer!
- Instead our strategy for updating state must be to create new references to new objects/arrays any time we change a value. This tells React state has changed, and it will re-render any appropriate components.
- So how the heck to we change object references?

### Tactics for changing references to objects

1. Manually recreate objects property by property

- not fun

2. Use spread operator

- pretty straightforward, nice syntax
- shallow copy only

3. Object.assign

- pretty straightforward, ok syntax
- shallow copy only, requries a new target object

## Login/Logout Fixes

- Ok let's fix our values now

```js
const login = () => {
  const newUser = { ...user };
  newUser.loggedIn = true;
  setUser(newUser);
};

const logout = () => {
  const newUser = Object.assign({}, user, { loggedIn: false });
  setUser(newUser);
};
```

## Update Name and Description

- Let's do a bit more of a complex one now, incorporating a form handler into the mix with the name and description.
- These are still just primitive values so we can use the same strategy as the login/logout, but we need to connect it to the form and handle the nested component structure
- First let's make a function to update the state

```jsx
const updateName = (name) => {
  const newUser = { ...user };
  newUser.name = name;
  setUser(newUser);
};
```

- then, let's pass it to the profile component as a prop
- Inside Profile, we'll need to create a submit handler for the form around the name
- And we'll call the function from inside it

```js
const handleUpdateName = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  props.updateName(formData.get("name"));
};
```

- We can mimic this exactly the same for description

## Add Tags

- The Tags are a bit more complex because this is an array of data nested in an object, which is state.
- Both Object.assign and spread operators do shallow copying - which means the top level properties of the object are refresh (the parent object is new) but nested objects/arrays are still references.
- We also have the challenge of having two different operations - add and remove, unlike our last operations which just replaced the existing value with a new one.
- Lastly - we will need to generate random IDs for the tags to simulate a database insert, and create an object structure around a text string.

- Let's begin by creating two functions to add and remove:

```js
const addTag = (tag) => {
  const newTags = [...user.tags];
  const newId = generateRandomHexCode();
  newTags.push({
    id: newId,
    label: tag,
  });
  setUser({ ...user, tags: newTags });
};

const removeTag = (id) => {
  const newTags = [...user.tags];
  const tagIndex = newTags.findIndex((tag) => tag.id === id);
  if (tagIndex >= 0) {
    newTags.splice(tagIndex, 1);
  }
  setUser({ ...user, tags: newTags });
};
```

- Then we can pass it to Profile
- Connect remove tag to the Tag onClose props
- Connect add tag to the form
- Make a form handler

```js
const handleAddTag = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  props.addTag(formData.get("tag"));
};
```

## useReducer

- by now we have 6 functions in our App.jsx to update our complex state.
- You might be asking yourself how we deal with this kind of clutter.
- Next week we'll talk a little about Custom hooks, which are one way to abstract clutter away, but today I'm more interested in trying to get a better hold on the actual manipulation of this data.
- The state manipulation logic in these six functions has some commonalities, but it's also a little brittle. All the functions are sort of disparate and unconnected. IT would be nice to reinforce the overall structure of state and formalize the data that can come in and out of it.
- Reducers help with this and is a new pattern for us to enjoy for complex state management.
- Let's convert this to a reducer!

<!-- Comment out existing logic for posterity -->

- create a reducer function `userReducer`
- reducers always take in state, plus an action object which describes the change being made and carries with it any payload necessary to make a change

```js
const userReducer = (state, action) => {};
```

- The `action` parameter has two properties:
  - type: a string describing the action taking place, like `ADD_TAG`
  - payload: any necessary data needed to make the change to state (like `friendly` for a new tag)
- The reducer's job is to take the original state, take the action, and return a new value of state which can be passed into useState, which is still active under the hood.

- A normal pattern is to use a switch to handle the different actions. Let's refactor our login and logout functions into the reducer

```js
const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const user = { ...state };
      user.loggedIn = true;
      return user
    },
    case 'LOGOUT': {
      const user = { ...state };
      user.loggedIn = false;
      return user
    },
    default: {
      return state;
    }
  }
}
```

- Note: it's good to have a default fall through case that keeps state the same in case an incorrect action is passed in

- Then we can swap out our state in the App.jsx file

```jsx
const [user, dispatch] = useReducer(userReducer, defaultState);
```

You'll see there is a different function returned as the second argument. This isn't setState anymore, is a dispatcher function. Here's how you use it:

```js
dispatch({
  type: "LOGIN",
  // payload: undefined
});
```

Calling this function would trigger a state change as per the rules of the reducer using the LOGIN switch case.

- A note on types: Strings can be unreliable as data types, since developers can typo them easily enough, and it wouldn't produce a great error message. For this reason, often we will set our types as an object with the values necessary, the reference that.
- Let's convert it

```js
export const actions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN: { // reference the object
      const user = { ...state };
      user.loggedIn = true;
      return user
    },
    case actions.LOGOUT: { // reference the object
      const user = { ...state };
      user.loggedIn = false;
      return user
    },
    default: {
      return state;
    }
  }
}

dispatch({
  type: actions.LOGIN, // reference the object
  // payload: undefined
});
```

- Now we can pass the dispatch function down to the components instead of the wrapper we made.
- Al the logic lives in the reducer instead

- Convert the reset of the functions into the reducer
- Use the payload

## Bonus time

- If there is time, let's add a loading state to the login/logout feature

- First let's make actions for toggling loading state
- We can have one action for on and off and use the boolean for the payload

```js
    case actions.SET_LOADING: { // reference the object
      const user = { ...state };
      user.loading = action.payload;
      return user
    },
```

- To simulate loading, I am going to use a fake API calling function. This is a simple promise that autoresolves for us after a certain time.

- update the form handlers to dispatch a loading event, call the API, wait for the response, then trigger the state change and set the loading event back

## Double Bonus Time

- Do the same exercise but with separate loading state in the Profile component to handle the individual loading states of each button. This can be separate from the reducer to show how they can all work together.
