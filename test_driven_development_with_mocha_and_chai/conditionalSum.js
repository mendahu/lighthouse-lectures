const conditionalSum = (values, condition) => {
  if (typeof values === "string" || typeof values === "number") {
    throw new Error(
      `values must be an array of numbers, not a ${typeof values}!`
    );
  }

  if (condition !== "even" && condition !== "odd") {
    throw new Error("Condition must be even or odd");
  }

  let sum = 0;

  for (const num of values) {
    const modulus = num % 2;

    if (condition === "even" && modulus === 0) {
      sum += num;
    }

    if (condition === "odd" && modulus !== 0) {
      sum += num;
    }
  }

  return sum;
};

module.exports = {
  conditionalSum,
};
