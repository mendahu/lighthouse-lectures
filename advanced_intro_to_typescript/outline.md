# Intro to TypeScript

- Today we're going to do an introduction to TypeScript, which has largely become the defacto way to write JavaScript these days.
- TypeScript is what is called a Superset of JavaScript, which means that as a language it implements everything JavaScript does _plus_ more. All valid JavaScript is valid TypeScript.
- To illustrate the why of Typescript, we're going to look at some example code.

## Get User Full Name Example

- Here was have a basic example of a function that operates on some data
- The data is an array of users, maybe coming from a database or something
- Each user has a first_name, a last_name, an email and a dob
- The function finds the user by email and then returns a concatenated string of their full name

- There are two test cases in the file to prove it works, everything looks awesome!

- There are, however, two bugs in here. Can anyone spot them!?
- Try adding these test cases

```js
// User has null last name
console.assert(
  getUserFullNameByEmail("aliquet.libero@outlook.ca") === "Bradley"
);

// user does not exist
console.assert(getUserFullNameByEmail("me@jakerobins.com") === "Jake Robins");
```

- These are two different errors of different severity. The first one is just going to return something weird to the user (`Bradley null`), the second one actually throws and error, meaning the code stops and crashes. That's bad!
- In JavaScript we don't have a ton of tooling to help with this. We can make these mistakes, then fix them. We can try to be perfect at first but that's a flawed strategy.
- Ultimately, this is a demonstration of the pitfalls of JavaScript's design. The expressive, flexibility of JavaScript has come at a cost of unreliability.

## Enter TypeScript

- TypeScript is designed to address these concerns by layering in strict(er) type checking to JavaScript.
- Many programming languages have this as a first-class feature, like the C based languages or Rust or Go
- TypeScript accomplishes this by being a SuperSet of JavaScript
- The workflow becomes:
  1. Developer writes Typescript
  2. Typescript compiler transforms to regular JavaScript
  3. Final code is shipped to Node or Browser as needed
- Let's see how this looks in practice by converting this to TypeScript.

# Adding TypeScript to a Project and using the Tooling

Typescript is an npm package you install in to your project. I recommend it as a dev dependency, since we only use it during development and never in production.

`npm install typescript --save-dev`

TypeScript requires a little bit of configuration. All the settings for Typescript are stored in a json file called `tsconfig.json` in the root of your project. We'll make that file now!

`touch tsconfig.json`

- Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

There are a lot of config options, so as a start, what I will recommend is to borrow some configuration templates to get us started.

`npm install @tsconfig/recommended --save-dev`

- Docs: https://github.com/tsconfig/bases/
- We'll also add a special compiler option to help us read json files, which we'll talk about in a sec

```json
{
  "extends": "@tsconfig/recommended",
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
```

Lastly, let's convert our file to a .ts file.

`why-typescript.ts`

## Exploring our new file

- We see now that our file has some red squigglies. This is TypeScript already at work helping us out. This is called Static Type checking, and happens _as you develop_, which is a really fast feedback loop in your code. We know right away we have bugs if there are squigglies!
- We can also see these problems if we try to compile our code. Here's how we do that"
- `tsc why-typescript.ts`
- The terminal will tell us when compiling that there was an issue.

## Adding module type packages

- `Require` missing - With Typescript, the third party tools we need to use also need to be typed correctly. Lots of packages publish their Typescript docs along with the code so you're good to go. Sometimes, you need to add it as a separate package, and Node is one of those. `npm i --save-dev @types/node`

# Primitives, Unions and Inference

- Let's talk first about Primitives. `touch primitives.ts`
- The basic way to tell TypeScript the type of data you are using is to give it a type, like this: `const firstName: string = "Jake"`
- Now the compiler knows that your intention for this variable is that it is a string.
- Even if we use `let` to declare it, we can no longer set it to a not-string
- TypeScript uses this information throughout the code. It will follow this variable and be sure that anything that acts on it is acting on it like a string. This means if you try to do a non-string thing to it like call a `.map()` on it or something, TypeScript will warn you.
- Available primitives are `string`, `number`, `boolean`, `null`, `undefined`, `Symbol` and `BigInt` - just like JavaScript.

- TypeScript can also infer types based on the variable values. This is really handy for saving time, and generally if you can infer something you should. `const age = 38`
- You can also create type unions where you expect a variable to be one or the other. For example, you can have `const age: number | null = 38`
- Lastly, I want to tell you about a special Typescript type called `any`. Any literally means "this could be anything". In practice, you shouldn't be actively using `any` because it means you can't use any of the type protections offered by the package. A bad practice is to use type Any when you don't know how to make TypeScript happy.
- Lets use some of our primitive knowledge to fix our first mistake in the code:

1. Set the email param in the function to a string

# Arrays and Tuples

- `touch arrays.ts`
- Let's start defining some more complex types, starting with Arrays
- There are two syntaxes to learn
  - `const myArr: stirng[] = []`
  - `const myArr: Array<string> = []`
  - Can be inferred: `const myArr = ["Jake"]`
- The Array typing can be especially useful for method checks, but also for pushing stuff in to it. TypeScript will warn you if you push something that doesn't match into it
  - Can create unions of types `Array<string | number>` or `(string | number)[]`
- There also exists a special type of Array in TypeScript called a Tuple
- Tuples are designed for when the Array is a fixed length and each item has its own specific identity
- A great example is React's `useState` return value. It's always an array with two items, and the first one is a value and the second one is a function.
- `const myTuple: [string, number, number] = ["Jake", 3, 3]`

# Functions

- Functions can have their own definitions which are built around the inputs and outputs.
- Easiest thing is to define the inputs and outputs inline, like this:
- `const myFunc = (param: string): number | null => { //do stuff }`
- This is a place where inferring is not that useful. It can't infer params unless you have fallbacks, and if your function code is bugged the return type might be inferred incorrectly
- So I generally recommend always defining these types. Let's fix our app with that!
- Definite a return type for the email
- You can also define a function in one definition, which is useful for things like callbacks
  `let myFunc: (param: string) => string`

# Objects

- Objects along with Functions are our most complex objects. Lots of ways to work with thse.
- Inline: `const myObj: { email: string } = { email: "me@jakerobins.com" }`
  - Even works in an array: `Array<{email: string}>`
- Our app has a user object array which we should double check the typing on
- We could define this type:

```ts
const user: {
  first_name: string;
  last_name: string;
  email: string;
  dob: string;
};
```

- but this is data coming in from a JSON file which we cannot add code to.
- This is a cool case where we get to use some of Typescript's inate inference power. The option we enabled earlier allows TypeScript to actually infer the type! All we have to do is use the `import` statement instead of require.
- Now our users array is type inferred from the source, and we can act on it with that knowledge
- One squiggle went away - the param in find can now be inferred!
- Two new squigglies came up - user is possibly undefined, and last_name could be null

# Aliases and Interfaces

- Object type literals are of limited use in types because they can't be reused. To solve this, we can declare new kinds of composite types with a Type Alias.

```ts
type User = {
  first_name: string;
  last_name: string | null;
  email: string;
  dob: string;
};
```

- We could make our own data with this type to demonstrate it

```ts
const users: User[] = [
  {
    first_name: "Upton",
    last_name: "Santos",
    email: "nibh.vulputate.mauris@outlook.ca",
    dob: "1965-45-13",
  },
  {
    first_name: "Kimberley",
    last_name: "Fletcher",
    email: "pretium.aliquet.metus@hotmail.com",
    dob: "1961-57-27",
  },
  {
    first_name: "Bradley",
    last_name: null,
    email: "aliquet.libero@outlook.ca",
    dob: "1976-38-13",
  },
];
```

- You can also use type aliases to define unions or primitives. They are like type vars.
- `type LastName = string | null`

# Narrowing

- Now that we have a basic grasp on typing our data, let's put the compiler to work for us and solve these bugs.
- We're going to use a practice called Narrowing to help handle these type edge cases.
- Narrowing is running logic to "prove" that data is one type or another.
- TypeScript is smart enough to read control flow in your code and determine when you've eliminated type possibilities.
- Let's get rid of the undefined user problem first.
- As architects we first need to decide what we want this function to return if the user doesn't exist. I like `undefined` - it matches the Array `.find` interface and seems logical. But it could also be an empty string or `false` or something else!
- Let's change our function type to allow for undefined returned
- Now we can run an if statement and short circuit.

```ts
if (user === undefined) {
  return undefined;
}
```

- For the null last name we can do a couple things too.
- Let's assume we want the function to tjust return the first name if the last name is null. So no concatenation necessary.

```ts
if (user.last_name === null) {
  return user.first_name;
}
```

- You can also do some explicit type checks using built in JS functionalty `typeof`

```ts
if (typeof user.last_name !== "string") {
  return user.first_name;
}
```

DocS: https://www.typescriptlang.org/docs/handbook/2/narrowing.html

# Putting it all together and running the code

- Ok, we've made the TypeScript Compiler happy and the code has no squigglies. But this is a .ts file, how the heck to we run it?
- We can manually compile code using the `tsc` command. This converts a ts file to a js file. Not unlike how you used to do SASS to CSS!
  `npx tsc why-typescript.ts`
- Let's compare them!
  - Typing info gone
  - Most everything else the same, just some compatibility checks
- Of course, running this manually is not a lot of fun, especially if you have a whole project.
- First let's add this as a script in npm
- `npm run compile`
- Next we can have it run the js file afterwards
- `"start": "npm run compile && node why_typescript.js"`
- Setting an output folder
  - Normally, a Typescript project has a folder in its root that is in a gitignore where compiled code goes. It's like a runtime. Common folder names are `dist` for distributable files.
  - If you also have a `src` folder (source code), you have a very clean and obvious setup where src code starts in one folder and compiles to the other.

1. Create two folders
2. move src to src
3. add dist to gitignore
4. Setup TS config to point to them (also note sourcemap)

```json
{
  "extends": "@tsconfig/recommended",
  "compilerOptions": {
    "target": "es2022",
    "resolveJsonModule": true,
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"]
}
```

5. Configure package json to point to it and have a clear function

```json
    "compile": "tsc",
    "clear": "rm -rf dist",
    "start": "npm run clear & npm run compile && node dist/why_typescript.js"
```

- Ok so that feels like a lot of configuration right?
- Thankfully, lots of frameworks that you will use with typescript come pre-configured out of the box, like if you spin up a Next JS or Vite project or whatever, you'll get this build tool all setup. You'll find you work in that environment a lot anyway.
- But there's value in setting this up once yourself, gives you a nice practice for how Node works!

# Tips for Learning Typescript

- Typescript can be a little infuriating at first. It slows you down because all your common habits are probably sprinkled with some loosely typed bugs. It will feel like you aren't very productive when you first try it
- I promise if you stick with it it will feel better over time. Then your productivity will increase because you aren't hunting down all those bugs. Today I exclusively write production code in Typescript.
- I don't recommend you do it on your final project - many have tried including yours truly and the time crunch is too much. But out of bootcamp, fire up this lecture again and throw together a simple sample project to get your feet wet.
- You can also "convert" apps to Typescript incrementally, which is nice. Remember, JS files will compile down to JS files too, since its a superset. So you can set up your tooling and have even just one file in Typescript.
- So you can take your time on something if you want, and sprinkle just a little bit in here and there.
- There are lots more functions and features too that you'll run in to so it's lots to learn! I still consider myself somewhere between novice and intermediate with TS.

# Extra Goodies

- React component - type your props!
- Type your state with Generics

```tsx
type MyProps = {
  name: string;
  isActive: boolean;
};

export const MyComponent = (props: MyProps) => {
  const [active, setActive] = useState(props.isActive); //  inferred
  const [count, setCount] = useState<number>(0); //  explicit

  return <h1>{props.name}</h1>;
};
```
