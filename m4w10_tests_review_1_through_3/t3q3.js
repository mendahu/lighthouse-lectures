const deepArrayToObject = function (arr) {
  const obj = {};

  for (const keyValue of arr) {
    // let value;

    // if (Array.isArray(keyValue[1])) {
    //   value = deepArrayToObject(keyValue[1]);
    // } else {
    //   value = keyValue[1];
    // }

    // obj[keyValue[0]] = value;

    const key = keyValue[0];
    const value = keyValue[1];
    const isArray = Array.isArray(keyValue[1]);

    obj[key] = isArray ? deepArrayToObject(value) : value;
  }

  return obj;
};

console.log(
  deepArrayToObject([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);
// { a: 1, b: 2, c: 3 }`
console.log(
  deepArrayToObject([
    ["a", 1],
    ["b", 2],
    ["c", [["d", 4]]],
  ])
);
// `{ a: 1, b: 2, c: { d: 4 } }`
console.log(
  deepArrayToObject([
    ["a", 1],
    ["b", 2],
    [
      "c",
      [
        [
          "d",
          [
            ["e", 5],
            ["f", 6],
          ],
        ],
      ],
    ],
  ])
);
// `{ a: 1, b: 2, c: { d: { e: 5, f: 6 } } }`
