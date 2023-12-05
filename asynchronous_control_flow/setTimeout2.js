console.log("before the setTimeout");

const delay = 1000;

setTimeout(() => {
  console.log("inside the setTimeout");
}, delay);

console.log("after the setTimeout");
