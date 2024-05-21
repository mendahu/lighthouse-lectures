const users = require("./users.json");
// import users from "./users.json";

type User = {
  first_name: string;
  last_name: string | null;
  dob: string;
  email: string;
};

// type guard
const isUser = (user: any): user is User => {
  if (typeof user !== "object") {
    return false;
  }

  if (typeof user.first_name !== "string") {
    return false;
  }

  if (typeof user.last_name !== "string" && user.last_name !== null) {
    return false;
  }

  if (typeof user.dob !== "string") {
    return false;
  }

  if (typeof user.email !== "string") {
    return false;
  }

  return true;
};

const getUserFullNameByEmail = (email: string): string => {
  const user = users.find((user: any) => user.email === email);

  // is user is undefined???
  // narrowing
  if (user === undefined) {
    user;
    return "User not Found";
  }

  if (!isUser(user)) {
    return "User not valid";
  }

  if (user.last_name === null) {
    return user.first_name;
  }

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

// not handled
console.assert(
  getUserFullNameByEmail("aliquet.libero@outlook.ca") === "Bradley"
);

// not handled
console.assert(
  getUserFullNameByEmail("me@jakerobins.com") === "User not Found"
);

// no longer works!
// getUserFullNameByEmail(["me@jakerobins.com"]);
