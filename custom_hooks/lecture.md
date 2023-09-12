# Custom Hooks

## Outline

- What is a Custom Hook?
- Rules for Hooks visited
- Demo Custom Hooks

## What is a custom hook

- operate the same as built-in hooks or regular hooks (useState, useReducer) except they have their own functionality, written by you!
- A way to abstract custom fucntionality/logic from our components to other places - helper functions but for hooks
- Custom Hooks always call other hooks

## Rules for Hooks

- hooks are functions
- hook always start with `use` (useState, useReducer, custom one like useFetch, useBlogPosts)
- All hooks must be called at the root scsope of a component
  - no calling hooks inside if statements, or nested functions, or try/catch, or anything with its own {} scope
- Hooks may take in arguments
  - useState(false) - uses an argument
  - useToggle() - no argument
- Hooks may return values
  - `const [state, setState] = useState(false)`
  - useEffect() - no return value

return at :02 past the hour
