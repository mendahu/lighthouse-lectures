const higherOrderFunc = (cb) => {
  const data = {
    firstName: "Jake",
  };

  console.log("before timeout", data.firstName);

  setTimeout(() => {
    data.firstName = "Jim";
    cb(data.firstName);
  }, 1000);

  console.log("after timeout");
};

console.log("before higher order call");
higherOrderFunc((name) => {
  console.log("inside callback");
  console.log(name);
});
console.log("after higher order call");
