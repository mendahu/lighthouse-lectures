let iterations = 0;

const callback = () => {
  iterations++;

  console.log("Hello there");

  if (iterations === 10) {
    clearInterval(interval);
  }
};

const interval = setInterval(callback, 1000);

// callback()
