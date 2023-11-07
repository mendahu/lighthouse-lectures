const users = require("./users.json");

const getUserFullNameByEmail = (email) => {
  const user = users.find((user) => user.email === email);

  return user.first_name.concat(" ", user.last_name);
};

// test cases
console.assert(
  getUserFullNameByEmail("nibh.vulputate.mauris@outlook.ca") === "Upton Santos"
);
console.assert(
  getUserFullNameByEmail("pretium.aliquet.metus@hotmail.com") ===
    "Kimberley Fletcher"
);
