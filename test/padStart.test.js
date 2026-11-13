import assert from "node:assert/strict";
import test from "node:test";

import { padStart } from "../src/padStart.js";

test("padStart pads the front of the text with the fill character", () => {
  assert.equal(padStart("abc", 6, "0"), "000abc");
  assert.equal(padStart("hi", 5, "-"), "---hi");
});

test("padStart defaults fill to a space", () => {
  assert.equal(padStart("ab", 4), "  ab");
  assert.equal(padStart("x", 3), "  x");
});

test("padStart uses only the first character of fill", () => {
  assert.equal(padStart("ab", 5, "xyz"), "xxxab");
  assert.equal(padStart("ab", 4, "12"), "11ab");
});

test("padStart returns the text unchanged when it is already long enough", () => {
  assert.equal(padStart("abc", 3), "abc");
  assert.equal(padStart("abcd", 3, "0"), "abcd");
});

test("padStart pads an empty string up to length", () => {
  assert.equal(padStart("", 3, "*"), "***");
});

test("padStart throws TypeError for non-string text", () => {
  assert.throws(() => padStart(5, 4), TypeError);
  assert.throws(() => padStart(null, 4), TypeError);
  assert.throws(() => padStart(undefined, 4), TypeError);
  assert.throws(() => padStart(["ab"], 4), TypeError);
});

test("padStart throws RangeError for non-positive-integer length", () => {
  assert.throws(() => padStart("ab", 0), RangeError);
  assert.throws(() => padStart("ab", -2), RangeError);
  assert.throws(() => padStart("ab", 2.5), RangeError);
  assert.throws(() => padStart("ab", NaN), RangeError);
  assert.throws(() => padStart("ab", "4"), RangeError);
});

test("padStart throws TypeError for an empty fill", () => {
  assert.throws(() => padStart("ab", 4, ""), TypeError);
});

test("padStart throws TypeError for non-string fill", () => {
  assert.throws(() => padStart("ab", 4, null), TypeError);
  assert.throws(() => padStart("ab", 4, 0), TypeError);
  assert.throws(() => padStart("ab", 4, ["x"]), TypeError);
});
