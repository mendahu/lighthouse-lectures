const reverseWords = require("../reverse-words");
const assert = require("chai").assert;

describe("reverseWords", () => {
  it("should reverse words", () => {
    const actual = reverseWords("hello world");
    const expected = "world hello";

    assert.equal(actual, expected);

    // "hello world"
    // "world  hello"

    // these might be overkill
    // assert length doesn't change?
    // specifc letter?
    // missing words
  });

  it("should return undefined if undefined", () => {
    const actual = reverseWords(undefined);
    const expected = undefined;

    assert.equal(actual, expected);
  });

  it("should return null if null", () => {
    const actual = reverseWords(null);
    const expected = null;

    assert.strictEqual(actual, expected);
  });

  it("should return number if a number", () => {
    const actual = reverseWords(123);
    const expected = 123;

    assert.strictEqual(actual, expected);
  });

  it("should return a empty string on an empty string", () => {
    const actual = reverseWords("");
    const expected = "";

    assert.strictEqual(actual, expected);
  });

  it("should ignore double spaces", () => {
    const actual = reverseWords("hello  world");
    const expected = "world hello";

    assert.strictEqual(actual, expected);
  });
});
