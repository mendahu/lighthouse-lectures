// function which console.log()s everything string in an array
const arrOfString = ["hello", "world", "mexico", "bananas", "coffee"];

const logger = (arr) => {
  // for (const string of arr) {
  //   console.log(string);
  // }

  // arr.forEach((str) => console.log(str));

  const log = (i) => {
    console.log(arr[i]);
    i < arr.length - 1 && log(i + 1);
  };

  log(0);
};

// console.log everything!!!!
logger(arrOfString);
