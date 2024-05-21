const myFunction = (param: string): string | null => {
  if (param === "") {
    return null;
  }

  return param;
};

function myOtherFunction(param: string): string {
  return param;
}

let myUndefinedFunc: (param: string) => string;

// myUndefinedFunc = (banana: number) => {
//   return banana;
// };
