let myName: string = "Jake";

// myName = 3 - error

// 7 primitives in Typescript
const myNum = 3;
const myBool = false;
const myNull = null;
// undefined
// string
// BigInt
// Symbol

// Union
let lastName: string | null = "Robins";
lastName = null;

// Type: any
// be very careful with type any - disables type checking for this variable
const myWeirdVar: any = [3, 4, 5];

// example of any?
fetch("www.api.com")
  .then((res) => res.json())
  .then((data) => {})
  .catch((err) => {});
