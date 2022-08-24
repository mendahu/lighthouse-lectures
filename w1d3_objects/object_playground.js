const person2 = {
  name: "Nick",
  age: 32,
  isInstructor: false,
  34: true,
  pets: ["Spot", "Percy"],
  dateOfDeath: {
    month: null,
    day: null,
    year: {
      millenium: 2000,
    },
  },
};

console.log(person2.name);
console.log(person2["name"]);

console.log(person2.dateOfDeath.day);
console.log(person2["dateOfDeath"]["day"]);

console.log(person2.dateOfDeath["year"].millenium);

const fetch = () => {
  return "4d2f89";
};

const urls = {
  "4d2f89": "www.google.ca",
  "96e3f6": "www.lighthouselabs.ca",
  b23c4a: "www.gc.ca",
  id: "something"
};

const id = fetch();

urls[id] = "www.yahoo.com";

console.log(urls);

console.log(urls[id]);
console.log(urls.id)

const obj = {
  prop1: "value1",
  prop2: "value2",
};

obj.prop3 = "value3";

console.log(obj);

Immutable Primitives

const printNum = (num) => {
  num = num + 1;
  console.log(num);
};

const age = 37; // number - this is immutable

printNum(age); // 38
console.log(age); // 37

Mutable Objects

const printAge = (instructor) => {
  instructor.age = instructor.age + 1;
  console.log(instructor.age);
};

const person = {
  name: "Jake",
  age: 37,
};

printAge(person); // 38
console.log(person.age); // 38

Nested Objects

const person2 = {
  name: "Jake",
  address: {
    city: "Merida",
    country: "Mexico",
  },
};

const person3 = {
  address: person2.address,
};

1 drwer for person 2 label, object has pointed to all properties with own drawers
1 drawer has address, different properties to different drawers

const introduceSelf = function () {
  console.log(`Person ${this.name} is ${this.age} years old.`);
};

const name = "Jake";

const person2 = {
  age: 37,
  name: name,
  introduceSelf: introduceSelf,
};

const person3 = { ...person2 };
person3.name = "Jim";

person3.introduceSelf();

person2.introduceSelf();

const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
    introduceSelf: function () {
      console.log(`Person ${this.name} is ${this.age} years old.`);
    },
  };

  return person;
};

const person1 = createPerson("Jake", 37);
const person2 = createPerson("Jim", 62);

person1.introduceSelf();
person2.introduceSelf();

const urls = {
  "4d2f89": {
    url: "www.google.ca",
    visited: 12,
  },
  "96e3f6": {
    url: "www.lighthouselabs.ca",
    visited: 18,
  },
  "823c4a": {
    url: "www.gc.ca",
    visited: 10,
  },
};

for...in
like for...of for Arrays

for (const id in urls) {
  console.log(urls[id]["url"]);
  console.log(urls[id].visited);
}

for (const id of urls) {
  console.log(id.url);
  console.log(id.visited);
}
