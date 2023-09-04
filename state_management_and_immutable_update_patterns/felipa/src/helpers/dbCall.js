export const dbCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
};
