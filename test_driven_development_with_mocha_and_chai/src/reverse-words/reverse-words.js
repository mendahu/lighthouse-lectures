const reverseWords = (str) => {
  if (typeof str !== "string") {
    return str;
  }

  return str
    .split(" ")
    .reverse()
    .filter((word) => word !== "")
    .join(" ");

  // return words
  // return words
  // return filteredWords.join(" ");
};

module.exports = reverseWords;
