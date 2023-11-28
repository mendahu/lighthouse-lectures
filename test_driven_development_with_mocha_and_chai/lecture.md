# W02D01 - TDD, CommonJS, and NPM

### To Do

- [ ] Manual testing
- [ ] Making assertions
- [ ] Bringing in outside code
- [ ] Exporting our code
- [ ] Intro to NPM: a Node package manager
- [ ] Mocha test runner
- [ ] Ignoring files/folders
- [ ] Chai assertion library
- [ ] What is TDD?
- [ ] Practice unit testing

# Testing is important!

- as we write applications and they get bigger and bigger, manual testing stops being sustainable
- (automated) testing is a way to sustainably test eveyrthing all the time without a lot of effort
- testing code is about confidence

# Test-driven development (TDD)

- A common strategy to testing in development
- It's a bit counterintuitive, because you write the tests first and then you write the code

1. You write the test(s)
2. You verify that the tests fail
3. Implement the function and make the test pass
4. Refactor the function to polish it up and make it lovely and the test should continue to pass
   (RED - GREEN - REFACTOR)

- Eliminates the chance of writing a test that accidentally passes due to a bug!

## Basic Tools

- console.assert() - built in to JS so it will work anywhere, very limited functionality
- node assert (assert.equal()) - Built in to Node, more functionality, still kinda limited tho

## Mocha

- Mocha is a testing framework
- Mocha is software that runs a suite of tests automatically and reports failures and successes
- To install Mocha, we'll need to bring in a third party package
- It's open source, independent, free, and other good words too!

-- Initialize the project with `npm init`
-- Install mocha - `npm install mocha --save-dev` or `npm install mocha -D`

https://mochajs.org

// RETURN AT 0:06 past the hour

## Chai

- Assertion library (a library is a collection of tools you can pick and choose from)
- Often the companion to Mocha
- Chai is also one of these great independent open source free softwares

https://www.chaijs.com
