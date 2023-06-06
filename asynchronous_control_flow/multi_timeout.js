const nums = [2500, 5000, 500, 768, 499, 1, 2499];

const myFunc = (delays) => {
  for (const delay of delays) {
    setTimeout(() => {
      console.log(delay);
    }, delay);
  }
};

myFunc(nums);
