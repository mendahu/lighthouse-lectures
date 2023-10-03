# Real World React (Advanced React Techniques)

- [] What is React Router?
- [] Implementing basic route for profile page
- [] Implementing basic route for pet page
- [] Implementing Layout
- [] What is React Context and the useContext hook?
- [] Lifting pet state to context
- [] Lifting user state to context
- [] React Context Pitfalls

# React Router

- Earlier we built a server-render app called TinyApp
- Was built around pages
- Each navigation, delivered a new HTML file (from an EJS template)
- lots of advantages to this setup
  - your URL matches what is on your page
  - you can enter the site from any of those places
  - Your history stack reflects your browsing history
  - Query params are useful /urls/i?showWhatever=true
- With React we're doing it very differently - its a SPA (Single Page Application)
- adavntages to this:
  - dynamic UIS
  - easy state management
  - faster load times
- but we lose all those browser benefits
- The browser tools (location, your history) is available through Browser APIs
- Doing this by hand is possible - its a lot of work
- Tools have emerged to help - React Router is probably the most popular

## Demo App - Pet Profile

- Three pages in here (profile "/", pet profile "/pets/:id", signin "/signin")

- come back at :51

# React Context

- a way to access shared values in one place across all the app without prop drilling!
- built in to react
- With context, you set a place in your tree where it lives, and then everything downstream has access

## Static Content Context

```js
const config = {
  baseUrl: process.env.BASE_URL || "localhost:3000",
};

const ConfigContext = createContext({})

<ConfigContext.Provider value={config}>
  <MyApp />
</ConfigContext.Provider>
```

## Context Implications

- Context is like a prop - it changes, and everything below it rerenders
- Stick to low-update-frequency state if you want to use widespread context
- IF you do have state that changes a lot, and you need it in many places,
  1. Put it back at the component level
  2. Use a more advanced state management tool (Redux, and many others)
