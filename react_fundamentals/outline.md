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
