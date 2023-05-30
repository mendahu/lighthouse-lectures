const add = (num1, num2) => num1 + num2;

const assertEqual = (val1, val2) => {
  return val1 === val2;
};

console.log(assertEqual(add(2, 2), 4));
console.log(assertEqual(add(3, 7), 10));
console.log(assertEqual(add(-1, 2), 1));
