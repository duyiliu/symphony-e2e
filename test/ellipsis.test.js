import assert from "node:assert/strict";
import test from "node:test";

import { ellipsis } from "../src/ellipsis.js";

test("ellipsis returns the text unchanged when it fits", () => {
  assert.equal(ellipsis("hello", 10), "hello");
  assert.equal(ellipsis("hello", 5), "hello");
  assert.equal(ellipsis("", 3), "");
});

test("ellipsis truncates and appends an ellipsis character", () => {
  assert.equal(ellipsis("hello world", 8), "hello w…");
  assert.equal(ellipsis("abcdef", 4), "abc…");
});

test("ellipsis result never exceeds maxLength", () => {
  const result = ellipsis("symphony end to end testing", 12);
  assert.equal(result.length, 12);
  assert.equal(result, "symphony en…");
});

test("ellipsis handles maxLength of 1", () => {
  assert.equal(ellipsis("hello", 1), "…");
});

test("ellipsis handles unicode input", () => {
  assert.equal(ellipsis("你好世界啊", 3), "你好…");
});

test("ellipsis throws TypeError for non-string input", () => {
  assert.throws(() => ellipsis(5, 3), TypeError);
  assert.throws(() => ellipsis(null, 3), TypeError);
  assert.throws(() => ellipsis(undefined, 3), TypeError);
  assert.throws(() => ellipsis(["abc"], 3), TypeError);
});

test("ellipsis throws RangeError for invalid maxLength", () => {
  assert.throws(() => ellipsis("hello", 0), RangeError);
  assert.throws(() => ellipsis("hello", -2), RangeError);
  assert.throws(() => ellipsis("hello", 2.5), RangeError);
  assert.throws(() => ellipsis("hello", "3"), RangeError);
});
