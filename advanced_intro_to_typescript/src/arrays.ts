// const myArr: number[] = [1, 2, 3];
const myArr: Array<number> = [1, 2, 3];

// myArr.charAt(3) // won't work
// myArr.push("Jake");

// unions

// const otherArr: Array<number | string> = [3, "Jake"]
const otherArr: (number | string)[] = [3, "Jake"];

// Tuples

// what

const myTuple: [number, string] = [3, "Jake"];

// React's useState
// const [state, setState] = useState(3);
