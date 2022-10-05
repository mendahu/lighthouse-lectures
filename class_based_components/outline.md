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
