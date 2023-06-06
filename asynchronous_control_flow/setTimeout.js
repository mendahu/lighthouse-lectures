const callback = () => {
  console.log("Pluto is a planet!!!");
};

console.log("before the setTimeout");

setTimeout(callback, 0);

// what if there was blocking code?
// const loops = 20000;

// for (let i = 0; i < loops; i++) {
//   const date = new Date();
//   console.log(date);
// }

console.log("after the setTimeout");

// Define setTimeout
// function
// takes two arguments
// - first arg is a callback function
// - second arg is a delay in ms

// A function is called when () are placed after the reference

// :10
