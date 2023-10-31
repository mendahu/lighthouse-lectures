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
