const add = (num1, num2) => num1 + num2; // whooops???!

const assertEqual = (val1, val2) => {
  return val1 === val2;
};

console.log(assertEqual(add(2, 2), 4));
