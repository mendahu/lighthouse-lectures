# W01D03 - Objects in JS

### To Do

- [ ] Review primitive types
- [ ] Objects!
- [ ] Passing primitives and objects to functions
- [ ] Functions inside objects (using `this`)
- [ ] Object iteration with `for..in`

# Context

- Context is important!

# Data

- Programming is working with data
- Store data, change data, manipulate it, send it places, receive it form places, detlete it, compare it
- It's important to know how we store it and see it in JavaScript

<!-- `const name = "Jake"` -->

```js
const name = "Jake";
console.log(name);
```

- keyword `const` tells the computer using JavaScript to store some data
- The "value" of this data is "Jake"
- type of data is a `string`
- The data is labelled, or assigned a variable name of `name`

- assigning the `name` variable
- storing "Jake" into constant `name`
- declaring the variable name

- `const` cannot be change // HIGHLIGHT IMPORTANT
- What does this mean? Which part cannot change?
- The value cannot change?
- `const` refers to the variable name, the label

- A string, like all JavaScript primitives, is immutable

```js
let name = "Jake";
name = "Jim";
```

1. Put "Jake" in a drawer
2. We put a label on it that says "name"
3. Put "Jim" in a new drawer
4. Move the label from the Jake drawer to the Jim drawer

# Primitives

- Primitives or Primitive Data Types are a kind of data or a way to categorize data
- JavaScript has 7 kinds of Primitives

1. String ("Jake")
2. Boolean (true or false)
3. undefined
4. null
5. number
6. Symbol // a kind of unique value
7. BigInt // Numbers that don't fit in the regular number type

# Objects!!!!!!

```js
// const name = "Jake"
// const age = 37;
// const isInstructor = true;

const person1 = {
  name: "Jake",
  age: 37,
  isInstructor: true
}

const person2 = {
  name: "Nick",
  age: 32,
  isInstructor: false,
  34: true,
  pets: ["Spot", "Percy"]
  dateOfDeath: {
    month: null,
    day: null,
    year: {
      millenium: null
    }
  }
}

console.log(person2.dateOfDeath) // undefined

console.log(`${person1.name} is ${person1.age} years old.`)
```

## Characteristics

1. All objects are composed of key/value pairs

- Called a Property and Value

2. They are wrapped in the curly braces
3. The amount of key value pairs is variable

- Also see objects in other programming languages, but the names may be different. Maps, Dictionaries, Hashes

# Syntax

## Creating new Objects

1. Object Literal

`const obj = { property: "value" }`

2. Use the Object constructor

`const obj = new Object({ property: "value" })`

## Read Objects

```js
const person2 = {
  name: "Nick",
  age: 32,
  isInstructor: false,
  34: true,
  pets: ["Spot", "Percy"]
  dateOfDeath: {
    month: null,
    day: null,
    year: {
      millenium: null
    }
  }
}
```

1. Dot Notation

- For when we know the property name

`console.log(person2.name)`

- Chain dot notation

`console.log(person2.dateOfDeath.year.millenium)`

2. Square Bracket Notation

- Can be used in place of dot notation

`console.log(person2["name"])`

- Is for when you don't know the name of the property/key
- Dynamic property names

`console.log(urls[id]);`

## Writing new values

- Use same dot or square bracket notation
- assign the new value using =

`obj["prop2"] = "value3";`

## Updating values

- Same as writing new ones!!!! Easy peasy

# Objects and Mutability

- Objects are sort of references in and of themselves

```js
const person1 = {
  name: "Jake",
  age: 37,
  isInstructor: true,
};
```

## Drawer Analogy

- 1 drawer has the "object" in it (so the name person1, and the structure) // mutable
- 3 other drawers have the properties // these are immutable

- The drawer with the object has its name and roadmap to properties, but not the data itself
- This drawer can be referenced from multiple places (ie. different variables or properties of objects)

# Other values in Objects

- Primitives, Nested Objects, Arrays
- What about functions????

- you can store in a property anything that can be stored in a variable
- So since functions can be in a variable, they can be in a property
- Created, accessed the same way as any other property
- Can be called, cause they are a function!!! ()

# THIS

- the `this` keyword can be used in an object to refer to itself.
- it is dynamic, allowing its context to always match where it is (important)
- Use it inside functions as properties to access object data for fun, dynamic functionality!!!111

# Arrays vs Objects

## Arrays

- Arrays are useful when:
  - You want to iterate over all the values often
    - A list of emails you need to send something to `["jake@jake.com", "jim@jim.com"]`
  - When the order of the data is important
    - List of directions `["go 100m forward", "turn left", "go 150m forward", "turn right"]`
  - Length is important
    - Array of goals scored in hockey game `["Jake", "Jim", "Jake"]`

## Object

- Objects are useful when
  - You want to access specific parts of the data and you know what they are
  - Complex nested information

THAT BEING SAID

_You can loop over objects._

- For...in
- Remember that the const in for...in is the key and not the value.
