// describe
// it

const add = require("../add");
// const assert = require("assert");
const assert = require("chai").assert;

// const assert = chai.assert
// const expect = chai.expect
// const should = chai.should()

describe("add function", () => {
  it("should return 4 when I give it 2 and 2", () => {
    assert.equal(add(2, 2), 4);
  });

  it("should throw an error", () => {
    throw new Error("Whomp whomp");
  });
});
