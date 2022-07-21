# Tests 1-3 Review

Requested Topics

- Complex Problem Solving Tips
  - How to break own problems
  - How to move off of memorization to solve problems logically
- Recursion

Other Neat Ideas

- `Array.reduce()`

# Test 2 Question 3

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

## Tips for Problem Solving

- Building infrastructure around your problem solving process
  - Writing out steps/scaffolding
- Incremental Building - Plan Ahead vs Waste
- Looking for Patterns, using existing methods/functionality
- Identifying Edge Cases
- Pseudocoding
- Red Green Refactor - importance of refactor

## Red Green Refacto

- Red - make a test case that fails;
- Green - make the test pass
- Refactor - keep it passing but make the code better!!!!1

# Recursion

- recursion can be used in place of loops
- we don't know how many iterations to do - but while????? loop????

  - nested problems

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
