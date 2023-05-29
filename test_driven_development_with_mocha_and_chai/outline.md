# Test-Driven Development

- Today we're going to be digging in to testing code
- Testing is going to become a key part of your development process as you journey towards becoming professionals
- Testing is especially important for complex applications where the interactions with the app are so numerous you can't possibly test them all manually
- Automated testing helps catch regression bugs and ensures that we do no harm to our app when trying to improve it
- Because we're developers, we tend to like tests that are also written in code. Instead of manually clicking and typing and getting friends to test it out, etc., we write scripts that do all this for us. This means the tests are consistent, repeatable, and can be committed to our repo like everything else!

## TDD

- A very common testing philosophy is called Test-Driven Development
- It's a bit non-intuitive at first so we're going to use it a lot in his lecture. It takes some getting used to but it has a ton of benefits
- In TDD, we write the test before we write the code it's testing
- then we follow a Red-Green-Refactor strategy
  - The test should fail at first
  - Then we implement the function so it starts to pass
  - then we refactor our function so that it is safe
- This strategy eliminates a common misstep in testing - a passing test which passes because the test is wrong. Let's illustrate

```js
// Here's a function with a bug
const add = (num1, num2) => {
  return num1 - num2; // subtraction instead of addition
};

// Then we write a test, but it is also bugged
const assertEqual = (val1, val2) => {
  return val1 === val1; // comparing wrong values, will always be true
};

assertEqual(add(2, 2), 4); // it passes!
```

- With TDD, we'd have seen the test pass before we even implemented it. That's a red flag!!

## Console Assert

- There are some built in tools you can use for very simple testing
  - `console.assert` will log messages if boolean assertions fail
  - Assertions are a common tool we use in all automated testing. Assertions allow us to _assert_ that something is like something else like "I expect this value to equal this" or "These values should equal those".

```js
// add.js

const add = () => {
  // not implemented yet - test driven development!
};

console.assert(add(2, 2) === 4, "Test Failed");

// Now implement it
```

- We're also going to take some time in this lecture to practice modules, importing and exporting code.
- In this example, I would generally want to keep my source code (the app) and the testing separate.
- Let's make a test file and a function file, and import the function into the test

  - Make `test.js`
  - Move test to it
  - Export add from file `module.exports = add`
  - Import add to tet file `const add = require("./add.js")`

- Console Assert is nice for quick checks but console messages are not really useful for automated test suites since they require a human to read them

## Node Assert

- Node has a built in assertion library that throws errors which is what we really need, so lets see what that looks like.
- We'll need to import this from Node's built in library

```js
// Unimplement function first

const assert = require("assert");

assert.equal(add(2, 2), 4);
```

- Node's assertion library is more complete. There are methods for comparing objects and arrays (`assert.deepStrictEqual`) for example, so it more closely matches what you've built with your lotide functions. However, it is still a bit limited, and it doesn't provide any other tools for actually running the tests.
- So let's look at some better tools!

## Mocha

- The first is Mocha - Mocha is a testing framework. It's software that runs tests for us and allows us to build a suite of tests that can be automated.

- To install Mocha, we're going to need to bring in a third party package.
- Mocha is an independent open-source project that we can bring in to our own project for free - how great is that?
- Any time we want to have a node app with 3rd party modules we're going to need to initialize it with npm

```sh
npm init
```

- Review questions and `package.json`

```sh
npm install --save-dev mocha
# or
npm install -D mocha
```

- Review dev vs normal dependencies

- As I said, Mocha is a framework for running tests.
- Visit docs (https://mochajs.org)
- Simple interface: `describe` and `it`.
  - `describe` is for grouping related tests into a section
  - `it` is a test

```js
// test/mocha_test.js
const add = require("../add");
const assert = require("assert");

describe("my thing to test", () => {
  it("can do the thing I expect", () => {
    assert.equal(add(2, 2), 4);
  });
});
```

- Add script to npm test

```json
// package.json/scripts
{
  "test": "mocha"
}
```

```sh
npm run test
```

- Mocha looks for a `test` folder and runs the tests inside it
- examine terminal output
- Mocha decides if a test passes or fails based on whether it runs without error

```js
it("fails", () => {
  throw new Error("bad stuff happened");
});
```

- Mocha continues to run tests, even if one fails

- Git can be told to ignore things using `.gitignore`
- We should ignore the `node_modules` directory so it doesn't end up in our Github/source control

```
node_modules
```

- Reimplement `add` to get it to pass.

## Chai

- The second tool we are going to bring in is Chai - Chai is an assertion library. It's a collection of functions we can use to make assertions and compare values in our tests.
  - You've sort of been writing your own assertion library in Bootcamp so far. Functions like `assertEqual` or `assertArraysEqual` are assertion helper functions!
  - Chai's is more complete and very useful
  - Like Mocha, Chai is an independent project
  - [Chai Docs](https://www.chaijs.com/api/)
  - Talk about different assertion syntaxes

```js
// should
myVar.should.be.a("string");
myVar.should.equal("hello world");

// expect
expect(myVar).to.be.a("string");
expect(myVar).to.equal("hello world");

// assert
assert.typeOf(myVar, "string");
assert.equal(myVar, "hello world");
```

- install

```sh
npm install -D chai
```

- require

```js
const assert = require("chai").assert;
```

- Convert to new syntax

## Test-Driven Development

- Let's properly implement something now with test-driven development!
- Choose a Kata from the List
- https://flex-web.compass.lighthouselabs.ca/workbooks/web-flex-v2-prep/activities/96?workbook=40

1. Create the empty function, export it
2. Create the test suite, import it
3. Describe a few test cases

- Spend time thinking about tests, in English
- This is a good exercise
- Maybe some tests about return values

4. Write the tests using the Chai assertion library

- See if you can get some tests that have a couple assertions in one

5. Verify everything fails
6. Start to implement the function, making tests pass one by one
