// const age = 38;

// function printNum(num) {
//   num = num + 1;
//   return num;
// }

// const result = printNum(age);
// console.log(result);
// console.log(age);

// Objects in functions...

// const jake = {
//   name: "Jake",
//   age: 38,
//   isIntructor: true,
// };

// function printAge(instructor) {
//   instructor.age = instructor.age + 1;
//   console.log(instructor["age"]);
// }

// printAge(jake);
// console.log(jake.age);

// Nesting and Functions inside Objects

// const jake = {
//   name: "Jake",
//   age: 38,
//   isInstructor: true,
//   favouriteFoods: ["pizza", "guacamole"],
//   address: {
//     city: "Tamanché",
//     country: "Mexico",
//   },
//   sayHello: function () {
//     console.log("Hello!");
//   },
// };

// jake.sayHello();

// "this" keyword

const jake = {
  name: "Jake",
  age: 38,
  isInstructor: true,
  makeYounger: function () {
    this.age = this.age - 1;
  },
};

console.log(jake.age);
jake.makeYounger();
console.log(jake.age);
