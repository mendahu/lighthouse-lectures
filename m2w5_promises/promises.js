// what is a promise
// a javascript representation of an async action
// an object Class methods, instance, internal state
// store it in a variable
// Promises have two states
// - State: PENDING
// - State: FULFILLED -> two sub states Resolved, Rejected
// Promises have special methods to define behaviour
// based on what happens when it is fulfilled

// what a promise might look like under the hood?
// class Promise {
//   constructor() {
//     this.state = "PENDING"
//   }

//   then() {
//     // when the promise is fulfilled, do this
//   }
// }

const fs = require("fs/promises");
const request = require("request-promise-native");

// Full promise chain example of previous call back idea
fs.readFile("files/name.txt", "utf8")
  .then((name) => {
    return request(`https://api.agify.io?name=${name}`);
  })
  .then((response) => {
    const { age, name, count } = JSON.parse(response);
    const msg = `${name} is probably ${age} years old? Who knows? This has been asked ${count} times!!!`;
    return fs.writeFile("files/result.txt", msg, "utf8");
  })
  .then((res) => {
    console.log("File written successfully!!!!");
    return 1; // you can even just return your own hard coded data down the chain
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    // runs no matter the fulfilled status, resolved or rejected
    console.log("Process complete");
  });

// const thenPromise = readFilePromise.then((data) => {
//   console.log(data);
// });

// thenPromise.then(() => {
//   console.log("Hey another promise!!!");
// });

// console.log(readFilePromise);

// Make your own promises! Easy peasy
const newPromise = new Promise((resolve, reject) => {
  if (100 > 500) {
    resolve("yes");
  } else {
    reject("no");
  }
}); // new Date()

newPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

// Dealing with multiple promises in parallel
const firstPromise = request(`https://api.gify.io?name=Jake`);
const secondPromise = request(`https://api.agify.io?name=Jas`);
const thirdPromise = request(`https://api.agify.io?name=Harinder`);

// Promise.all - wait for all to fulfill as RESOLVED
// Promise.allSettled - wait for all to fulfill, RESOLVED or REJECTED
// Promise.race - wait for the first promise to fulfill as RESOLVED
// Promise.any - wait for the first promise to fulfill, RESOLVED or REJECTED

Promise.all([firstPromise, secondPromise, thirdPromise])
  .then((data) => {
    console.log(data);
    console.log("All good!");
  })
  .catch((err) => {
    console.error("Womp");
  });
