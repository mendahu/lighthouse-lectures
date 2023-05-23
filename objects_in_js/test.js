// const myName = "Jake";
// console.log(myName);

// Creating variable name
// Attaching "Jake" to it

// Storing data inside myName

// const - JavaScript keyword or a reserved word to create a new variable
// myName - Name of the variable (think of this as a label)
// = - Assigning data to the variable we made
// "Jake" - Value that is stored

// let myOtherName = "Robins";
// myOtherName = "Super Guy";
// myOtherName = 3;
// myOtherName = "Robins";
// console.log(myOtherName);

// Objects

const myName = "Jake";
const age = 38;
const isIntructor = true;

const person1 = {
  name: "Jake",
  age: 38,
  isInstructor: true,
};

// const myOtherGuysName = "Jim"

const person2 = {
  name: "Jim",
  age: 62,
  isInstructor: false,
};

// Syntax for working with Objects

// Making a new Object

const myObj = new Object({ id: 1 });
const myObj2 = Object({ id: 2 });
const myObj3 = { id: 3 };

// reading objects

console.log(myObj["id"]);
// All object keys (properties) are either strings (or symbols)

// You can use the square bracket notation to pass in variables instead
const id = "id";
console.log(myObj[id]);
console.log(myObj.id); // myObj["id"] - exact same

// two big groups of objects
// 1. collection of related data
// 2. Lookup table or a list of records

const nameLookup = {
  "me@jakerobins.com": "Jake Robins",
  "you@you.com": "You Yourself",
};

// can't do nameLookup.me@jakerobins.com

const email = "me@jakerobins.com";
console.log(nameLookup[email]);

// Writing values

nameLookup["them@them.com"] = "Them Themselves";
nameLookup["me@jakerobins.com"] = "Jake Robins the 3rd";
person1.name = "Jake Robins the 3rd";

// :00 return
