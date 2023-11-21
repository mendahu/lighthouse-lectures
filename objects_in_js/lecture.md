# W01D03 - Objects in JS (and data!!!)

### To Do

- [ ] Review primitive types
- [ ] Objects!
- [ ] Passing primitives and objects to functions
- [ ] Functions inside objects (using `this`)
- [ ] Object iteration with `for..in`

## Data!!!

- Data is the core of everything we do
- As developers, and through this course, you will become experts in data!!!

## Primitives

- there are 7 different primitive data types in JavaScript

  - String
  - Boolean
  - Number
  - Null
  - Undefined
  - Symbol
  - BigInt

- Key characteristics of primitives is:
  - IMMUTABILITY
  - variables can be reassigned, but primitive values cannot be changed

## Objects

- Why do we need objects???
  - Grouping related data
  - Namespacing data
  - Consistent structure for data manipulation
- Objects are collections of key- value pairs
- keys can be called properties
- keys are always strings OR Symbols
- All programming languages have something like an object, though it may be called something different

// break return at :00

## Passing Data to Functions

- Primitives and Objects behave differently when passed into functions
- Primitives are passed into functions _by value_
- Objects are different!
- Objects are passed in to functions _by reference_

## Other fun stuff with Objects

- Objects can be nested
- Arrays can be values in Objects
- Primitives can be values in Objects
- Functions can be values in Objects

## Arrays

- Ararys and Objects _are_ different and serve different purposes

- Arrays are useful when yo need to iterate
- Arrays are great when order is important
- Arrays are great if the length of data is important

- Use Case 1: Objects are useful when you want to group data that is related
  - and access it by its known key values
- Use Case 2: Lists of data with the same structure that you want to look up by values
  - That being said.....you can loop through objects
