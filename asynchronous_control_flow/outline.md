# Asynchronous Control Flow

## TODO

- Go over to do

## BREAKOUT (10m)

https://gist.github.com/andydlindsay/d586198046d7074d83e371ead76b4f4b

## Review Answers

- For each One pick a group
- Have them present their answer and why
- Run code
- Discuss briefly, but don't give away too much

## Asynchronous Programming vs Synchronous

- JavaScript is a synchronous language, it executes from top to bottom, full stop
- This has an advantage of simplicity, but it creates a problem with long-running code

```js
// Walk through this step my step to demonstrate synchronous flow
const num1 = 2;
const num2 = 5;
const sum = num1 + num2;
console.log(sum);
```

```js
// walk thorugh this to demonstrate blocking code
const stop = 20000;
const startTime = new Date().getTime();

for (let i = 0; i < stop; i++) {
  const date = new Date();
  console.log(date);
}

const endTime = new Date().getTime();
const elapsedTime = endTime - startTime;
console.log(`that took ${elapsedTime}ms to complete`);
```

- In any synchronous languages, this ultimately comes up, and not just for trivial 1M loop examples either
- Code might not just be computationally heavy, it might be explicitly time bound (wait 5 minutes before doing something) or it might have to go outside of your computer/server to somewhere else and use their response in your code. Accessing Browser APIs, Node APIs, Server APIs would all be longer running processes
- This code is called blocking code
- The way around this is to code asynchronously. But how the heck do we do that if JS is synchronous???? How do we make non-blocking code?

## Execution Context and Node

- What even is Node?
  - Server Software (environment)
  - Can interact with server hardware like its network device and its hard drive
  - Runs Javascript using a JS Engine called V8
  - Acts as the interface between The Server and the JS
- Demonstrate Node Diagram
- When we want to do Asynchronous Code, and JS can't do it, we need to go outside of JS for help - to Node!

## SetTimeout

- SetTimeout is the easiest and simplest asynchronous code to start with
- Waiting arbitrary time values would meet our criteria for blocking code, and so we use setTimeout to unblock it

```js
setTimeout(() => {
  console.log("Pluto is a Planet!");
}, 2000);
```

- Define arguments - a callback and a delay
- Show how the callback can be defined inline or outside
- Talk about how to identify a function definition vs an execution ( a call )
- Immediately invoked functions mention
- Notice how the callback is not called anywhere in this function
- What is happening?

- where is setTimeout defined?
- this is a function implemented by Node
- Return to diagram to show how setTimeout Works

- Demonstrate again with some different console logs

```js
console.log("I am printed first");

setTimeout(() => {
  console.log("Printed third!");
}, 2000);

console.log("I am printed second");
```

### Key Takeaways

- JS can't do async code
- Node has to do it for us
- Callbacks in async are executed later, in a different v8 thread

## SetInterval

```js
// stop the interval after 10 iterations
let iterations = 0;

const interval = setInterval(() => {
  iterations++;
  console.log("hello there!");

  if (iterations === 10) {
    clearInterval(interval);
  }
}, 1000);
```

- Walk through implementation with diagram

- Pause for Async questions, how Node works

## High Order Functions

```js
const higherOrderFn = (cb) => {
  const data = {
    username: "alice",
  };

  console.log("before timeout call");

  setTimeout(() => {
    data.username = "bob";
    cb();
  }, 1000);

  console.log("after timeout call");
};

console.log("before main call");
higherOrderFn(() => {
  console.log("inside callback");
});
console.log("after main call");
```

### Multiple setTimeouts

```js
const nums = [2500, 5000, 500, 768, 817, 2345, 612, 499, 1];

const myFn = (delays) => {
  for (const delay of delays) {
    setTimeout(() => {
      console.log(delay);
    }, delay);
  }
};

myFn(nums);
```

### Questions

- What if we changed the order of the array?
- Do the timers start immediately or after the last timer

## File Reading

```js
// sync
const fs = require("fs");

const data = fs.readFileSync("./myFile.txt", { encoding: "utf8" });
// const data = fs.readFileSync("./myBigFile.txt", { encoding: "utf8" });
console.log(data);

console.log("I am here");
```

```js
// async with a callback
const fs = require("fs");

const cb = (err, data) => {
  if (err) throw err;
  console.log(data);
};

fs.readFile("./myBigFile.txt", { encoding: "utf8" }, cb);

console.log("I am here");
```
