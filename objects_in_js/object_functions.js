const jake = {
  name: "Jake",
  age: 38,
  isInstructor: true,
  sayHello: function () {
    // this
    console.log("Hello! My name is", this.name);
  },
  makeYounger: function () {
    this.age = this.age - 1;
  },
  printAge: function () {
    console.log("I am", this.age, "years old.");
  },
};

const jim = {};

jake.printAge();
jake.makeYounger();
jake.printAge();

// does it work in arrays???
// apparently!
// not commonly used!

const ages = [
  38,
  39,
  40,
  function () {
    console.log(this.length);
  },
];

ages[3]();
