# Class-based Components

_A blast from the past!_

[ ] Review JS Class Syntax
[ ] What are Class-based components? Why should you learn them?
[ ] Intro to Class-based Components
[ ] Props
[ ] State
[ ] `this`
[ ] Lifecycle Methods`
[ ] Comparisons to Functional Components

# Review JS Syntax Classes

```js
class LighthouseUser {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

const jake = new LighthouseUser("Jake");
jake.printName();

const jack = new LighthouseUser("Jack");
jack.printName();
```

- Inheritance
- Allows you to extend class functionality on top of other classes

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
      `Student ${this.name} has completed ${this.projectsCompleted} projects`
    );
  }
}

// class LighthouseGraduate extends LighthouseStudent {
//   constructor(name, cohort, gradDate) {
//     super(name, cohort)
//     this.gradDate = gradDate
//   }
// }

const jack = new LighthouseStudent("Jack", "flex-2022-may-16-day");
jack.printName();
jack.completeProject();
jack.completeProject();
jack.completeProject();
```

- More Inheritance

```js
class LighthouseInstructor extends LighthouseUser {
  constructor(name) {
    super(name);
    this.cohorts = [];
  }

  addCohort(cohortName) {
    this.cohorts.push(cohortName);
    console.log(
      `Instructor ${this.name} is teaching ${this.cohorts.length} cohorts`
    );
  }
}

const jake = new LightouseInstrutor("Jake");
```

- Example Bot for Discord (using Discord.js)

```js
const client = new Client();

client.login("key");
client.on("messageCreate", () => {
  // do something
});
```

## Class Based Components

- Class based components were the original React methodology
- Functional Components started to become the focus
- React 16.8 (2018?????) when hooks were introduced
