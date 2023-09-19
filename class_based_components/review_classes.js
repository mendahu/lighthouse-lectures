class LighthouseUser {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

const jake = new LighthouseUser("Jake");
const jim = new LighthouseUser("Jim");

jake.printName(); // "Jake"

class LighthouseStudent extends LighthouseUser {
  constructor(name, cohort) {
    super(name);
    this.cohort = cohort;
    this.projectsCompleted = 0;
  }

  completeProject() {
    this.projectsCompleted++; // setState???
    console.log("Project completed!");
    console.log(
      `${this.name} has completed ${this.projectsCompleted} projects.`
    );
  }
}

const student = new LighthouseStudent("Duck", "flex-23-may-15-day");
student.printName();
student.completeProject();

class LighthouseInstructor extends LighthouseUser {
  constructor(name) {
    super(name);
    this.cohorts = [];
  }

  addCohort(cohort) {
    this.cohorts.push(cohort); //  mutation
    console.log(`Instructor is now teaching ${this.cohorts.length} cohorts.`);
  }
}

const jakeInstructor = new LighthouseInstructor("Jake");
jake.printName();
jake.addCohort("flex-23-may-15-day");
