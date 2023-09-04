export const generateRandomHexCode = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

export const dbCall = (wait = 300) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(generateRandomHexCode());
    }, wait);
  });
};
