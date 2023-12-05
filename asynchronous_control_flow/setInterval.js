let iterations = 0;

const interval = setInterval(() => {
  iterations++;
  console.log("Pluto is a planet!!!1");

  if (iterations >= 10) {
    clearInterval(interval);
  }
}, 1000);
