// bcryptjs

const bcrypt = require("bcryptjs");

// one way conversion

// `password` -> algorithm -> Hash

// password
// passsword1
// test
// testpassword

// SALTING

const salt = bcrypt.genSaltSync(10);

console.log(salt);

const hash = bcrypt.hashSync("password", salt);

console.log(hash);

const matches = bcrypt.compareSync("bad", hash);

console.log(matches);
