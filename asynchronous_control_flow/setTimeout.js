const otherfunc = require("./otherFile");

const plutoVindicator = () => {
  console.log("Pluto is Planet!!!!");
};

// const setTimeout = (cb, timeout) => {
//   console.log("Hello");
// };

// const someFunc = () => {

// }

otherfunc();

setTimeout(plutoVindicator, 1000);

otherfunc();

// setTimeout();
// arg 1 - callback function
// arg 2 - timeout in ms (number)

// someOtherfuntion();

console.log("Hello!");
