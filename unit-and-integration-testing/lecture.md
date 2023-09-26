# Unit and Integration Testing

- [ ] Different types of Tests and their roles
- [ ] How to select test types
- [ ] Testing Tools in React
- [ ] Mocking
- [ ] Asynchronous Testing
- [ ] Coverage Reports

## Philosophy of Testing

- Testing is about adding confidence to your code
- Each test increases confidence
- There is a diminishing marginal return with each added test, so there is a balancing act for when to stop
- "How much confidence can we buy with X amount of time spent building tests?"

## Types of Tests

- To maximize this confidence/$ metric, we can use a bunch of kinds of tests (4)
  1. Static Test (TypeScript, Prop Types)
  2. Unit Tests
  - what you've already done so far (with Mocha/Chai)
  - one small function/functionality
  - Could be a helper function or a React Component
  - Unit tests mostly always require some level of mocking
  3. Integration Testing
  - Validates how multiple units work together
  - More complex than a unit test, multiple units together
  - Still requires mocking for the most part
  - In terms of REact, may be multiple components working together, but probably not quite at the whole page or whole app level
  4. End to End Testing -
  - simulates actual user activity
  - highest fidelity
  - End to End tests are expensive, but they deliver the highest value
  - Usually reserve End to End tests for really critical, high value user flows
  - Little to no mocking

## How do we pick the right type for our feature??

- The first step is understanding what kind of value each type adds
- Then you need to learn which features benefit most from which value

## Tools in React for Testing

- Jest - Jest is a testing framework
  - It's a test runner (so it serves the same role as Mocha)
  - Jest comes with an assertion library (so it also serves the role of Chai)
  - Jest comes pre-packaged out of the box with `create-react-app`
  - Jest runs tests in a simulated Node environment
    - It uses something called JSDOM to simulate a browser's DOM
- `testing-library` - extra library that adds testing tools for us - makes writing DOM manipulations easier, and more specifically lets us manipulate React DOM

# Demo App - PLANET VIEW

## Queries in React Testing Library

- like selectors - they go in to the DOM and find elements based on some criteria
- jQuery - does the same thing `$(".card")`
- Queries are buitl around non-implementation details

return :25 after
