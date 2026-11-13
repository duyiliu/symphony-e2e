import assert from "node:assert/strict";
import test from "node:test";

import { countWords } from "../src/countWords.js";

test("countWords counts a single word", () => {
  assert.equal(countWords("hello"), 1);
});

test("countWords counts multiple words", () => {
  assert.equal(countWords("hello world"), 2);
  assert.equal(countWords("the quick brown fox"), 4);
});

test("countWords returns 0 for an empty string", () => {
  assert.equal(countWords(""), 0);
});

test("countWords returns 0 for whitespace-only input", () => {
  assert.equal(countWords("   "), 0);
  assert.equal(countWords("\t\n  \r\n"), 0);
});

test("countWords trims surrounding whitespace", () => {
  assert.equal(countWords("  hello  "), 1);
  assert.equal(countWords("\t hello world \n"), 2);
});

test("countWords treats consecutive whitespace as one separator", () => {
  assert.equal(countWords("hello   world"), 2);
  assert.equal(countWords("a  b\tc\nd"), 4);
  assert.equal(countWords("  a   b   c  "), 3);
});

test("countWords counts non-letter tokens as words", () => {
  assert.equal(countWords("123 45.6"), 2);
  assert.equal(countWords("hello, world!"), 2);
});

test("countWords throws TypeError for non-string input", () => {
  assert.throws(() => countWords(123), TypeError);
  assert.throws(() => countWords(null), TypeError);
  assert.throws(() => countWords(undefined), TypeError);
  assert.throws(() => countWords(["a", "b"]), TypeError);
  assert.throws(() => countWords({}), TypeError);
});
