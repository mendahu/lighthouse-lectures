const { add } = require("./add");
const assert = require("assert");

assert.equal(add(2, 2), 4);

// assert.deepStrictEqual
// similar to your assertArrays and assertObjects

assert.strictEqual(add(2, 3), 4);
