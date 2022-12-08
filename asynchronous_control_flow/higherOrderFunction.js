const higherOrderFunc = (cb) => {
  const data = {
    planet: "Pluto",
  };

  console.log("Before the timeout");

  setTimeout(() => {
    data.planet = "Moon";
    cb(data);
  }, 1000);

  console.log("After the timeout");
};

console.log("Before the main call");
higherOrderFunc((data) => {
  console.log("Inside callback", data.planet);
});
console.log("After main call.");
