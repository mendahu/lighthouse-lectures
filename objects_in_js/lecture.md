# W01D03 - Objects in JS

### To Do

- [ ] Review primitive types
- [ ] Objects!
- [ ] Passing primitives and objects to functions
- [ ] Functions inside objects (using `this`)
- [ ] Object iteration with `for..in`

## Data

### Primitives

- There are 7 Primitive Data Types in JS
  - string
  - bigint
  - boolean
  - Symbol
  - number
  - null
  - undefined
- Primitives are immutable

### Objects

- Why use an object?
  - Container with special characteristics
  - Store more linked information than a primitive
  - Better define/charcterize data
  - Cooked meal vs ingredients
  - Helps namespace data

### Working with Objects

- Reading Objects
  - Square Bracket Notation for specific keys or dynamic keys
  - dot notation for specific keys only!!!!1
- Creating Objects
  - Class COnstructor (`new Object()`)
  - Omit the "new" (`Object()`)
  - Object Literal (`= {}`)
  - Empty Objects are allowed (`{}`)
- Writing Values to OBjects / Changing values
  - Use the same syntax as reading (square bracket or dot), but use the assignment operator (`=`)

### Passing Data into Functions

- Primitives are passed in to functions by their value
  - the parameter name is a new variable with the same value
  - the original variable remains untouched
- Objects are passed by reference
  - the parameter name is pointing to the same place as the original variable name
  - two labels on the same drawer!!!!1

### Functions as object values

- Functions can be stored as values in objects
- `this` can be used in a function to refer to parent object
  - be careful with function expression vs declaration - it will change context of `this`
  - be careful with nested functions, it will change the context of `this`!!!

### Objects vs Arrays

- Why would we use an Object vs an Array?
- Objects
  - the data is related but the pieces are their own special snowflalkes, have their own identity or meaning
  - When you plan on working with a specific part of the data at one time
- Arrays
  - Iterate over data, array is _probably_ correct
  - The order of the data is important
  - Length is important, quantity of data

### Iteration

- Looping over data is a very "array"-like behaviour
- BUT
- Objects can be iterated over
- Array
  - `for (const el of array)`
  - [1, 2, 3] -> el == 1 or 2 or 3
  - `.forEach((el) => //do something)`
- Objects
  - `for (const key in object)`
  - { name: "Jake", age: 37 }
  - key = "name" or "age"
  - object[key]
