// const myName = "Jake";
// const age = 38;
// const isInstructor = true;

const person1 = {
  name: "Jake",
  age: 38,
  isInstructor: true,
};

const printData = (person) => {
  console.log(person.name);
  console.log(person.age);
  console.log(person.isInstructor);
};

// const age = 63

// Syntax
// Object literal
const myObj = {};

// using constructor
const myLongObj = new Object({});

// using constructor without NEW
const myKindaLongObj = Object({});

// Accessing object properties (keys)

// square bracket notation
console.log(person1["name"]);
const key = "name";
console.log(person1[key]);

const person2 = {
  name: "Jim",
  location: {
    city: "Chicago",
    state: "IL",
  },
};

console.log(person2["location"]["city"]);

// dot notation
console.log(person1.name);
console.log(person1.key); // won't work
console.log(person1["name"]);
console.log(person1[key]); // will work

// common application of dynamic keys
const emails = {
  "me@jakerobins.com": "Jake Robins",
  "me@jimrobins.com": "Jim Robins",
  //
};

const email = "me@jimrobins.com";

console.log(emails[email]);

// Writing and Updating

person1["city"] = "Merida"; //  add value
person1["city"] = "Tamanche"; // update value
person1.age = 39; // dot notation update
