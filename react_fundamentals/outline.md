# React Fundamentals

## Midterm Debrief and React Context

- Coming out of the midterms you now have some direct experience building a real, full stack end to end application from start to finish. This is super valuable!
- You've been exposed to a lot of the operational challenges of making applications - how to work together, how to organize code, how to scope, how to desogn and architect, how to manage git workflow, how to be efficent
- These skills are obvioulsy very valuable, but they also help us frame the back half of the bootcamp.

- The second half of Bootcamp is going to focus a lot more on this "how", now that you have fundamentals established.
- We'll spend less time talking about how to write JavaScript and more time talking about how to build things. This means we'll necessarily get to tools like libraries and frameworks.
- Today we're starting React - which is a JavaScript library for writing Front-end applications. But before we talk about what it is and how it works, I think it's important to provide a why? Why learn React when we've just demonstrated we can build apps with jQuery and EJS?

## React Problem Statements

- I'm going to list a bunch of application challenges, and I want you to raise your hand if you think this applied to you during your midterm.
  - "I found it difficult to organize my front end code, like knowing when to make new files, new functions, and where to store them in my project."
  - "I found it difficult to manage all the front-end functionality like making an AJAX request and updating the page to show results at the same time."
  - "I found it difficult to know when to use front-end and back-end rendering."
  - "I found it difficult to reuse javascript code across different pages, especially across different templates"
- React is going to help make these challenges easier to overcome so you can focus on building things and not figuring out how to build things.

## What is React

- React is a Front-end library for creating dynamic web pages
- It's considered a library and not a framework - which means that React can theoretically be sprinkled into an existing project, like on a single page or single component.
- In practice though, people generally build entire applications out of React so it can sometimes feel like framework
- React fundamentally uses JavaScript to create html elements and render them for you. - You've done some "React"-y things already, like `createTweetElement` in Tweeter. It takes the style of jQuery and client-rendering to the extreme, and manages application state for you to make it easier.
- React layers in tools/syntax that doesn't run natively in a browser, so to use it we are going to introduce a build phase to our application. This is essentially some software that runs between us the developer and the browser. It compiles or builds your developed code down to plain old html and javascript so that a browser can use it like a regular page
  - One of these new syntaxes is called JSX - which is like HTML on steroids, layering JavaScript into the markup.
  - You've done something similar to this with SASS - you write SASS, then the SASS compiler builds it down to regular CSS which you add to your HTML files. We're going to do that with everything now, HTML, JS, and CSS.

## Create React App and Examining some Initial React

- Getting setup with a new React Project requires a little more work than ebfore, because of the tooling we talked about. There is additional software the comes with a React app that needs configuration.
- One tool to get started quickly is called Create React App, and we'll use that primarily through bootcamp. It's a way to bootstrap a new project, similar to how you leveraged the skeleton for your midterm. It comes with a bunch of boilerplate and the tooling locked and loaded so you can get to work

`npx create-react-app my-react-app`

- Look at project in browser
- Let's examine the project!
  - `public` folder and `src` folder
    - static files vs code you write
  - HTML file in public
    - notice the div/root
  - `src` folder
    - Look at Index.js and show how the root is mounted to the HTML
    - Talk about createRoot and React.render
    - Notice `<App />` and talk about how this is a react component
    - Look at App.js
      - It's a function
      - It has a component name that matches what was rendered in index.js
      - It has a return statement
      - The return statement is JSX
      - Notice how JSX looks like HTML but has some differentce
      - curly brace syntax for javascript
    - Talk about how the App component is rendered by index, which mounts it in to the DOM
    - Show how the App markup shows up in the dev tools
    - Notice how there is a layer between what we code and what the browser renders
    - Notice how CSS is imported
  - Checkout package.json
  - Why is this a node app???
  - Packages - React and React DOM, plus React Scripts
  - Scripts
    - start, build
  - show npm build and compiled code

## Components

- React's key architecgtural distinction is around building your website into components
- Components are a higher order grouping of markup than an HTML element but less than a page
- Learning to think in components is key - let's open up a website and try to think about the possible components

1. Open Powerpoint
2. Screencap a website of their choice
3. Use squares to show components on screen

## Create some React

- Ok let's write some React and see how it works

- Clear out boilerplate
- Write in a new h1

```jsx
<h1>My React App</h1>
```

- Write in a paragraph

```jsx
<p>My paragraph of text</p>
```

- Let's make something a little more complex though. Let's make an article which has its own header and paragraph

```jsx
<article>
  <h2>My article</h2>
  <p>Article text</h2>
</article>
```

- Let's make this a component instead (`Article.js`)
- Cover creating a new component, exporting it, importing it, rendering it
- Show how you can render more than one
- Talk about dynamic data
- Introduce Props by explaining how it is a function and functions can get arguments
- Show render prop syntax and consume prop syntax

```jsx
const Article = (props) => {
  return (
    <article>
      <h2>{props.header}</h2>
      <p>{props.text}</h2>
    </article>
  )
}

<Article header="My Article" text="Here is some paragraph text" />
```

- Render two different Articles to show how you can use the dynamic data differently
-
- Imagine we now have to render this via data. Not difficult to think something like this could come from a server via AJAX, like menu items or map pins or quiz questions

```js
const articles = [
  {
    header: "My Article 1",
    text: "This is the first paragraph",
  },
  {
    header: "My Article 2",
    text: "This is the second paragraph",
  },
  {
    header: "My Article 3",
    text: "This is the third paragraph",
  },
];
```

- React can render arrays of elements, too!
- Loop over data, make an array of Elements, pass in data as props

```jsx
const articleComponents = []

for (const article of articles) {
  articleComponents.push(<Article header={article.header} text={article.text}>)
}

{articleComponents}
```

- Talk about the need for a key

- Next let's look at event handlers
- Show jQuery way $("element").click(() => thing happens)
- JSX onEVENT attribute
- onClick console.log

```jsx
const clickHandler = () => {
  console.log("I hath been clicked");
};
<button onClick={clickHandler}>Click me!</button>;
```

- Show how the `on` syntax works for all kinds of events

```jsx
<form onSubmit={submitHandler} />
```

- Ok let's talk state
- State is one of the more fundamental and challenging aspects of React, but it is incredible powerful
- Let's imagine a counter which the user can increase by clicking out button

```jsx
let count = 0

const clickHandler = () => {
  count++
  console.log(count)
};

<p>{count}</p>
<button onClick={clickHandler}>Increase count</button>;
```

- Why doesn't this work?
- introduce concept of rendering and when React does it
- Show how clicking the button runs the callback but not the component function
- Working with react is learning how to control when components "rerender" with new data
- React will generally re-render components if their props change, or the data changes going in to it
- But it also has a powerful feature of state management to explicitly track data that can be changed and should trigger re-renders
- We access this via a hook

`useState()`

- Hooks "hook" in to react components with data that is tracked outside of the function call
- React manages this data's scope so you don't have to
- You bring it in to the component via the hook, and the hook provides you two features:
  - Getter
  - Setter
  - `const stateArr = useState()`
- State is specially treated by React
- Any time state changes, React rerenders any component that consumes its data automatically
- Show destructuring syntax

```jsx
const [count, setCount] = useState(0)

const clickHandler = () => {
  setCount(count + 1)
  console.log(count)
};

<p>{count}</p>
<button onClick={clickHandler}>Increase count</button>;
```

- Show how console log is behind
- setState is async

- Controlled Components
- One gotcha with state is form inputs
- html form elements like input or select have their own built in state management system
- this is managed by the browser and can cause problems because if you want to programatically work with that state in javascript/react, you can have conflicts
- React solves this with a feature called controlled components, and this is where React "takes over" the state management of a form

```jsx
const Form = () => {
  return (
    <div>
      <label>Name</label>
      <input />
    </div>
  );
};
```

- add useState

```jsx
const [name, setName] = useState("Jake");
```

- override value with `value={name}`

- Show how you can not update the field

- override change handler `onChange={changeHandler}`

```jsx
const changeHandler = (event) => {
  console.log("change handler fired");
};
```

- show how it fires on keystrokes

- add `setName`
- show how events are passed on to event handlers
- event.target.value

- Show how your keystrokes re-render the whole thing with a console.log("I've been rendered")
