// const myName = "Jake";
// keyword const
// declares a new variable, give it a name
// assign a value to the variable
// value ("Jake")

// console.log(myName);

// let message = "Hello";
// // message[0] = "C"
// message = "Cello";
// console.log(message[0]);

// const name = "Jake"
// const age = 37
// const isInstructor = true

// const name = "David"
// const age = 30
// const isInstructor = false

// const person1 = {
//   name: "Jake",
//   age: 37,
//   isInstructor: true,
// };

// const person2 = {
//   name: "David",
//   age: 30,
//   isInstructor: false,
//   // 37: "Hello",
// };

// console.log(person1["name"]);
// // console.log(person1.name);

// const users = {
//   "me@jakerobins.com": "Jake Robins",
//   "david@david.com": "David Sooley",
//   // ...
// };

// const email = "me@jakerobins.com";

// console.log(users[email]);
// console.log(users.email); // will not work

// const myObj = {
//   // Object Literal
//   key: "value",
// };

// const myObj2 = new Object({
//   key: "value",
// });

// const myObj3 = Object({
//   key: "value",
// });

// const myObj4 = {};

// console.log(myObj);
// console.log(myObj2);
// console.log(myObj3);

// const myObj = {
//   name: "Jake", // can be anything that you can store in a variable
//   age: 37,
//   isInstructor: true,
//   address: {
//     city: "Merida",
//     country: "Mexico",
//   },
// };

// myObj.name = "Jake";
// myObj["name"] = "Jake";
// myObj["address"]["city"];
// myObj.address.city;
// myObj.address["city"]; // why would you do this??????
// myObj["address"].city;

// console.log(myObj["address"]["city"]);

// Primitives in functions
// const age = 37;

// const printNumPlusOne = (num) => {
//   num = num + 1;
//   console.log(num);
// };

// printNumPlusOne(age);
// console.log(age);

// const jake = {
//   name: "Jake",
//   age: 37,
//   isInstructor: true,
// };

// const printAgeAfterOneYear = (person) => {
//   person.age = person.age + 1;
//   console.log(person.age);
// };

// printAgeAfterOneYear(jake);
// console.log(jake.age);

// const jake = {
//   name: "Jake",
//   age: 37,
//   isInstructor: true,
//   cohorts: ["Nov142022", "May162022"],
//   abilities: {
//     sayHello: function () {
//       console.log("Hello!!");
//     },
//     makeYounger: function () {
//       jake.age = jake.age - 1; // this changes!!!
//     },
//   },
// };

// console.log(jake.age);
// jake.abilities.makeYounger();
// console.log(jake.age);

// Using `this` in a nested parent

const jake = {
  age: 37,
  abilities: {
    makeYounger: function () {
      this.parent.age = this.parent.age - 1; // notice this.parent
    },
  },
  init: function () {
    // new init property which is a function
    this.abilities.parent = this; // adds a parent property to abilities that references this
    return this; // return this so that you can initialize the object
  },
}.init(); // immediately invote init, it returns the whole object back into the variable

console.log(jake.age);
jake.abilities.makeYounger();
console.log(jake.age);
