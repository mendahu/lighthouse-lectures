const range = function (count, skipZero, descending) {
  if (count === 0) {
    return [0];
  }

  if (typeof count !== "number") {
    // anything but a number string, nan, object, boolean
    return [];
  }
  // let end;

  // if (skipZero) {
  //   end = count + 1; // 11
  // } else {
  //   end = count; // 10
  // }

  const end = skipZero ? count + 1 : count;

  // let start;

  // if (skipZero) {
  //   start = 0 + 1; // 1
  // } else {
  //   start = 0; // 0
  // }

  const start = skipZero ? 1 : 0;

  const array = [];

  for (let i = start; i < end; i++) {
    array.push(i);
  }

  // if (descending) {
  // return array.reverse();
  // }

  // return array;

  // return descending ? array.reverse() : array;;

  descending && array.reverse();

  // descending; // false
  // array.reverse() // true

  // true;
  // end;

  // if (true || false) {

  // }

  return array;
};

console.log(range(10, false, false)); // [0,1,2,3,4,5,6,7,8,9]
console.log(range(10, true, false)); // [1,2,3,4,5,6,8,9,10]
console.log(range(10, true, true)); // [10,9,8,7,6,5,4,3,2,1]
console.log(range(10, false, true)); // [9,8,7,6,5,4,3,2,1,0]
console.log(range(3, true, false)); // [1,2,3]
console.log(range(0, false, "t")); // [0]
console.log(range(10));
console.log(range(10, true));
console.log(range("2", "t", "t"));
