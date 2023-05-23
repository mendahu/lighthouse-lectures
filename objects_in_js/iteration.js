const nameLookup = {
  "me@jakerobins.com": "Jake Robins",
  "you@you.com": "You Yourself",
  "them@them.com": "Them Themselves",
};

for (const email in nameLookup) {
  console.log(email);
}

const names = ["jake", "jim", "jack"];

for (const name of names) {
  console.log(name);
}

const emailArray = Object.keys(nameLookup);

for (let i = 0; i < nameArray.length; i++) {
  console.log(emailArray[i]);
  console.log(nameLookup[emailArray[i]]);
}
