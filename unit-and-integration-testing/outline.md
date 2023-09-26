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
- We'll try to use Test Driven Development

1. Fire up app
2. Explain how it was bootstrapped
3. Show components

## Features we want to implement

1. Selecting a planet from the list will show the planet on the right hand view page
   (default empty view)
2. App will fetch data from API
3. App will show loading and errors states

\***\* IMPORTANT - check node version, shoudl be 15 for Mac M1 \*\***

### Click to select - UNIT TEST example

- We're going to store a little bit of state which keeps the planet name that is selected
- Then we'll use a selector function to draw out the planet from the array and pass it in to the view

```js
// Main.js
const [selectedPlanetName, setSelectedPlanetName] = useState(undefined);

// in own file
const getPlanetByName = (name, planets) => {
  // implement me
  // return planet
};

const selectedPlanet = getPlanetByName(selectedPlanetName, planets);

// pass into component
```

- This selector is pretty clutch, it does the main job of extracting the correct state for the application. It's used by virtually every user, for every click they make on the list.
- This makes it a good candidate for a unit test, so let's create some tests

```js
describe("getPlanetByName", () => {
  test("returns correct planet by its name", () => {
    const planets = [
      {
        name: "Earth",
        image: "earth.jpg",
      },
      {
        name: "Mars",
        image: "mars.jpg",
      },
    ];

    const planet = getPlanetByName("Earth", planets);

    expect(planet.image).toEqual("earth.jpg");

    // is this necessary
    const planet2 = getPlanetByName("Mars", planets);

    expect(planet2.image).toEqual("mars.jpg");
  });

  test("returns undefined if planet not found", () => {
    const planets = [
      {
        name: "Earth",
        image: "earth.jpg",
      },
      {
        name: "Mars",
        image: "mars.jpg",
      },
    ];

    const planet = getPlanetByName("Tattooine", planets);

    expect(planet).toEqual(undefined);
  });
});
```

TALK ABOUT

- `test` vs `it` vs `describe`
- Similarity to mocha
- where does Expect come from?
- How does this test increase confidence?
- Is there marginal return on the second test with Mars?
- Remember to always think about edge cases
- Talk about how to write code that's easier to test - passing planets in as an argument vs acessing it from outside of its scope (keep it pure)
- This test requires mocking the fake planets

- Now we can implement the function!

```js
export const getPlanetByName = (name, planets) => {
  return planets.find((p) => p.name === name);
};
```

Also add:

- Click handlers passed down

```js
const selectPlanet = (name) => {
  setSelectedPlanetName(name);
};

handleClick={() => props.handleClick(p.name)}
```

```js
// PlanetView.js

if (!props.planet) {
  return null;
}
```

TALK ABOUT

- Helper Function Unit tests still have a role in React
- Functions which are pure are easier to test and abstract out
- Not every helper function needs a unit test, so focus on high value ones which provide good coverage and affect important tasks and aren't already covered in an integration test

### Show undefined planet view - React Component Unit Test

- We're going to make sure that the Planet View handles undefined in a nice way
- We'll properly mount the component to make sure it works
- Let's write a test that verifies that planet data shows properly, but undefined shows a placeholder

```js
import { PlanetView } from "./PlanetView";
import { render } from "@testing-library/react";
import React from "react";

describe("PlanetView", () => {
  test("it should show planet data correctly", () => {
    const planet = {
      name: "Earth",
      image: "http://localhost:8080/earth.jpg",
      mass: 1.0,
      diameter: 1.0,
      density: 5.52,
      gravity: 9.8,
      rotationPeriod: 23.9,
      lengthOfDay: 24.0,
      distanceFromSun: 149.6,
      orbitalPeriod: 365.2,
      orbitalVelocity: 29.8,
      meanTemperature: 15,
      moons: ["Moon"],
    };

    const { queryByText, queryByAltText } = render(
      <PlanetView planet={planet} />
    );

    expect(queryByText("Earth")).not.toBe(null);
    expect(queryByAltText("Earth")).not.toBe(null);
    expect(queryByText("Moon")).not.toBe(null);
  });
});
```

TALK ABOUT

- Mounting a react component
  - Need to bring in testing library's React DOM library
  - use the Render function
  - Pass it the component you want to mount
  - Note that this is a "fake" DOM but is still running React so to speak. So it renders that component down and runs React in the background, which means eventually we can interact with it
  - Show documentation for Render
- Expect - from Jest (show docs), assertions

#### Queries

- Queries from Testing Library are some of the most important things to learn when testing React.
- These basically act like selectors which search through the DOM looking for nodes that match your input
- SHOW DOCS
- There are queries for single elements vs multiple (get vs getAll), there are different queries for if there should be an error or not, and there are different queries for async (more on that later)
- Very similar to using jQuery to select elements
- Show different kinds of queries and how you can select them
- Conversation about avoiding implementation details and why there is no base query for element types

Add test for undefined planet

```jsx
test("it should show placeholder if planet undefined", () => {
  const planet = undefined;

  const { queryByText, queryByAltText } = render(
    <PlanetView planet={planet} />
  );

  expect(queryByText("Earth")).toBe(null);
  expect(queryByAltText("Earth")).toBe(null);
  expect(queryByText("Moon")).toBe(null);
  expect(queryByText("Click any planet to learn more!")).not.toBe(null);
});
```

Now we can implement it!

```jsx
if (!props.planet) {
  return (
    <aside className="card">
      <div>Click any planet to learn more!</div>
    </aside>
  );
}
```

### Integration Test

- Now let's go back to our select functionality and add some more robust tests, our first integration test.
- We know our selector works really well, but all it does it sort through a state object and return a value.
- We don't have any testing for the ability to change the value of the planet.
- You can already tell we're thinking bigger in this case and starting to think more about the functions a user will do.
- This test crosses a few different functions, from <App> where the state lives and then some values to one side and a click handler to another. But it doesn't quite reach the level of end to end

- Let's write our test for the happy path!

```js
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { Main } from "./Main";

describe("Main", () => {
  test("Planet toggles correctly", async () => {
    const planets = [
      {
        name: "Earth",
        image: "http://localhost:8080/earth.jpg",
        mass: 1.0,
        diameter: 1.0,
        density: 5.52,
        gravity: 9.8,
        rotationPeriod: 23.9,
        lengthOfDay: 24.0,
        distanceFromSun: 149.6,
        orbitalPeriod: 365.2,
        orbitalVelocity: 29.8,
        meanTemperature: 15,
        moons: ["Moon"],
      },
      {
        name: "Mars",
        image: "http://localhost:8080/mars.png",
        mass: 0.107,
        diameter: 0.532,
        density: 3.93,
        gravity: 3.7,
        rotationPeriod: 24.6,
        lengthOfDay: 24.7,
        distanceFromSun: 227.9,
        orbitalPeriod: 687.0,
        orbitalVelocity: 24.1,
        meanTemperature: -65,
        moons: ["Phobos", "Deimos"],
      },
    ];

    const { getAllByRole, queryByText } = render(<Main planets={planets} />);

    const cards = getAllByRole("article");

    // initial state
    expect(cards[0]).not.toHaveClass("card-selected");
    expect(queryByText("Moon")).toBe(null);
    expect(cards[1]).not.toHaveClass("card-selected");
    expect(queryByText("Phobos")).toBe(null);

    fireEvent.click(cards[0]);

    // Earth selected
    expect(cards[0]).toHaveClass("card-selected");
    expect(queryByText("Moon")).not.toBe(null);
    expect(cards[1]).not.toHaveClass("card-selected");
    expect(queryByText("Phobos")).toBe(null);

    fireEvent.click(cards[1]);

    // do we need to check Mars too?
    expect(cards[0]).not.toHaveClass("card-selected");
    expect(queryByText("Moon")).toBe(null);
    expect(cards[1]).toHaveClass("card-selected");
    expect(queryByText("Phobos")).not.toBe(null);
  });
});
```

TALK ABOUT

- Selectors - get by Role vs Query by Text, get ALL
- Events - firing click events to simulate user interactions
- Observing changes across the components
- Isolating Main with props for easier testing
- Our first integration test!

## Implementing Data Fetching

- Next we're going to ramp up the difficulty a bit more by implementing our data fetching functionality
- This adds two complications
  - Mocking - we'll need to mock our Axios library in order to simulate the API response, since in our test environment the API will not be available
  - Asynchronous testing - our API call is asynchronous and we want to accomodate loading states, so we need our test to understand that too!

```js
// make a loading component

// Loading.js
import React from "react";
import "./Loading.css";

export const Loading = () => {
  return <div className="card loading">Loading...</div>;
};
```

```css
.loading {
  padding: 1rem;
}
```

- Let's write a test that verifies loading is displayed first

```js
import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App", () => {
  test("it should show loading on initial render and then fetch data", () => {
    const { queryByText } = render(<App />);

    expect(queryByText("Loading...")).not.toBe(null);
  });
});
```

Now let's implement this default state

- REMEMBER TO CHANGE PLANETS ARRAY TO NEW defaultPlanets VAR NAME

```js
function App() {
  // add state
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState([]);

  // conditionally render
  return (
    <>
      <header className="card">
        <h1>PlanetView</h1>
      </header>

      {loading ? <Loading /> : <Main planets={defaultPlanets} />}
    </>
  );
}
```

- Next, we need to expect there to be an API call that changes the data
  - We know that an API call is an AJAX request, which is asynchronous. So in the normal flow of this app, we would expect React to initially render the Loading state, which we've now tested.
  - Then, we'll need a useEffect to wait for the DOM to render, fetch the result, store it in state, which will trigger a re-render, throwing out the loading state and inserting the data
  - So first we need to have our test wait for the loading state to go away, then we'll test that the new data has replaced it

```js
test("it should show loading on initial render and then fetch data", () => {
  const { queryByText, queryAllByRole, getByRole } = render(<App />);

  // initial state
  expect(queryByText("Loading...")).not.toBe(null);
  expect(queryAllByRole("article")).toHaveLength(0);

  // asynchronous wait
  return waitForElement(() => {
    return getByRole("article");
  });
});
```

- waitForElement is one helper function testing library provides. It return a promise that resolves once the element inside is visible
- Remember to return the promise from the test!
- This test will now fail because there are no articles loading
- Let's implement a useEffect now with a simple timeout to simulate asynchronous state changes

```js
useEffect(() => {
  const timeout = setTimeout(() => {
    setLoading(false); // clears loading state
    setPlanets(defaultPlanets); // inserts default planet state
  }, 100);

  return () => clearTimeout(timeout);
}, []);
```

- Our test should now pass
- From here, we can chain the promise to make more assertions about whether the data is displayed properly

```js
return waitForElement(() => getAllByRole("article")).then(() => {
  expect(queryAllByRole("article")).toHaveLength(2);
});
```

## Mocking

- Our last step is to implement the actual axios call to fetch real data
- In unit and integration tests, generally we want to mock external libraries like this that are making changes to our data
- This is because we want to test this in isolation at this level - we want to control what data is given to it by Axios so we can predict what the response shoudl be.
- In other words, we don't want any problems with the Axios library or our API to impact this test just yet. We only want to know if the component can fetch data and show it properly
- to do this, we create what is called a Mock, which is like a fake function that is going to stand in for Axios. Mocking functions and modules is a common practice in testing.

- First, we create a mock module in the `__mocks__` folder in src. The file name must match the module name, so `axios.js` in this case.
- We'll also move our test data to this file, which we'll use as a fixture
- A fixture is a set of test data specifcally for mocking.

```js
export default {
  get: jest.fn((url) => {
    if (url === "/api/planets") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: planetFixtures,
      });
    }

    return Promise.reject({
      status: 404,
      data: null,
    });
  }),
};
```

- You'll see that we have an object here with a `get` method, which is just like the `axios` module. `axios.get()` will now call this function here.

- install axios `npm i axios`
- add proxy `"proxy": "http://localhost:8080"`

- Test will fail now because we don't have any data loading
- Now we can implement our useEffect axios call and have confidence it will use the mock and not the real thing

```js
useEffect(() => {
  axios.get("/api/planets").then((res) => {
    setLoading(false);
    setPlanets(res.data);
  });
}, []);
```

- Test passes, and we can also fire up the app to see the real data coming through.
- Verify that mock is being used and not real data
