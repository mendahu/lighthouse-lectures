const { add } = require("../add");
const chai = require("chai");
const assert = chai.assert;

describe("add function", () => {
  it("should return correct values for two integers", () => {
    assert.equal(add(2, 2), 4);
  });
  it("should return correct values for two negative integers", () => {
    assert.equal(add(-2, -2), -4);
  });
  it("should throw an error", () => {
    throw new Error("it broke");
  });
});
