### To Do

- [ ] Breakout! 20 minutes
- [ ] Asynchronous Programming
- [ ] Blocking vs Non-Blocking
- [ ] `setTimeout` and `setInterval`
- [ ] File System Functions (`fs`)

# Breakout

- Back at 12:17

# Asynchronous Programming / Control Flow vs Synchronous

- JavaScript is a synchronous Programming Language
  - One thing at a time
  - Top to bottom
  - No multitasking, no extra threads, nothing!!!
- Simple, straightforward and easy to understanding

```js
const num1 = 5;
const num2 = 2;
const sum = num1 + num 2;
console.log(sum)
```

- Disadvantage of synchronous code, is that we have a problem with something called Blocking Code
- Blocking Code is code that takes a long time to complete
- Some examples of blocking
  - Computationally heavy - literally computer has lots of math to do, takes a while
  - Arbitrary delay
  - Network request

# Solution - We ask for help!!!

- Node.JS
  - Server Software (environment)
  - Can interact with hardware on the computer
  - Runs JavaScript - uses a Javascript engine called V8
  - Acts as an interface between the script and the computer

// return :10
