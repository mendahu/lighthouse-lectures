const generateRandomId = () => {
  return Math.random().toString(36).slice(2, 8);
};

module.exports = {
  generateRandomId,
};
