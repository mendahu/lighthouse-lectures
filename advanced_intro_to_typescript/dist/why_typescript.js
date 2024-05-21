"use strict";
const users = require("./users.json");
// type guard
const isUser = (user) => {
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
const getUserFullNameByEmail = (email) => {
    const user = users.find((user) => user.email === email);
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
console.assert(getUserFullNameByEmail("nibh.vulputate.mauris@outlook.ca") === "Upton Santos");
console.assert(getUserFullNameByEmail("pretium.aliquet.metus@hotmail.com") ===
    "Kimberley Fletcher");
// not handled
console.assert(getUserFullNameByEmail("aliquet.libero@outlook.ca") === "Bradley");
// not handled
console.assert(getUserFullNameByEmail("me@jakerobins.com") === "User not Found");
// no longer works!
// getUserFullNameByEmail(["me@jakerobins.com"]);
