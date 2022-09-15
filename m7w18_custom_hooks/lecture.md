# Custom Hooks

## Outline

- What is a Custom Hook?
- Rules for Hooks Revisited
- Demo Custom Hooks

### What is a custom hook

- custom function to alter or hook in to current state of components
- A custom hook is a hook, that calls other hooks

### Rules for hooks revisited

- You have to call hooks at the root of a component function
  - not in if statements
  - not in loops
  - not in other functions
- `use` is required for a custom hook

```js

const helper = () => {
  // NO HOOKS HERE
}

const Button = () => {

  // RIGHT HERE
  //
  //
  //
  //
  //
  //
  //
  //
  //


  if () {
    // NO HOOKS HERE
  }

  return (
    <button>
    Hello
    </button>
  )
}
```
