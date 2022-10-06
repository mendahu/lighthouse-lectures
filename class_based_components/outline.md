# Class-based Components

## JS Class Syntax Review

- constructor
- template vs instance
- internal state/values
- methods
- inheritance

- Basic syntax of a class

```js
class LighthouseUser {
  constructor(name) {
    this.name = name;
  }
}

const jake = new LighthouseUser("Jake");
```

- Talk about naming conventions
- Constructor parameters
- internal values like name
- Explain the instance versus the template
- Add method

```js
printName() {
  console.log(this.name)
}
```

- Talk about inheritance

```js
class LighthouseStudent extends LighthouseUser {
  constructor(name, cohort) {
    super(name);
    this.cohort = cohort;
    this.projectsCompleted = 0;
  }

  completeProject() {
    this.projectsCompleted++;
    console.log(
      `Student ${this.name} from cohort ${this.cohort} has completed ${this.projectsCompleted} projects`
    );
  }
}

const student = new LighthouseStudent("Duck", "flex-22-may-16-day");
student.printName();
student.completeProject();
student.completeProject();
student.completeProject();

class LighthousenInstructor extends LighthouseUser {
  constructor(name) {
    super(name);
    this.cohorts = [];
  }

  addCohort(cohort) {
    this.cohorts.push(cohort);
    console.log(
      `Instructor ${this.name} is now teaching ${cohort}. They have ${this.cohorts.length} in their schedule.`
    );
  }
}

const jake = new LighthouseInstructor("Jake");
jake.printName();
jake.addCohort("flex-22-may-16-day");
jake.addCohort("flex-22-nov-14-day");
```

## Class-based Components

- Before Functional Components, React was done using Classes
- Functional components were slowly introduced, but with React 16.8 and the addition of Hooks, they became fully featured and began to replace Class-based compomnents
- Many companies who wrote react apps before 16.8 wrote class-based components, and many have not completed replaced all these, so you may run in to these in the wild
- Class-based components are considered deprecated, but it's still useful to learn them and see where REact came from

## Intro to Class Based Components

- Syntax (extends, render(), )
- constructor() with super()
- props
- state
- this
- lifecycle methods

* `npx create-react-app client`
* Remove template stuff
* Remove strict mode
* convert App to a class based component
* import React

```js
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to FrogServe</h1>
      </div>
    );
  }
}
```

- Adjust CSS

```css
.App {
  margin: 3rem;
  padding: 3rem;
  background-color: green;
  color: white;
}
```

- Add FrogCard Component

```js
import React from "react";

class FrogCard extends React.Component {
  render() {
    return (
      <div>
        <h2>Frog Name</h2>
        <img src="Img Src" width="300px" alt="Frog Alt Text" />
      </div>
    );
  }
}

export default FrogCard;
```

- Render FrogCard in App
- Convert it to use props, hard code in values
- Convert it to use state, hard code in value

Talk about Life Cycle Methods

[Lifecycle Methods](https://miro.medium.com/max/4560/1*EnuAy1kb9nOcFuIzM49Srw.png)

- `npm install axios`
- add `componentDidMount()`

```js
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    console.log("Component Did Mount");
    axios
      .get("/frogs/random")
      .then((res) => this.setState(res.data))
      .catch((err) => console.error(err));
  }
```

- Add Did Mount and Update console logs to FrogCard and App

- Add a button to App to refresh frog
- Refactor fetchFrog to its own function, show how `this` gets messed up

- add a `componentDidUpdate()` method to alter the document title

```js
document.title = this.state.name;
```

- Add a cycle frogs function

```js
  cycleFrogs() {
    setInterval(() => {
      this.fetchFrog();
    }, 1000);
    // this.setState({ ...this.state, interval });
  }

  <button onClick={this.cycleFrogs}>AutoCycle Frogs</button>
```

- add a hide frog feature
- make sure to update fetchFrog so that the state spreads existing state

```js
  this.state = {
    show: true
  }
  hideFrog = () => {
    this.setState({ ...this.state, show: false });
  };

  <button onClick={this.hideFrog}>Hide the Frog</button>
  {this.state.show && (
    <FrogCard
      name={this.state.name}
      image={this.state.image}
    />

```

- demonstrate how even after you hide the frog element, the cycling API calls continue. How can we get them to stop if the component goes away?
- Create a state for an interval
- set the interval in cycleFrog()
- create a clearFrogCycle function that clears the interval
- pass it to FrogCard
- call it in ComponentWillUnmount

```js
    this.state = {
      show: true,
      interval: null,
    };
  clearFrogFetchInterval = () => {
    clearInterval(this.state.interval);
    this.setState({ ...this.state, interval: null });
  };
    cycleFrogs() {
    const interval = setInterval(() => {
      this.fetchFrog();
    }, 1000);
    this.setState({ ...this.state, interval });
  }
        cleanup={this.clearFrogFetchInterval}
          componentWillUnmount() {
    console.log("Unmounting FrogCard")
    this.props.cleanup();
  }
```
