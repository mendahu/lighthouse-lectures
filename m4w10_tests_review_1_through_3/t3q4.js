const filesize = function (bytes) {
  // if (bytes < 1000) {
  //   return `${bytes}B`;
  // }

  // if (bytes < 1000000) {
  //   return `${bytes / 1000}kB`;
  // }

  const prefixes = ["", "k", "M", "G", "T", "P", "E", "Y"];

  // let i = 0;

  const parser = (val, i) => {
    // if (val < 1000) {
    //   return `${val}${prefixes[i]}B`;
    // } else {
    ///???
    //   return parser(val / 1000, i + 1);
    // }

    // const newIteration = i + 1;

    return val < 1000 ? `${val}${prefixes[i]}B` : parser(val / 1000, i + 1);
  };

  return parser(bytes, 0);
};

console.log(filesize(1)); //1B check!
console.log(filesize(1000));
console.log(filesize(1000000));
console.log(filesize(1500000));
console.log(filesize(1250000000));
console.log(filesize(8000000000000));
console.log(filesize(6000000000000000));
console.log(filesize(4000000000000000000));
console.log(filesize(3000000000000000000000));
