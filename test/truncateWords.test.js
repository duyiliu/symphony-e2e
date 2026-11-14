import assert from "node:assert/strict";
import test from "node:test";

import { truncateWords } from "../src/truncateWords.js";

test("truncateWords returns short text unchanged", () => {
  assert.equal(truncateWords("hello world", 3), "hello world");
  assert.equal(truncateWords("hello world", 2), "hello world");
  assert.equal(truncateWords("one", 1), "one");
  assert.equal(truncateWords("", 5), "");
});

test("truncateWords truncates and appends a single ellipsis", () => {
  assert.equal(truncateWords("the quick brown fox", 2), "the quick...");
  assert.equal(truncateWords("a b c d e", 4), "a b c d...");
  assert.equal(truncateWords("one two", 1), "one...");
});

test("truncateWords collapses runs of whitespace", () => {
  assert.equal(truncateWords("  a   b\t c\nd  ", 2), "a b...");
  assert.equal(truncateWords("a   b   c", 3), "a   b   c");
  assert.equal(truncateWords("  a   b  ", 1), "a...");
});

test("truncateWords treats non-string input as an empty string", () => {
  assert.equal(truncateWords(123, 2), "");
  assert.equal(truncateWords(null, 2), "");
  assert.equal(truncateWords(undefined, 2), "");
  assert.equal(truncateWords(["a", "b"], 2), "");
  assert.equal(truncateWords({}, 2), "");
});

test("truncateWords counts non-letter tokens as words", () => {
  assert.equal(truncateWords("hello, world! 123", 2), "hello, world!...");
});
