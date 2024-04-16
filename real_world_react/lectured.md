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

:00

## useContext

```js
const config = {
  baseUrl: process.env.BASE_URL || "localhost:3000",
};

config.baseUrl;

const ConfigContext = createContext(3);

const config = useContext(ContextConfig);
```
