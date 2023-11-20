# W01D03 - Objects in JS

### To Do

- [ ] Review primitive types
- [ ] Objects!
- [ ] Passing primitives and objects to functions
- [ ] Functions inside objects (using `this`)
- [ ] Object iteration with `for..in`

# Little Intro

- Talk about myself
- Talk about context

# Working with Data

- In all programming languages, ultimately what you're doing is working with data
- We create, store, change, manipulate, delete, compare, send, receive and define data.
- Data is at the core of what we do - imagine facebook without data
- You will become experts and working with data through bootcamp
- Since we have to work with so much data, all programming languages including JS have a way to store it. Let's review how that works

```js
const myName = "Jake";
console.log(myName);
```

- Review: keyword `const`, variable name, data
- Review how it is stored in the computer memory
- Drawers example with label maker

# Primitives

- JavaScript has 7 primitive types:
  - Boolean
  - Null
  - Undefined
  - Number
  - BigInt
  - String
  - Symbol

* Primitives are immutable (do a mutability example and a let example)

```js
let myName = "Jake";
myName[0] = "R";
console.log(myName); // Jake

myName = "Rake";
console.log(myName); // Rake
```

# Objects

- Why use an object? Sometimes, data is related
  - Use name (string), age (number), isInstructor (boolean) examples

```js
// const myName = "Jake"
// const age = 38
// const isInstructor = true;

const person1 = {
  name: "Jake",
  age: 38,
  isInstructor: true,
};

const person2 = {
  name: "Jim",
};

const printData = (person) => {
  console.log(
    `${person.name} is ${person.age} years old and is ${
      person.isInstructor ? "" : "not "
    }an instructor.`
  );
};

printData(person1);
```

- Objects allow us to group data together into a single place that can be referenced
- Objects work using key value pairs, which are like their own little variables inside an object
  - Vocabulary is important here - Key vs Value, Property Vs Value, Property vs Key
  - Keys are always strings or symbols, values can be anything that can otherwise be stored in a variable
- Example, group name, age, isInstructor together
- Name space is valuable as well, if you have multiple entities with similar data
- Example of student in the database
- All languages have some kind of object like structure, it might be called a Map, a Dictionary, a Hash

## Syntax

- Object literal notation vs Constructor (even skip new)
  - You can make empty objects, too, with both
- Reading values
  - dot notation
  - square bracket notation with dynamic data
  - Nested objects, chaining dots or brackets
- Writing new values
  - dot notation
  - square bracket
- Updating values
  - dot notation
  - square bracket notation

# Passing values in to functions

- Objects are different from primitives in how they are passed into a function.

## Primitive

```js
const age = 38;

const printNum = (num) => {
  console.log(num);
};

printNum(age); // 38
```

- In this case, `age` and `num` do not refer to the same specific value. It's in a new drawer. Here's how we can test it.

```js
const age = 38;

const printNum = (num) => {
  num = num + 1;
  console.log(num);
};

printNum(age); // 39
console.log(age); //38
```

## Objects

- Objects are passed in by reference
- Two labels pointing to same drawer

```js
const jake = {
  name: "Jake",
  age: 38,
  isInstructor: true,
};

const printAge = (instructor) => {
  instructor.age = instructor.age + 1;
  console.log(instructor.age);
};

printAge(jake); // 39
console.log(jake.age); // 39
```

# Other data than primitives inside objects

- Objects can be nested
  - Show example
  - Show read notation, mix and match
- Arrays can be data
- Functions can be data too

```js
const jake = {
  name: "Jake",
  age: 38,
  isInstructor: true,
  sayHello: function() {
    console.log("Hello!)
  }
};

jake.sayHello();
```

- You can use `this` keyword to access data on the object, too

```js
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
```

# Arrays vs Objects and for loops

- Arrays and Objects are different and serve different purposes
- Arrays are useful when you need to iterate over all the data, when the order is important, when the length of the data is important

  - Iterate: List of emails to send
  - Order: Directions
  - Length: goals in a hockey game

- Objects are useful when you want to group data that is related but usually only plan on accessing specific parts of it at once time, ie when you know the key
- Objects useful for complex data with nested values
- That being said, you _can_ loop over Objects using `for...in`
