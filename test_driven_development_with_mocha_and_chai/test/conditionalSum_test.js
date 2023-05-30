// const chai = require("chai")
// const assert = chai.assert
const assert = require("chai").assert;
const expect = require("chai").expect;

const { conditionalSum } = require("../conditionalSum");

describe("conditionalSum", () => {
  it("should return correct even sum", () => {
    const values = [1, 2, 3, 4, 5];
    const condition = "even";

    const actual = conditionalSum(values, condition);
    const expected = 6;

    assert.equal(actual, expected);
  });

  it("should return correct odd sum", () => {
    const values = [1, 2, 3, 4, 5];
    const condition = "odd";

    const actual = conditionalSum(values, condition);
    const expected = 9;

    assert.equal(actual, expected);
  });

  it("should return correct even sum with bigger numbers", () => {
    const values = [13, 88, 12, 44, 99];
    const condition = "even";

    const actual = conditionalSum(values, condition);
    const expected = 144;

    assert.equal(actual, expected);
  });

  it("should return correct sum with no numbers", () => {
    const values = [];
    const condition = "odd";

    const actual = conditionalSum(values, condition);
    const expected = 0;

    assert.equal(actual, expected);
  });

  it("should return correct sum with no numbers", () => {
    const values = [];
    const condition = "even";

    const actual = conditionalSum(values, condition);
    const expected = 0;

    assert.equal(actual, expected);
  });

  it("should return correct sum with negative numbers", () => {
    const values = [-2, 5, 10];
    const condition = "even";

    const actual = conditionalSum(values, condition);
    const expected = 8;

    assert.equal(actual, expected);
  });

  it("should throw an error if a string", () => {
    const values = "banana";
    const condition = "even";

    expect(() => conditionalSum(values, condition)).to.throw(
      "values must be an array of numbers, not a string!"
    );
  });

  it("should throw an error if a number", () => {
    const values = 4;
    const condition = "even";

    expect(() => conditionalSum(values, condition)).to.throw(
      "values must be an array of numbers, not a number!"
    );
  });

  it("should throw an error if incorrect condition given", () => {
    const values = [1, 2, 3, 4, 5];
    const condition = "banana";

    expect(() => conditionalSum(values, condition)).to.throw(
      "Condition must be even or odd"
    );
  });
});
