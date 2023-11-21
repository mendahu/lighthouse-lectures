// const age = 38;

// const printNum = (num) => {
//   num = num + 1;

//   console.log(num);
// };

// printNum(age);
// console.log(age);

const jake = {
  name: "Jake",
  age: 38,
  isInstructor: true,
};

const printAge = (person) => {
  person.age = person.age + 1;
  console.log(person["age"]);
};

printAge(jake);
console.log(jake.age);
