import assert from "node:assert/strict";
import test from "node:test";

import { truncate } from "../src/truncate.js";

test("truncate returns the text unchanged when it fits", () => {
  assert.equal(truncate("hello", 10), "hello");
  assert.equal(truncate("hello", 5), "hello");
  assert.equal(truncate("", 3), "");
});

test("truncate cuts text at maxLength without adding characters", () => {
  assert.equal(truncate("hello world", 8), "hello wo");
  assert.equal(truncate("abcdef", 4), "abcd");
});

test("truncate result never exceeds maxLength", () => {
  const result = truncate("symphony end to end testing", 12);
  assert.equal(result.length, 12);
  assert.equal(result, "symphony end");
});

test("truncate handles maxLength of 0", () => {
  assert.equal(truncate("hello", 0), "");
});

test("truncate handles unicode input", () => {
  assert.equal(truncate("你好世界啊", 3), "你好世");
});

test("truncate throws TypeError for non-string input", () => {
  assert.throws(() => truncate(5, 3), TypeError);
  assert.throws(() => truncate(null, 3), TypeError);
  assert.throws(() => truncate(undefined, 3), TypeError);
  assert.throws(() => truncate(["abc"], 3), TypeError);
});

test("truncate throws RangeError for invalid maxLength", () => {
  assert.throws(() => truncate("hello", -2), RangeError);
  assert.throws(() => truncate("hello", 2.5), RangeError);
  assert.throws(() => truncate("hello", "3"), RangeError);
});
