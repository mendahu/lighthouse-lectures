const myFunc = (param: string, secondParam: number): number => {
  return param.length;
};

const higherOrderFunc = (
  callback: (param: string, secondParam: number) => number
): void => {
  callback("Jake", 3);
};
