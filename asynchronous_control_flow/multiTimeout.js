const timers = [1000, 5000, 500, 499, 378, 5, 3, 0, 2500];

for (const timer of timers) {
  setTimeout(() => {
    console.log(timer);
  }, timer);
}
