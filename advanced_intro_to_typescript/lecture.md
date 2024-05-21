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

# What is TypeScript

- TypeScript is a superset of JavaScript
- Why have it? - Demo
- TypeScript layers in a strict(er) type checking layer to JavaScript
- With TypeScript, you have a new workflow
  - You author TypeScript files
  - Typescript Compiler will validate and then transform into regular JavaScript
  - Deploy the regular JavaScript (browser or Node or whatever)

## Narrowing

- strict equality (user === undefined) / null / false / true
- typeof (`if (typeof user === 'string') {}`) // number / bigint
- `Array.isArray([])` // array
- For objects/function, you can use special functions called Type Guards to validate type

// :33

## Tooling

- Use Scripts

## Tips for Learning

- feel very unproductive at first
- stick with it and be patient
- I do not recommend it for your final project
- You can convert existing JS projects to TS incrementally
- docs : https://www.typescriptlang.org/docs

## React

```tsx
type MyComponentProps = {
  name: string;
  isActive: boolean;
};

export const MyComponent = (props: MyComponentProps) => {
  const [active, setActive] = useState(props.isActive); // inferred state type
  const [count, setCount] = useState<number | null>(null);

  return <h1>{props.city}</h1>;
};

<MyComponent city={} />;
```

## Express

```ts
import { Request } from "express";

app.get("/users", (req: Request, res: Response) => {});
```
