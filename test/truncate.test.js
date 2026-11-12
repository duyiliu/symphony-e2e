import assert from "node:assert/strict";
import test from "node:test";

import { truncate } from "../src/truncate.js";

test("truncate returns text shorter than the limit unchanged", () => {
  assert.equal(truncate("hello", 10), "hello");
  assert.equal(truncate("hello", 6), "hello");
});

test("truncate returns text exactly at the limit unchanged", () => {
  assert.equal(truncate("hello", 5), "hello");
});

test("truncate cuts longer text and appends an ellipsis", () => {
  assert.equal(truncate("hello world", 5), "hello...");
  assert.equal(truncate("hello", 1), "h...");
  assert.equal(truncate("hello", 0), "...");
});

test("truncate returns an empty string unchanged", () => {
  assert.equal(truncate("", 3), "");
  assert.equal(truncate("", 0), "");
});

test("truncate rejects non-string text with TypeError", () => {
  assert.throws(() => truncate(42, 3), TypeError);
  assert.throws(() => truncate(null, 3), TypeError);
  assert.throws(() => truncate(undefined, 3), TypeError);
  assert.throws(() => truncate(["a"], 3), TypeError);
  assert.throws(() => truncate({}, 3), TypeError);
});

test("truncate rejects negative maxLength with TypeError", () => {
  assert.throws(() => truncate("hello", -1), TypeError);
  assert.throws(() => truncate("", -100), TypeError);
});

test("truncate rejects non-integer maxLength with TypeError", () => {
  assert.throws(() => truncate("hello", 2.5), TypeError);
  assert.throws(() => truncate("hello", NaN), TypeError);
  assert.throws(() => truncate("hello", Infinity), TypeError);
  assert.throws(() => truncate("hello", "3"), TypeError);
});
