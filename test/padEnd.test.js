import assert from "node:assert/strict";
import test from "node:test";

import { padEnd } from "../src/padEnd.js";

test("padEnd pads the end of the text with the fill character", () => {
  assert.equal(padEnd("abc", 6, "0"), "abc000");
  assert.equal(padEnd("hi", 5, "-"), "hi---");
});

test("padEnd defaults fill to a space", () => {
  assert.equal(padEnd("ab", 4), "ab  ");
  assert.equal(padEnd("x", 3), "x  ");
});

test("padEnd uses only the first character of fill", () => {
  assert.equal(padEnd("ab", 5, "xyz"), "abxxx");
  assert.equal(padEnd("ab", 4, "12"), "ab11");
});

test("padEnd returns the text unchanged when it is already long enough", () => {
  assert.equal(padEnd("abc", 3), "abc");
  assert.equal(padEnd("abcd", 3, "0"), "abcd");
});

test("padEnd pads an empty string up to length", () => {
  assert.equal(padEnd("", 3, "*"), "***");
});

test("padEnd throws TypeError for non-string text", () => {
  assert.throws(() => padEnd(5, 4), TypeError);
  assert.throws(() => padEnd(null, 4), TypeError);
  assert.throws(() => padEnd(undefined, 4), TypeError);
  assert.throws(() => padEnd(["ab"], 4), TypeError);
});

test("padEnd throws RangeError for non-positive-integer length", () => {
  assert.throws(() => padEnd("ab", 0), RangeError);
  assert.throws(() => padEnd("ab", -2), RangeError);
  assert.throws(() => padEnd("ab", 2.5), RangeError);
  assert.throws(() => padEnd("ab", NaN), RangeError);
  assert.throws(() => padEnd("ab", "4"), RangeError);
});

test("padEnd throws TypeError for an empty fill", () => {
  assert.throws(() => padEnd("ab", 4, ""), TypeError);
});

test("padEnd throws TypeError for non-string fill", () => {
  assert.throws(() => padEnd("ab", 4, null), TypeError);
  assert.throws(() => padEnd("ab", 4, 0), TypeError);
  assert.throws(() => padEnd("ab", 4, ["x"]), TypeError);
});
