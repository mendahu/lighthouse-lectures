const nums = [2500, 5000, 500, 754, 755, 756, 757, 758, 2312, 900, 4000, 753];

const myFunc = (delays) => {
  for (const delay of delays) {
    //
    if (delay == 500) {
      // blocking code ??
    }
    setTimeout(() => {
      //
      if (delay == 500) {
        // blocking code ??
      }
      console.log(delay);
    }, delay);
  }
};

myFunc(nums);
