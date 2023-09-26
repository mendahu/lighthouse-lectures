# Unit and Integration Testing

## Testing Philosophy

- Testing is a tricky part of programming because it's much harder to quantify results
- With user stories and features and bugs, you can very easily describe a definition of done, and then validate that it is done
- Testing, on the other hand is all about achieving some level of confidence. It works, but how confident are you that it will always work under any condition?
- Each test that you write adds an unmeasurable amount of confidence. The more test coverage you have, the more you've accounted for and your confidence goes up
- So the simple solution here is to just write a lot of tests and cover every edge case
- However this is not useful in practice, as tests deliver a diminishing marginal return with each one. The first 1% of confidence is the cheapest to get, and the last 1% is the most expensive
- And so testing as a philosophy becomes something more like "how much confidence can we buy if we only want to spend X amount of money/time/resources on testing"? Maximizing this value is why good testers can do

## Types of Tests

- To help maximize confidence per dollar spent, testers will use a variety of different kinds of tests.
  - Static Tests
    - validate that types of data being passed around are correct (TypeScript, Prop Types, etc)
  - Unit Tests
    - Validates one small function is operating correctly
    - What you've done with Mocha/Chai already
    - Can be applied to a helper function or even a React Component
    - Requires some form of mocking
  - Integration Tests
    - Validates that multiple units are working correctly together
    - Validates how multiple functions/classes call upon each other
    - Might cover an entire React page with forms, hooks, state, etc
    - Requires some form of mocking
  - End to End test
    - Simulates a real user experience by loading the app and interacting with it with clicks and button presses the same way a user would.
    - Often covers entire user flows like a registration flow or adding a new resoure
    - Little to no mocking

## How to pick a test type

- Show Trophy
- This Test Trophy by Kent C Dodds shows a good philosophy on how to spend your time building tests
- It shows that the most value for your money tends to come from integration tests, but that a good strategy employs all types in a blended approach
- It can be very hard to learn this skill, it takes a lot of experience and a fair amount of screwing up to figure out how your tests cover your code and how they don't
- Tests will reward you with more or less confidence depending on the feature they are testing and how impactful and complex they are. It's very application-specific
- Different tests are also higher or lower fidelity - Unit tests are low-fidelity and end to end tests are high fidelity, but they come at a cost.
- So today we're going to look at testing a React application from a Unit, Integration perspective, and later you'll get one on End to End Testing. These three tools, along with a little sprinkle of static testing, should give you everything you need to start building up the testing experience that a good develoepr needs!

## Testing Tools in React

- Today we're going to be focused on the Jest tool, which is useful to write both unit tests and integration tests in React.
- Jest is a test runner, so it serves the same role as Mocha, but it also has its own assertion library, so it can serve the role of Chai as well
- Jest comes pre-shipped with `create-react-app` which makes setting it up pretty easy if that's how you bootstrapped your application
- Jest runs tests in a simulated Node environment, and can even simulate a browser with something called JSDOM which allows you to "mount" components in React and ensure that they created the necessary HTML elements.
  - this means that it is lower fidelity than an end to end test because it's not a real browser making real HTTP requests or anything, but these tests are quick to write
  - Certain kinds of mocks may be required depending on your components to handle things like outside libraries
- We're also going to be leveraging an additional library today called `testing-library`, which provides some great tools for interacting with the fake DOM in Jest to ensure that our tests are easy to write and easy to maintain

# Demo App - Planet View

- We've got a little application we're going to set up to view and learn about planets
