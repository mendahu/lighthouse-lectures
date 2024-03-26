# Custom Hooks

## Outline

- What is a Custom Hook?
  - Role in React architecture
- Rules for Hooks Revisited
- Demo Custom Hooks

## What is a custom hook

- Custom hooks are a means to abstract logic away from a component
- a custom hook is a hook that calls other hooks
- they are kind of like a helper function, but they hook into the magic react land

## Roles

- reuse hook logic
- code organization benefit
- seapration of concerns

## Rules for Hooks (including custom ones!)

- Built in hooks include `useState`, `useReducer`, `useEffect`, `useRef`, `useCallback`, `useMemo`
- Custom hooks are called whatever we want
- custom hooks `MUST` begin with `use`
- all hooks must be called at the root of a functional component
- custom hooks by definition call other hooks
- optionally - they may take arguments and they may return values
- other than this - they are functions

:02 return!!
