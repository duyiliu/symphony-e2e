import assert from "node:assert/strict";
import test from "node:test";

import { repeat } from "../src/repeat.js";

test("repeat repeats a string the given number of times", () => {
  assert.equal(repeat("ab", 3), "ababab");
  assert.equal(repeat("x", 1), "x");
  assert.equal(repeat("ha ", 2), "ha ha ");
});

test("repeat returns an empty string for empty input", () => {
  assert.equal(repeat("", 3), "");
  assert.equal(repeat("", 0), "");
});

test("repeat returns an empty string when times is 0", () => {
  assert.equal(repeat("abc", 0), "");
});

test("repeat throws RangeError for negative times", () => {
  assert.throws(() => repeat("ab", -1), RangeError);
  assert.throws(() => repeat("ab", -3), RangeError);
});

test("repeat throws RangeError for non-integer times", () => {
  assert.throws(() => repeat("ab", 2.5), RangeError);
  assert.throws(() => repeat("ab", NaN), RangeError);
  assert.throws(() => repeat("ab", Infinity), RangeError);
});

test("repeat throws TypeError for non-string text", () => {
  assert.throws(() => repeat(5, 2), TypeError);
  assert.throws(() => repeat(null, 2), TypeError);
  assert.throws(() => repeat(undefined, 2), TypeError);
  assert.throws(() => repeat(["a"], 2), TypeError);
});
