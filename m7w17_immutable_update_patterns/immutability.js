const user = {
  name: "Jake",
  age: 37,
  favFoods: ["pizza", "pasta", "beer"],
};

// shallow copy

const otherUser = { ...user, favFoods: [...user.favFoods, "bread"] };

console.log(user);
console.log(otherUser);

// / Back at 14:10 EDT!!!
