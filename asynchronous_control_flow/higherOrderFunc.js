const higherOrderFunc = (cb) => {
  const data = {
    username: "Jake",
  };

  console.log("before a setTimeout");

  setTimeout(() => {
    data.username = "Jim";
    cb();
  }, 1000);

  console.log("after the timeout call");
};

console.log("before the main call");
higherOrderFunc(() => {
  console.log("inside callback");
});
console.log("after the main call");

// callback()
