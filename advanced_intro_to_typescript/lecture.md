# Intro to TypeScript

- [ ] What is TypeScript, how does it work, and what problem does it solve?
- [ ] Adding TypeScript to a Project / Tooling
- [ ] Primitives, Unions, Type Inference and Type: Any
- [ ] Arrays and Tuples
- [ ] Functions
- [ ] Objects
- [ ] Type Aliases
- [ ] Narrowing and Type Assertions
- [ ] Tips for Learning Typescript
- [ ] Extra Goodies

## What is TypeScript

- Superset of JavaScript
- Any valid JavaScript is also valid TypeScript
- Implementing a strict(er) type system into JavaScript

## Example

## Workflow

- Write TypeScript
- TypeScript compiler reads code and checks for errors
- Output vanilla JavaScript on success

## Adding TypeScript to a Project / Tooling

- npm install typescript --save-dev
- tsconfig.json - configuration options
- TSCONFIG bases @tsconfig
  - https://github.com/tsconfig/bases

## Primitives

- primitives.ts

## Arrays and Tuples

- arrays.ts

## Functions

- functions.ts

// return :06

## Objects

objects.ts

## Narrowing

- Narrowing is when we use code to eliminate type possibilities
- TypeScript it is smart enough to read control flow and know when type possibilities go away
- https://www.typescriptlang.org/docs/handbook/2/narrowing.html

## Tips for Learning TypeScripting

- It can be a little infuriating at first
- Productivity will drop at first then rise and surpass
- Not recommended for final
- You can convert JS projects to TS incrementally
- There's lots more

## Other Goodies

- React component

```tsx
type MyComponentProps = {
  name: string;
  isActive: boolean;
};

export const MyComponent = (props: MyComponentProps) => {
  const [active, setActive] = useState(props.isActive);
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <>
      <h1>{props.name}</h1>
      <form>
        <input value={value} />
      </form>
    </>
  );
};

<MyComponent name={"Jake"} isActive={false} />;
```
