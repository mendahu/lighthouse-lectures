# React Fundamentals

- [ ] Midterm Debrief and Problem Context
- [ ] What is React?
- [ ] Create React App, tooling, and what React looks like
- [ ] Thinking in Components
- [ ] Writing Components
- [ ] Props
- [ ] Arrays of Components
- [ ] Event Handlers
- [ ] State
- [ ] Controlled Components

# What is React

- React is a Front-end Library for making dynamic websites
- Library vs Framework
- React is technically a library
- In practice, React is used more like a Framework then a lot of libraries
- React users JS to create html elements and render them for you
- React is tooling (much like SASS), and that means it doesn't run natively in the browser
- All React has to pass through a build tool to produce the final result, which is html, js, and sometimes css files.
- React has some special syntax, most notable of which is JSX (JavaScript XML) which is like html with JavaScript sprinkled in

# Create-React-App

- One of the oldest, most well-known bootstrappers in React is `create-react-app`
- Separate piece of software
- that helps you spin up a React project from scratch
- other alternatives might include Next.JS

RETURN AT! :10 minutes after the hour!

## Props

- Props are like functional arguments/parameters
- Define props when you make the component
- Pass in props like arguments when you render the component
- `props` is always an object `{}`
- Each prop you pass in will be a property on that object

## Event Handler

```js
$("div").click(() => {
  // do stuff here
});
```

## State

- Application state is live current state of the app for one user
- state can be different for different users
- State has to survive component render calls
- React solves the state problem with hooks
- A hook is a special kind of function which has access to a higher level scope than any one function/component
