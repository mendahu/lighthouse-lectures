# Complex Problem Solving

- Red Green Refactor - importance of refactor
- Building infrastructure around your problem solving process
- Incremental Building - Plan Ahead vs Waste
- Identifying Edge Cases
- Looking for Patterns, using existing methods/functionality
- Writing out steps/scaffolding
- Pseudocoding

## Test 2, Question 3

Implement the function as defined below.

Many programming languages have a `range()` functionality which will generate an array of numbers that increment from either 0 or 1 up to the number of digits requested. For example, range(10) might return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] or it might return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] depending on the implementation. Some even allow you to control the direction.

Unfortunately, JavaScript doesn't have a built-in range() function, so we want you to build one. Build out the function range() so that it takes three parameters:

1. The number of integers to generate
2. A boolean for whether to skip 0 or not (true: skip zero)
3. A boolean for whether the range should be in reverse/decreasing order or regular/increasing order (true: reverse/decreasing order)

If a non-number is passed in for the first argument, return an empty array.

Pro Tip: Remember to work incrementally. Start off just implementing the false and false scenario for the second and third parameters. In other words, focus on the zero-based, ascending range first. Work on edge cases at the very end (such as passing in a string instead of a number, as shown in the final example below.)

**Examples:**

- range(10, false, false) should return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
- range(10, true, false) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- range(10, true, true) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
- range(10, false, true) should return [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
- range(3, true, false) should return [1, 2, 3]
- range(0, false, <anything>) should return [0]
- range(10) should do the same thing as range(10, false, false)
- range(10, true) should do the same thing as range(10, true, false)
- range("2", <anything>, <anything>) should return []

```javascript
const range = function (count, skipZero, descending) {
  //implement me
};
```

# Recursion

- Looking for patterns / identifying when recursion is needed
  - Recursion in place of loops
- Base Case - what is it
- When you need to track information outside the loop

```javascript
// Example Recursion in place of normal loop

const logger = (arr) => {
  // for (const string of arr) {
  //   console.log(string);
  // }

  // arr.forEach((str) => console.log(str));

  const log = (i = 0) => {
    console.log(arr[i]);
    i < arr.length - 1 && log(i + 1);
  };

  log();
};

const sample = ["hello", "world", "bananas", "mexico", "tornado", "coffee"];
logger(sample);
```

## Test 3, Question 3

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value: [key, value]. However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- `deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])`
  => `{ a: 1, b: 2, c: { d: 4 } }`
- `deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])`
  => `{ a: 1, b: 2, c: { d: { e: 5, f: 6 } } }`

```javascript
const deepArrayToObject = function (arr) {
  // IMPLEMENT ME
};
```

## Test 3, Question 4

Given a size in bits convert it to relevant size in B/KB/MB/GB/TB. Round your answers to two decimal places at most. Use base 10 for sizes.

- 1 B
- 1 kB == 1000 B
- 1 MB == 1000 kB
- 1 GB == 1000 MB
- 1 TB == 1000 GB

More info on these in case you are curious:
https://en.wikipedia.org/wiki/Byte#Unit_symbol

Examples:

- filesize(1) => "1B"
- filesize(1000) => "1kB"
- filesize(1000000) => "1MB"
- filesize(1500000) => "1.5MB"
- filesize(1250000000) => "1.25GB"
- filesize(9000000000000) => "9TB"

```javascript
const filesize = function (bytes) {
  // IMPLEMENT ME
};
```

# Array.reduce()

- Learning Array Methods Importance
- Why "reduce"
- Carrying along data
- Walkthrough Reduce Functionality

## Test 1, Question 0

SUM - the sum of the numbers in a list - safe to assume that all items are numbers already

For example:
`sum([6,2,3,4,9,6,1,0,5])`

Returns:
`36`

```javascript
const sum = function (arr) {
  /* IMPLEMENT ME */
};
```

## Test 2, Question 2

Implement a function called countWhich() which will take in a list of items and a callback, and it will return the number of elements which return a truthy value from the callback function.

If the first argument is not an array, our function should return false instead of a number.

Examples:

- `countWhich([1, 2, 3, 4, 5], function(num) { return (num > 4); })` returns `1` (only matches 5)
- `countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit[0] === "a"; })` returns `1` (only matches apple)
- `countWhich([10, 20, 30, 40, 50], function(num) { return num % 7 === 0; })` returns `0` (none of the numbers are divisible by 7)
- `countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit.length > 5; })` returns `2` ("apple" is shorter than 6 characters)
- `countWhich([], function(x) { return x > 10 })` returns `0`
- `countWhich("This should fail", function(word) { return true; })` returns `false` (because the first argument is not an array)

```javascript
const countWhich = function (list, cb) {
  // implement me
};
```

Write a function which will split an array into two arrays (i.e. partition it).

It will take two parameters, the first is an array of Integer values, and the second will be a callback which will return a boolean. If the callback returns true for an element, it should be placed into the left array, otherwise it should be placed into the right array.

Examples:

- partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0)
  => [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
- partition([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], n => n < 0)
  => [[-5, -4, -3, -2, -1], [0, 1, 2, 3, 4, 5]]

```javascript
const partition = function (arr, callback) {
  // IMPLEMENT ME
};
```

## Test 3, Question 2

rite a function which will split an array into two arrays (i.e. partition it).

It will take two parameters, the first is an array of Integer values, and the second will be a callback which will return a boolean. If the callback returns true for an element, it should be placed into the left array, otherwise it should be placed into the right array.

Examples:

- partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0)
  => [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
- partition([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], n => n < 0)
  => [[-5, -4, -3, -2, -1], [0, 1, 2, 3, 4, 5]]

```javascript
const partition = function (arr, callback) {
  // IMPLEMENT ME
};
```
