export const dbCall = (wait = 300) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomCode = Math.floor(Math.random() * 16777215).toString(16);
      resolve(randomCode);
    }, wait);
  });
};
