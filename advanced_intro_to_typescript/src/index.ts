// const users = require("./users.json");
// import users from "./users.json";

type LastName = string | null;

type User = {
  email: string;
  first_name: string;
  last_name: LastName;
  dob?: string;
};

const users: User[] = [
  {
    first_name: "Upton",
    last_name: "Santos",
    email: "nibh.vulputate.mauris@outlook.ca",
    dob: "1965-12-13",
  },
  {
    first_name: "Kimberley",
    last_name: "Fletcher",
    email: "pretium.aliquet.metus@hotmail.com",
    dob: "1961-57-27",
  },
  {
    first_name: "Bradley",
    last_name: null,
    email: "aliquet.libero@outlook.ca",
    dob: "1976-38-13",
  },
];

const getUserFullNameByEmail = (email: string): string | undefined => {
  const user = users.find((user) => user.email === email);

  // undefined or User

  if (user === undefined) {
    return undefined;
  }

  // User

  if (typeof user.last_name !== "string") {
    return user.first_name;
  }

  if ("dob" in user) {
    // handle undefined properties
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
console.assert(
  getUserFullNameByEmail("aliquet.libero@outlook.ca") === "Bradley"
);
console.assert(getUserFullNameByEmail("notreal@email.com") === undefined);
// console.assert(getUserFullNameByEmail([]) === undefined);
// console.log(getUserFullNameByEmail("aliquet.libero@outlook.ca"));
